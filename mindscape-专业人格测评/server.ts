import express from "express";
import { createServer as createViteServer } from "vite";
import session from "express-session";
import bcrypt from "bcryptjs";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("users.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT,
    name TEXT
  );
  
  CREATE TABLE IF NOT EXISTS test_results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    test_id TEXT,
    test_title TEXT,
    result_data TEXT,
    date TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(session({
    secret: "nordic-psychology-secret",
    resave: false,
    saveUninitialized: false,
    cookie: { 
      secure: false, // Set to true if using HTTPS
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    }
  }));

  // Auth Routes
  app.post("/api/auth/register", (req, res) => {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      return res.status(400).json({ error: "Missing fields" });
    }

    try {
      const hashedPassword = bcrypt.hashSync(password, 10);
      const stmt = db.prepare("INSERT INTO users (email, password, name) VALUES (?, ?, ?)");
      const result = stmt.run(email, hashedPassword, name);
      
      const user = { id: result.lastInsertRowid, email, name };
      (req.session as any).user = user;
      res.json({ user });
    } catch (err: any) {
      if (err.message.includes("UNIQUE constraint failed")) {
        res.status(400).json({ error: "Email already exists" });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const user: any = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const sessionUser = { id: user.id, email: user.email, name: user.name };
    (req.session as any).user = sessionUser;
    res.json({ user: sessionUser });
  });

  app.get("/api/auth/me", (req, res) => {
    if ((req.session as any).user) {
      res.json({ user: (req.session as any).user });
    } else {
      res.status(401).json({ error: "Not authenticated" });
    }
  });

  app.post("/api/auth/logout", (req, res) => {
    req.session.destroy(() => {
      res.json({ success: true });
    });
  });

  // Test Results Routes
  app.post("/api/results", (req, res) => {
    const user = (req.session as any).user;
    if (!user) return res.status(401).json({ error: "Unauthorized" });

    const { testId, testTitle, resultData } = req.body;
    const date = new Date().toISOString();

    try {
      const stmt = db.prepare("INSERT INTO test_results (user_id, test_id, test_title, result_data, date) VALUES (?, ?, ?, ?, ?)");
      const result = stmt.run(user.id, testId, testTitle, JSON.stringify(resultData), date);
      res.json({ id: result.lastInsertRowid, date });
    } catch (err) {
      res.status(500).json({ error: "Failed to save result" });
    }
  });

  app.get("/api/results", (req, res) => {
    const user = (req.session as any).user;
    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const results = db.prepare("SELECT * FROM test_results WHERE user_id = ? ORDER BY date DESC").all(user.id);
      const parsedResults = results.map((r: any) => ({
        ...JSON.parse(r.result_data),
        id: r.id.toString(),
        testId: r.test_id,
        testTitle: r.test_title,
        date: r.date
      }));
      res.json({ results: parsedResults });
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch results" });
    }
  });

  app.delete("/api/results/:id", (req, res) => {
    const user = (req.session as any).user;
    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const stmt = db.prepare("DELETE FROM test_results WHERE id = ? AND user_id = ?");
      stmt.run(req.params.id, user.id);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: "Failed to delete result" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
