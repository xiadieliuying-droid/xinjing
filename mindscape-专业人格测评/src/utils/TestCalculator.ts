import { TestResult, DimensionScore, DetailedInterpretation } from '../types';

export function calculateTestResult(testId: string, answers: Record<string, string>): TestResult {
  if (testId === 'mbti') {
    return calculateMbtiResult(answers);
  } else if (testId === '16pf') {
    return calculate16PfResult(answers);
  } else if (testId === 'keirsey') {
    return calculateKeirseyResult(answers);
  } else if (testId === 'dnd-alignment') {
    return calculateDndAlignmentResult(answers);
  } else if (testId === 'jung') {
    return calculateJungResult(answers);
  } else if (testId === 'love-languages') {
    return calculateLoveLanguagesResult(answers);
  } else if (testId === 'tcm-constitution') {
    return calculateTcmResult(answers);
  } else if (testId === 'enneagram') {
    return calculateEnneagramResult(answers);
  } else if (testId === 'holland') {
    return calculateHollandResult(answers);
  } else if (testId === 'stress') {
    return calculateStressResult(answers);
  } else if (testId === 'big-five') {
    return calculateBigFiveResult(answers);
  }
  
  // Fallback for other tests if needed, or throw error
  throw new Error(`Calculator for test ${testId} not implemented`);
}

export function calculateKeirseyResult(answers: Record<string, string>): TestResult {
  const counts: Record<string, number> = { S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  Object.values(answers).forEach(val => {
    if (counts[val] !== undefined) counts[val]++;
  });

  let temperament = '';
  let label = '';
  let description = '';
  let strengths: string[] = [];
  let career: string[] = [];

  if (counts.S >= counts.N) {
    if (counts.J >= counts.P) {
      temperament = 'SJ';
      label = '护卫者 (Guardian)';
      description = '务实、勤奋、守规矩。你是社会的支柱，重视传统、秩序和安全。';
      strengths = ['可靠性高', '组织能力强', '尊重传统', '注重细节'];
      career = ['管理人员', '行政', '会计', '警察/军人'];
    } else {
      temperament = 'SP';
      label = '艺术创作者 (Artisan)';
      description = '灵活、自发、活在当下。你擅长处理具体事务，追求自由和感官体验。';
      strengths = ['适应力强', '动手能力强', '乐观开朗', '善于解决危机'];
      career = ['艺术家', '技师', '运动员', '销售'];
    }
  } else {
    if (counts.F >= counts.T) {
      temperament = 'NF';
      label = '理想主义者 (Idealist)';
      description = '热情、富有同情心、追求意义。你关注人的成长和潜能，渴望建立深度的连接。';
      strengths = ['同理心强', '富有创意', '善于沟通', '洞察力敏锐'];
      career = ['教师', '心理咨询师', '作家', '社会工作者'];
    } else {
      temperament = 'NT';
      label = '理性者 (Rational)';
      description = '冷静、客观、追求效率。你关注逻辑、系统和知识，渴望理解世界的运作方式。';
      strengths = ['逻辑严密', '战略思维', '求知欲强', '客观公正'];
      career = ['科学家', '工程师', '战略规划师', '程序员'];
    }
  }

  return {
    title: `凯尔西气质：${label}`,
    label: temperament,
    description: description,
    traits: [
      { label: '感知偏好', value: counts.S >= counts.N ? '实感 (S)' : '直觉 (N)' },
      { label: '判断偏好', value: counts.T >= counts.F ? '思考 (T)' : '情感 (F)' },
      { label: '生活偏好', value: counts.J >= counts.P ? '判断 (J)' : '知觉 (P)' }
    ],
    scores: [
      { name: '实感 (S)', value: counts.S, fullMark: 8 },
      { name: '直觉 (N)', value: counts.N, fullMark: 8 },
      { name: '思考 (T)', value: counts.T, fullMark: 4 },
      { name: '情感 (F)', value: counts.F, fullMark: 4 },
      { name: '判断 (J)', value: counts.J, fullMark: 4 },
      { name: '知觉 (P)', value: counts.P, fullMark: 4 }
    ],
    interpretation: {
      strengths: strengths,
      challenges: ['可能过于固执', '有时忽视他人感受', '对不确定性感到焦虑'],
      suggestions: [
        { text: '尝试跳出舒适区', actionSteps: ['每周尝试一件新鲜事', '练习接纳不同的观点'] }
      ],
      career: career,
      relationships: ['重视忠诚', '需要智力或情感的共鸣']
    }
  };
}

export function calculateDndAlignmentResult(answers: Record<string, string>): TestResult {
  const counts: Record<string, number> = { L: 0, N_LC: 0, C: 0, G: 0, N_GE: 0, E: 0 };
  
  // d1, d2, d4, d7, d9, d12, d14 are Law/Chaos
  // d3, d6, d8, d10, d11, d13, d15 are Good/Evil
  // d5 is a mix but I'll map it to LC for simplicity
  
  Object.entries(answers).forEach(([id, val]) => {
    if (['d1', 'd2', 'd4', 'd5', 'd7', 'd9', 'd12', 'd14'].includes(id)) {
      if (val === 'L') counts.L++;
      else if (val === 'N') counts.N_LC++;
      else if (val === 'C') counts.C++;
    } else {
      if (val === 'G') counts.G++;
      else if (val === 'N') counts.N_GE++;
      else if (val === 'E') counts.E++;
    }
  });

  let lc = '';
  if (counts.L > counts.C && counts.L > counts.N_LC) lc = 'Lawful';
  else if (counts.C > counts.L && counts.C > counts.N_LC) lc = 'Chaotic';
  else lc = 'Neutral';

  let ge = '';
  if (counts.G > counts.E && counts.G > counts.N_GE) ge = 'Good';
  else if (counts.E > counts.G && counts.E > counts.N_GE) ge = 'Evil';
  else ge = 'Neutral';

  const alignment = lc === 'Neutral' && ge === 'Neutral' ? 'True Neutral' : `${lc} ${ge}`;
  
  const alignmentData: Record<string, any> = {
    'Lawful Good': { label: '守序善良', desc: '十字军：你相信法律和秩序是保护弱者和维护正义的最佳手段。' },
    'Neutral Good': { label: '中立善良', desc: '施恩者：你致力于行善，法律对你来说只是工具，而非目的。' },
    'Chaotic Good': { label: '混乱善良', desc: '反抗者：你拥有一颗金子般的心，但你鄙视任何形式的束缚和官僚。' },
    'Lawful Neutral': { label: '守序中立', desc: '审判者：你认为秩序高于一切，法律的公正性比道德的善恶更重要。' },
    'True Neutral': { label: '绝对中立', desc: '观察者：你追求平衡，不偏袒任何一方，认为自然和社会都有其运行规律。' },
    'Chaotic Neutral': { label: '混乱中立', desc: '自由人：你只追随自己的内心，不被法律或道德所束缚，追求绝对的自由。' },
    'Lawful Evil': { label: '守序邪恶', desc: '暴君：你利用法律和规则来达到自己的目的，认为强者理应统治。' },
    'Neutral Evil': { label: '中立邪恶', desc: '利己主义者：你只关心自己的利益，为了目的可以与任何人合作或背叛。' },
    'Chaotic Evil': { label: '混乱邪恶', desc: '毁灭者：你追求混乱和破坏，没有任何规则或道德可以约束你的欲望。' }
  };

  const data = alignmentData[alignment];

  return {
    title: `阵营：${data.label}`,
    label: alignment,
    description: data.desc,
    traits: [
      { label: '伦理立场', value: lc },
      { label: '道德立场', value: ge }
    ],
    scores: [
      { name: '守序 (Lawful)', value: counts.L, fullMark: 8 },
      { name: '中立 (Ethical)', value: counts.N_LC, fullMark: 8 },
      { name: '混乱 (Chaotic)', value: counts.C, fullMark: 8 },
      { name: '善良 (Good)', value: counts.G, fullMark: 7 },
      { name: '中立 (Moral)', value: counts.N_GE, fullMark: 7 },
      { name: '邪恶 (Evil)', value: counts.E, fullMark: 7 }
    ],
    interpretation: {
      strengths: ['立场坚定', '目标明确'],
      challenges: ['可能过于偏激', '难以与不同阵营的人合作'],
      suggestions: [{ text: '尝试理解不同的价值观', actionSteps: ['与不同背景的人交流', '阅读不同立场的书籍'] }],
      customSections: [
        {
          title: '行为准则',
          icon: 'target',
          content: [
            `你的行为高度受限于你的阵营价值观`,
            `在面对道德困境时，你会优先考虑阵营的立场`,
            `一致性是你的核心品质`
          ]
        },
        {
          title: '世界观',
          icon: 'zap',
          content: [
            `你对秩序与混乱、善良与邪恶有独特的见解`,
            `你认为世界应该按照某种特定的逻辑运行`,
            `你的存在本身就在影响着周围的平衡`
          ]
        }
      ]
    }
  };
}

export function calculateJungResult(answers: Record<string, string>): TestResult {
  const counts: Record<string, number> = { Se: 0, Si: 0, Ne: 0, Ni: 0, Te: 0, Ti: 0, Fe: 0, Fi: 0 };
  Object.values(answers).forEach(val => {
    if (counts[val] !== undefined) counts[val]++;
  });

  const sortedFunctions = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const dominant = sortedFunctions[0][0];
  const auxiliary = sortedFunctions[1][0];

  const functionNames: Record<string, string> = {
    Se: '外向实感', Si: '内向实感', Ne: '外向直觉', Ni: '内向直觉',
    Te: '外向思考', Ti: '内向思考', Fe: '外向情感', Fi: '内向情感'
  };

  const functionDescs: Record<string, string> = {
    Se: '关注当下的感官体验，追求即时行动和现实刺激。',
    Si: '关注过去的经验和细节，追求稳定、秩序和可靠。',
    Ne: '关注外部世界的多种可能性，追求创新、联想和变化。',
    Ni: '关注内在的直觉和愿景，追求深度、本质和长远趋势。',
    Te: '关注外部世界的逻辑和效率，追求组织、控制和客观标准。',
    Ti: '关注内在世界的逻辑一致性，追求理解、分析和精准定义。',
    Fe: '关注外部世界的人际和谐，追求共情、价值观认同和社会规范。',
    Fi: '关注内在世界的个人价值观，追求真实、深情和道德纯粹。'
  };

  return {
    title: `荣格八维：主导功能为${functionNames[dominant]}`,
    label: dominant,
    description: `你的主导功能是${functionNames[dominant]} (${dominant})，辅助功能是${functionNames[auxiliary]} (${auxiliary})。${functionDescs[dominant]}`,
    traits: [
      { label: '主导功能', value: functionNames[dominant] },
      { label: '辅助功能', value: functionNames[auxiliary] }
    ],
    scores: Object.entries(counts).map(([name, value]) => ({
      name: `${functionNames[name]} (${name})`,
      value: value,
      fullMark: 5 // Assuming 5 questions per function
    })),
    interpretation: {
      strengths: [`擅长运用${functionNames[dominant]}进行决策或感知`, `具备${functionNames[auxiliary]}的辅助能力`],
      challenges: [`可能过度依赖${functionNames[dominant]}而忽视其他维度`, `劣势功能可能导致在特定情境下的压力`],
      suggestions: [{ text: '平衡你的认知功能', actionSteps: ['练习运用你的劣势功能', '在决策时多考虑不同的认知视角'] }],
      career: ['根据主导功能选择匹配的职业领域'],
      relationships: ['理解他人的认知功能差异']
    }
  };
}

export function calculateLoveLanguagesResult(answers: Record<string, string>): TestResult {
  const counts: Record<string, number> = { Words: 0, Acts: 0, Gifts: 0, Time: 0, Touch: 0 };
  Object.values(answers).forEach(val => {
    if (counts[val] !== undefined) counts[val]++;
  });

  const sortedLanguages = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const primary = sortedLanguages[0][0];

  const languageNames: Record<string, string> = {
    Words: '肯定的话语',
    Acts: '服务的行动',
    Gifts: '接受礼物',
    Time: '精心的时刻',
    Touch: '身体的接触'
  };

  const languageDescs: Record<string, string> = {
    Words: '你最看重言语上的鼓励、赞美和肯定。一句简单的“我爱你”或“你做得真棒”对你来说意义重大。',
    Acts: '你认为行动胜过言语。当伴侣主动为你分担家务或解决困难时，你会感受到最深切的爱。',
    Gifts: '你将礼物视为爱和思念的象征。礼物的价值不在于金钱，而在于背后所代表的心意和关注。',
    Time: '你最渴望伴侣全心全意的陪伴。共同度过的无干扰时光是你感受爱的核心方式。',
    Touch: '身体接触是你最直接的情感连接方式。拥抱、牵手或亲吻能让你感到安全和被爱。'
  };

  return {
    title: `你的首要爱语：${languageNames[primary]}`,
    label: languageNames[primary],
    description: languageDescs[primary],
    traits: Object.entries(counts).map(([name, value]) => ({
      label: languageNames[name],
      value: value
    })),
    scores: Object.entries(counts).map(([name, value]) => ({
      name: languageNames[name],
      value: value,
      fullMark: 12 // Max possible score for one language in this 30-question version
    })),
    interpretation: {
      strengths: [`清晰了解自己的情感需求`, `能够引导伴侣以正确的方式爱你`],
      challenges: [`如果伴侣的爱语与你不同，可能会产生误解`, `过度依赖单一的表达方式`],
      suggestions: [
        { text: '与伴侣分享你的测试结果', actionSteps: ['告诉伴侣哪些具体行为能让你感到被爱', '询问伴侣的爱语是什么'] },
        { text: '学习运用多种爱语', actionSteps: ['尝试用伴侣喜欢的爱语去回馈他/她'] }
      ],
      customSections: [
        {
          title: '如何爱你',
          icon: 'heart',
          content: [
            `当伴侣使用你的首要爱语时，你会感到最深切的安全感`,
            `建议伴侣在日常生活中多关注你的爱语偏好`,
            `沟通是关键：直接告诉对方什么行为会让你感到温暖`
          ]
        },
        {
          title: '你如何爱人',
          icon: 'star',
          content: [
            `你倾向于用自己最渴望的方式去表达爱`,
            `注意：伴侣的爱语可能与你不同，尝试切换到对方的频道`,
            `你的爱是真诚且专注的，这在关系中非常宝贵`
          ]
        }
      ]
    }
  };
}

export function calculateTcmResult(answers: Record<string, string>): TestResult {
  const dimensionMapping: Record<string, string[]> = {
    '气虚质': ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'],
    '阳虚质': ['q9', 'q10', 'q11', 'q12', 'q13', 'q14', 'q15'],
    '阴虚质': ['q16', 'q17', 'q18', 'q19', 'q20', 'q21', 'q22', 'q23'],
    '痰湿质': ['q24', 'q25', 'q26', 'q27', 'q28', 'q29', 'q30', 'q31'],
    '湿热质': ['q32', 'q33', 'q34', 'q35', 'q36', 'q37'],
    '血瘀质': ['q38', 'q39', 'q40', 'q41', 'q42', 'q43', 'q44'],
    '气郁质': ['q45', 'q46', 'q47', 'q48', 'q49', 'q50', 'q51'],
    '特禀质': ['q52', 'q53', 'q54', 'q55', 'q56'],
    '平和质': ['q57', 'q58', 'q59', 'q60']
  };

  const dimensionScores: Record<string, number> = {};
  
  Object.entries(dimensionMapping).forEach(([name, questions]) => {
    let rawScore = 0;
    let answeredCount = 0;
    questions.forEach(qId => {
      if (answers[qId] !== undefined) {
        rawScore += parseInt(answers[qId]);
        answeredCount++;
      }
    });
    
    const maxPossible = questions.length * 4;
    dimensionScores[name] = answeredCount > 0 ? Math.round((rawScore / maxPossible) * 100) : 0;
  });

  // Determination logic
  let primaryType = '平和质';
  let maxScore = -1;
  const types = Object.keys(dimensionScores).filter(t => t !== '平和质');
  
  types.forEach(t => {
    if (dimensionScores[t] > maxScore) {
      maxScore = dimensionScores[t];
      primaryType = t;
    }
  });

  if (dimensionScores['平和质'] >= 60) {
    let isTrulyBalanced = true;
    types.forEach(t => {
      if (dimensionScores[t] >= 30) isTrulyBalanced = false;
    });
    if (isTrulyBalanced) primaryType = '平和质';
  }

  const tcmData: Record<string, any> = {
    '平和质': {
      desc: '阴阳气血调和，以体态适中、面色红润、精力充沛等为主要特征。',
      strengths: ['体质强健', '适应能力强', '心态平和'],
      challenges: ['环境剧烈变化时可能出现短暂不适'],
      suggestions: ['保持规律作息', '饮食均衡', '适度运动'],
      principles: ['调和阴阳', '固本培元'],
      taboos: ['避免过度劳累', '忌暴饮暴食']
    },
    '气虚质': {
      desc: '元气不足，以疲乏、气短、自汗等气衰表现为主要特征。',
      strengths: ['性格内向', '做事稳重'],
      challenges: ['易患感冒', '不耐受风邪', '易疲劳'],
      suggestions: ['多吃补气食物（山药、大枣）', '避免大汗淋漓的运动', '保证充足睡眠'],
      principles: ['补气健脾', '培补元气'],
      taboos: ['忌辛辣燥热', '忌过度思虑']
    },
    '阳虚质': {
      desc: '阳气不足，以畏寒怕冷、手足不温等虚寒表现为主要特征。',
      strengths: ['性格沉静', '不急躁'],
      challenges: ['怕冷', '易腹泻', '精神不振'],
      suggestions: ['多吃温热食物（羊肉、生姜）', '注意保暖', '多晒太阳'],
      principles: ['温补阳气', '祛寒通络'],
      taboos: ['忌生冷寒凉', '忌熬夜伤阳']
    },
    '阴虚质': {
      desc: '阴液亏少，以口燥咽干、手足心热等虚热表现为主要特征。',
      strengths: ['思维敏捷', '动作迅速'],
      challenges: ['易口干', '容易急躁', '不耐受暑热'],
      suggestions: ['多吃滋阴食物（银耳、百合）', '避免熬夜', '少吃辛辣'],
      principles: ['滋阴清热', '养血润燥'],
      taboos: ['忌辛辣烟酒', '忌剧烈运动']
    },
    '痰湿质': {
      desc: '痰湿凝聚，以形体肥胖、腹部肥满、口黏苔腻等痰湿表现为主要特征。',
      strengths: ['性格温和', '处事稳重'],
      challenges: ['易患高血压、糖尿病', '身体沉重', '不耐受潮湿环境'],
      suggestions: ['饮食清淡', '加强体育锻炼', '少吃甜食和油腻'],
      principles: ['健脾利湿', '化痰祛浊'],
      taboos: ['忌肥甘厚味', '忌久坐不动']
    },
    '湿热质': {
      desc: '湿热内蕴，以面部油垢、口苦、苔黄腻等湿热表现为主要特征。',
      strengths: ['精力旺盛', '反应快'],
      challenges: ['易生痤疮', '容易心烦', '不耐受湿热环境'],
      suggestions: ['多吃清热利湿食物（绿豆、薏米）', '保持皮肤清洁', '戒烟限酒'],
      principles: ['清热化湿', '疏肝利胆'],
      taboos: ['忌油腻辛辣', '忌长期处于湿热环境']
    },
    '血瘀质': {
      desc: '血行不畅，以肤色晦暗、舌质紫黯等血瘀表现为主要特征。',
      strengths: ['意志坚定', '目标明确'],
      challenges: ['易患痛症', '皮肤易干涩', '不耐受寒冷'],
      suggestions: ['多吃活血化瘀食物（黑豆、山楂）', '保持心情愉快', '适度运动促进血液循环'],
      principles: ['活血化瘀', '疏经通络'],
      taboos: ['忌寒冷刺激', '忌长期抑郁']
    },
    '气郁质': {
      desc: '气机郁滞，以神情抑郁、忧虑脆弱等气郁表现为主要特征。',
      strengths: ['心思细腻', '富有同情心'],
      challenges: ['易失眠', '情绪低落', '不耐受阴雨天气'],
      suggestions: ['多吃理气食物（柑橘、玫瑰花茶）', '多参加集体活动', '培养广泛爱好'],
      principles: ['疏肝理气', '解郁安神'],
      taboos: ['忌独处忧思', '忌暴怒伤肝']
    },
    '特禀质': {
      desc: '先天失调，以过敏反应等为主要特征。',
      strengths: ['对环境敏感', '警觉性高'],
      challenges: ['易过敏', '体质不稳定'],
      suggestions: ['避开过敏原', '增强体质', '饮食清淡'],
      principles: ['益气固表', '养血消风'],
      taboos: ['忌接触过敏原', '忌生冷刺激']
    }
  };

  const data = tcmData[primaryType];

  return {
    title: `中医体质分析：${primaryType}`,
    label: primaryType,
    description: data.desc,
    traits: [
      { label: '主导体质', value: primaryType },
      { label: '平和指数', value: `${dimensionScores['平和质']}%` }
    ],
    scores: Object.entries(dimensionScores).map(([name, score]) => ({
      name,
      value: score,
      fullMark: 100
    })),
    interpretation: {
      strengths: data.strengths,
      challenges: data.challenges,
      suggestions: data.suggestions.map((s: string) => ({ text: s, actionSteps: ['按时执行', '持之以恒'] })),
      customSections: [
        {
          title: '调理原则',
          icon: 'target',
          content: data.principles
        },
        {
          title: '生活宜忌',
          icon: 'shield',
          content: data.taboos
        }
      ]
    }
  };
}

export function calculateEnneagramResult(answers: Record<string, string>): TestResult {
  const counts: Record<string, number> = {
    '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0
  };
  
  Object.values(answers).forEach(val => {
    if (counts[val] !== undefined) counts[val]++;
  });

  const sortedTypes = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const primaryType = sortedTypes[0][0];
  
  const enneagramData: Record<string, any> = {
    '1': { label: '完美主义者', desc: '追求正直、完美和秩序，对自己和他人都有很高的标准。', strengths: ['原则性强', '负责任', '追求卓越'], challenges: ['过于挑剔', '容易愤怒', '难以放松'] },
    '2': { label: '助人者', desc: '渴望被爱和被需要，慷慨大方，关注他人的需求。', strengths: ['乐于助人', '富有同情心', '热情'], challenges: ['过度牺牲', '占有欲强', '忽视自身需求'] },
    '3': { label: '成就者', desc: '追求成功、效率和形象，适应力强，目标导向。', strengths: ['自信', '高效', '有魅力'], challenges: ['过于看重面子', '工作狂', '忽视真实情感'] },
    '4': { label: '个人主义者', desc: '追求独特、真实和深度，情感丰富，富有创造力。', strengths: ['敏感', '有创意', '真诚'], challenges: ['情绪化', '自我沉溺', '容易感到被误解'] },
    '5': { label: '理智者', desc: '追求知识、理解和独立，冷静观察，喜欢独处。', strengths: ['洞察力强', '客观', '专注'], challenges: ['疏离', '吝啬精力', '过于理论化'] },
    '6': { label: '忠诚者', desc: '追求安全、信任和归属，警惕性高，负责任。', strengths: ['忠诚', '有责任感', '善于预见风险'], challenges: ['焦虑', '疑心重', '难以做决定'] },
    '7': { label: '活跃者', desc: '追求快乐、新鲜感和自由，乐观开朗，多才多艺。', strengths: ['乐观', '多才多艺', '充满活力'], challenges: ['缺乏专注', '逃避痛苦', '冲动'] },
    '8': { label: '挑战者', desc: '追求力量、掌控和正义，果断勇敢，保护弱小。', strengths: ['果断', '有领导力', '正直'], challenges: ['过于强势', '不愿示弱', '容易冲突'] },
    '9': { label: '和平者', desc: '追求和谐、平静和接纳，包容性强，善于调解。', strengths: ['包容', '温和', '善于调解'], challenges: ['消极怠工', '难以说不', '忽视冲突'] }
  };

  const data = enneagramData[primaryType];

  return {
    title: `九型人格：${primaryType}号 - ${data.label}`,
    label: `${primaryType}号`,
    description: data.desc,
    traits: [
      { label: '核心人格', value: `${primaryType}号 ${data.label}` }
    ],
    scores: Object.entries(counts).map(([type, count]) => ({
      name: `${type}号`,
      value: count,
      fullMark: 10 // Approximate
    })),
    interpretation: {
      strengths: data.strengths,
      challenges: data.challenges,
      suggestions: [
        { text: '关注你的核心动机', actionSteps: ['观察你在压力下的反应', '练习觉察你的核心恐惧'] }
      ],
      career: ['根据您的核心型号选择匹配的职业路径'],
      relationships: ['理解不同型号的沟通风格']
    }
  };
}

export function calculateHollandResult(answers: Record<string, string>): TestResult {
  const counts: Record<string, number> = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  Object.values(answers).forEach(val => {
    if (counts[val] !== undefined) counts[val]++;
  });

  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const code = sorted.slice(0, 3).map(i => i[0]).join('');
  
  const typeNames: Record<string, string> = {
    R: '现实型 (Realistic)',
    I: '研究型 (Investigative)',
    A: '艺术型 (Artistic)',
    S: '社会型 (Social)',
    E: '企业型 (Enterprising)',
    C: '常规型 (Conventional)'
  };

  const typeDetails: Record<string, any> = {
    R: {
      desc: '你是一个务实的人，喜欢与具体事物（如工具、机械、动植物）打交道。你倾向于通过动手操作来解决问题，而不是通过长时间的讨论或抽象思考。',
      strengths: ['动手能力强', '务实可靠', '身体协调性好', '技术导向'],
      challenges: ['可能不擅长社交', '对抽象理论缺乏耐心', '有时显得过于固执'],
      careers: ['工程师', '技师', '飞行员', '建筑师', '运动员', '林业工作者']
    },
    I: {
      desc: '你具有强烈的好奇心和求知欲，喜欢观察、学习、研究和解决复杂的问题。你倾向于独立思考，追求逻辑和真理。',
      strengths: ['逻辑思维严密', '分析能力强', '独立自主', '求知欲旺盛'],
      challenges: ['可能过于理想化', '有时显得孤僻', '倾向于过度分析而忽略行动'],
      careers: ['科学家', '研究员', '软件开发', '医生', '大学教授', '经济学家']
    },
    A: {
      desc: '你富有想象力和创造力，喜欢在自由、非结构化的环境中表达自己。你追求美感和独特性，讨厌刻板的规则和重复性的工作。',
      strengths: ['极具创意', '审美敏锐', '情感丰富', '思维跳跃'],
      challenges: ['可能情绪化', '难以适应严格的纪律', '有时显得不切实际'],
      careers: ['设计师', '艺术家', '作家', '导演', '音乐家', '广告创意']
    },
    S: {
      desc: '你是一个温暖、友善且乐于助人的人。你喜欢与人交流，擅长教导、治愈或培训他人。你关注人的成长和福祉，追求社会价值。',
      strengths: ['同理心强', '沟通能力出色', '善于合作', '有责任感'],
      challenges: ['可能过于在意他人评价', '难以拒绝他人', '容易受他人情绪影响'],
      careers: ['教师', '心理咨询师', '社会工作者', '人力资源', '护士', '培训师']
    },
    E: {
      desc: '你充满自信、精力充沛，具有很强的说服力和领导力。你喜欢领导团队、追求商业成就和地位，敢于冒险并承担责任。',
      strengths: ['领导力强', '果敢自信', '社交手腕高', '目标导向'],
      challenges: ['可能过于强势', '有时显得急功近利', '容易忽视细节'],
      careers: ['企业家', '销售经理', '律师', '公关专家', '政治家', '管理顾问']
    },
    C: {
      desc: '你做事严谨、细致，喜欢处理数据、整理文档和遵循既定程序。你追求效率和准确性，在有秩序的环境中表现最出色。',
      strengths: ['细致严谨', '组织能力强', '守时可靠', '数据敏感'],
      challenges: ['可能缺乏灵活性', '对变化感到焦虑', '有时显得过于保守'],
      careers: ['会计师', '审计员', '行政管理', '数据分析师', '银行职员', '法务助手']
    }
  };

  const topType = sorted[0][0];
  const secondType = sorted[1][0];
  const thirdType = sorted[2][0];

  const combinedStrengths = Array.from(new Set([
    ...typeDetails[topType].strengths,
    ...typeDetails[secondType].strengths.slice(0, 2)
  ]));

  const combinedChallenges = Array.from(new Set([
    ...typeDetails[topType].challenges,
    ...typeDetails[secondType].challenges.slice(0, 1)
  ]));

  const combinedCareers = Array.from(new Set([
    ...typeDetails[topType].careers,
    ...typeDetails[secondType].careers.slice(0, 3)
  ]));

  return {
    title: `霍兰德职业代码：${code}`,
    label: code,
    description: `你的核心职业性格是 ${typeNames[topType]}。${typeDetails[topType].desc}`,
    traits: sorted.slice(0, 3).map(i => ({ label: typeNames[i[0]], value: '高匹配' })),
    scores: Object.entries(counts).map(([type, count]) => ({
      name: typeNames[type],
      value: count,
      fullMark: 10
    })),
    interpretation: {
      strengths: combinedStrengths,
      challenges: combinedChallenges,
      suggestions: [
        { 
          text: `深入探索 ${code} 组合`, 
          actionSteps: [
            `寻找结合了 ${typeNames[topType]} 和 ${typeNames[secondType]} 特质的岗位`,
            `在工作中发挥你 ${combinedStrengths[0]} 的核心优势`,
            `关注你 ${combinedChallenges[0]} 的潜在盲点`
          ] 
        },
        {
          text: '职业环境匹配',
          actionSteps: [
            `你最适合在 ${topType === 'A' ? '自由开放' : topType === 'C' ? '规范有序' : '充满挑战'} 的环境中工作`,
            '定期评估当前工作是否满足你的职业兴趣'
          ]
        }
      ],
      career: combinedCareers,
      relationships: [
        `在职场中，你与 ${topType === 'S' ? '研究型' : '企业型'} 的人合作会产生互补效应`,
        '寻找能理解你职业抱负的伴侣'
      ]
    }
  };
}

export function calculateStressResult(answers: Record<string, string>): TestResult {
  const totalScore = Object.values(answers).reduce((sum, val) => sum + parseInt(val), 0);
  const maxScore = Object.keys(answers).length * 3;
  const percentage = (totalScore / maxScore) * 100;

  let level = '';
  let desc = '';
  let suggestions: string[] = [];

  if (percentage < 33) {
    level = '低压力';
    desc = '你目前处于较低的压力水平，身心状态良好。';
    suggestions = ['继续保持良好的生活习惯', '适当进行预防性的放松练习'];
  } else if (percentage < 66) {
    level = '中等压力';
    desc = '你正承受一定程度的压力，可能已经感到有些疲惫或焦虑。';
    suggestions = ['尝试识别压力源', '增加休息和娱乐时间', '学习简单的压力管理技巧'];
  } else {
    level = '高压力';
    desc = '你目前处于高压力状态，这可能已经影响到了你的日常生活和健康。';
    suggestions = ['寻求专业心理咨询建议', '立即调整生活节奏', '练习深呼吸或冥想'];
  }

  return {
    title: `压力评估结果：${level}`,
    label: level,
    description: desc,
    traits: [
      { label: '压力指数', value: `${Math.round(percentage)}%` }
    ],
    scores: [
      { name: '压力水平', value: totalScore, fullMark: maxScore }
    ],
    interpretation: {
      strengths: ['具备一定的自我察觉能力'],
      challenges: ['高压力可能导致身心健康受损'],
      suggestions: suggestions.map(s => ({ text: s, actionSteps: ['制定减压计划', '寻求支持'] })),
      customSections: [
        {
          title: '减压策略',
          icon: 'zap',
          content: [
            `识别并减少不必要的压力源`,
            `建立支持系统，与亲友分享感受`,
            `培养健康的应对机制，如运动或冥想`
          ]
        },
        {
          title: '身心预警',
          icon: 'alert-circle',
          content: [
            `注意睡眠质量的变化`,
            `关注情绪波动和易怒倾向`,
            `警惕身体出现的应激反应，如头痛或胃部不适`
          ]
        }
      ]
    }
  };
}

export function calculateBigFiveResult(answers: Record<string, string>): TestResult {
  const scores: Record<string, number> = { O: 0, C: 0, E: 0, A: 0, N: 0 };
  const counts: Record<string, number> = { O: 0, C: 0, E: 0, A: 0, N: 0 };

  Object.entries(answers).forEach(([id, val]) => {
    const dimension = id[0].toUpperCase();
    if (scores[dimension] !== undefined) {
      scores[dimension] += parseInt(val);
      counts[dimension]++;
    }
  });

  const dimensionData: Record<string, any> = {
    O: {
      name: '开放性 (Openness)',
      desc: '反映一个人对新经验的开放程度、想象力和好奇心。',
      high: {
        label: '高',
        strengths: ['富有创意', '好奇心强', '思想开放', '善于联想'],
        challenges: ['可能缺乏专注', '容易感到无聊', '有时显得不切实际'],
        suggestion: '尝试将你的创意应用到具体的项目中，避免只停留在想象阶段。'
      },
      low: {
        label: '低',
        strengths: ['务实稳重', '关注细节', '尊重传统', '执行力强'],
        challenges: ['可能过于保守', '难以接受改变', '思维较局限'],
        suggestion: '尝试偶尔跳出舒适区，接触一些新鲜事物或不同的观点。'
      },
      mid: { label: '中', strengths: ['平衡务实与创意'], challenges: ['在极端情况下可能犹豫不决'], suggestion: '根据具体情境灵活调整你的开放程度。' }
    },
    C: {
      name: '尽责性 (Conscientiousness)',
      desc: '反映一个人的自律性、组织性和对目标的追求。',
      high: {
        label: '高',
        strengths: ['自律可靠', '组织能力强', '目标明确', '细致严谨'],
        challenges: ['可能过于刻板', '容易焦虑', '完美主义倾向'],
        suggestion: '学会适度放松，接受不完美，不要对自己和他人过于苛刻。'
      },
      low: {
        label: '低',
        strengths: ['灵活随性', '适应力强', '不拘小节', '活在当下'],
        challenges: ['可能缺乏计划', '容易拖延', '可靠性较低'],
        suggestion: '尝试使用简单的工具（如待办清单）来提高你的组织性和执行力。'
      },
      mid: { label: '中', strengths: ['既能坚持原则又能灵活变通'], challenges: ['有时在自律与随性间挣扎'], suggestion: '在重要事务上保持自律，在休闲时光享受随性。' }
    },
    E: {
      name: '外向性 (Extraversion)',
      desc: '反映一个人在社交场合的活跃程度、自信心和能量水平。',
      high: {
        label: '高',
        strengths: ['热情开朗', '社交能力强', '充满活力', '自信果敢'],
        challenges: ['可能过于依赖社交', '有时显得鲁莽', '难以独处'],
        suggestion: '练习独处和深度思考，平衡你的社交能量。'
      },
      low: {
        label: '低',
        strengths: ['沉稳内敛', '善于倾听', '独立思考', '情感深沉'],
        challenges: ['可能显得孤僻', '社交场合易疲劳', '不善于表达自我'],
        suggestion: '在必要的社交场合有意识地展示自己，寻找适合你的小圈子社交。'
      },
      mid: { label: '中', strengths: ['兼具外向与内向的特质'], challenges: ['有时在社交与独处间难以平衡'], suggestion: '根据你的能量状态选择合适的社交频率。' }
    },
    A: {
      name: '宜人性 (Agreeableness)',
      desc: '反映一个人的同情心、合作精神和对他人的信任。',
      high: {
        label: '高',
        strengths: ['乐于助人', '富有同情心', '善于合作', '待人真诚'],
        challenges: ['可能过度妥协', '容易被利用', '难以拒绝他人'],
        suggestion: '学会设定个人边界，在照顾他人感受的同时也要关注自己的需求。'
      },
      low: {
        label: '低',
        strengths: ['客观理性', '竞争意识强', '敢于挑战', '独立见解'],
        challenges: ['可能显得冷漠', '容易产生冲突', '缺乏同理心'],
        suggestion: '尝试多从他人的角度思考问题，在表达观点时注意方式方法。'
      },
      mid: { label: '中', strengths: ['既能合作又能坚持己见'], challenges: ['在竞争与合作间寻找平衡'], suggestion: '在需要合作时展现宜人性，在需要竞争时展现果断。' }
    },
    N: {
      name: '神经质 (Neuroticism)',
      desc: '反映一个人的情绪稳定性，以及对压力和负面情绪的敏感度。',
      high: {
        label: '高',
        strengths: ['情感细腻', '警觉性高', '有危机意识', '富有同情心'],
        challenges: ['容易焦虑忧郁', '情绪波动大', '抗压能力较弱'],
        suggestion: '学习情绪调节技巧（如冥想、深呼吸），建立积极的心理应对机制。'
      },
      low: {
        label: '低',
        strengths: ['情绪稳定', '冷静沉着', '抗压能力强', '心态乐观'],
        challenges: ['可能显得麻木', '忽视潜在风险', '难以理解他人的情绪'],
        suggestion: '保持对情绪的觉察，在他人需要情感支持时展现更多的同理心。'
      },
      mid: { label: '中', strengths: ['情绪相对稳定但仍有感知力'], challenges: ['在重大压力下可能出现波动'], suggestion: '保持良好的生活习惯，增强心理韧性。' }
    }
  };

  const traits = Object.keys(dimensionData).map(key => {
    const data = dimensionData[key];
    const avg = scores[key] / counts[key];
    let level = 'mid';
    if (avg >= 3.8) level = 'high';
    else if (avg <= 2.2) level = 'low';
    
    return { 
      label: data.name, 
      value: data[level].label,
      details: data[level]
    };
  });

  const resultScores = Object.keys(dimensionData).map(key => ({
    name: dimensionData[key].name,
    value: scores[key],
    fullMark: counts[key] * 5
  }));

  // Find the most prominent trait (highest percentage)
  const sortedDimensions = Object.keys(dimensionData).sort((a, b) => {
    const aPct = scores[a] / (counts[a] * 5);
    const bPct = scores[b] / (counts[b] * 5);
    return bPct - aPct;
  });

  const topKey = sortedDimensions[0];
  const topData = dimensionData[topKey];
  const topLevel = scores[topKey] / counts[topKey] >= 3.8 ? 'high' : scores[topKey] / counts[topKey] <= 2.2 ? 'low' : 'mid';

  return {
    title: `大五人格：${topData.name} ${topData[topLevel].label}特征突出`,
    label: topData.name,
    description: topData.desc,
    traits: traits.map(t => ({ label: t.label, value: t.value })),
    scores: resultScores,
    interpretation: {
      strengths: traits.flatMap(t => t.details.strengths.slice(0, 2)),
      challenges: traits.flatMap(t => t.details.challenges.slice(0, 1)),
      suggestions: traits.map(t => ({
        text: `${t.label}: ${t.details.suggestion}`,
        actionSteps: t.details.strengths.slice(0, 2).map(s => `发挥“${s}”的优势`)
      })),
      customSections: [
        {
          title: '性格底色',
          icon: 'star',
          content: [
            `你的核心特质是“${topData.name}”`,
            `这决定了你在面对新环境和挑战时的基本反应模式`,
            `了解这些底色有助于你更好地接纳自我`
          ]
        },
        {
          title: '成长空间',
          icon: 'target',
          content: [
            `在“${sortedDimensions[sortedDimensions.length - 1]}”维度上，你还有很大的调整空间`,
            `尝试有意识地练习该维度的正面行为`,
            `平衡是人格成熟的重要标志`
          ]
        }
      ]
    }
  };
}

export function calculateMbtiResult(answers: Record<string, string>): TestResult {
  const counts: Record<string, number> = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  Object.entries(answers).forEach(([id, val]) => {
    if (counts[val] !== undefined) counts[val]++;
  });

  const e_i = counts.E >= counts.I ? 'E' : 'I';
  const s_n = counts.S >= counts.N ? 'S' : 'N';
  const t_f = counts.T >= counts.F ? 'T' : 'F';
  const j_p = counts.J >= counts.P ? 'J' : 'P';
  const type = e_i + s_n + t_f + j_p;

  // MBTI Data (Simplified for this example, can be expanded)
  const mbtiData: Record<string, any> = {
    'INTJ': {
      label: '建筑师 (Architect)',
      description: '富有想象力且战略性的思想家，对一切皆有计划。你是最稀有且最具战略能力的人格类型之一。',
      interpretation: {
        strengths: ['逻辑严密', '独立自主', '意志坚定', '眼光长远', '高效能', '求知欲强'],
        challenges: ['过于傲慢', '忽视情感细节', '极度批判', '社交笨拙', '对他人期望过高'],
        suggestions: [
          { text: '学会倾听他人情感', actionSteps: ['在对话中多问一句“你现在的感受如何？”', '练习非评判性的倾听', '认可他人的主观体验'] },
          { text: '降低对他人的完美要求', actionSteps: ['接受每个人都有其独特的节奏', '学会欣赏不完美中的美'] }
        ],
        career: ['战略规划师', '软件架构师', '科学家', '大学教授', '系统分析师', '律师'],
        relationships: ['看重智力共鸣', '忠诚但疏离', '需要大量个人空间', '对伴侣有很高要求']
      }
    },
    'INTP': {
      label: '逻辑学家 (Logician)',
      description: '具有创造力的发明家，对知识有着永无止境的渴望。你喜欢在逻辑和理论中寻找真理。',
      interpretation: {
        strengths: ['分析能力强', '思想开放', '客观公正', '极具创意', '好奇心强', '不随波逐流'],
        challenges: ['容易分心', '怀疑自己', '对规则不屑', '情感疏离', '难以处理日常琐事'],
        suggestions: [
          { text: '将想法转化为行动', actionSteps: ['设定具体的截止日期', '寻找执行力强的伙伴', '将大目标拆解为小步骤'] },
          { text: '关注人际关系', actionSteps: ['练习表达感激之情', '意识到逻辑不能解决所有情感问题'] }
        ],
        career: ['研究员', '程序员', '数学家', '哲学家', '系统分析师', '大学教授'],
        relationships: ['需要个人空间', '诚实直接', '不喜欢繁琐的社交礼仪', '对伴侣的智力有要求']
      }
    },
    'ENTJ': {
      label: '指挥官 (Commander)',
      description: '大胆、富有想象力且意志强大的领导者，总能找到或开辟道路。你是天生的领导者。',
      interpretation: {
        strengths: ['效率极高', '充满自信', '意志坚定', '战略思维', '极具魅力', '善于决策'],
        challenges: ['固执己见', '缺乏同理心', '傲慢', '不耐烦', '有时显得过于强势'],
        suggestions: [
          { text: '练习同理心', actionSteps: ['尝试从他人角度看问题', '认可他人的情感价值', '在下达命令前先倾听'] },
          { text: '学会放松', actionSteps: ['意识到休息也是为了更好的工作', '培养一个非竞争性的爱好'] }
        ],
        career: ['CEO', '律师', '管理顾问', '政治家', '高级经理', '战略规划师'],
        relationships: ['主导地位', '期待对方成长', '忠诚可靠', '有时显得过于理性']
      }
    },
    'ENTP': {
      label: '辩论家 (Debater)',
      description: '聪明且好奇的思想家，无法抗拒智力上的挑战。你喜欢挑战现状和探索新想法。',
      interpretation: {
        strengths: ['知识渊博', '思维敏捷', '善于解决问题', '精力充沛', '极具魅力', '适应力强'],
        challenges: ['好争辩', '缺乏耐心', '难以集中注意力', '讨厌常规', '有时显得不负责任'],
        suggestions: [
          { text: '关注细节与落地', actionSteps: ['在开始新项目前完成旧项目', '练习耐心', '学习时间管理'] },
          { text: '注意言辞的杀伤力', actionSteps: ['在辩论前考虑对方的感受', '学会适时停止争论'] }
        ],
        career: ['企业家', '广告创意', '政治家', '律师', '公关专家', '咨询顾问'],
        relationships: ['充满活力', '喜欢智力博弈', '需要新鲜感', '忠诚但需要自由']
      }
    },
    'INFJ': {
      label: '提倡者 (Advocate)',
      description: '安静而神秘，同时也是鼓舞人心且不知疲倦的理想主义者。你拥有深刻的洞察力和坚定的价值观。',
      interpretation: {
        strengths: ['富有创意', '洞察力强', '原则性强', '充满热情', '利他主义', '善于沟通'],
        challenges: ['对批评敏感', '极度隐私', '完美主义', '容易精疲力竭', '难以向他人敞开心扉'],
        suggestions: [
          { text: '设定情感边界', actionSteps: ['学会拒绝不合理要求', '给自己留出独处时间', '意识到你无法拯救所有人'] },
          { text: '接受现实的不完美', actionSteps: ['降低对自我的苛刻要求', '学会活在当下'] }
        ],
        career: ['心理咨询师', '作家', '非营利组织领导', '教师', '社会工作者', '人力资源'],
        relationships: ['追求深度连接', '极其忠诚', '对伴侣有很高期望', '需要精神契合']
      }
    },
    'INFP': {
      label: '调解员 (Mediator)',
      description: '诗意、善良且利他主义的人，总是渴望帮助他人。你是一个真正的理想主义者。',
      interpretation: {
        strengths: ['同情心强', '理想主义', '思想开放', '极具创意', '忠于自我', '善解人意'],
        challenges: ['过于理想化', '容易受伤害', '难以集中', '过于自我批评', '逃避冲突'],
        suggestions: [
          { text: '脚踏实地', actionSteps: ['学习基本的理财或规划技能', '接受不完美的现实', '将理想转化为具体行动'] },
          { text: '增强心理韧性', actionSteps: ['学习客观处理批评', '意识到冲突有时是必要的'] }
        ],
        career: ['艺术家', '社会工作者', '诗人', '心理咨询师', '教师', '作家'],
        relationships: ['浪漫主义', '需要价值观契合', '全心投入', '极其敏感']
      }
    },
    'ENFJ': {
      label: '主人公 (Protagonist)',
      description: '富有魅力且鼓舞人心的领导者，能够迷倒他们的听众。你关注他人的成长和社会的进步。',
      interpretation: {
        strengths: ['极具魅力', '利他主义', '天生的领导者', '善解人意', '可靠', '充满激情'],
        challenges: ['过于敏感', '过度牺牲', '自尊心波动', '难以做艰难决定', '有时显得过于理想化'],
        suggestions: [
          { text: '关注自我需求', actionSteps: ['每天留出时间关爱自己', '意识到你无法满足所有人', '学会说“不”'] },
          { text: '培养客观性', actionSteps: ['在决策时多参考事实和逻辑', '不要把所有事情都看作针对个人'] }
        ],
        career: ['教师', '人力资源经理', '公共关系', '社会工作者', '政治家', '教练'],
        relationships: ['全心投入', '支持对方', '追求和谐', '有时显得过于粘人']
      }
    },
    'ENFP': {
      label: '竞选者 (Campaigner)',
      description: '热情、创造力强且自由自在的灵魂，总能找到理由微笑。你是一个充满活力的探索者。',
      interpretation: {
        strengths: ['好奇心强', '观察力敏锐', '精力充沛', '善于沟通', '极具创意', '乐观'],
        challenges: ['难以集中', '过度思考', '容易压力过大', '过于情绪化', '讨厌常规'],
        suggestions: [
          { text: '建立秩序', actionSteps: ['使用待办事项列表', '练习冥想以专注', '学会完成已经开始的事情'] },
          { text: '管理情绪波动', actionSteps: ['寻找健康的情绪宣泄渠道', '意识到感觉不等于事实'] }
        ],
        career: ['记者', '演员', '创意总监', '公关专员', '导游', '社会活动家'],
        relationships: ['充满激情', '追求新鲜感', '需要情感共鸣', '忠诚但需要空间']
      }
    },
    'ISTJ': {
      label: '物流师 (Logistician)',
      description: '务实且注重事实的人，其可靠性不容置疑。你是社会的基石。',
      interpretation: {
        strengths: ['诚实正直', '责任感强', '冷静沉着', '非常可靠', '注重细节', '守规矩'],
        challenges: ['固执', '不圆滑', '容易自责', '墨守成规', '难以接受新想法'],
        suggestions: [
          { text: '尝试新事物', actionSteps: ['每周尝试一件从未做过的小事', '练习灵活性', '多听取年轻人的意见'] },
          { text: '关注他人情感', actionSteps: ['在评价他人前先考虑对方的感受', '学习表达赞美'] }
        ],
        career: ['会计师', '审计员', '行政管理', '军事领导', '法官', '系统管理员'],
        relationships: ['传统稳重', '言出必行', '忠诚可靠', '有时显得枯燥']
      }
    },
    'ISFJ': {
      label: '守卫者 (Defender)',
      description: '非常专注且温暖的守护者，时刻准备着保护他们爱的人。你是一个无私的奉献者。',
      interpretation: {
        strengths: ['支持他人', '可靠耐心', '观察力强', '勤奋', '注重细节', '忠诚'],
        challenges: ['过于谦逊', '压抑情感', '过度操劳', '拒绝改变', '难以应对冲突'],
        suggestions: [
          { text: '表达自己的需求', actionSteps: ['练习直接说出你的想法', '不要总是迎合他人', '设定个人边界'] },
          { text: '拥抱变化', actionSteps: ['尝试改变日常生活的微小习惯', '意识到变化也能带来机会'] }
        ],
        career: ['护士', '客户服务', '教师', '行政助理', '社会工作者', '图书馆管理员'],
        relationships: ['体贴入微', '追求稳定', '极其忠诚', '有时显得过于保守']
      }
    },
    'ESTJ': {
      label: '总经理 (Executive)',
      description: '出色的管理者，在管理事务或人员方面无与伦比。你重视 tradition、秩序和效率。',
      interpretation: {
        strengths: ['组织能力强', '诚实直接', '意志坚定', '忠诚可靠', '效率高', '务实'],
        challenges: ['固执', '不善表达情感', '过于看重社会地位', '难以放松', '有时显得过于严苛'],
        suggestions: [
          { text: '学会放松', actionSteps: ['培养一个纯粹为了好玩的爱好', '接受不确定性', '练习冥想'] },
          { text: '关注他人感受', actionSteps: ['在追求效率的同时关注团队士气', '学习温和的沟通方式'] }
        ],
        career: ['项目经理', '法官', '警察', '高级主管', '银行家', '行政管理'],
        relationships: ['负责任', '期待效率', '忠诚可靠', '有时显得过于强势']
      }
    },
    'ESFJ': {
      label: '执政官 (Consul)',
      description: '极度关爱、社交手腕高明且受欢迎的人，总是渴望帮助他人。你关注社会的和谐与他人的福祉。',
      interpretation: {
        strengths: ['责任感强', '忠诚', '擅长社交', '温暖体贴', '务实', '善于合作'],
        challenges: ['在意他人评价', '不灵活', '不愿尝试新事物', '过于粘人', '难以应对批评'],
        suggestions: [
          { text: '培养独立性', actionSteps: ['尝试独自旅行或看电影', '减少对赞美的依赖', '学会自我肯定'] },
          { text: '接受不同观点', actionSteps: ['意识到冲突不代表关系破裂', '练习客观分析问题'] }
        ],
        career: ['销售代表', '活动策划', '医疗助理', '教师', '人力资源', '客户关系'],
        relationships: ['热情周到', '看重和谐', '全心投入', '有时显得过于敏感']
      }
    },
    'ISTP': {
      label: '鉴赏家 (Virtuoso)',
      description: '大胆且实际的探索者，擅长使用各种工具。你喜欢通过亲身体验来探索世界。',
      interpretation: {
        strengths: ['乐观开朗', '富有创意', '冷静理性', '善于应对紧急情况', '务实', '适应力强'],
        challenges: ['固执', '容易感到无聊', '喜欢冒险', '难以承诺', '情感疏离'],
        suggestions: [
          { text: '提高情感敏感度', actionSteps: ['多关注他人的情绪反应', '练习长期规划', '学习表达内心感受'] },
          { text: '关注长远后果', actionSteps: ['在冒险前先评估风险', '设定长期目标'] }
        ],
        career: ['工程师', '飞行员', '法医', '技师', '赛车手', '软件开发'],
        relationships: ['独立自主', '需要自由', '活在当下', '有时显得难以捉摸']
      }
    },
    'ISFP': {
      label: '探险家 (Adventurer)',
      description: '灵活且迷人的艺术家，时刻准备着探索和体验新鲜事物。你追求美和真实的自我表达。',
      interpretation: {
        strengths: ['极具魅力', '对他人敏感', '富有想象力', '充满好奇', '艺术天赋', '活在当下'],
        challenges: ['极度独立', '不可预测', '容易压力过大', '过于竞争', '难以进行长期规划'],
        suggestions: [
          { text: '制定计划', actionSteps: ['为重要目标设定时间表', '练习逻辑思考', '学习理财知识'] },
          { text: '增强自信', actionSteps: ['意识到你的独特性是优势', '练习在社交场合表达自己'] }
        ],
        career: ['设计师', '音乐家', '摄影师', '艺术家', '厨师', '园艺师'],
        relationships: ['温柔体贴', '活在当下', '需要空间', '极其忠诚']
      }
    },
    'ESTP': {
      label: '企业家 (Entrepreneur)',
      description: '聪明、精力充沛且洞察力极强的人，真正享受生活在边缘。你是一个行动派。',
      interpretation: {
        strengths: ['大胆', '理性务实', '社交能力强', '观察敏锐', '极具魅力', '行动力强'],
        challenges: ['不敏感', '不耐烦', '喜欢冒险', '忽视大局', '难以遵守规则'],
        suggestions: [
          { text: '三思而后行', actionSteps: ['在做决定前停顿10秒', '考虑长远后果', '练习耐心'] },
          { text: '关注他人情感', actionSteps: ['意识到你的直率可能伤人', '学习温和的沟通方式'] }
        ],
        career: ['销售经理', '股票经纪人', '消防员', '警察', '企业家', '运动员'],
        relationships: ['充满激情', '不喜欢束缚', '活在当下', '有时显得不够深沉']
      }
    },
    'ESFP': {
      label: '表演者 (Entertainer)',
      description: '自发、精力充沛且热情的表演者——生活在他们周围永不枯燥。你热爱生活并乐于分享快乐。',
      interpretation: {
        strengths: ['大胆', '原创性', '出色的审美', '善于交际', '乐观', '极具魅力'],
        challenges: ['难以集中', '敏感', '缺乏规划', '追求刺激', '逃避冲突'],
        suggestions: [
          { text: '提升专注力', actionSteps: ['每天练习15分钟冥想', '学习时间管理', '设定具体的工作目标'] },
          { text: '学习理财', actionSteps: ['制定预算并严格执行', '意识到长远安全的重要性'] }
        ],
        career: ['公关专员', '导游', '时尚造型师', '演员', '活动策划', '销售'],
        relationships: ['热情洋溢', '讨厌冲突', '追求快乐', '有时显得过于肤浅']
      }
    },
    // Add other types as needed...
  };

  const data = mbtiData[type] || {
    label: '探索者',
    description: '一个独特的性格组合，正在探索自我的边界。',
    interpretation: {
      strengths: ['适应力强', '好奇心重'],
      challenges: ['决策困难'],
      suggestions: [{ text: '多尝试不同领域', actionSteps: ['参加不同兴趣小组'] }],
      career: ['自由职业者'],
      relationships: ['随缘']
    }
  };

  return {
    title: `${type} - ${data.label}`,
    label: type,
    description: data.description,
    traits: [
      { label: '能量来源', value: e_i === 'E' ? '外向' : '内向' },
      { label: '感知方式', value: s_n === 'S' ? '实感' : '直觉' },
      { label: '决策方式', value: t_f === 'T' ? '思考' : '情感' },
      { label: '生活态度', value: j_p === 'J' ? '判断' : '知觉' }
    ],
    scores: [
      { name: '外向 (E)', value: counts.E, fullMark: 50 },
      { name: '内向 (I)', value: counts.I, fullMark: 50 },
      { name: '实感 (S)', value: counts.S, fullMark: 50 },
      { name: '直觉 (N)', value: counts.N, fullMark: 50 },
      { name: '思考 (T)', value: counts.T, fullMark: 50 },
      { name: '情感 (F)', value: counts.F, fullMark: 50 },
      { name: '判断 (J)', value: counts.J, fullMark: 50 },
      { name: '知觉 (P)', value: counts.P, fullMark: 50 }
    ],
    interpretation: {
      ...data.interpretation,
      customSections: [
        {
          title: '思维模式',
          icon: 'lightbulb',
          content: [
            `作为${type[1]}${type[2]}型，你倾向于通过${type[1] === 'S' ? '具体事实' : '抽象直觉'}来处理信息`,
            `在决策时，你更看重${type[2] === 'T' ? '逻辑与客观' : '情感与和谐'}`,
            `这种思维模式让你在${type[1] === 'S' ? '执行' : '创新'}方面具有天然优势`
          ]
        },
        {
          title: '能量来源',
          icon: 'zap',
          content: [
            `你的能量主要来源于${type[0] === 'E' ? '外部社交与活动' : '内在思考与独处'}`,
            `在压力下，你可能需要通过${type[0] === 'E' ? '与人沟通' : '独自静处'}来恢复能量`,
            `了解这一点有助于你更好地管理自己的精力`
          ]
        }
      ]
    }
  };
}

export function calculate16PfResult(answers: Record<string, string>): TestResult {
  // 16PF Factors mapping (Standard 187 questions version)
  // Each factor has a specific set of questions.
  // This is a more realistic mapping for the 187-question version.
  const factorDefinitions: Record<string, { name: string, questions: string[], fullMark: number }> = {
    A: { name: '乐群性 (Warmth)', questions: [], fullMark: 20 },
    B: { name: '聪慧性 (Reasoning)', questions: [], fullMark: 13 }, // B factor often has 13 questions
    C: { name: '稳定性 (Emotional Stability)', questions: [], fullMark: 26 },
    E: { name: '恃强性 (Dominance)', questions: [], fullMark: 26 },
    F: { name: '兴奋性 (Liveliness)', questions: [], fullMark: 26 },
    G: { name: '有恒性 (Rule-Consciousness)', questions: [], fullMark: 20 },
    H: { name: '敢为性 (Social Boldness)', questions: [], fullMark: 26 },
    I: { name: '敏感性 (Sensitivity)', questions: [], fullMark: 20 },
    L: { name: '怀疑性 (Vigilance)', questions: [], fullMark: 20 },
    M: { name: '幻想性 (Abstractedness)', questions: [], fullMark: 20 },
    N: { name: '世故性 (Privateness)', questions: [], fullMark: 20 },
    O: { name: '忧虑性 (Apprehension)', questions: [], fullMark: 26 },
    Q1: { name: '实验性 (Openness to Change)', questions: [], fullMark: 20 },
    Q2: { name: '独立性 (Self-Reliance)', questions: [], fullMark: 20 },
    Q3: { name: '自律性 (Perfectionism)', questions: [], fullMark: 20 },
    Q4: { name: '紧张性 (Tension)', questions: [], fullMark: 26 }
  };

  const factorKeys = Object.keys(factorDefinitions);
  // Distribute questions 1-187 to factors based on standard 16PF distribution
  // (Simplified distribution for implementation)
  for (let i = 1; i <= 187; i++) {
    const factorIndex = (i - 1) % factorKeys.length;
    factorDefinitions[factorKeys[factorIndex]].questions.push(`q${i}`);
  }

  const scores: DimensionScore[] = factorKeys.map(key => {
    const def = factorDefinitions[key];
    let rawScore = 0;
    def.questions.forEach(qId => {
      if (answers[qId]) {
        rawScore += parseInt(answers[qId]);
      }
    });

    // Convert raw score to Sten score (1-10)
    // Sten score = (Raw - Mean) / SD * 2 + 5.5 (Simplified here)
    const maxPossible = def.questions.length * 2;
    const sten = Math.min(10, Math.max(1, Math.round((rawScore / maxPossible) * 9) + 1));

    return {
      name: def.name,
      value: sten,
      fullMark: 10
    };
  });

  const interpretation: DetailedInterpretation = {
    strengths: [],
    challenges: [],
    suggestions: [
      { text: '关注你的核心优势', actionSteps: ['利用你的高分特质在工作中发挥更大作用', '在团队中承担与你性格匹配的角色'] },
      { text: '提升薄弱环节', actionSteps: ['针对得分较低的维度进行自我提升训练', '学习如何平衡不同的人格特质'] }
    ],
    career: ['根据您的16项因素，您在需要深度思考和人际互动的领域具有潜力。'],
    relationships: ['了解自己的人格特质有助于建立更和谐的人际关系。']
  };

  scores.forEach(s => {
    if (s.value >= 8) {
      interpretation.strengths.push(`${s.name}得分较高，表现出强烈的相关特质。`);
    } else if (s.value <= 3) {
      interpretation.challenges.push(`${s.name}得分较低，可能在相关方面存在挑战。`);
    }
  });

  return {
    title: '卡特尔16PF人格分析报告',
    label: '16PF',
    description: '通过16个独立的人格特质维度，为您提供全面的人格画像。',
    traits: scores.filter(s => s.value >= 7).map(s => ({ label: s.name, value: `高分 (${s.value}/10)` })),
    scores: scores,
    interpretation: interpretation
  };
}
