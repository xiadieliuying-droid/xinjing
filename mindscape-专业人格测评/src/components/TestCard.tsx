import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Brain, User, Target, Heart, Sparkles } from 'lucide-react';
import { Test } from '../types';

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case 'personality': return <User size={20} />;
    case 'cognitive': return <Brain size={20} />;
    case 'career': return <Target size={20} />;
    case 'health': return <Heart size={20} />;
    default: return <Sparkles size={20} />;
  }
};

export const TestCard = ({ test, onSelect }: { test: Test, onSelect: (test: Test) => void }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="nordic-card p-8 flex flex-col h-full cursor-pointer group"
      onClick={() => onSelect(test)}
    >
      <div className="w-12 h-12 rounded-2xl bg-nordic-bg flex items-center justify-center mb-6 group-hover:bg-nordic-ink group-hover:text-white transition-colors">
        <CategoryIcon category={test.category} />
      </div>
      
      <div className="flex-1">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-nordic-muted mb-2 block">
          {test.category}
        </span>
        <h3 className="serif text-2xl mb-4 group-hover:text-nordic-accent transition-colors">
          {test.title}
        </h3>
        <p className="text-nordic-muted text-sm leading-relaxed mb-8">
          {test.description}
        </p>
      </div>

      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
        开始测评 <ArrowRight size={14} />
      </div>
    </motion.div>
  );
};
