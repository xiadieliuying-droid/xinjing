import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Test } from '../types';

export const QuizEngine = ({ test, onComplete, onCancel }: { 
  test: Test, 
  onComplete: (answers: Record<string, string>) => void,
  onCancel: () => void
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [selectedIndices, setSelectedIndices] = React.useState<Record<string, number>>({});

  const currentQuestion = test.questions[currentIndex];
  const progress = ((currentIndex + 1) / test.questions.length) * 100;

  const handleSelect = (index: number) => {
    const newIndices = { ...selectedIndices, [currentQuestion.id]: index };
    setSelectedIndices(newIndices);
    
    // Auto-advance after a short delay if it's not the last question
    if (currentIndex < test.questions.length - 1) {
      setTimeout(() => setCurrentIndex(currentIndex + 1), 400);
    }
  };

  const handleNext = () => {
    if (currentIndex < test.questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      submitQuiz();
    }
  };

  const submitQuiz = () => {
    const finalAnswers: Record<string, string> = {};
    test.questions.forEach(q => {
      const index = selectedIndices[q.id];
      if (index !== undefined) {
        finalAnswers[q.id] = q.options[index].value;
      }
    });
    onComplete(finalAnswers);
  };

  const isCurrentQuestionAnswered = selectedIndices[currentQuestion.id] !== undefined;

  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <button 
        onClick={onCancel}
        className="flex items-center gap-2 text-nordic-muted hover:text-nordic-ink mb-12 transition-colors uppercase text-xs tracking-widest font-bold"
      >
        <ArrowLeft size={14} /> 返回测评库
      </button>

      <div className="mb-12">
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-nordic-muted block mb-1">
              测评进行中
            </span>
            <h2 className="serif text-3xl">{test.title}</h2>
          </div>
          <span className="text-xs font-mono text-nordic-muted">
            {currentIndex + 1} / {test.questions.length}
          </span>
        </div>
        <div className="h-1 w-full bg-nordic-ink/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-nordic-ink"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="min-h-[400px]"
        >
          <h3 className="serif text-4xl mb-12 leading-tight">
            {currentQuestion.text}
          </h3>

          <div className="grid gap-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={`${option.value}-${index}`}
                onClick={() => handleSelect(index)}
                className={`
                  w-full text-left p-8 rounded-3xl border-2 transition-all flex items-center justify-between group
                  ${selectedIndices[currentQuestion.id] === index 
                    ? 'border-nordic-ink bg-nordic-ink text-white' 
                    : 'border-nordic-ink/5 hover:border-nordic-ink/20 bg-white'}
                `}
              >
                <span className="text-lg font-medium">{option.label}</span>
                {selectedIndices[currentQuestion.id] === index && <Check size={20} />}
                {selectedIndices[currentQuestion.id] !== index && (
                  <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-12 flex justify-between items-center">
        <button
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex(currentIndex - 1)}
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest disabled:opacity-20 transition-opacity"
        >
          <ArrowLeft size={18} /> 上一题
        </button>

        {currentIndex === test.questions.length - 1 ? (
          <button
            onClick={submitQuiz}
            disabled={!isCurrentQuestionAnswered}
            className="nordic-button px-12 py-4 disabled:opacity-50"
          >
            查看结果
          </button>
        ) : (
          <button
            onClick={handleNext}
            disabled={!isCurrentQuestionAnswered}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest disabled:opacity-20 transition-opacity"
          >
            下一题 <ArrowRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
};
