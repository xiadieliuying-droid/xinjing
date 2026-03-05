import React from 'react';
import { Compass, Menu, X, User as UserIcon, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onHome: () => void;
  onHistory: () => void;
  user: any;
  onLogin: () => void;
  onLogout: () => void;
}

export const Header = ({ onHome, onHistory, user, onLogin, onLogout }: HeaderProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-nordic-bg/80 backdrop-blur-md border-b border-nordic-ink/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={onHome}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-full bg-nordic-ink flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <Compass size={20} />
          </div>
          <span className="serif text-2xl font-semibold tracking-tight">MindScape</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={onHome} className="text-sm uppercase tracking-widest font-medium hover:text-nordic-accent transition-colors">测评库</button>
          <button onClick={onHistory} className="text-sm uppercase tracking-widest font-medium hover:text-nordic-accent transition-colors">历史记录</button>
          
          {user ? (
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold hover:text-nordic-accent transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-nordic-ink/5 flex items-center justify-center">
                  <UserIcon size={16} />
                </div>
                {user.name}
              </button>

              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-4 w-48 nordic-card p-2 bg-white shadow-xl border border-nordic-ink/5"
                  >
                    <button 
                      onClick={() => { onLogout(); setIsProfileOpen(false); }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                    >
                      <LogOut size={16} />
                      退出登录
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <button 
              onClick={onLogin}
              className="nordic-button py-2 px-6 text-xs"
            >
              登录 / 注册
            </button>
          )}
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-nordic-ink/5 p-6 flex flex-col gap-4"
        >
          <button onClick={() => { onHome(); setIsOpen(false); }} className="text-left py-2 text-lg serif">测评库</button>
          <button onClick={() => { onHistory(); setIsOpen(false); }} className="text-left py-2 text-lg serif">历史记录</button>
          {user ? (
            <button onClick={() => { onLogout(); setIsOpen(false); }} className="text-left py-2 text-lg serif text-red-500">退出登录 ({user.name})</button>
          ) : (
            <button onClick={() => { onLogin(); setIsOpen(false); }} className="text-left py-2 text-lg serif">登录 / 注册</button>
          )}
        </motion.div>
      )}
    </header>
  );
};
