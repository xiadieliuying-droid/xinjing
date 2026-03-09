import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Question, Test } from '../../types';
import { calculateTestResult } from '../../utils/TestCalculator';
import { ChevronLeft, ChevronRight, CheckCircle2, Loader2 } from 'lucide-react';

interface MbtiTestProps {
  test: Test;
  onComplete: (answers: Record<string, string>) => void;
  onCancel: () => void;
}

export const MbtiTest: React.FC<MbtiTestProps> = ({ test, onComplete, onCancel }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, string>>({});
  const [selectedIndices, setSelectedIndices] = React.useState<Record<string, number>>({});
  const [isCalculating, setIsCalculating] = React.useState(false);

  const currentQuestion = test.questions[currentIndex];
  const progress = ((currentIndex + 1) / test.questions.length) * 100;

  const handleSelect = (value: string, index: number) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));
    setSelectedIndices(prev => ({ ...prev, [currentQuestion.id]: index }));

    // Auto-advance after a short delay for better UX
    if (currentIndex < test.questions.length - 1) {
      setTimeout(() => setCurrentIndex(prev => prev + 1), 300);
    }
  };

  const handleNext = () => {
    if (currentIndex < test.questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsCalculating(true);
    // Simulate calculation delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    onComplete(answers);
  };

  const isCompleted = Object.keys(answers).length === test.questions.length;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={onCancel}
            className="text-sm font-bold uppercase tracking-widest text-nordic-muted hover:text-nordic-ink transition-colors"
          >
            取消测试
          </button>
          <span className="text-xs font-mono text-nordic-muted">
            {currentIndex + 1} / {test.questions.length}
          </span>
        </div>
        
        <div className="h-1 w-full bg-nordic-ink/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-nordic-ink"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: 'spring', stiffness: 50 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="min-h-[400px]"
        >
          <h2 className="serif text-3xl md:text-4xl mb-12 leading-tight">
            {currentQuestion.text}
          </h2>

          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={`${currentQuestion.id}-${index}`}
                onClick={() => handleSelect(option.value, index)}
                className={`w-full text-left px-8 py-6 rounded-2xl border-2 transition-all flex items-center justify-between group ${
                  selectedIndices[currentQuestion.id] === index
                    ? 'border-nordic-ink bg-nordic-ink text-white shadow-xl'
                    : 'border-nordic-ink/5 hover:border-nordic-ink/20 bg-white'
                }`}
              >
                <span className="text-lg">{option.label}</span>
                {selectedIndices[currentQuestion.id] === index && (
                  <CheckCircle2 size={24} className="text-white" />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="mt-12 flex justify-between items-center">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest disabled:opacity-20 transition-opacity"
        >
          <ChevronLeft size={20} /> 上一题
        </button>

        {currentIndex === test.questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={!isCompleted || isCalculating}
            className="nordic-button px-12 py-4 flex items-center gap-3 disabled:opacity-50"
          >
            {isCalculating ? (
              <>
                <Loader2 className="animate-spin" size={20} /> 计算中...
              </>
            ) : (
              '查看结果'
            )}
          </button>
        ) : (
          <button
            onClick={handleNext}
            disabled={!answers[currentQuestion.id]}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest disabled:opacity-20 transition-opacity"
          >
            下一题 <ChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};
