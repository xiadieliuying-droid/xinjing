import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TestCard } from './components/TestCard';
import { QuizEngine } from './components/QuizEngine';
import { ResultView } from './components/ResultView';
import { HistoryView } from './components/HistoryView';
import { AuthModal } from './components/AuthModal';
import { TESTS } from './data/tests';
import { Test, SavedResult, TestResult } from './types';
import { calculateTestResult } from './utils/TestCalculator';
import { ArrowDown, Sparkles, Compass, Brain, User, Target } from 'lucide-react';

type ViewState = 'library' | 'quiz' | 'result' | 'history';

export default function App() {
  const [view, setView] = React.useState<ViewState>('library');
  const [activeTest, setActiveTest] = React.useState<Test | null>(null);
  const [result, setResult] = React.useState<any>(null);
  const [user, setUser] = React.useState<any>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);

  React.useEffect(() => {
    // 使用本地存储模拟用户认证
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Failed to parse saved user:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setView('library');
  };

  const handleSelectTest = (test: Test) => {
    setActiveTest(test);
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuizComplete = (answers: Record<string, string>) => {
    if (activeTest) {
      try {
        // Use the test's own calculation logic if available, otherwise fallback to the central calculator
        const calculatedResult = activeTest.calculateResult 
          ? activeTest.calculateResult(answers)
          : calculateTestResult(activeTest.id, answers);
          
        setResult(calculatedResult);
        setView('result');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (error) {
        console.error('Calculation error:', error);
        alert('结果计算出错，请重试。');
      }
    }
  };

  const handleHome = () => {
    setView('library');
    setActiveTest(null);
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHistory = () => {
    setView('history');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectHistoryResult = (savedResult: any) => {
    // Handle both flat and nested structures for backward compatibility
    const resultToSet = savedResult.result ? { ...savedResult.result, ...savedResult } : savedResult;
    setResult(resultToSet);
    setView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [category, setCategory] = React.useState<string>('all');

  const filteredTests = category === 'all' 
    ? TESTS 
    : TESTS.filter(t => t.category === category);

  const categories = [
    { id: 'all', label: '全部' },
    { id: 'personality', label: '性格人格' },
    { id: 'career', label: '职业发展' },
    { id: 'health', label: '心理健康' },
    { id: 'fun', label: '趣味测试' }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-nordic-ink selection:text-white">
      <Header 
        onHome={handleHome} 
        onHistory={handleHistory} 
        user={user}
        onLogin={() => setIsAuthModalOpen(true)}
        onLogout={handleLogout}
      />

      <main className="flex-1 pt-20">
        <AnimatePresence mode="wait">
          {view === 'library' && (
            <motion.div
              key="library"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Hero Section */}
              <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                <motion.div 
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 0.05, scale: 1 }}
                  transition={{ duration: 2 }}
                  className="absolute inset-0 pointer-events-none flex items-center justify-center"
                >
                  <Compass size={800} strokeWidth={0.5} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative z-10 w-full"
                >
                  <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-nordic-muted block mb-8">
                    探索你的内在架构
                  </span>
                  <h1 className="serif text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] leading-[0.85] tracking-tighter mb-12">
                    Mind<br />Scape
                  </h1>
                  <p className="serif text-xl md:text-3xl text-nordic-muted max-w-2xl mx-auto italic mb-16 leading-relaxed px-4">
                    “两个性格的相遇就像两种化学物质的接触：如果有任何反应，两者都会发生转化。”
                  </p>
                  
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <button 
                      onClick={() => document.getElementById('assessments')?.scrollIntoView({ behavior: 'smooth' })}
                      className="nordic-button px-12 py-6 text-lg flex items-center gap-3"
                    >
                      开始探索 <ArrowDown size={20} />
                    </button>
                    <button 
                      onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })}
                      className="nordic-button-outline px-12 py-6 text-lg"
                    >
                      了解方法
                    </button>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute bottom-12 text-nordic-muted"
                >
                  <ArrowDown size={24} />
                </motion.div>
              </section>

              {/* Stats / Features */}
              <section className="bg-white py-32 px-6 border-y border-nordic-ink/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-nordic-bg flex items-center justify-center mx-auto mb-8">
                      <Brain className="text-nordic-ink" />
                    </div>
                    <h3 className="serif text-2xl mb-4">严谨科学</h3>
                    <p className="text-nordic-muted text-sm leading-relaxed">基于成熟的心理学框架，使用经过学术界验证的高信效度量表。</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-nordic-bg flex items-center justify-center mx-auto mb-8">
                      <Sparkles className="text-nordic-ink" />
                    </div>
                    <h3 className="serif text-2xl mb-4">深度分析</h3>
                    <p className="text-nordic-muted text-sm leading-relaxed">提供详细的优势、挑战与发展建议，助你深度理解自我架构。</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-nordic-bg flex items-center justify-center mx-auto mb-8">
                      <Target className="text-nordic-ink" />
                    </div>
                    <h3 className="serif text-2xl mb-4">北欧极简</h3>
                    <p className="text-nordic-muted text-sm leading-relaxed">旨在减少认知负荷的极简界面，让你专注于内在的真实反馈。</p>
                  </div>
                </div>
              </section>

              {/* Methodology Section */}
              <section id="methodology" className="py-20 md:py-32 px-6 bg-nordic-bg">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-nordic-muted block mb-4">
                        核心方法论
                      </span>
                      <h2 className="serif text-4xl md:text-6xl mb-12 leading-tight">我们如何<br />解构性格</h2>
                      <div className="space-y-12">
                        <div className="flex gap-6">
                          <div className="text-4xl serif italic opacity-20">01</div>
                          <div>
                            <h4 className="serif text-xl mb-2">多维度量表</h4>
                            <p className="text-nordic-muted text-sm leading-relaxed">我们整合了 MBTI、九型人格、荣格八维等经典模型，通过多维度交叉验证，提供比单一测试更全面的性格画像。</p>
                          </div>
                        </div>
                        <div className="flex gap-6">
                          <div className="text-4xl serif italic opacity-20">02</div>
                          <div>
                            <h4 className="serif text-xl mb-2">认知功能分析</h4>
                            <p className="text-nordic-muted text-sm leading-relaxed">不仅关注行为表现，更深入探索底层的认知偏好（如 Ni, Te 等），揭示你处理信息和做出决策的内在逻辑。</p>
                          </div>
                        </div>
                        <div className="flex gap-6">
                          <div className="text-4xl serif italic opacity-20">03</div>
                          <div>
                            <h4 className="serif text-xl mb-2">动态成长路径</h4>
                            <p className="text-nordic-muted text-sm leading-relaxed">性格并非枷锁。我们的分析旨在识别你的“舒适区”与“盲点”，并提供具体的行动建议，助力你的持续进化。</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="aspect-square rounded-[48px] overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000" 
                          alt="Methodology" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Assessments Grid */}
              <section id="assessments" className="max-w-7xl mx-auto py-32 px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                  <div className="max-w-2xl">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-nordic-muted block mb-4">
                      测评库
                    </span>
                    <h2 className="serif text-6xl tracking-tight">选择你的路径</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button 
                        key={cat.id}
                        onClick={() => setCategory(cat.id)}
                        className={`text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-all ${
                          category === cat.id 
                            ? 'bg-nordic-ink text-white shadow-lg' 
                            : 'border border-nordic-ink/10 hover:border-nordic-ink'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredTests.map((test) => (
                    <TestCard 
                      key={test.id} 
                      test={test} 
                      onSelect={handleSelectTest} 
                    />
                  ))}
                  
                  {filteredTests.length === 0 && (
                    <div className="col-span-full py-20 text-center">
                      <p className="serif text-2xl text-nordic-muted italic">该分类下暂无测评，敬请期待。</p>
                    </div>
                  )}
                </div>
              </section>

            </motion.div>
          )}

          {view === 'quiz' && activeTest && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <QuizEngine 
                test={activeTest} 
                onComplete={handleQuizComplete}
                onCancel={handleHome}
              />
            </motion.div>
          )}

          {view === 'result' && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ResultView 
                result={result} 
                onRestart={handleHome}
                testId={activeTest?.id}
                testTitle={activeTest?.title}
                user={user}
              />
            </motion.div>
          )}

          {view === 'history' && (
            <motion.div
              key="history"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <HistoryView 
                onBack={handleHome}
                onSelectResult={handleSelectHistoryResult}
                user={user}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={(user) => setUser(user)}
      />
    </div>
  );
}
