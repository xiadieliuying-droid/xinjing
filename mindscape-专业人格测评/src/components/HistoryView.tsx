import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Trash2, Calendar, ChevronRight } from 'lucide-react';
import { SavedResult } from '../types';

export const HistoryView = ({ onBack, onSelectResult, user }: { 
  onBack: () => void, 
  onSelectResult: (result: SavedResult) => void,
  user?: any
}) => {
  const [history, setHistory] = React.useState<SavedResult[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const loadHistory = () => {
      setLoading(true);
      let combinedHistory: SavedResult[] = [];

      // 从本地存储加载历史记录
      try {
        const saved = localStorage.getItem('mindscape_history');
        if (saved) {
          combinedHistory = JSON.parse(saved);
        }
      } catch (e) {
        console.error('Failed to load local history', e);
      }

      setHistory(combinedHistory.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      ));
      setLoading(false);
    };

    loadHistory();
  }, []);

  const deleteRecord = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('确定要删除这条测评记录吗？此操作不可撤销。')) {
      // 从本地存储删除记录
      const newHistory = history.filter(item => item.id !== id);
      setHistory(newHistory);
      localStorage.setItem('mindscape_history', JSON.stringify(newHistory));
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-nordic-muted hover:text-nordic-ink mb-12 transition-colors uppercase text-xs tracking-widest font-bold"
      >
        <ArrowLeft size={14} /> 返回首页
      </button>

      <div className="mb-16">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-nordic-muted block mb-4">
          测评档案
        </span>
        <h2 className="serif text-6xl tracking-tight">历史记录</h2>
      </div>

      {history.length === 0 ? (
        <div className="text-center py-32 nordic-card bg-transparent border-2 border-dashed border-nordic-ink/10">
          <p className="serif text-2xl text-nordic-muted italic">暂无测评记录</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {history.map((record) => (
            <motion.div
              key={record.id}
              whileHover={{ x: 10 }}
              onClick={() => onSelectResult(record)}
              className="nordic-card p-8 flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center gap-8">
                <div className="hidden md:flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-nordic-bg text-nordic-ink group-hover:bg-nordic-ink group-hover:text-white transition-colors">
                  <Calendar size={20} />
                  <span className="text-[10px] mt-1 font-bold">
                    {new Date(record.date).toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' })}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-nordic-muted block mb-1">
                    {record.testTitle}
                  </span>
                  <h3 className="serif text-2xl group-hover:text-nordic-accent transition-colors">
                    {record.title}
                  </h3>
                  <p className="text-nordic-muted text-sm italic">{record.description}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <button 
                  onClick={(e) => deleteRecord(record.id, e)}
                  className="p-3 rounded-full hover:bg-red-50 text-nordic-muted hover:text-red-500 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
                <ChevronRight size={24} className="text-nordic-ink/20 group-hover:text-nordic-ink transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
