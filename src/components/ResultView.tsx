import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, Download, RefreshCw, X, Twitter, Facebook, Link as LinkIcon, CheckCircle, AlertCircle, Image as ImageIcon, Briefcase, Heart, Lightbulb, Target, Zap, Shield, Star } from 'lucide-react';
import { TestResult, SavedResult, InterpretationSection } from '../types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const ShareModal = ({ isOpen, onClose, result }: { isOpen: boolean, onClose: () => void, result: any }) => {
  const [copied, setCopied] = React.useState(false);
  const shareUrl = window.location.href;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-nordic-ink/60 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-white rounded-[32px] w-full max-w-md p-8 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="serif text-2xl">分享结果</h3>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-nordic-bg transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <button className="flex flex-col items-center gap-2 p-4 rounded-2xl hover:bg-nordic-bg transition-colors group">
                <div className="w-12 h-12 rounded-full bg-[#1DA1F2]/10 flex items-center justify-center text-[#1DA1F2] group-hover:bg-[#1DA1F2] group-hover:text-white transition-all">
                  <Twitter size={20} />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Twitter</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 rounded-2xl hover:bg-nordic-bg transition-colors group">
                <div className="w-12 h-12 rounded-full bg-[#4267B2]/10 flex items-center justify-center text-[#4267B2] group-hover:bg-[#4267B2] group-hover:text-white transition-all">
                  <Facebook size={20} />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Facebook</span>
              </button>
              <button onClick={copyToClipboard} className="flex flex-col items-center gap-2 p-4 rounded-2xl hover:bg-nordic-bg transition-colors group">
                <div className="w-12 h-12 rounded-full bg-nordic-ink/5 flex items-center justify-center text-nordic-ink group-hover:bg-nordic-ink group-hover:text-white transition-all">
                  {copied ? <CheckCircle size={20} /> : <LinkIcon size={20} />}
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">{copied ? '已复制' : '复制链接'}</span>
              </button>
            </div>

            <div className="p-4 bg-nordic-bg rounded-2xl border border-nordic-ink/5 mb-8">
              <p className="text-xs text-nordic-muted mb-2 uppercase tracking-widest font-bold opacity-60">预览文字</p>
              <p className="text-sm leading-relaxed italic">
                “我在 心境 发现了我的内在架构：{result.label || result.title}。快来探索你的性格底色吧！”
              </p>
            </div>

            <button 
              onClick={onClose}
              className="w-full nordic-button py-4"
            >
              完成
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const ResultView = ({ result, onRestart, testId, testTitle, user }: { 
  result: TestResult | SavedResult, 
  onRestart: () => void,
  testId?: string,
  testTitle?: string,
  user?: any
}) => {
  const [isShareOpen, setIsShareOpen] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);

  const handleManualSave = async () => {
    if (isSaved) return;
    if ('id' in result) {
      setIsSaved(true);
      return;
    }
    if (testId && testTitle) {
      if (user) {
        // Save to server
        try {
          const res = await fetch('/api/results', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              testId,
              testTitle,
              resultData: result
            })
          });
          if (res.ok) {
            setIsSaved(true);
            return;
          }
        } catch (e) {
          console.error('Server save failed', e);
        }
      }

      // Fallback to localStorage
      const savedResult: SavedResult = {
        ...result,
        id: Math.random().toString(36).substr(2, 9),
        testId,
        testTitle,
        date: new Date().toISOString()
      };
      try {
        const history = JSON.parse(localStorage.getItem('mindscape_history') || '[]');
        localStorage.setItem('mindscape_history', JSON.stringify([...history, savedResult]));
        setIsSaved(true);
      } catch (e) {
        alert('保存失败');
      }
    }
  };

  React.useEffect(() => {
    if (!('id' in result) && testId && testTitle) {
      handleManualSave();
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <div className="flex justify-center items-center gap-4 mb-6">
          <span className="h-px w-12 bg-nordic-ink/10" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-nordic-muted">
            Personality Architecture
          </span>
          <span className="h-px w-12 bg-nordic-ink/10" />
        </div>
        <h1 className="serif text-8xl md:text-9xl mb-8 tracking-tighter">{result.label || result.title}</h1>
        <p className="serif text-3xl md:text-4xl text-nordic-muted italic max-w-3xl mx-auto leading-relaxed">
          “{result.description}”
        </p>
      </motion.div>

      {/* Consistency & Ambiguity Alerts */}
      {(result.isAmbiguous || (result.consistencyScore !== undefined && result.consistencyScore < 80)) && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-12 p-6 bg-nordic-ink text-white rounded-3xl flex items-start gap-4 shadow-xl"
        >
          <AlertCircle className="shrink-0 mt-1" size={24} />
          <div>
            <h4 className="font-bold mb-1">测评提示</h4>
            {result.isAmbiguous && <p className="text-sm opacity-80 mb-2">{result.ambiguityNote}</p>}
            {result.consistencyScore !== undefined && result.consistencyScore < 80 && (
              <p className="text-sm opacity-80">答题一致性较低（{result.consistencyScore}%），结果可能存在偏差，建议在安静环境下重新测试。</p>
            )}
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        {/* Visualization Area */}
        <div className="lg:col-span-8 space-y-12">
          {result.scores && result.scores.length > 0 && (
            <div className="nordic-card p-12 flex flex-col items-center justify-center min-h-[500px]">
              <h3 className="text-xs uppercase tracking-widest font-bold mb-12 self-start">多维架构分析</h3>
              <div className="w-full h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={result.scores}>
                    <PolarGrid stroke="#1A1A1A" strokeOpacity={0.1} />
                    <PolarAngleAxis 
                      dataKey="name" 
                      tick={{ fill: '#1A1A1A', fontSize: 10, fontWeight: 600, letterSpacing: '0.05em' }} 
                    />
                    <PolarRadiusAxis 
                      angle={30} 
                      domain={[0, 'auto']} 
                      tick={false} 
                      axisLine={false} 
                    />
                    <Radar
                      name="得分"
                      dataKey="value"
                      stroke="#5A5A40"
                      strokeWidth={2}
                      fill="#5A5A40"
                      fillOpacity={0.15}
                      dot={{ r: 3, fill: '#5A5A40', fillOpacity: 1 }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#F5F2ED', 
                        border: '1px solid rgba(26, 26, 26, 0.1)',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontFamily: 'Inter'
                      }} 
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Detailed Interpretation */}
          {result.interpretation && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="nordic-card p-10">
                <div className="flex items-center gap-3 mb-8 text-nordic-ink">
                  <Lightbulb size={20} />
                  <h3 className="text-xs uppercase tracking-widest font-bold">优势与特质</h3>
                </div>
                <ul className="space-y-4">
                  {result.interpretation.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-nordic-ink shrink-0 mt-2" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="nordic-card p-10">
                <div className="flex items-center gap-3 mb-8 text-nordic-ink">
                  <AlertCircle size={20} />
                  <h3 className="text-xs uppercase tracking-widest font-bold">潜在挑战</h3>
                </div>
                <ul className="space-y-4">
                  {result.interpretation.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-nordic-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-nordic-muted shrink-0 mt-2" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {result.interpretation.career && result.interpretation.career.length > 0 && (
                <div className="nordic-card p-10">
                  <div className="flex items-center gap-3 mb-8 text-nordic-ink">
                    <Briefcase size={20} />
                    <h3 className="text-xs uppercase tracking-widest font-bold">职业表现</h3>
                  </div>
                  <ul className="space-y-4">
                    {result.interpretation.career.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-nordic-ink shrink-0 mt-2" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {result.interpretation.relationships && result.interpretation.relationships.length > 0 && (
                <div className="nordic-card p-10">
                  <div className="flex items-center gap-3 mb-8 text-nordic-ink">
                    <Heart size={20} />
                    <h3 className="text-xs uppercase tracking-widest font-bold">人际关系</h3>
                  </div>
                  <ul className="space-y-4">
                    {result.interpretation.relationships.map((r, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-nordic-ink shrink-0 mt-2" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {result.interpretation.customSections?.map((section: InterpretationSection, index: number) => {
                const Icon = {
                  'briefcase': Briefcase,
                  'heart': Heart,
                  'zap': Zap,
                  'target': Target,
                  'shield': Shield,
                  'star': Star,
                  'lightbulb': Lightbulb,
                  'alert-circle': AlertCircle
                }[section.icon] || Lightbulb;

                return (
                  <div key={index} className="nordic-card p-10">
                    <div className="flex items-center gap-3 mb-8 text-nordic-ink">
                      <Icon size={20} />
                      <h3 className="text-xs uppercase tracking-widest font-bold">{section.title}</h3>
                    </div>
                    <ul className="space-y-4">
                      {section.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-nordic-ink shrink-0 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Sidebar Controls */}
        <div className="lg:col-span-4 space-y-8">
          <div className="nordic-card p-8 bg-nordic-ink text-white">
            <h3 className="text-xs uppercase tracking-widest font-bold mb-8 opacity-60">核心维度</h3>
            <div className="space-y-6">
              {result.traits.map((trait: any) => (
                <div key={trait.label} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] uppercase tracking-widest opacity-50">{trait.label}</span>
                    <span className="font-mono text-sm">{trait.value}</span>
                  </div>
                  <div className="h-px w-full bg-white/10 group-last:hidden" />
                </div>
              ))}
            </div>
          </div>

          <div className="nordic-card p-8">
            <h3 className="text-xs uppercase tracking-widest font-bold mb-6">发展建议</h3>
            <div className="space-y-8">
              {result.interpretation?.suggestions.map((s, i) => (
                <div key={i} className="space-y-3">
                  <p className="text-sm leading-relaxed font-medium text-nordic-ink italic">“{s.text}”</p>
                  {s.actionSteps && s.actionSteps.length > 0 && (
                    <ul className="space-y-2 pl-4">
                      {s.actionSteps.map((step, si) => (
                        <li key={si} className="text-xs text-nordic-muted flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-nordic-muted shrink-0 mt-1.5" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => setIsShareOpen(true)}
                className="nordic-button-outline flex flex-col items-center justify-center gap-2 py-6"
              >
                <Share2 size={20} />
                <span className="text-[10px] uppercase tracking-widest font-bold">分享</span>
              </button>
              <button 
                onClick={handleManualSave}
                className={`nordic-button-outline flex flex-col items-center justify-center gap-2 py-6 transition-colors ${isSaved ? 'bg-nordic-ink text-white' : ''}`}
              >
                {isSaved ? <CheckCircle size={20} /> : <Download size={20} />}
                <span className="text-[10px] uppercase tracking-widest font-bold">{isSaved ? '已保存' : '保存'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        result={result}
      />

      <div className="flex justify-center pt-20">
        <button 
          onClick={onRestart}
          className="nordic-button-outline flex items-center gap-3 px-12 py-6 text-lg border-nordic-ink/10"
        >
          <RefreshCw size={20} /> 返回测评库
        </button>
      </div>
    </div>
  );
};
