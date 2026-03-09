import React from 'react';
import { motion } from 'motion/react';
import { TestResult, SavedResult } from '../../types';
import { 
  Download, 
  Share2, 
  ArrowLeft, 
  Target, 
  Lightbulb, 
  Briefcase, 
  Users,
  CheckCircle2,
  ChevronRight,
  AlertCircle,
  Heart
} from 'lucide-react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from 'recharts';
import html2canvas from 'html2canvas';

interface ResultProps {
  result: TestResult;
  onBack: () => void;
  onSave?: (result: TestResult) => void;
}

export const Result: React.FC<ResultProps> = ({ result, onBack, onSave }) => {
  const [activeTab, setActiveTab] = React.useState<'overview' | 'analysis' | 'career'>('overview');
  const resultRef = React.useRef<HTMLDivElement>(null);

  const handleExportImage = async () => {
    if (!resultRef.current) return;
    const canvas = await html2canvas(resultRef.current, {
      scale: 2,
      backgroundColor: '#f5f5f0',
      logging: false,
      useCORS: true
    });
    const link = document.createElement('a');
    link.download = `personality-result-${result.label || 'test'}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Chart Section */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-nordic-ink/5">
        <h3 className="text-sm font-bold uppercase tracking-widest text-nordic-muted mb-8 flex items-center gap-2">
          <Target size={18} /> 维度分析
        </h3>
        <div className="h-[400px] w-full">
          {result.scores && result.scores.length > 0 ? (
            result.scores.length > 4 ? (
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={result.scores}>
                  <PolarGrid stroke="#e5e5e5" />
                  <PolarAngleAxis dataKey="name" tick={{ fill: '#666', fontSize: 12 }} />
                  <Radar
                    name="得分"
                    dataKey="value"
                    stroke="#141414"
                    fill="#141414"
                    fillOpacity={0.1}
                  />
                </RadarChart>
              </ResponsiveContainer>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={result.scores} layout="vertical" margin={{ left: 40 }}>
                  <XAxis type="number" hide domain={[0, 'dataMax + 2']} />
                  <YAxis dataKey="name" type="category" tick={{ fill: '#666' }} />
                  <Tooltip cursor={{ fill: 'transparent' }} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {result.scores.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#141414' : '#666'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )
          ) : (
            <div className="h-full flex items-center justify-center text-nordic-muted italic">
              暂无维度数据
            </div>
          )}
        </div>
      </div>

      {/* Traits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {result.traits?.map((trait, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 border border-nordic-ink/5 flex justify-between items-center">
            <span className="text-nordic-muted">{trait.label}</span>
            <span className="font-bold text-lg">{trait.value}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAnalysis = () => {
    if (!result.interpretation) return (
      <div className="py-20 text-center text-nordic-muted italic">
        暂无深度解析数据
      </div>
    );
    
    return (
      <div className="space-y-8">
        {result.interpretation.strengths && result.interpretation.strengths.length > 0 && (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-nordic-ink/5">
            <h3 className="text-sm font-bold uppercase tracking-widest text-nordic-muted mb-6 flex items-center gap-2">
              <Lightbulb size={18} /> 性格优势
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {result.interpretation.strengths.map((s, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl text-emerald-900">
                  <CheckCircle2 size={18} className="mt-1 shrink-0" />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {result.interpretation.challenges && result.interpretation.challenges.length > 0 && (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-nordic-ink/5">
            <h3 className="text-sm font-bold uppercase tracking-widest text-nordic-muted mb-6 flex items-center gap-2">
              <AlertCircle size={18} /> 潜在挑战
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {result.interpretation.challenges.map((c, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl text-orange-900">
                  <AlertCircle size={18} className="mt-1 shrink-0" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {result.interpretation.relationships && result.interpretation.relationships.length > 0 && (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-nordic-ink/5">
            <h3 className="text-sm font-bold uppercase tracking-widest text-nordic-muted mb-6 flex items-center gap-2">
              <Heart size={18} /> 人际关系
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {result.interpretation.relationships.map((r, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-pink-50 rounded-xl text-pink-900">
                  <Heart size={18} className="mt-1 shrink-0" />
                  <span>{r}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {result.interpretation.suggestions && result.interpretation.suggestions.length > 0 && (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-nordic-ink/5">
            <h3 className="text-sm font-bold uppercase tracking-widest text-nordic-muted mb-6 flex items-center gap-2">
              <Users size={18} /> 发展建议
            </h3>
            <div className="space-y-6">
              {result.interpretation.suggestions.map((s, i) => (
                <div key={i} className="border-l-2 border-nordic-ink pl-6 py-2">
                  <p className="font-bold text-lg mb-3">{s.text}</p>
                  <div className="space-y-2">
                    {s.actionSteps?.map((step, si) => (
                      <div key={si} className="flex items-center gap-2 text-nordic-muted text-sm">
                        <ChevronRight size={14} />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderCareer = () => {
    if (!result.interpretation || !result.interpretation.career || result.interpretation.career.length === 0) return (
      <div className="py-20 text-center text-nordic-muted italic">
        暂无职业推荐数据
      </div>
    );
    
    return (
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-nordic-ink/5">
        <h3 className="text-sm font-bold uppercase tracking-widest text-nordic-muted mb-8 flex items-center gap-2">
          <Briefcase size={18} /> 职业推荐
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {result.interpretation.career.map((c, i) => (
            <div key={i} className="p-6 bg-nordic-ink/5 rounded-2xl text-center hover:bg-nordic-ink hover:text-white transition-colors cursor-default">
              <span className="font-bold">{c}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Top Nav */}
      <div className="flex justify-between items-center mb-12">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-nordic-muted hover:text-nordic-ink transition-colors"
        >
          <ArrowLeft size={18} /> 返回
        </button>
        <div className="flex gap-4">
          <button 
            onClick={handleExportImage}
            className="p-3 rounded-full bg-white border border-nordic-ink/10 hover:border-nordic-ink transition-all shadow-sm"
            title="导出图片"
          >
            <Download size={20} />
          </button>
          <button 
            className="p-3 rounded-full bg-white border border-nordic-ink/10 hover:border-nordic-ink transition-all shadow-sm"
            title="分享结果"
          >
            <Share2 size={20} />
          </button>
        </div>
      </div>

      {/* Main Content Area for Export */}
      <div ref={resultRef} className="space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 bg-nordic-ink text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-4"
          >
            测试结果
          </motion.div>
          <h1 className="serif text-3xl sm:text-5xl md:text-7xl leading-tight">
            {result.title}
          </h1>
          {result.label && (
            <div className="serif text-2xl md:text-4xl text-nordic-accent italic">
              {result.label}
            </div>
          )}
          <p className="text-lg md:text-xl text-nordic-muted max-w-2xl mx-auto leading-relaxed px-4">
            {result.description}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center border-b border-nordic-ink/10 overflow-x-auto no-scrollbar">
          {[
            { id: 'overview', label: '核心概览', icon: Target },
            { id: 'analysis', label: '深度解析', icon: Lightbulb },
            { id: 'career', label: '职业发展', icon: Briefcase },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 sm:px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center gap-2 transition-all relative whitespace-nowrap ${
                activeTab === tab.id ? 'text-nordic-ink' : 'text-nordic-muted'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-nordic-ink"
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'analysis' && renderAnalysis()}
          {activeTab === 'career' && renderCareer()}
        </motion.div>
      </div>
    </div>
  );
};
