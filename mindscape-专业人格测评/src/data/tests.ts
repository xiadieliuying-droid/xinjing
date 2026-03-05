import { Test, TestResult } from '../types';
import { 
  calculateMbtiResult, 
  calculateEnneagramResult, 
  calculateJungResult, 
  calculateHollandResult, 
  calculateStressResult, 
  calculate16PfResult, 
  calculateKeirseyResult, 
  calculateDndAlignmentResult, 
  calculateLoveLanguagesResult, 
  calculateTcmResult,
  calculateBigFiveResult
} from '../utils/TestCalculator';

export const MBTI_TEST: Test = {
  id: 'mbti',
  title: 'MBTI性格测试 (200题)',
  description: `MBTI十六人格 (16Personalities) 测试能为你提供具体而准确的人格分析，以至于可能会让你感到惊讶。\n\n• 测试没有具体时间限制，通常在30分钟内完成。\n• 按实际行为和感受选择，而不是想要和期望的。\n• 尽量避免重做上一题，相信你的第一选择就好。`,
  category: 'personality',
  subCategory: 'MBTI/16型人格',
  questions: [
    { id: 'ei1', text: '在社交聚会中，你通常：', options: [{ label: '感到精力充沛，乐于与多人交谈', value: 'E' }, { label: '感到精力消耗，倾向于与少数人深入交流', value: 'I' }] },
    { id: 'sn1', text: '你更倾向于关注：', options: [{ label: '当下的事实、细节和实际应用', value: 'S' }, { label: '未来的可能性、意义和整体关联', value: 'N' }] },
    { id: 'tf1', text: '在做决定时，你认为最重要的是：', options: [{ label: '逻辑分析、客观标准和公正性', value: 'T' }, { label: '个人价值观、情感共鸣和人际和谐', value: 'F' }] },
    { id: 'jp1', text: '你更喜欢的生活方式是：', options: [{ label: '有计划、有组织、追求结论和确定性', value: 'J' }, { label: '灵活、自发、保持开放和多种选择', value: 'P' }] },
    { id: 'ei2', text: '经过一整天高强度的社交后，你通常觉得：', options: [{ label: '意犹未尽，还想继续活动', value: 'E' }, { label: '精疲力竭，急需独处充电', value: 'I' }] },
    { id: 'sn2', text: '你更喜欢哪种类型的描述：', options: [{ label: '具体的、具体的、可感知的描述', value: 'S' }, { label: '比喻的、象征的、抽象的描述', value: 'N' }] },
    { id: 'tf2', text: '当朋友遇到困难时，你的第一反应通常是：', options: [{ label: '分析问题原因并提供解决方案', value: 'T' }, { label: '给予情感支持并表达同情', value: 'F' }] },
    { id: 'jp2', text: '面对一项新任务，你倾向于：', options: [{ label: '先制定详细计划再开始执行', value: 'J' }, { label: '边做边摸索，根据情况调整', value: 'P' }] },
    { id: 'ei3', text: '在团队讨论中，你通常：', options: [{ label: '先说出想法，在交流中完善', value: 'E' }, { label: '先在脑中思考成熟，再开口表达', value: 'I' }] },
    { id: 'sn3', text: '你更欣赏哪种人：', options: [{ label: '脚踏实地、注重实效的人', value: 'S' }, { label: '富有想象力、眼光长远的人', value: 'N' }] },
    { id: 'tf3', text: '你认为哪种评价更让你受用：', options: [{ label: '“你是一个非常有逻辑和能力的人”', value: 'T' }, { label: '“你是一个非常善良和体贴的人”', value: 'F' }] },
    { id: 'jp3', text: '对于截止日期，你的态度通常是：', options: [{ label: '提前规划，尽早完成以避免压力', value: 'J' }, { label: '在最后期限的压力下效率最高', value: 'P' }] },
    { id: 'ei4', text: '在聚会中，你通常：', options: [{ label: '是那个活跃气氛、主动交谈的人', value: 'E' }, { label: '是那个安静观察、等待被引荐的人', value: 'I' }] },
    { id: 'sn4', text: '你更喜欢哪种工作：', options: [{ label: '处理具体事务和现有流程', value: 'S' }, { label: '构思新方案和探索可能性', value: 'N' }] },
    { id: 'tf4', text: '在评价他人时，你更看重：', options: [{ label: '对方的能力和逻辑严密性', value: 'T' }, { label: '对方的善良和对他人的关怀', value: 'F' }] },
    { id: 'jp4', text: '你的办公桌或房间通常：', options: [{ label: '整洁有序，每样东西都有固定位置', value: 'J' }, { label: '随意堆放，但你能找到需要的东西', value: 'P' }] },
    { id: 'ei5', text: '你更喜欢哪种社交节奏：', options: [{ label: '频繁的聚会和广泛的交际圈', value: 'E' }, { label: '偶尔的深度交谈和紧密的小圈子', value: 'I' }] },
    { id: 'sn5', text: '你更倾向于：', options: [{ label: '相信经验和已有的事实', value: 'S' }, { label: '相信直觉和潜在的预感', value: 'N' }] },
    { id: 'tf5', text: '当别人向你诉苦时，你通常：', options: [{ label: '客观分析利弊，给出实用建议', value: 'T' }, { label: '感同身受，给予情感上的抚慰', value: 'F' }] },
    { id: 'jp5', text: '你更喜欢哪种旅行方式：', options: [{ label: '提前订好所有酒店和详细行程', value: 'J' }, { label: '只定好目的地，随性而行', value: 'P' }] },
    { id: 'ei6', text: '在陌生环境中，你通常：', options: [{ label: '主动介绍自己并结识新朋友', value: 'E' }, { label: '保持沉默，直到有人主动搭讪', value: 'I' }] },
    { id: 'sn6', text: '你更喜欢阅读：', options: [{ label: '纪实文学、传记或实用指南', value: 'S' }, { label: '科幻小说、诗歌或哲学著作', value: 'N' }] },
    { id: 'tf6', text: '在处理冲突时，你通常：', options: [{ label: '坚持原则，即使会伤及感情', value: 'T' }, { label: '寻求妥协，以维持和谐关系', value: 'F' }] },
    { id: 'jp6', text: '你更喜欢哪种生活节奏：', options: [{ label: '按部就班，每天都有固定计划', value: 'J' }, { label: '随性而为，根据心情决定活动', value: 'P' }] },
    { id: 'ei7', text: '你认为自己更像是一个：', options: [{ label: '热情的社交达人', value: 'E' }, { label: '深沉的思考者', value: 'I' }] },
    { id: 'sn7', text: '在解决问题时，你更倾向于：', options: [{ label: '寻找已有的、经过验证的方法', value: 'S' }, { label: '尝试全新的、未曾想过的方案', value: 'N' }] },
    { id: 'tf7', text: '你认为赞美别人时，哪种方式更真诚：', options: [{ label: '称赞他们的才华和成就', value: 'T' }, { label: '称赞他们的品格和善良', value: 'F' }] },
    { id: 'jp7', text: '你更喜欢哪种工作方式：', options: [{ label: '一次只做一件事，直到完成', value: 'J' }, { label: '同时处理多项任务，保持新鲜感', value: 'P' }] },
    { id: 'ei8', text: '你更喜欢哪种休闲环境：', options: [{ label: '热闹的商场或游乐场', value: 'E' }, { label: '安静的图书馆或公园', value: 'I' }] },
    { id: 'sn8', text: '你更看重：', options: [{ label: '事物的实际用途', value: 'S' }, { label: '事物的象征意义', value: 'N' }] },
    { id: 'tf8', text: '在做决定时，你更容易受什么影响：', options: [{ label: '客观的事实和逻辑分析', value: 'T' }, { label: '内心的感受和价值观', value: 'F' }] },
    { id: 'jp8', text: '你如何看待突发状况：', options: [{ label: '感到不安，因为打乱了计划', value: 'J' }, { label: '感到兴奋，因为带来了挑战', value: 'P' }] },
    { id: 'ei9', text: '在团队中，你通常：', options: [{ label: '积极发言，引导讨论方向', value: 'E' }, { label: '倾听为主，在必要时补充', value: 'I' }] },
    { id: 'sn9', text: '你更喜欢哪种类型的老师：', options: [{ label: '讲解清晰、注重基础的老师', value: 'S' }, { label: '启发思考、充满激情的老师', value: 'N' }] },
    { id: 'tf9', text: '你认为法律应该：', options: [{ label: '严格执行，不讲情面', value: 'T' }, { label: '考虑人情，酌情处理', value: 'F' }] },
    { id: 'jp9', text: '你更喜欢哪种日常：', options: [{ label: '有规律的作息', value: 'J' }, { label: '随意的生活', value: 'P' }] },
    { id: 'ei10', text: '你更喜欢哪种沟通方式：', options: [{ label: '面对面交谈', value: 'E' }, { label: '文字交流', value: 'I' }] },
    { id: 'sn10', text: '你更倾向于：', options: [{ label: '关注细节', value: 'S' }, { label: '关注大局', value: 'N' }] },
    { id: 'tf10', text: '你认为自己更：', options: [{ label: '理智冷静', value: 'T' }, { label: '热情洋溢', value: 'F' }] },
    { id: 'jp10', text: '你更喜欢：', options: [{ label: '明确的结论', value: 'J' }, { label: '开放的可能性', value: 'P' }] },
    { id: 'ei11', text: '在聚会中，你通常：', options: [{ label: '主动结识新朋友', value: 'E' }, { label: '只和熟人聊天', value: 'I' }] },
    { id: 'sn11', text: '你更喜欢：', options: [{ label: '实用的工具', value: 'S' }, { label: '艺术的灵感', value: 'N' }] },
    { id: 'tf11', text: '你认为自己更：', options: [{ label: '客观公正', value: 'T' }, { label: '主观同情', value: 'F' }] },
    { id: 'jp11', text: '你更喜欢：', options: [{ label: '提前预约', value: 'J' }, { label: '临时起意', value: 'P' }] },
    { id: 'ei12', text: '你更喜欢：', options: [{ label: '快节奏的生活', value: 'E' }, { label: '慢节奏的生活', value: 'I' }] },
    { id: 'sn12', text: '你更喜欢：', options: [{ label: '事实和数据', value: 'S' }, { label: '理论和模型', value: 'N' }] },
    { id: 'tf12', text: '你认为自己更：', options: [{ label: '坚定果断', value: 'T' }, { label: '温柔体贴', value: 'F' }] },
    { id: 'jp12', text: '你更喜欢：', options: [{ label: '有条不紊', value: 'J' }, { label: '顺其自然', value: 'P' }] },
    { id: 'ei13', text: '你更喜欢：', options: [{ label: '多人合作', value: 'E' }, { label: '独立工作', value: 'I' }] },
    { id: 'sn13', text: '你更喜欢：', options: [{ label: '现实主义', value: 'S' }, { label: '理想主义', value: 'N' }] },
    { id: 'tf13', text: '你认为自己更：', options: [{ label: '务实', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp13', text: '你更喜欢：', options: [{ label: '确定性', value: 'J' }, { label: '灵活性', value: 'P' }] },
    { id: 'ei14', text: '你更喜欢：', options: [{ label: '热闹的餐厅', value: 'E' }, { label: '安静的咖啡馆', value: 'I' }] },
    { id: 'sn14', text: '你更喜欢：', options: [{ label: '具体的任务', value: 'S' }, { label: '抽象的概念', value: 'N' }] },
    { id: 'tf14', text: '你认为自己更：', options: [{ label: '头脑清晰', value: 'T' }, { label: '心地柔软', value: 'F' }] },
    { id: 'jp14', text: '你更喜欢：', options: [{ label: '按计划行事', value: 'J' }, { label: '随遇而安', value: 'P' }] },
    { id: 'ei15', text: '你更喜欢：', options: [{ label: '广交朋友', value: 'E' }, { label: '知己二三', value: 'I' }] },
    { id: 'sn15', text: '你更喜欢：', options: [{ label: '熟悉的事物', value: 'S' }, { label: '新奇的事物', value: 'N' }] },
    { id: 'tf15', text: '你认为自己更：', options: [{ label: '理智', value: 'T' }, { label: '情感', value: 'F' }] },
    { id: 'jp15', text: '你更喜欢：', options: [{ label: '有准备', value: 'J' }, { label: '即兴发挥', value: 'P' }] },
    { id: 'ei16', text: '你更喜欢：', options: [{ label: '表达自己', value: 'E' }, { label: '倾听别人', value: 'I' }] },
    { id: 'sn16', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '大局', value: 'N' }] },
    { id: 'tf16', text: '你认为自己更：', options: [{ label: '冷静', value: 'T' }, { label: '热情', value: 'F' }] },
    { id: 'jp16', text: '你更喜欢：', options: [{ label: '有计划', value: 'J' }, { label: '无计划', value: 'P' }] },
    { id: 'ei17', text: '你更喜欢：', options: [{ label: '团队运动', value: 'E' }, { label: '个人运动', value: 'I' }] },
    { id: 'sn17', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '构思', value: 'N' }] },
    { id: 'tf17', text: '你认为自己更：', options: [{ label: '讲理', value: 'T' }, { label: '讲情', value: 'F' }] },
    { id: 'jp17', text: '你更喜欢：', options: [{ label: '有组织', value: 'J' }, { label: '自发性', value: 'P' }] },
    { id: 'ei18', text: '你更喜欢：', options: [{ label: '社交媒体', value: 'E' }, { label: '私人日记', value: 'I' }] },
    { id: 'sn18', text: '你更喜欢：', options: [{ label: '常识', value: 'S' }, { label: '灵感', value: 'N' }] },
    { id: 'tf18', text: '你认为自己更：', options: [{ label: '分析型', value: 'T' }, { label: '同情型', value: 'F' }] },
    { id: 'jp18', text: '你更喜欢：', options: [{ label: '有结构', value: 'J' }, { label: '无拘束', value: 'P' }] },
    { id: 'ei19', text: '你更喜欢：', options: [{ label: '公开演讲', value: 'E' }, { label: '书面报告', value: 'I' }] },
    { id: 'sn19', text: '你更喜欢：', options: [{ label: '现成的方案', value: 'S' }, { label: '全新的尝试', value: 'N' }] },
    { id: 'tf19', text: '你认为自己更：', options: [{ label: '批判性', value: 'T' }, { label: '包容性', value: 'F' }] },
    { id: 'jp19', text: '你更喜欢：', options: [{ label: '有预见', value: 'J' }, { label: '随遇而安', value: 'P' }] },
    { id: 'ei20', text: '你更喜欢：', options: [{ label: '大城市', value: 'E' }, { label: '小城镇', value: 'I' }] },
    { id: 'sn20', text: '你更喜欢：', options: [{ label: '具体的例子', value: 'S' }, { label: '抽象的原理', value: 'N' }] },
    { id: 'tf20', text: '你认为自己更：', options: [{ label: '原则性', value: 'T' }, { label: '灵活性', value: 'F' }] },
    { id: 'jp20', text: '你更喜欢：', options: [{ label: '有条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei21', text: '你更喜欢：', options: [{ label: '分享快乐', value: 'E' }, { label: '独自品味', value: 'I' }] },
    { id: 'sn21', text: '你更喜欢：', options: [{ label: '实实在在', value: 'S' }, { label: '虚无缥缈', value: 'N' }] },
    { id: 'tf21', text: '你认为自己更：', options: [{ label: '逻辑严密', value: 'T' }, { label: '情感丰富', value: 'F' }] },
    { id: 'jp21', text: '你更喜欢：', options: [{ label: '有计划', value: 'J' }, { label: '无计划', value: 'P' }] },
    { id: 'ei22', text: '你更喜欢：', options: [{ label: '集体讨论', value: 'E' }, { label: '独立思考', value: 'I' }] },
    { id: 'sn22', text: '你更喜欢：', options: [{ label: '具体的步骤', value: 'S' }, { label: '模糊的方向', value: 'N' }] },
    { id: 'tf22', text: '你认为自己更：', options: [{ label: '客观公正', value: 'T' }, { label: '主观同情', value: 'F' }] },
    { id: 'jp22', text: '你更喜欢：', options: [{ label: '有结论', value: 'J' }, { label: '有过程', value: 'P' }] },
    { id: 'ei23', text: '你更喜欢：', options: [{ label: '引人注目', value: 'E' }, { label: '保持低调', value: 'I' }] },
    { id: 'sn23', text: '你更喜欢：', options: [{ label: '现实的挑战', value: 'S' }, { label: '未来的梦想', value: 'N' }] },
    { id: 'tf23', text: '你认为自己更：', options: [{ label: '头脑清晰', value: 'T' }, { label: '心地柔软', value: 'F' }] },
    { id: 'jp23', text: '你更喜欢：', options: [{ label: '有准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei24', text: '你更喜欢：', options: [{ label: '快节奏', value: 'E' }, { label: '慢节奏', value: 'I' }] },
    { id: 'sn24', text: '你更喜欢：', options: [{ label: '具体的细节', value: 'S' }, { label: '宏观的架构', value: 'N' }] },
    { id: 'tf24', text: '你认为自己更：', options: [{ label: '理智', value: 'T' }, { label: '情感', value: 'F' }] },
    { id: 'jp24', text: '你更喜欢：', options: [{ label: '有条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei25', text: '你更喜欢：', options: [{ label: '外向', value: 'E' }, { label: '内向', value: 'I' }] },
    { id: 'sn25', text: '你更喜欢：', options: [{ label: '实干家', value: 'S' }, { label: '思想家', value: 'N' }] },
    { id: 'tf25', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '仁慈', value: 'F' }] },
    { id: 'jp25', text: '你更喜欢：', options: [{ label: '计划', value: 'J' }, { label: '灵活', value: 'P' }] },
    { id: 'ei26', text: '你更喜欢：', options: [{ label: '社交', value: 'E' }, { label: '独处', value: 'I' }] },
    { id: 'sn26', text: '你更喜欢：', options: [{ label: '事实', value: 'S' }, { label: '直觉', value: 'N' }] },
    { id: 'tf26', text: '你认为自己更：', options: [{ label: '坚定', value: 'T' }, { label: '温柔', value: 'F' }] },
    { id: 'jp26', text: '你更喜欢：', options: [{ label: '有条不紊', value: 'J' }, { label: '顺其自然', value: 'P' }] },
    { id: 'ei27', text: '你更喜欢：', options: [{ label: '表达', value: 'E' }, { label: '倾听', value: 'I' }] },
    { id: 'sn27', text: '你更喜欢：', options: [{ label: '现实', value: 'S' }, { label: '理想', value: 'N' }] },
    { id: 'tf27', text: '你认为自己更：', options: [{ label: '务实', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp27', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei28', text: '你更喜欢：', options: [{ label: '热闹', value: 'E' }, { label: '安静', value: 'I' }] },
    { id: 'sn28', text: '你更喜欢：', options: [{ label: '具体', value: 'S' }, { label: '抽象', value: 'N' }] },
    { id: 'tf28', text: '你认为自己更：', options: [{ label: '客观', value: 'T' }, { label: '主观', value: 'F' }] },
    { id: 'jp28', text: '你更喜欢：', options: [{ label: '按计划', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei29', text: '你更喜欢：', options: [{ label: '广交', value: 'E' }, { label: '深交', value: 'I' }] },
    { id: 'sn29', text: '你更喜欢：', options: [{ label: '熟悉', value: 'S' }, { label: '新奇', value: 'N' }] },
    { id: 'tf29', text: '你认为自己更：', options: [{ label: '理性', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp29', text: '你更喜欢：', options: [{ label: '确定', value: 'J' }, { label: '可能', value: 'P' }] },
    { id: 'ei30', text: '你更喜欢：', options: [{ label: '分享', value: 'E' }, { label: '独自', value: 'I' }] },
    { id: 'sn30', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '大局', value: 'N' }] },
    { id: 'tf30', text: '你认为自己更：', options: [{ label: '冷峻', value: 'T' }, { label: '热情', value: 'F' }] },
    { id: 'jp30', text: '你更喜欢：', options: [{ label: '有准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei31', text: '你更喜欢：', options: [{ label: '团队', value: 'E' }, { label: '个人', value: 'I' }] },
    { id: 'sn31', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '构思', value: 'N' }] },
    { id: 'tf31', text: '你认为自己更：', options: [{ label: '讲理', value: 'T' }, { label: '讲情', value: 'F' }] },
    { id: 'jp31', text: '你更喜欢：', options: [{ label: '有组织', value: 'J' }, { label: '自发', value: 'P' }] },
    { id: 'ei32', text: '你更喜欢：', options: [{ label: '社交媒体', value: 'E' }, { label: '私人日记', value: 'I' }] },
    { id: 'sn32', text: '你更喜欢：', options: [{ label: '常识', value: 'S' }, { label: '灵感', value: 'N' }] },
    { id: 'tf32', text: '你认为自己更：', options: [{ label: '分析', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp32', text: '你更喜欢：', options: [{ label: '有结构', value: 'J' }, { label: '无拘束', value: 'P' }] },
    { id: 'ei33', text: '你更喜欢：', options: [{ label: '演讲', value: 'E' }, { label: '书面', value: 'I' }] },
    { id: 'sn33', text: '你更喜欢：', options: [{ label: '现成', value: 'S' }, { label: '全新', value: 'N' }] },
    { id: 'tf33', text: '你认为自己更：', options: [{ label: '批判', value: 'T' }, { label: '包容', value: 'F' }] },
    { id: 'jp33', text: '你更喜欢：', options: [{ label: '预见', value: 'J' }, { label: '随遇而安', value: 'P' }] },
    { id: 'ei34', text: '你更喜欢：', options: [{ label: '大城市', value: 'E' }, { label: '小城镇', value: 'I' }] },
    { id: 'sn34', text: '你更喜欢：', options: [{ label: '例子', value: 'S' }, { label: '原理', value: 'N' }] },
    { id: 'tf34', text: '你认为自己更：', options: [{ label: '原则', value: 'T' }, { label: '灵活', value: 'F' }] },
    { id: 'jp34', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei35', text: '你更喜欢：', options: [{ label: '分享快乐', value: 'E' }, { label: '独自品味', value: 'I' }] },
    { id: 'sn35', text: '你更喜欢：', options: [{ label: '实在', value: 'S' }, { label: '虚无', value: 'N' }] },
    { id: 'tf35', text: '你认为自己更：', options: [{ label: '严密', value: 'T' }, { label: '丰富', value: 'F' }] },
    { id: 'jp35', text: '你更喜欢：', options: [{ label: '计划', value: 'J' }, { label: '无计划', value: 'P' }] },
    { id: 'ei36', text: '你更喜欢：', options: [{ label: '讨论', value: 'E' }, { label: '思考', value: 'I' }] },
    { id: 'sn36', text: '你更喜欢：', options: [{ label: '步骤', value: 'S' }, { label: '方向', value: 'N' }] },
    { id: 'tf36', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp36', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei37', text: '你更喜欢：', options: [{ label: '注目', value: 'E' }, { label: '低调', value: 'I' }] },
    { id: 'sn37', text: '你更喜欢：', options: [{ label: '现实', value: 'S' }, { label: '梦想', value: 'N' }] },
    { id: 'tf37', text: '你认为自己更：', options: [{ label: '清晰', value: 'T' }, { label: '柔软', value: 'F' }] },
    { id: 'jp37', text: '你更喜欢：', options: [{ label: '准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei38', text: '你更喜欢：', options: [{ label: '快节奏', value: 'E' }, { label: '慢节奏', value: 'I' }] },
    { id: 'sn38', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '架构', value: 'N' }] },
    { id: 'tf38', text: '你认为自己更：', options: [{ label: '理智', value: 'T' }, { label: '情感', value: 'F' }] },
    { id: 'jp38', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei39', text: '你更喜欢：', options: [{ label: '外向', value: 'E' }, { label: '内向', value: 'I' }] },
    { id: 'sn39', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '思想', value: 'N' }] },
    { id: 'tf39', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '仁慈', value: 'F' }] },
    { id: 'jp39', text: '你更喜欢：', options: [{ label: '计划', value: 'J' }, { label: '灵活', value: 'P' }] },
    { id: 'ei40', text: '你更喜欢：', options: [{ label: '社交', value: 'E' }, { label: '独处', value: 'I' }] },
    { id: 'sn40', text: '你更喜欢：', options: [{ label: '事实', value: 'S' }, { label: '直觉', value: 'N' }] },
    { id: 'tf40', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '仁慈', value: 'F' }] },
    { id: 'jp40', text: '你更喜欢：', options: [{ label: '计划', value: 'J' }, { label: '灵活', value: 'P' }] },
    { id: 'ei41', text: '你更喜欢：', options: [{ label: '表达', value: 'E' }, { label: '倾听', value: 'I' }] },
    { id: 'sn41', text: '你更喜欢：', options: [{ label: '现实', value: 'S' }, { label: '理想', value: 'N' }] },
    { id: 'tf41', text: '你认为自己更：', options: [{ label: '坚定', value: 'T' }, { label: '温柔', value: 'F' }] },
    { id: 'jp41', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '顺其自然', value: 'P' }] },
    { id: 'ei42', text: '你更喜欢：', options: [{ label: '热闹', value: 'E' }, { label: '安静', value: 'I' }] },
    { id: 'sn42', text: '你更喜欢：', options: [{ label: '具体', value: 'S' }, { label: '抽象', value: 'N' }] },
    { id: 'tf42', text: '你认为自己更：', options: [{ label: '务实', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp42', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei43', text: '你更喜欢：', options: [{ label: '广交', value: 'E' }, { label: '深交', value: 'I' }] },
    { id: 'sn43', text: '你更喜欢：', options: [{ label: '熟悉', value: 'S' }, { label: '新奇', value: 'N' }] },
    { id: 'tf43', text: '你认为自己更：', options: [{ label: '客观', value: 'T' }, { label: '主观', value: 'F' }] },
    { id: 'jp43', text: '你更喜欢：', options: [{ label: '计划', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei44', text: '你更喜欢：', options: [{ label: '分享', value: 'E' }, { label: '独自', value: 'I' }] },
    { id: 'sn44', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '大局', value: 'N' }] },
    { id: 'tf44', text: '你认为自己更：', options: [{ label: '理性', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp44', text: '你更喜欢：', options: [{ label: '确定', value: 'J' }, { label: '可能', value: 'P' }] },
    { id: 'ei45', text: '你更喜欢：', options: [{ label: '团队', value: 'E' }, { label: '个人', value: 'I' }] },
    { id: 'sn45', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '构思', value: 'N' }] },
    { id: 'tf45', text: '你认为自己更：', options: [{ label: '冷峻', value: 'T' }, { label: '热情', value: 'F' }] },
    { id: 'jp45', text: '你更喜欢：', options: [{ label: '准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei46', text: '你更喜欢：', options: [{ label: '社交媒体', value: 'E' }, { label: '私人日记', value: 'I' }] },
    { id: 'sn46', text: '你更喜欢：', options: [{ label: '常识', value: 'S' }, { label: '灵感', value: 'N' }] },
    { id: 'tf46', text: '你认为自己更：', options: [{ label: '讲理', value: 'T' }, { label: '讲情', value: 'F' }] },
    { id: 'jp46', text: '你更喜欢：', options: [{ label: '有组织', value: 'J' }, { label: '自发', value: 'P' }] },
    { id: 'ei47', text: '你更喜欢：', options: [{ label: '演讲', value: 'E' }, { label: '书面', value: 'I' }] },
    { id: 'sn47', text: '你更喜欢：', options: [{ label: '现成', value: 'S' }, { label: '全新', value: 'N' }] },
    { id: 'tf47', text: '你认为自己更：', options: [{ label: '分析', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp47', text: '你更喜欢：', options: [{ label: '有结构', value: 'J' }, { label: '无拘束', value: 'P' }] },
    { id: 'ei48', text: '你更喜欢：', options: [{ label: '大城市', value: 'E' }, { label: '小城镇', value: 'I' }] },
    { id: 'sn48', text: '你更喜欢：', options: [{ label: '例子', value: 'S' }, { label: '原理', value: 'N' }] },
    { id: 'tf48', text: '你认为自己更：', options: [{ label: '批判', value: 'T' }, { label: '包容', value: 'F' }] },
    { id: 'jp48', text: '你更喜欢：', options: [{ label: '预见', value: 'J' }, { label: '随遇而安', value: 'P' }] },
    { id: 'ei49', text: '你更喜欢：', options: [{ label: '分享快乐', value: 'E' }, { label: '独自品味', value: 'I' }] },
    { id: 'sn49', text: '你更喜欢：', options: [{ label: '实在', value: 'S' }, { label: '虚无', value: 'N' }] },
    { id: 'tf49', text: '你认为自己更：', options: [{ label: '原则', value: 'T' }, { label: '灵活', value: 'F' }] },
    { id: 'jp49', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei50', text: '你更喜欢：', options: [{ label: '讨论', value: 'E' }, { label: '思考', value: 'I' }] },
    {
      id: 'ei_check',
      text: '经过一整天高强度的社交后，你通常觉得：',
      options: [
        { label: '意犹未尽，还想继续活动', value: 'E' },
        { label: '精疲力竭，急需独处充电', value: 'I' },
      ],
      isLieDetector: true
    },
    {
      id: 'sn2',
      text: '你更喜欢哪种类型的描述：',
      options: [
        { label: '具体的、具体的、可感知的描述', value: 'S' },
        { label: '比喻的、象征的、抽象的描述', value: 'N' },
      ],
    },
    {
      id: 'tf2',
      text: '当朋友遇到困难时，你的第一反应通常是：',
      options: [
        { label: '分析问题原因并提供解决方案', value: 'T' },
        { label: '给予情感支持并表达同情', value: 'F' },
      ],
    },
    {
      id: 'jp2',
      text: '面对一项新任务，你倾向于：',
      options: [
        { label: '先制定详细计划再开始执行', value: 'J' },
        { label: '边做边摸索，根据情况调整', value: 'P' },
      ],
    },
    {
      id: 'ei2',
      text: '在团队讨论中，你通常：',
      options: [
        { label: '先说出想法，在交流中完善', value: 'E' },
        { label: '先在脑中思考成熟，再开口表达', value: 'I' },
      ],
    },
    {
      id: 'sn3',
      text: '你更欣赏哪种人：',
      options: [
        { label: '脚踏实地、注重实效的人', value: 'S' },
        { label: '富有想象力、眼光长远的人', value: 'N' },
      ],
    },
    {
      id: 'tf3',
      text: '你认为哪种评价更让你受用：',
      options: [
        { label: '“你是一个非常有逻辑和能力的人”', value: 'T' },
        { label: '“你是一个非常善良和体贴的人”', value: 'F' },
      ],
    },
    {
      id: 'jp3',
      text: '对于截止日期，你的态度通常是：',
      options: [
        { label: '提前规划，尽早完成以避免压力', value: 'J' },
        { label: '在最后期限的压力下效率最高', value: 'P' },
      ],
    },
    {
      id: 'ei3',
      text: '在聚会中，你通常：',
      options: [
        { label: '是那个活跃气氛、主动交谈的人', value: 'E' },
        { label: '是那个安静观察、等待被引荐的人', value: 'I' },
      ],
    },
    {
      id: 'sn4',
      text: '你更喜欢哪种工作：',
      options: [
        { label: '处理具体事务和现有流程', value: 'S' },
        { label: '构思新方案和探索可能性', value: 'N' },
      ],
    },
    {
      id: 'tf4',
      text: '在评价他人时，你更看重：',
      options: [
        { label: '对方的能力和逻辑严密性', value: 'T' },
        { label: '对方的善良和对他人的关怀', value: 'F' },
      ],
    },
    {
      id: 'jp4',
      text: '你的办公桌或房间通常：',
      options: [
        { label: '整洁有序，每样东西都有固定位置', value: 'J' },
        { label: '随意堆放，但你能找到需要的东西', value: 'P' },
      ],
    },
    {
      id: 'ei4',
      text: '你更喜欢哪种社交节奏：',
      options: [
        { label: '频繁的聚会和广泛的交际圈', value: 'E' },
        { label: '偶尔的深度交谈和紧密的小圈子', value: 'I' },
      ],
    },
    {
      id: 'sn5',
      text: '你更倾向于：',
      options: [
        { label: '相信经验和已有的事实', value: 'S' },
        { label: '相信直觉和潜在的预感', value: 'N' },
      ],
    },
    {
      id: 'tf5',
      text: '当别人向你诉苦时，你通常：',
      options: [
        { label: '客观分析利弊，给出实用建议', value: 'T' },
        { label: '感同身受，给予情感上的抚慰', value: 'F' },
      ],
    },
    {
      id: 'jp5',
      text: '你更喜欢哪种旅行方式：',
      options: [
        { label: '提前订好所有酒店和详细行程', value: 'J' },
        { label: '只定好目的地，随性而行', value: 'P' },
      ],
    },
    {
      id: 'ei5',
      text: '在陌生环境中，你通常：',
      options: [
        { label: '主动介绍自己并结识新朋友', value: 'E' },
        { label: '保持沉默，直到有人主动搭讪', value: 'I' },
      ],
    },
    {
      id: 'sn6',
      text: '你更喜欢阅读：',
      options: [
        { label: '纪实文学、传记或实用指南', value: 'S' },
        { label: '科幻小说、诗歌或哲学著作', value: 'N' },
      ],
    },
    {
      id: 'tf6',
      text: '在团队中，你认为最重要的是：',
      options: [
        { label: '公平公正，按劳分配', value: 'T' },
        { label: '和谐共处，互相支持', value: 'F' },
      ],
    },
    {
      id: 'jp6',
      text: '面对突发状况，你通常：',
      options: [
        { label: '感到不安，因为计划被打乱', value: 'J' },
        { label: '感到兴奋， because有了新挑战', value: 'P' },
      ],
    },
    {
      id: 'ei6',
      text: '在长途旅行中，你更喜欢：',
      options: [
        { label: '结识新旅伴并愉快聊天', value: 'E' },
        { label: '戴上耳机享受独处的宁静', value: 'I' },
      ],
    },
    {
      id: 'sn7',
      text: '你更喜欢哪种类型的电影：',
      options: [
        { label: '基于真实事件、逻辑严密的写实片', value: 'S' },
        { label: '充满隐喻、探讨深层意义的文艺片', value: 'N' },
      ],
    },
    {
      id: 'tf7',
      text: '你认为法律的本质应该是：',
      options: [
        { label: '绝对的公平与客观的准则', value: 'T' },
        { label: '对人性的关怀与社会的和谐', value: 'F' },
      ],
    },
    {
      id: 'jp7',
      text: '你对“未完成的任务”的感觉是：',
      options: [
        { label: '如鲠在喉，必须尽快完成才安心', value: 'J' },
        { label: '没关系，可以等有灵感时再处理', value: 'P' },
      ],
    },
    {
      id: 'ei7',
      text: '当电话响起时，你通常：',
      options: [
        { label: '立刻接听，期待新的交流', value: 'E' },
        { label: '犹豫一下，甚至希望对方挂断', value: 'I' },
      ],
    },
    {
      id: 'sn8',
      text: '你更擅长：',
      options: [
        { label: '处理具体的数字和繁琐的细节', value: 'S' },
        { label: '把握整体的趋势和宏观的构想', value: 'N' },
      ],
    },
    {
      id: 'tf8',
      text: '在评价一个作品时，你首先关注：',
      options: [
        { label: '它的逻辑是否自洽，技术是否达标', value: 'T' },
        { label: '它传达的情感是否动人，是否有灵魂', value: 'F' },
      ],
    },
    {
      id: 'jp8',
      text: '在日常生活中，你更倾向于：',
      options: [
        { label: '按部就班，遵循既定的时间表', value: 'J' },
        { label: '随性而为，根据当下的心情决定', value: 'P' },
      ],
    },
    {
      id: 'ei8',
      text: '在大型会议中，你通常：',
      options: [
        { label: '积极发言，希望表达自己的观点', value: 'E' },
        { label: '静静聆听，在心中消化他人的想法', value: 'I' },
      ],
    },
    {
      id: 'sn9',
      text: '你对“传统”的态度是：',
      options: [
        { label: '尊重并愿意遵循经过验证的经验', value: 'S' },
        { label: '质疑并渴望寻找更好的替代方案', value: 'N' },
      ],
    },
    {
      id: 'tf9',
      text: '当你的观点被否定时，你通常：',
      options: [
        { label: '寻找逻辑漏洞进行辩论', value: 'T' },
        { label: '感到失落，担心关系受损', value: 'F' },
      ],
    },
    {
      id: 'jp9',
      text: '你更喜欢哪种工作环境：',
      options: [
        { label: '职责明确、流程清晰的环境', value: 'J' },
        { label: '充满变数、鼓励创新的环境', value: 'P' },
      ],
    },
    {
      id: 'ei9',
      text: '你更喜欢哪种放松方式：',
      options: [
        { label: '和朋友去KTV或闹市逛街', value: 'E' },
        { label: '独自在家看书或看电影', value: 'I' },
      ],
    },
    {
      id: 'sn10',
      text: '你更倾向于：',
      options: [
        { label: '关注“是什么”，即眼前的现实', value: 'S' },
        { label: '关注“可能是什么”，即潜在的意义', value: 'N' },
      ],
    },
    {
      id: 'tf10',
      text: '你认为一个优秀的领导者应该：',
      options: [
        { label: '赏罚分明，以理服人', value: 'T' },
        { label: '体恤下属，以情动人', value: 'F' },
      ],
    },
    {
      id: 'jp10',
      text: '你对“惊喜”的态度是：',
      options: [
        { label: '不太喜欢，因为这不在计划之内', value: 'J' },
        { label: '非常喜欢，这让生活充满乐趣', value: 'P' },
      ],
    },
    {
      id: 'ei10',
      text: '在社交场合，如果你不认识任何人，你会：',
      options: [
        { label: '主动寻找话题切入，结识新朋友', value: 'E' },
        { label: '站在角落，等待认识的人出现', value: 'I' },
      ],
    },
    {
      id: 'sn11',
      text: '你更喜欢学习：',
      options: [
        { label: '有明确应用价值的技术或技能', value: 'S' },
        { label: '探讨本质规律的理论或哲学', value: 'N' },
      ],
    },
    {
      id: 'tf11',
      text: '在处理纠纷时，你更倾向于：',
      options: [
        { label: '依据事实和规则进行裁决', value: 'T' },
        { label: '考虑各方感受进行调解', value: 'F' },
      ],
    },
    {
      id: 'jp11',
      text: '你如何看待“清单”：',
      options: [
        { label: '生活必备，划掉已完成项很有成就感', value: 'J' },
        { label: '一种束缚，更喜欢随性处理事务', value: 'P' },
      ],
    },
    {
      id: 'ei11',
      text: '你认为自己：',
      options: [
        { label: '容易被了解，性格开朗', value: 'E' },
        { label: '较难被了解，性格内敛', value: 'I' },
      ],
    },
    {
      id: 'sn12',
      text: '当你听别人说话时，你更关注：',
      options: [
        { label: '对方说的具体内容和事实', value: 'S' },
        { label: '对方说话的语气和弦外之音', value: 'N' },
      ],
    },
    {
      id: 'tf12',
      text: '你认为赞美他人时，最重要的是：',
      options: [
        { label: '赞美对方的成就和能力', value: 'T' },
        { label: '赞美对方的品质和善良', value: 'F' },
      ],
    },
    {
      id: 'jp12',
      text: '你对“截止日期”的感觉是：',
      options: [
        { label: '必须严格遵守的底线', value: 'J' },
        { label: '可以根据情况调整的参考', value: 'P' },
      ],
    },
    {
      id: 'tf13',
      text: '在辩论中，你更看重：',
      options: [
        { label: '逻辑的严密性和证据的充分性', value: 'T' },
        { label: '观点的启发性和对他人的感召力', value: 'F' },
      ],
    },
    {
      id: 'jp13',
      text: '你更喜欢哪种生活节奏：',
      options: [
        { label: '井然有序，一切尽在掌控', value: 'J' },
        { label: '自由散漫，随遇而安', value: 'P' },
      ],
    },
    {
      id: 'ei14',
      text: '在社交场合，你通常：',
      options: [
        { label: '主动发起谈话', value: 'E' },
        { label: '等待别人发起谈话', value: 'I' },
      ],
    },
    {
      id: 'sn14',
      text: '你更倾向于：',
      options: [
        { label: '关注具体的细节', value: 'S' },
        { label: '关注整体的概念', value: 'N' },
      ],
    },
    {
      id: 'tf14',
      text: '你认为做决定时：',
      options: [
        { label: '逻辑比情感更重要', value: 'T' },
        { label: '情感比逻辑更重要', value: 'F' },
      ],
    },
    {
      id: 'jp14',
      text: '你更喜欢：',
      options: [
        { label: '提前规划', value: 'J' },
        { label: '临时决定', value: 'P' },
      ],
    },
    {
      id: 'ei15',
      text: '你更喜欢：',
      options: [
        { label: '热闹的聚会', value: 'E' },
        { label: '安静的独处', value: 'I' },
      ],
    },
    {
      id: 'sn15',
      text: '你更看重：',
      options: [
        { label: '实际的经验', value: 'S' },
        { label: '创新的想法', value: 'N' },
      ],
    },
    {
      id: 'tf15',
      text: '你更倾向于：',
      options: [
        { label: '客观的分析', value: 'T' },
        { label: '主观的感受', value: 'F' },
      ],
    },
    {
      id: 'jp15',
      text: '你更喜欢：',
      options: [
        { label: '有条理的环境', value: 'J' },
        { label: '随意的环境', value: 'P' },
      ],
    },
    {
      id: 'ei16',
      text: '你认为自己：',
      options: [
        { label: '外向且充满活力', value: 'E' },
        { label: '内向且沉稳', value: 'I' },
      ],
    },
    {
      id: 'sn16',
      text: '你更喜欢：',
      options: [
        { label: '处理具体的事实', value: 'S' },
        { label: '处理抽象的理论', value: 'N' },
      ],
    },
    {
      id: 'tf16',
      text: '在冲突中，你更倾向于：',
      options: [
        { label: '坚持原则', value: 'T' },
        { label: '寻求和谐', value: 'F' },
      ],
    },
    {
      id: 'jp16',
      text: '你更喜欢：',
      options: [
        { label: '明确的计划', value: 'J' },
        { label: '开放的选择', value: 'P' },
      ],
    },
    {
      id: 'ei17',
      text: '你更喜欢：',
      options: [
        { label: '与多人交流', value: 'E' },
        { label: '与少数人交流', value: 'I' },
      ],
    },
    {
      id: 'sn17',
      text: '你更倾向于：',
      options: [
        { label: '关注当下的现实', value: 'S' },
        { label: '关注未来的可能', value: 'N' },
      ],
    },
    {
      id: 'tf17',
      text: '你认为：',
      options: [
        { label: '公正比仁慈更重要', value: 'T' },
        { label: '仁慈比公正更重要', value: 'F' },
      ],
    },
    {
      id: 'jp17',
      text: '你更喜欢：',
      options: [
        { label: '有组织的活动', value: 'J' },
        { label: '自发的活动', value: 'P' },
      ],
    },
    {
      id: 'ei18',
      text: '在社交聚会中，你通常：',
      options: [
        { label: '感到兴奋', value: 'E' },
        { label: '感到疲倦', value: 'I' },
      ],
    },
    {
      id: 'sn18',
      text: '你更喜欢：',
      options: [
        { label: '具体的指令', value: 'S' },
        { label: '模糊的启发', value: 'N' },
      ],
    },
    {
      id: 'tf18',
      text: '你更倾向于：',
      options: [
        { label: '理性的思考', value: 'T' },
        { label: '感性的直觉', value: 'F' },
      ],
    },
    {
      id: 'jp18',
      text: '你更喜欢：',
      options: [
        { label: '确定的结论', value: 'J' },
        { label: '持续的探索', value: 'P' },
      ],
    },
    {
      id: 'ei19',
      text: '你更喜欢：',
      options: [
        { label: '广泛的交际', value: 'E' },
        { label: '深度的友谊', value: 'I' },
      ],
    },
    {
      id: 'sn19',
      text: '你更倾向于：',
      options: [
        { label: '相信证据', value: 'S' },
        { label: '相信直觉', value: 'N' },
      ],
    },
    {
      id: 'tf19',
      text: '你认为：',
      options: [
        { label: '事实胜于雄辩', value: 'T' },
        { label: '情感重于一切', value: 'F' },
      ],
    },
    {
      id: 'jp19',
      text: '你更喜欢：',
      options: [
        { label: '按部就班', value: 'J' },
        { label: '随性而为', value: 'P' },
      ],
    },
    {
      id: 'ei20',
      text: '你认为自己：',
      options: [
        { label: '容易接近', value: 'E' },
        { label: '难以捉摸', value: 'I' },
      ],
    },
    {
      id: 'sn20',
      text: '你更喜欢：',
      options: [
        { label: '实际的应用', value: 'S' },
        { label: '理论的探讨', value: 'N' },
      ],
    },
    {
      id: 'tf20',
      text: '在做决定时，你更看重：',
      options: [
        { label: '效率', value: 'T' },
        { label: '和谐', value: 'F' },
      ],
    },
    {
      id: 'jp20',
      text: '你更喜欢：',
      options: [
        { label: '清晰的结构', value: 'J' },
        { label: '灵活的变通', value: 'P' },
      ],
    },
    {
      id: 'ei21',
      text: '你更喜欢：',
      options: [
        { label: '公开的表达', value: 'E' },
        { label: '私下的思考', value: 'I' },
      ],
    },
    {
      id: 'sn21',
      text: '你更倾向于：',
      options: [
        { label: '关注细节', value: 'S' },
        { label: '关注大局', value: 'N' },
      ],
    },
    {
      id: 'tf21',
      text: '你认为：',
      options: [
        { label: '逻辑是第一位的', value: 'T' },
        { label: '情感是第一位的', value: 'F' },
      ],
    },
    {
      id: 'jp21',
      text: '你更喜欢：',
      options: [
        { label: '预先的安排', value: 'J' },
        { label: '临时的发挥', value: 'P' },
      ],
    },
    {
      id: 'ei22',
      text: '你认为自己：',
      options: [
        { label: '充满热情', value: 'E' },
        { label: '冷静克制', value: 'I' },
      ],
    },
    {
      id: 'sn22',
      text: '你更喜欢：',
      options: [
        { label: '具体的经验', value: 'S' },
        { label: '抽象的构思', value: 'N' },
      ],
    },
    {
      id: 'tf22',
      text: '在评价他人时，你更看重：',
      options: [
        { label: '能力', value: 'T' },
        { label: '品质', value: 'F' },
      ],
    },
    {
      id: 'jp22',
      text: '你更喜欢：',
      options: [
        { label: '有计划的生活', value: 'J' },
        { label: '无拘无束的生活', value: 'P' },
      ],
    },
    {
      id: 'ei23',
      text: '你更喜欢：',
      options: [
        { label: '热闹的环境', value: 'E' },
        { label: '幽静的环境', value: 'I' },
      ],
    },
    {
      id: 'sn23',
      text: '你更倾向于：',
      options: [
        { label: '相信眼见为实', value: 'S' },
        { label: '相信直觉预感', value: 'N' },
      ],
    },
    {
      id: 'tf23',
      text: '你认为：',
      options: [
        { label: '理智胜过情感', value: 'T' },
        { label: '情感胜过理智', value: 'F' },
      ],
    },
    {
      id: 'jp23',
      text: '你更喜欢：',
      options: [
        { label: '确定的目标', value: 'J' },
        { label: '开放的可能性', value: 'P' },
      ],
    },
    {
      id: 'ei24',
      text: '你认为自己：',
      options: [
        { label: '善于表达', value: 'E' },
        { label: '善于倾听', value: 'I' },
      ],
    },
    {
      id: 'sn24',
      text: '你更喜欢：',
      options: [
        { label: '实际的操作', value: 'S' },
        { label: '理论的构思', value: 'N' },
      ],
    },
    {
      id: 'tf24',
      text: '在做决定时，你更看重：',
      options: [
        { label: '结果', value: 'T' },
        { label: '过程', value: 'F' },
      ],
    },
    {
      id: 'jp24',
      text: '你更喜欢：',
      options: [
        { label: '有条理的计划', value: 'J' },
        { label: '随性的发挥', value: 'P' },
      ],
    },
    {
      id: 'ei25',
      text: '你更喜欢：',
      options: [
        { label: '广泛的社交', value: 'E' },
        { label: '深度的独处', value: 'I' },
      ],
    },
    {
      id: 'sn25',
      text: '你更倾向于：',
      options: [
        { label: '关注事实', value: 'S' },
        { label: '关注意义', value: 'N' },
      ],
    },
    {
      id: 'tf25',
      text: '你认为：',
      options: [
        { label: '逻辑是核心', value: 'T' },
        { label: '情感是核心', value: 'F' },
      ],
    },
    {
      id: 'jp25',
      text: '你更喜欢：',
      options: [
        { label: '清晰的边界', value: 'J' },
        { label: '模糊的边界', value: 'P' },
      ],
    },
    {
      id: 'ei26',
      text: '你认为自己：',
      options: [
        { label: '外向开朗', value: 'E' },
        { label: '内向深沉', value: 'I' },
      ],
    },
    {
      id: 'sn26',
      text: '你更喜欢：',
      options: [
        { label: '具体的细节', value: 'S' },
        { label: '抽象的概念', value: 'N' },
      ],
    },
    {
      id: 'tf26',
      text: '在冲突中，你更倾向于：',
      options: [
        { label: '理智对待', value: 'T' },
        { label: '感性对待', value: 'F' },
      ],
    },
    {
      id: 'jp26',
      text: '你更喜欢：',
      options: [
        { label: '预先的规划', value: 'J' },
        { label: '临时的调整', value: 'P' },
      ],
    },
    {
      id: 'ei27',
      text: '你更喜欢：',
      options: [
        { label: '与多人互动', value: 'E' },
        { label: '与少数人互动', value: 'I' },
      ],
    },
    {
      id: 'sn27',
      text: '你更倾向于：',
      options: [
        { label: '相信经验', value: 'S' },
        { label: '相信直觉', value: 'N' },
      ],
    },
    {
      id: 'tf27',
      text: '你认为：',
      options: [
        { label: '公正最重要', value: 'T' },
        { label: '仁慈最重要', value: 'F' },
      ],
    },
    {
      id: 'jp27',
      text: '你更喜欢：',
      options: [
        { label: '有组织的活动', value: 'J' },
        { label: '自发的活动', value: 'P' },
      ],
    },
    {
      id: 'ei28',
      text: '在社交场合，你通常：',
      options: [
        { label: '感到充实', value: 'E' },
        { label: '感到消耗', value: 'I' },
      ],
    },
    {
      id: 'sn28',
      text: '你更喜欢：',
      options: [
        { label: '具体的指令', value: 'S' },
        { label: '模糊的启发', value: 'N' },
      ],
    },
    {
      id: 'tf28',
      text: '你更倾向于：',
      options: [
        { label: '理性的分析', value: 'T' },
        { label: '感性的直觉', value: 'F' },
      ],
    },
    {
      id: 'jp28',
      text: '你更喜欢：',
      options: [
        { label: '确定的结论', value: 'J' },
        { label: '持续的探索', value: 'P' },
      ],
    },
    {
      id: 'ei29',
      text: '你更喜欢：',
      options: [
        { label: '广泛的交际', value: 'E' },
        { label: '深度的友谊', value: 'I' },
      ],
    },
    {
      id: 'sn29',
      text: '你更倾向于：',
      options: [
        { label: '相信事实', value: 'S' },
        { label: '相信可能性', value: 'N' },
      ],
    },
    {
      id: 'tf29',
      text: '你认为：',
      options: [
        { label: '逻辑是基础', value: 'T' },
        { label: '情感是基础', value: 'F' },
      ],
    },
    {
      id: 'jp29',
      text: '你更喜欢：',
      options: [
        { label: '按部就班', value: 'J' },
        { label: '随性而为', value: 'P' },
      ],
    },
    {
      id: 'ei30',
      text: '你认为自己：',
      options: [
        { label: '容易了解', value: 'E' },
        { label: '难以捉摸', value: 'I' },
      ],
    },
    {
      id: 'sn30',
      text: '你更喜欢：',
      options: [
        { label: '实际的应用', value: 'S' },
        { label: '理论的探讨', value: 'N' },
      ],
    },
    {
      id: 'tf30',
      text: '在做决定时，你更看重：',
      options: [
        { label: '效率', value: 'T' },
        { label: '和谐', value: 'F' },
      ],
    },
    {
      id: 'jp30',
      text: '你更喜欢：',
      options: [
        { label: '清晰的结构', value: 'J' },
        { label: '灵活的变通', value: 'P' },
      ],
    },
    {
      id: 'ei31',
      text: '你更喜欢：',
      options: [
        { label: '公开的表达', value: 'E' },
        { label: '私下的思考', value: 'I' },
      ],
    },
    {
      id: 'sn31',
      text: '你更倾向于：',
      options: [
        { label: '关注细节', value: 'S' },
        { label: '关注大局', value: 'N' },
      ],
    },
    {
      id: 'tf31',
      text: '你认为：',
      options: [
        { label: '理智最重要', value: 'T' },
        { label: '情感最重要', value: 'F' },
      ],
    },
    {
      id: 'jp31',
      text: '你更喜欢：',
      options: [
        { label: '预先的安排', value: 'J' },
        { label: '临时的发挥', value: 'P' },
      ],
    },
    {
      id: 'ei32',
      text: '你认为自己：',
      options: [
        { label: '充满热情', value: 'E' },
        { label: '冷静克制', value: 'I' },
      ],
    },
    {
      id: 'sn32',
      text: '你更喜欢：',
      options: [
        { label: '具体的经验', value: 'S' },
        { label: '抽象的构思', value: 'N' },
      ],
    },
    {
      id: 'tf32',
      text: '在评价他人时，你更看重：',
      options: [
        { label: '能力', value: 'T' },
        { label: '品质', value: 'F' },
      ],
    },
    {
      id: 'jp32',
      text: '你更喜欢：',
      options: [
        { label: '有计划的生活', value: 'J' },
        { label: '无拘无束的生活', value: 'P' },
      ],
    },
    {
      id: 'ei33',
      text: '你更喜欢：',
      options: [
        { label: '热闹的环境', value: 'E' },
        { label: '幽静的环境', value: 'I' },
      ],
    },
    {
      id: 'sn33',
      text: '你更倾向于：',
      options: [
        { label: '相信眼见为实', value: 'S' },
        { label: '相信直觉预感', value: 'N' },
      ],
    },
    {
      id: 'tf33',
      text: '你认为：',
      options: [
        { label: '理智胜过情感', value: 'T' },
        { label: '情感胜过理智', value: 'F' },
      ],
    },
    {
      id: 'jp33',
      text: '你更喜欢：',
      options: [
        { label: '确定的目标', value: 'J' },
        { label: '开放的可能性', value: 'P' },
      ],
    },
    {
      id: 'ei34',
      text: '你更喜欢：',
      options: [
        { label: '在人群中', value: 'E' },
        { label: '在安静处', value: 'I' },
      ],
    },
    {
      id: 'sn34',
      text: '你更倾向于：',
      options: [
        { label: '关注细节', value: 'S' },
        { label: '关注整体', value: 'N' },
      ],
    },
    {
      id: 'tf34',
      text: '你认为：',
      options: [
        { label: '逻辑是核心', value: 'T' },
        { label: '情感是核心', value: 'F' },
      ],
    },
    {
      id: 'jp34',
      text: '你更喜欢：',
      options: [
        { label: '有计划', value: 'J' },
        { label: '随性', value: 'P' },
      ],
    },
    {
      id: 'ei35',
      text: '你更喜欢：',
      options: [
        { label: '主动社交', value: 'E' },
        { label: '被动社交', value: 'I' },
      ],
    },
    {
      id: 'sn35',
      text: '你更倾向于：',
      options: [
        { label: '相信事实', value: 'S' },
        { label: '相信灵感', value: 'N' },
      ],
    },
    {
      id: 'tf35',
      text: '你认为：',
      options: [
        { label: '理智比情感重要', value: 'T' },
        { label: '情感比理智重要', value: 'F' },
      ],
    },
    {
      id: 'jp35',
      text: '你更喜欢：',
      options: [
        { label: '有条理', value: 'J' },
        { label: '有弹性', value: 'P' },
      ],
    },
    {
      id: 'ei36',
      text: '你认为自己：',
      options: [
        { label: '外向', value: 'E' },
        { label: '内向', value: 'I' },
      ],
    },
    {
      id: 'sn36',
      text: '你更喜欢：',
      options: [
        { label: '具体的', value: 'S' },
        { label: '抽象的', value: 'N' },
      ],
    },
    {
      id: 'tf36',
      text: '在做决定时：',
      options: [
        { label: '客观', value: 'T' },
        { label: '主观', value: 'F' },
      ],
    },
    {
      id: 'jp36',
      text: '你更喜欢：',
      options: [
        { label: '确定的', value: 'J' },
        { label: '不确定的', value: 'P' },
      ],
    },
    {
      id: 'ei37',
      text: '你更喜欢：',
      options: [
        { label: '广泛的兴趣', value: 'E' },
        { label: '深度的研究', value: 'I' },
      ],
    },
    {
      id: 'sn37',
      text: '你更倾向于：',
      options: [
        { label: '关注现实', value: 'S' },
        { label: '关注理想', value: 'N' },
      ],
    },
    {
      id: 'tf37',
      text: '你认为：',
      options: [
        { label: '逻辑是工具', value: 'T' },
        { label: '情感是纽带', value: 'F' },
      ],
    },
    {
      id: 'jp37',
      text: '你更喜欢：',
      options: [
        { label: '有组织的', value: 'J' },
        { label: '自发的', value: 'P' },
      ],
    },
    {
      id: 'ei38',
      text: '你认为自己：',
      options: [
        { label: '活泼', value: 'E' },
        { label: '文静', value: 'I' },
      ],
    },
    {
      id: 'sn38',
      text: '你更喜欢：',
      options: [
        { label: '实际的', value: 'S' },
        { label: '想象的', value: 'N' },
      ],
    },
    {
      id: 'tf38',
      text: '在评价时：',
      options: [
        { label: '看重对错', value: 'T' },
        { label: '看重感受', value: 'F' },
      ],
    },
    {
      id: 'jp38',
      text: '你更喜欢：',
      options: [
        { label: '有准备', value: 'J' },
        { label: '随遇而安', value: 'P' },
      ],
    },
    {
      id: 'ei39',
      text: '你更喜欢：',
      options: [
        { label: '热闹', value: 'E' },
        { label: '清静', value: 'I' },
      ],
    },
    {
      id: 'sn39',
      text: '你更倾向于：',
      options: [
        { label: '相信经验', value: 'S' },
        { label: '相信直觉', value: 'N' },
      ],
    },
    {
      id: 'tf39',
      text: '你认为：',
      options: [
        { label: '理智是光', value: 'T' },
        { label: '情感是火', value: 'F' },
      ],
    },
    {
      id: 'jp39',
      text: '你更喜欢：',
      options: [
        { label: '按部就班', value: 'J' },
        { label: '随机应变', value: 'P' },
      ],
    },
    {
      id: 'ei40',
      text: '你认为自己：',
      options: [
        { label: '容易相处', value: 'E' },
        { label: '深思熟虑', value: 'I' },
      ],
    },
    {
      id: 'sn40',
      text: '你更喜欢：',
      options: [
        { label: '具体的', value: 'S' },
        { label: '宏观的', value: 'N' },
      ],
    },
    {
      id: 'tf40',
      text: '在做决定时：',
      options: [
        { label: '果断', value: 'T' },
        { label: '体贴', value: 'F' },
      ],
    },
    {
      id: 'jp40',
      text: '你更喜欢：',
      options: [
        { label: '有序', value: 'J' },
        { label: '自由', value: 'P' },
      ],
    },
    {
      id: 'ei41',
      text: '你更喜欢：',
      options: [
        { label: '与人共事', value: 'E' },
        { label: '独立工作', value: 'I' },
      ],
    },
    {
      id: 'sn41',
      text: '你更倾向于：',
      options: [
        { label: '关注细节', value: 'S' },
        { label: '关注整体', value: 'N' },
      ],
    },
    {
      id: 'tf41',
      text: '你认为：',
      options: [
        { label: '逻辑是准则', value: 'T' },
        { label: '情感是动力', value: 'F' },
      ],
    },
    {
      id: 'jp41',
      text: '你更喜欢：',
      options: [
        { label: '预先规划', value: 'J' },
        { label: '临场发挥', value: 'P' },
      ],
    },
    {
      id: 'ei42',
      text: '你认为自己：',
      options: [
        { label: '外向', value: 'E' },
        { label: '内向', value: 'I' },
      ],
    },
    {
      id: 'sn42',
      text: '你更喜欢：',
      options: [
        { label: '实际的', value: 'S' },
        { label: '理论的', value: 'N' },
      ],
    },
    {
      id: 'tf42',
      text: '在评价时：',
      options: [
        { label: '公正', value: 'T' },
        { label: '仁慈', value: 'F' },
      ],
    },
    {
      id: 'jp42',
      text: '你更喜欢：',
      options: [
        { label: '有计划', value: 'J' },
        { label: '随性', value: 'P' },
      ],
    },
    {
      id: 'ei43',
      text: '你更喜欢：',
      options: [
        { label: '热闹', value: 'E' },
        { label: '安静', value: 'I' },
      ],
    },
    {
      id: 'sn43',
      text: '你更倾向于：',
      options: [
        { label: '相信事实', value: 'S' },
        { label: '相信直觉', value: 'N' },
      ],
    },
    {
      id: 'tf43',
      text: '你认为：',
      options: [
        { label: '理智胜过情感', value: 'T' },
        { label: '情感胜过理智', value: 'F' },
      ],
    },
    {
      id: 'jp43',
      text: '你更喜欢：',
      options: [
        { label: '确定的', value: 'J' },
        { label: '开放的', value: 'P' },
      ],
    },
    {
      id: 'ei44',
      text: '你更喜欢：',
      options: [
        { label: '主动', value: 'E' },
        { label: '被动', value: 'I' },
      ],
    },
    {
      id: 'sn44',
      text: '你更倾向于：',
      options: [
        { label: '关注细节', value: 'S' },
        { label: '关注大局', value: 'N' },
      ],
    },
    {
      id: 'tf44',
      text: '你认为：',
      options: [
        { label: '逻辑是核心', value: 'T' },
        { label: '情感是核心', value: 'F' },
      ],
    },
    {
      id: 'jp44',
      text: '你更喜欢：',
      options: [
        { label: '有条理', value: 'J' },
        { label: '有弹性', value: 'P' },
      ],
    },
    {
      id: 'ei45',
      text: '你认为自己：',
      options: [
        { label: '外向', value: 'E' },
        { label: '内向', value: 'I' },
      ],
    },
    {
      id: 'sn45',
      text: '你更喜欢：',
      options: [
        { label: '具体的', value: 'S' },
        { label: '抽象的', value: 'N' },
      ],
    },
    {
      id: 'tf45',
      text: '在做决定时：',
      options: [
        { label: '客观', value: 'T' },
        { label: '主观', value: 'F' },
      ],
    },
    {
      id: 'jp45',
      text: '你更喜欢：',
      options: [
        { label: '确定的', value: 'J' },
        { label: '不确定的', value: 'P' },
      ],
    },
    {
      id: 'ei46',
      text: '你更喜欢：',
      options: [
        { label: '广泛的兴趣', value: 'E' },
        { label: '深度的研究', value: 'I' },
      ],
    },
    {
      id: 'sn46',
      text: '你更倾向于：',
      options: [
        { label: '关注现实', value: 'S' },
        { label: '关注理想', value: 'N' },
      ],
    },
    {
      id: 'tf46',
      text: '你认为：',
      options: [
        { label: '逻辑是工具', value: 'T' },
        { label: '情感是纽带', value: 'F' },
      ],
    },
    {
      id: 'jp46',
      text: '你更喜欢：',
      options: [
        { label: '有组织的', value: 'J' },
        { label: '自发的', value: 'P' },
      ],
    },
    {
      id: 'ei47',
      text: '你认为自己：',
      options: [
        { label: '活泼', value: 'E' },
        { label: '文静', value: 'I' },
      ],
    },
    {
      id: 'sn47',
      text: '你更喜欢：',
      options: [
        { label: '实际的', value: 'S' },
        { label: '想象的', value: 'N' },
      ],
    },
    {
      id: 'tf47',
      text: '在评价时：',
      options: [
        { label: '看重对错', value: 'T' },
        { label: '看重感受', value: 'F' },
      ],
    },
    {
      id: 'jp47',
      text: '你更喜欢：',
      options: [
        { label: '有准备', value: 'J' },
        { label: '随遇而安', value: 'P' },
      ],
    },
    {
      id: 'ei48',
      text: '你更喜欢：',
      options: [
        { label: '热闹', value: 'E' },
        { label: '清静', value: 'I' },
      ],
    },
    {
      id: 'sn48',
      text: '你更倾向于：',
      options: [
        { label: '相信经验', value: 'S' },
        { label: '相信直觉', value: 'N' },
      ],
    },
    {
      id: 'tf48',
      text: '你认为：',
      options: [
        { label: '理智是光', value: 'T' },
        { label: '情感是火', value: 'F' },
      ],
    },
    {
      id: 'jp48',
      text: '你更喜欢：',
      options: [
        { label: '按部就班', value: 'J' },
        { label: '随机应变', value: 'P' },
      ],
    },
    {
      id: 'ei49',
      text: '你认为自己：',
      options: [
        { label: '容易相处', value: 'E' },
        { label: '深思熟虑', value: 'I' },
      ],
    },
    {
      id: 'sn49',
      text: '你更喜欢：',
      options: [
        { label: '具体的', value: 'S' },
        { label: '宏观的', value: 'N' },
      ],
    },
    {
      id: 'tf49',
      text: '在做决定时：',
      options: [
        { label: '果断', value: 'T' },
        { label: '体贴', value: 'F' },
      ],
    },
    {
      id: 'jp49',
      text: '你更喜欢：',
      options: [
        { label: '有序', value: 'J' },
        { label: '自由', value: 'P' },
      ],
    },
    {
      id: 'ei50',
      text: '你更喜欢：',
      options: [
        { label: '与人共事', value: 'E' },
        { label: '独立工作', value: 'I' },
      ],
    },
    {
      id: 'sn50',
      text: '你更倾向于：',
      options: [
        { label: '关注细节', value: 'S' },
        { label: '关注整体', value: 'N' },
      ],
    },
    {
      id: 'tf50',
      text: '你认为：',
      options: [
        { label: '逻辑是准则', value: 'T' },
        { label: '情感是动力', value: 'F' },
      ],
    },
    {
      id: 'jp50',
      text: '你更喜欢：',
      options: [
        { label: '预先规划', value: 'J' },
        { label: '临场发挥', value: 'P' },
      ],
    },
    {
      id: 'ei51',
      text: '你认为自己：',
      options: [
        { label: '外向', value: 'E' },
        { label: '内向', value: 'I' },
      ],
    },
    {
      id: 'sn51',
      text: '你更喜欢：',
      options: [
        { label: '实际的', value: 'S' },
        { label: '理论的', value: 'N' },
      ],
    },
    {
      id: 'tf51',
      text: '在评价时：',
      options: [
        { label: '公正', value: 'T' },
        { label: '仁慈', value: 'F' },
      ],
    },
    {
      id: 'jp51',
      text: '你更喜欢：',
      options: [
        { label: '有计划', value: 'J' },
        { label: '随性', value: 'P' },
      ],
    },
    {
      id: 'ei52',
      text: '你更喜欢：',
      options: [
        { label: '热闹', value: 'E' },
        { label: '安静', value: 'I' },
      ],
    },
    {
      id: 'sn52',
      text: '你更倾向于：',
      options: [
        { label: '相信事实', value: 'S' },
        { label: '相信直觉', value: 'N' },
      ],
    },
    {
      id: 'tf52',
      text: '你认为：',
      options: [
        { label: '理智胜过情感', value: 'T' },
        { label: '情感胜过理智', value: 'F' },
      ],
    },
    {
      id: 'jp52',
      text: '你更喜欢：',
      options: [
        { label: '确定的', value: 'J' },
        { label: '开放的', value: 'P' },
      ],
    },
    {
      id: 'ei53',
      text: '你更喜欢：',
      options: [
        { label: '主动', value: 'E' },
        { label: '被动', value: 'I' },
      ],
    },
    {
      id: 'sn53',
      text: '你更倾向于：',
      options: [
        { label: '关注细节', value: 'S' },
        { label: '关注大局', value: 'N' },
      ],
    },
    {
      id: 'tf53',
      text: '你认为：',
      options: [
        { label: '逻辑是核心', value: 'T' },
        { label: '情感是核心', value: 'F' },
      ],
    },
    {
      id: 'jp53',
      text: '你更喜欢：',
      options: [
        { label: '有条理', value: 'J' },
        { label: '有弹性', value: 'P' },
      ],
    },
    {
      id: 'ei54',
      text: '你认为自己：',
      options: [
        { label: '外向', value: 'E' },
        { label: '内向', value: 'I' },
      ],
    },
    {
      id: 'sn54',
      text: '你更喜欢：',
      options: [
        { label: '具体的', value: 'S' },
        { label: '抽象的', value: 'N' },
      ],
    },
    {
      id: 'tf54',
      text: '在做决定时：',
      options: [
        { label: '客观', value: 'T' },
        { label: '主观', value: 'F' },
      ],
    },
    {
      id: 'jp54',
      text: '你更喜欢：',
      options: [
        { label: '确定的', value: 'J' },
        { label: '不确定的', value: 'P' },
      ],
    },
    {
      id: 'ei55',
      text: '你更喜欢：',
      options: [
        { label: '广泛的兴趣', value: 'E' },
        { label: '深度的研究', value: 'I' },
      ],
    },
    {
      id: 'sn55',
      text: '你更倾向于：',
      options: [
        { label: '关注现实', value: 'S' },
        { label: '关注理想', value: 'N' },
      ],
    },
    {
      id: 'tf55',
      text: '你认为：',
      options: [
        { label: '逻辑是工具', value: 'T' },
        { label: '情感是纽带', value: 'F' },
      ],
    },
    {
      id: 'jp55',
      text: '你更喜欢：',
      options: [
        { label: '有组织的', value: 'J' },
        { label: '自发的', value: 'P' },
      ],
    },
    {
      id: 'ei56',
      text: '你认为自己：',
      options: [
        { label: '活泼', value: 'E' },
        { label: '文静', value: 'I' },
      ],
    },
    {
      id: 'sn56',
      text: '你更喜欢：',
      options: [
        { label: '实际的', value: 'S' },
        { label: '想象的', value: 'N' },
      ],
    },
    {
      id: 'tf56',
      text: '在评价时：',
      options: [
        { label: '看重对错', value: 'T' },
        { label: '看重感受', value: 'F' },
      ],
    },
    {
      id: 'jp56',
      text: '你更喜欢：',
      options: [
        { label: '有准备', value: 'J' },
        { label: '随遇而安', value: 'P' },
      ],
    },
    {
      id: 'ei57',
      text: '你更喜欢：',
      options: [
        { label: '热闹', value: 'E' },
        { label: '清静', value: 'I' },
      ],
    },
    {
      id: 'sn57',
      text: '你更倾向于：',
      options: [
        { label: '相信经验', value: 'S' },
        { label: '相信直觉', value: 'N' },
      ],
    },
    {
      id: 'tf57',
      text: '你认为：',
      options: [
        { label: '理智是光', value: 'T' },
        { label: '情感是火', value: 'F' },
      ],
    },
    {
      id: 'jp57',
      text: '你更喜欢：',
      options: [
        { label: '按部就班', value: 'J' },
        { label: '随机应变', value: 'P' },
      ],
    },
    {
      id: 'ei58',
      text: '你认为自己：',
      options: [
        { label: '容易相处', value: 'E' },
        { label: '深思熟虑', value: 'I' },
      ],
    },
    {
      id: 'sn58',
      text: '你更喜欢：',
      options: [
        { label: '具体的', value: 'S' },
        { label: '宏观的', value: 'N' },
      ],
    },
    {
      id: 'tf58',
      text: '在做决定时：',
      options: [
        { label: '果断', value: 'T' },
        { label: '体贴', value: 'F' },
      ],
    },
    {
      id: 'jp58',
      text: '你更喜欢：',
      options: [
        { label: '有序', value: 'J' },
        { label: '自由', value: 'P' },
      ],
    },
    {
      id: 'ei59',
      text: '你更喜欢：',
      options: [
        { label: '与人共事', value: 'E' },
        { label: '独立工作', value: 'I' },
      ],
    },
    {
      id: 'sn59',
      text: '你更倾向于：',
      options: [
        { label: '关注细节', value: 'S' },
        { label: '关注整体', value: 'N' },
      ],
    },
    {
      id: 'tf59',
      text: '你认为：',
      options: [
        { label: '逻辑是准则', value: 'T' },
        { label: '情感是动力', value: 'F' },
      ],
    },
    {
      id: 'jp59',
      text: '你更喜欢：',
      options: [
        { label: '预先规划', value: 'J' },
        { label: '临场发挥', value: 'P' },
      ],
    },
    {
      id: 'ei60',
      text: '你认为自己：',
      options: [
        { label: '外向', value: 'E' },
        { label: '内向', value: 'I' },
      ],
    },
    {
      id: 'sn60',
      text: '你更喜欢：',
      options: [
        { label: '实际的', value: 'S' },
        { label: '理论的', value: 'N' },
      ],
    },
    {
      id: 'tf60',
      text: '在评价时：',
      options: [
        { label: '公正', value: 'T' },
        { label: '仁慈', value: 'F' },
      ],
    },
    {
      id: 'jp60',
      text: '你更喜欢：',
      options: [
        { label: '有计划', value: 'J' },
        { label: '随性', value: 'P' },
      ],
    },
    {
      id: 'ei61',
      text: '你更喜欢：',
      options: [
        { label: '热闹', value: 'E' },
        { label: '安静', value: 'I' },
      ],
    },
    {
      id: 'sn61',
      text: '你更倾向于：',
      options: [
        { label: '相信事实', value: 'S' },
        { label: '相信直觉', value: 'N' },
      ],
    },
    {
      id: 'tf61',
      text: '你认为：',
      options: [
        { label: '理智胜过情感', value: 'T' },
        { label: '情感胜过理智', value: 'F' },
      ],
    },
    {
      id: 'jp61',
      text: '你更喜欢：',
      options: [
        { label: '确定的', value: 'J' },
        { label: '开放的', value: 'P' },
      ],
    },
    {
      id: 'ei62',
      text: '你更喜欢：',
      options: [
        { label: '主动', value: 'E' },
        { label: '被动', value: 'I' },
      ],
    },
    {
      id: 'sn62',
      text: '你更倾向于：',
      options: [
        { label: '关注细节', value: 'S' },
        { label: '关注大局', value: 'N' },
      ],
    },
    {
      id: 'tf62',
      text: '你认为：',
      options: [
        { label: '逻辑是核心', value: 'T' },
        { label: '情感是核心', value: 'F' },
      ],
    },
    {
      id: 'jp62',
      text: '你更喜欢：',
      options: [
        { label: '有条理', value: 'J' },
        { label: '有弹性', value: 'P' },
      ],
    },
    {
      id: 'ei63',
      text: '你认为自己：',
      options: [
        { label: '外向', value: 'E' },
        { label: '内向', value: 'I' },
      ],
    },
    {
      id: 'sn63',
      text: '你更喜欢：',
      options: [
        { label: '具体的', value: 'S' },
        { label: '抽象的', value: 'N' },
      ],
    },
    {
      id: 'tf63',
      text: '在做决定时：',
      options: [
        { label: '客观', value: 'T' },
        { label: '主观', value: 'F' },
      ],
    },
    {
      id: 'jp63',
      text: '你更喜欢：',
      options: [
        { label: '确定的', value: 'J' },
        { label: '不确定的', value: 'P' },
      ],
    },
    {
      id: 'ei64',
      text: '你更喜欢：',
      options: [
        { label: '广泛的兴趣', value: 'E' },
        { label: '深度的研究', value: 'I' },
      ],
    },
    {
      id: 'sn64',
      text: '你更倾向于：',
      options: [
        { label: '关注现实', value: 'S' },
        { label: '关注理想', value: 'N' },
      ],
    },
    {
      id: 'tf64',
      text: '你认为：',
      options: [
        { label: '逻辑是工具', value: 'T' },
        { label: '情感是纽带', value: 'F' },
      ],
    },
    {
      id: 'jp64',
      text: '你更喜欢：',
      options: [
        { label: '有组织的', value: 'J' },
        { label: '自发的', value: 'P' },
      ],
    },
    {
      id: 'ei65',
      text: '你认为自己：',
      options: [
        { label: '活泼', value: 'E' },
        { label: '文静', value: 'I' },
      ],
    },
    {
      id: 'sn65',
      text: '你更喜欢：',
      options: [
        { label: '实际的', value: 'S' },
        { label: '想象的', value: 'N' },
      ],
    },
    {
      id: 'tf65',
      text: '在评价时：',
      options: [
        { label: '看重对错', value: 'T' },
        { label: '看重感受', value: 'F' },
      ],
    },
    {
      id: 'jp65',
      text: '你更喜欢：',
      options: [
        { label: '有准备', value: 'J' },
        { label: '随遇而安', value: 'P' },
      ],
    },
    {
      id: 'ei66',
      text: '你更喜欢：',
      options: [
        { label: '热闹', value: 'E' },
        { label: '清静', value: 'I' },
      ],
    },
    {
      id: 'sn66',
      text: '你更倾向于：',
      options: [
        { label: '相信经验', value: 'S' },
        { label: '相信直觉', value: 'N' },
      ],
    },
    {
      id: 'tf66',
      text: '你认为：',
      options: [
        { label: '理智是光', value: 'T' },
        { label: '情感是火', value: 'F' },
      ],
    },
    {
      id: 'jp66',
      text: '你更喜欢：',
      options: [
        { label: '按部就班', value: 'J' },
        { label: '随机应变', value: 'P' },
      ],
    },
    {
      id: 'ei67',
      text: '你认为自己：',
      options: [
        { label: '容易相处', value: 'E' },
        { label: '深思熟虑', value: 'I' },
      ],
    },
    {
      id: 'sn67',
      text: '你更喜欢：',
      options: [
        { label: '具体的', value: 'S' },
        { label: '宏观的', value: 'N' },
      ],
    },
    {
      id: 'tf67',
      text: '在做决定时：',
      options: [
        { label: '果断', value: 'T' },
        { label: '体贴', value: 'F' },
      ],
    },
    {
      id: 'jp67',
      text: '你更喜欢：',
      options: [
        { label: '有序', value: 'J' },
        { label: '自由', value: 'P' },
      ],
    },
    {
      id: 'ei68',
      text: '你更喜欢：',
      options: [
        { label: '与人共事', value: 'E' },
        { label: '独立工作', value: 'I' },
      ],
    },
    {
      id: 'sn68',
      text: '你更倾向于：',
      options: [
        { label: '关注细节', value: 'S' },
        { label: '关注整体', value: 'N' },
      ],
    },
    {
      id: 'tf68',
      text: '你认为：',
      options: [
        { label: '逻辑是准则', value: 'T' },
        { label: '情感是动力', value: 'F' },
      ],
    },
    {
      id: 'jp68',
      text: '你更喜欢：',
      options: [
        { label: '预先规划', value: 'J' },
        { label: '临场发挥', value: 'P' },
      ],
    },
    {
      id: 'ei69',
      text: '你认为自己：',
      options: [
        { label: '外向', value: 'E' },
        { label: '内向', value: 'I' },
      ],
    },
    {
      id: 'sn69',
      text: '你更喜欢：',
      options: [
        { label: '实际的', value: 'S' },
        { label: '理论的', value: 'N' },
      ],
    },
    {
      id: 'tf69',
      text: '在评价时：',
      options: [
        { label: '公正', value: 'T' },
        { label: '仁慈', value: 'F' },
      ],
    },
    {
      id: 'jp69',
      text: '你更喜欢：',
      options: [
        { label: '有计划', value: 'J' },
        { label: '随性', value: 'P' },
      ],
    },
    {
      id: 'ei70',
      text: '你更喜欢：',
      options: [
        { label: '热闹', value: 'E' },
        { label: '安静', value: 'I' },
      ],
    },
    {
      id: 'sn70',
      text: '你更倾向于：',
      options: [
        { label: '相信事实', value: 'S' },
        { label: '相信直觉', value: 'N' },
      ],
    },
    {
      id: 'tf70',
      text: '你认为：',
      options: [
        { label: '理智胜过情感', value: 'T' },
        { label: '情感胜过理智', value: 'F' },
      ],
    },
    {
      id: 'jp70',
      text: '你更喜欢：',
      options: [
        { label: '确定的', value: 'J' },
        { label: '开放的', value: 'P' },
      ],
    },
    {
      id: 'ei71',
      text: '你更喜欢：',
      options: [
        { label: '主动', value: 'E' },
        { label: '被动', value: 'I' },
      ],
    },
    {
      id: 'sn71',
      text: '你更倾向于：',
      options: [
        { label: '关注细节', value: 'S' },
        { label: '关注大局', value: 'N' },
      ],
    },
    {
      id: 'tf71',
      text: '你认为：',
      options: [
        { label: '逻辑是核心', value: 'T' },
        { label: '情感是核心', value: 'F' },
      ],
    },
    {
      id: 'jp71',
      text: '你更喜欢：',
      options: [
        { label: '有条理', value: 'J' },
        { label: '有弹性', value: 'P' },
      ],
    },
    {
      id: 'ei72',
      text: '你认为自己：',
      options: [
        { label: '外向', value: 'E' },
        { label: '内向', value: 'I' },
      ],
    },
    {
      id: 'sn72',
      text: '你更喜欢：',
      options: [
        { label: '具体的', value: 'S' },
        { label: '抽象的', value: 'N' },
      ],
    },
    {
      id: 'tf72',
      text: '在做决定时：',
      options: [
        { label: '客观', value: 'T' },
        { label: '主观', value: 'F' },
      ],
    },
    {
      id: 'jp72',
      text: '你更喜欢：',
      options: [
        { label: '确定的', value: 'J' },
        { label: '不确定的', value: 'P' },
      ],
    },
    {
      id: 'ei73',
      text: '你更喜欢：',
      options: [
        { label: '广泛的兴趣', value: 'E' },
        { label: '深度的研究', value: 'I' },
      ],
    },
    {
      id: 'sn73',
      text: '你更倾向于：',
      options: [
        { label: '关注现实', value: 'S' },
        { label: '关注理想', value: 'N' },
      ],
    },
    {
      id: 'tf73',
      text: '你认为：',
      options: [
        { label: '逻辑是工具', value: 'T' },
        { label: '情感是纽带', value: 'F' },
      ],
    },
    {
      id: 'jp73',
      text: '你更喜欢：',
      options: [
        { label: '有组织的', value: 'J' },
        { label: '自发的', value: 'P' },
      ],
    },
    {
      id: 'ei74',
      text: '你认为自己：',
      options: [
        { label: '活泼', value: 'E' },
        { label: '文静', value: 'I' },
      ],
    },
    {
      id: 'sn74',
      text: '你更喜欢：',
      options: [
        { label: '实际的', value: 'S' },
        { label: '想象的', value: 'N' },
      ],
    },
    {
      id: 'tf74',
      text: '在评价时：',
      options: [
        { label: '看重对错', value: 'T' },
        { label: '看重感受', value: 'F' },
      ],
    },
    {
      id: 'jp74',
      text: '你更喜欢：',
      options: [
        { label: '有准备', value: 'J' },
        { label: '随遇而安', value: 'P' },
      ],
    },
    {
      id: 'ei75',
      text: '你更喜欢：',
      options: [
        { label: '热闹', value: 'E' },
        { label: '清静', value: 'I' },
      ],
    },
    {
      id: 'sn75',
      text: '你更倾向于：',
      options: [
        { label: '相信经验', value: 'S' },
        { label: '相信直觉', value: 'N' },
      ],
    },
    {
      id: 'tf75',
      text: '你认为：',
      options: [
        { label: '理智是光', value: 'T' },
        { label: '情感是火', value: 'F' },
      ],
    },
    {
      id: 'jp75',
      text: '你更喜欢：',
      options: [
        { label: '按部就班', value: 'J' },
        { label: '随机应变', value: 'P' },
      ],
    },
    {
      id: 'ei76',
      text: '你认为自己：',
      options: [
        { label: '容易相处', value: 'E' },
        { label: '深思熟虑', value: 'I' },
      ],
    },
    {
      id: 'sn76',
      text: '你更喜欢：',
      options: [
        { label: '具体的', value: 'S' },
        { label: '宏观的', value: 'N' },
      ],
    },
    {
      id: 'tf76',
      text: '在做决定时：',
      options: [
        { label: '果断', value: 'T' },
        { label: '体贴', value: 'F' },
      ],
    },
    {
      id: 'jp76',
      text: '你更喜欢：',
      options: [
        { label: '有序', value: 'J' },
        { label: '自由', value: 'P' },
      ],
    },
    {
      id: 'ei77',
      text: '你更喜欢：',
      options: [
        { label: '与人共事', value: 'E' },
        { label: '独立工作', value: 'I' },
      ],
    },
    {
      id: 'sn77',
      text: '你更倾向于：',
      options: [
        { label: '关注细节', value: 'S' },
        { label: '关注整体', value: 'N' },
      ],
    },
    {
      id: 'tf77',
      text: '你认为：',
      options: [
        { label: '逻辑是准则', value: 'T' },
        { label: '情感是动力', value: 'F' },
      ],
    },
    {
      id: 'jp77',
      text: '你更喜欢：',
      options: [
        { label: '预先规划', value: 'J' },
        { label: '临场发挥', value: 'P' },
      ],
    },
    {
      id: 'ei78',
      text: '你认为自己：',
      options: [
        { label: '外向', value: 'E' },
        { label: '内向', value: 'I' },
      ],
    },
    {
      id: 'sn78',
      text: '你更喜欢：',
      options: [
        { label: '实际的', value: 'S' },
        { label: '理论的', value: 'N' },
      ],
    },
    {
      id: 'tf78',
      text: '在评价时：',
      options: [
        { label: '公正', value: 'T' },
        { label: '仁慈', value: 'F' },
      ],
    },
    {
      id: 'jp78',
      text: '你更喜欢：',
      options: [
        { label: '有计划', value: 'J' },
        { label: '随性', value: 'P' },
      ],
    },
    {
      id: 'ei79',
      text: '你更喜欢：',
      options: [
        { label: '热闹', value: 'E' },
        { label: '安静', value: 'I' },
      ],
    },
    {
      id: 'sn79',
      text: '你更倾向于：',
      options: [
        { label: '相信事实', value: 'S' },
        { label: '相信直觉', value: 'N' },
      ],
    },
    {
      id: 'tf79',
      text: '你认为：',
      options: [
        { label: '理智胜过情感', value: 'T' },
        { label: '情感胜过理智', value: 'F' },
      ],
    },
    {
      id: 'jp79',
      text: '你更喜欢：',
      options: [
        { label: '确定的', value: 'J' },
        { label: '开放的', value: 'P' },
      ],
    },
    {
      id: 'ei80',
      text: '你更喜欢：',
      options: [
        { label: '主动', value: 'E' },
        { label: '被动', value: 'I' },
      ],
    },
    {
      id: 'sn80',
      text: '你更倾向于：',
      options: [
        { label: '关注细节', value: 'S' },
        { label: '关注大局', value: 'N' },
      ],
    },
    {
      id: 'tf80',
      text: '你认为：',
      options: [
        { label: '逻辑是核心', value: 'T' },
        { label: '情感是核心', value: 'F' },
      ],
    },
    {
      id: 'jp80',
      text: '你更喜欢：',
      options: [
        { label: '有条理', value: 'J' },
        { label: '有弹性', value: 'P' },
      ],
    },
    {
      id: 'ei81',
      text: '你认为自己：',
      options: [
        { label: '外向', value: 'E' },
        { label: '内向', value: 'I' },
      ],
    },
    {
      id: 'sn81',
      text: '你更喜欢：',
      options: [
        { label: '具体的', value: 'S' },
        { label: '抽象的', value: 'N' },
      ],
    },
    {
      id: 'tf81',
      text: '在做决定时：',
      options: [
        { label: '客观', value: 'T' },
        { label: '主观', value: 'F' },
      ],
    },
    {
      id: 'jp81',
      text: '你更喜欢：',
      options: [
        { label: '确定的', value: 'J' },
        { label: '不确定的', value: 'P' },
      ],
    },
    {
      id: 'ei82',
      text: '你更喜欢：',
      options: [
        { label: '广泛的兴趣', value: 'E' },
        { label: '深度的研究', value: 'I' },
      ],
    },
    {
      id: 'sn82',
      text: '你更倾向于：',
      options: [
        { label: '关注现实', value: 'S' },
        { label: '关注理想', value: 'N' },
      ],
    },
    {
      id: 'tf82',
      text: '你认为：',
      options: [
        { label: '逻辑是工具', value: 'T' },
        { label: '情感是纽带', value: 'F' },
      ],
    },
    {
      id: 'jp82',
      text: '你更喜欢：',
      options: [
        { label: '有组织的', value: 'J' },
        { label: '自发的', value: 'P' },
      ],
    },
    {
      id: 'ei83',
      text: '你认为自己：',
      options: [
        { label: '活泼', value: 'E' },
        { label: '文静', value: 'I' },
      ],
    },
    {
      id: 'sn83',
      text: '你更喜欢：',
      options: [
        { label: '实际的', value: 'S' },
        { label: '想象的', value: 'N' },
      ],
    },
    {
      id: 'tf83',
      text: '在评价时：',
      options: [
        { label: '看重对错', value: 'T' },
        { label: '看重感受', value: 'F' },
      ],
    },
    {
      id: 'jp83',
      text: '你更喜欢：',
      options: [
        { label: '有准备', value: 'J' },
        { label: '随遇而安', value: 'P' },
      ],
    },
    {
      id: 'ei84',
      text: '你更喜欢：',
      options: [
        { label: '热闹', value: 'E' },
        { label: '清静', value: 'I' },
      ],
    },
    {
      id: 'sn84',
      text: '你更倾向于：',
      options: [
        { label: '相信经验', value: 'S' },
        { label: '相信直觉', value: 'N' },
      ],
    },
    {
      id: 'tf84',
      text: '你认为：',
      options: [
        { label: '理智是光', value: 'T' },
        { label: '情感是火', value: 'F' },
      ],
    },
    {
      id: 'jp84',
      text: '你更喜欢：',
      options: [
        { label: '按部就班', value: 'J' },
        { label: '随机应变', value: 'P' },
      ],
    },
    {
      id: 'ei85',
      text: '你认为自己：',
      options: [
        { label: '容易相处', value: 'E' },
        { label: '深思熟虑', value: 'I' },
      ],
    },
    {
      id: 'sn85',
      text: '你更喜欢：',
      options: [
        { label: '具体的', value: 'S' },
        { label: '宏观的', value: 'N' },
      ],
    },
    {
      id: 'tf85',
      text: '在做决定时：',
      options: [
        { label: '果断', value: 'T' },
        { label: '体贴', value: 'F' },
      ],
    },
    {
      id: 'jp85',
      text: '你更喜欢：',
      options: [
        { label: '有序', value: 'J' },
        { label: '自由', value: 'P' },
      ],
    },
    {
      id: 'ei86',
      text: '你更喜欢：',
      options: [
        { label: '与人共事', value: 'E' },
        { label: '独立工作', value: 'I' },
      ],
    },
    {
      id: 'sn86',
      text: '你更倾向于：',
      options: [
        { label: '关注细节', value: 'S' },
        { label: '关注整体', value: 'N' },
      ],
    },
    {
      id: 'tf86',
      text: '你认为：',
      options: [
        { label: '逻辑是准则', value: 'T' },
        { label: '情感是动力', value: 'F' },
      ],
    },
    {
      id: 'jp86',
      text: '你更喜欢：',
      options: [
        { label: '预先规划', value: 'J' },
        { label: '临场发挥', value: 'P' },
      ],
    },
    {
      id: 'ei87',
      text: '你认为自己：',
      options: [
        { label: '外向', value: 'E' },
        { label: '内向', value: 'I' },
      ],
    },
    {
      id: 'sn87',
      text: '你更喜欢：',
      options: [
        { label: '实际的', value: 'S' },
        { label: '理论的', value: 'N' },
      ],
    },
    {
      id: 'tf87',
      text: '在评价时：',
      options: [
        { label: '公正', value: 'T' },
        { label: '仁慈', value: 'F' },
      ],
    },
    {
      id: 'jp87',
      text: '你更喜欢：',
      options: [
        { label: '有计划', value: 'J' },
        { label: '随性', value: 'P' },
      ],
    },
    {
      id: 'ei88',
      text: '你更喜欢：',
      options: [
        { label: '热闹', value: 'E' },
        { label: '安静', value: 'I' },
      ],
    },
    {
      id: 'sn88',
      text: '你更倾向于：',
      options: [
        { label: '相信事实', value: 'S' },
        { label: '相信直觉', value: 'N' },
      ],
    },
    {
      id: 'tf88',
      text: '你认为：',
      options: [
        { label: '理智胜过情感', value: 'T' },
        { label: '情感胜过理智', value: 'F' },
      ],
    },
    {
      id: 'jp88',
      text: '你更喜欢：',
      options: [
        { label: '确定的', value: 'J' },
        { label: '开放的', value: 'P' },
      ],
    },
    {
      id: 'ei89',
      text: '你更喜欢：',
      options: [
        { label: '主动', value: 'E' },
        { label: '被动', value: 'I' },
      ],
    },
    {
      id: 'sn89',
      text: '你更倾向于：',
      options: [
        { label: '关注细节', value: 'S' },
        { label: '关注大局', value: 'N' },
      ],
    },
    {
      id: 'tf89',
      text: '你认为：',
      options: [
        { label: '逻辑是核心', value: 'T' },
        { label: '情感是核心', value: 'F' },
      ],
    },
    {
      id: 'jp89',
      text: '你更喜欢：',
      options: [
        { label: '有条理', value: 'J' },
        { label: '有弹性', value: 'P' },
      ],
    },
    {
      id: 'ei90',
      text: '你认为自己：',
      options: [
        { label: '外向', value: 'E' },
        { label: '内向', value: 'I' },
      ],
    },
    {
      id: 'sn90',
      text: '你更喜欢：',
      options: [
        { label: '具体的', value: 'S' },
        { label: '抽象的', value: 'N' },
      ],
    },
    {
      id: 'tf90',
      text: '在做决定时：',
      options: [
        { label: '客观', value: 'T' },
        { label: '主观', value: 'F' },
      ],
    },
    {
      id: 'jp90',
      text: '你更喜欢：',
      options: [
        { label: '确定的', value: 'J' },
        { label: '不确定的', value: 'P' },
      ],
    },
    {
      id: 'ei91',
      text: '你更喜欢：',
      options: [
        { label: '广泛的兴趣', value: 'E' },
        { label: '深度的研究', value: 'I' },
      ],
    },
    {
      id: 'sn91',
      text: '你更倾向于：',
      options: [
        { label: '关注现实', value: 'S' },
        { label: '关注理想', value: 'N' },
      ],
    },
    {
      id: 'tf91',
      text: '你认为：',
      options: [
        { label: '逻辑是工具', value: 'T' },
        { label: '情感是纽带', value: 'F' },
      ],
    },
    {
      id: 'jp91',
      text: '你更喜欢：',
      options: [
        { label: '有组织的', value: 'J' },
        { label: '自发的', value: 'P' },
      ],
    },
    {
      id: 'ei92',
      text: '你认为自己：',
      options: [
        { label: '活泼', value: 'E' },
        { label: '文静', value: 'I' },
      ],
    },
    {
      id: 'sn92',
      text: '你更喜欢：',
      options: [
        { label: '实际的', value: 'S' },
        { label: '想象的', value: 'N' },
      ],
    },
    {
      id: 'tf92',
      text: '在评价时：',
      options: [
        { label: '看重对错', value: 'T' },
        { label: '看重感受', value: 'F' },
      ],
    },
    {
      id: 'jp92',
      text: '你更喜欢：',
      options: [
        { label: '有准备', value: 'J' },
        { label: '随遇而安', value: 'P' },
      ],
    },
    { id: 'ei93', text: '你更喜欢：', options: [{ label: '热闹', value: 'E' }, { label: '清静', value: 'I' }] },
    { id: 'ei51', text: '你更喜欢：', options: [{ label: '表达想法', value: 'E' }, { label: '保持沉默', value: 'I' }] },
    { id: 'sn51', text: '你更喜欢：', options: [{ label: '现实主义', value: 'S' }, { label: '理想主义', value: 'N' }] },
    { id: 'tf51', text: '你认为自己更：', options: [{ label: '理智', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp51', text: '你更喜欢：', options: [{ label: '有计划', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei52', text: '你更喜欢：', options: [{ label: '社交', value: 'E' }, { label: '独处', value: 'I' }] },
    { id: 'sn52', text: '你更喜欢：', options: [{ label: '事实', value: 'S' }, { label: '直觉', value: 'N' }] },
    { id: 'tf52', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '仁慈', value: 'F' }] },
    { id: 'jp52', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '灵活', value: 'P' }] },
    { id: 'ei53', text: '你更喜欢：', options: [{ label: '外向', value: 'E' }, { label: '内向', value: 'I' }] },
    { id: 'sn53', text: '你更喜欢：', options: [{ label: '具体', value: 'S' }, { label: '抽象', value: 'N' }] },
    { id: 'tf53', text: '你认为自己更：', options: [{ label: '务实', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp53', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei54', text: '你更喜欢：', options: [{ label: '热闹', value: 'E' }, { label: '安静', value: 'I' }] },
    { id: 'sn54', text: '你更喜欢：', options: [{ label: '熟悉', value: 'S' }, { label: '新奇', value: 'N' }] },
    { id: 'tf54', text: '你认为自己更：', options: [{ label: '客观', value: 'T' }, { label: '主观', value: 'F' }] },
    { id: 'jp54', text: '你更喜欢：', options: [{ label: '按计划', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei55', text: '你更喜欢：', options: [{ label: '广交', value: 'E' }, { label: '深交', value: 'I' }] },
    { id: 'sn55', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '大局', value: 'N' }] },
    { id: 'tf55', text: '你认为自己更：', options: [{ label: '理性', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp55', text: '你更喜欢：', options: [{ label: '确定', value: 'J' }, { label: '可能', value: 'P' }] },
    { id: 'ei56', text: '你更喜欢：', options: [{ label: '分享', value: 'E' }, { label: '独自', value: 'I' }] },
    { id: 'sn56', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '构思', value: 'N' }] },
    { id: 'tf56', text: '你认为自己更：', options: [{ label: '冷峻', value: 'T' }, { label: '热情', value: 'F' }] },
    { id: 'jp56', text: '你更喜欢：', options: [{ label: '有准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei57', text: '你更喜欢：', options: [{ label: '团队', value: 'E' }, { label: '个人', value: 'I' }] },
    { id: 'sn57', text: '你更喜欢：', options: [{ label: '常识', value: 'S' }, { label: '灵感', value: 'N' }] },
    { id: 'tf57', text: '你认为自己更：', options: [{ label: '讲理', value: 'T' }, { label: '讲情', value: 'F' }] },
    { id: 'jp57', text: '你更喜欢：', options: [{ label: '有组织', value: 'J' }, { label: '自发', value: 'P' }] },
    { id: 'ei58', text: '你更喜欢：', options: [{ label: '社交媒体', value: 'E' }, { label: '私人日记', value: 'I' }] },
    { id: 'sn58', text: '你更喜欢：', options: [{ label: '现成', value: 'S' }, { label: '全新', value: 'N' }] },
    { id: 'tf58', text: '你认为自己更：', options: [{ label: '分析', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp58', text: '你更喜欢：', options: [{ label: '有结构', value: 'J' }, { label: '无拘束', value: 'P' }] },
    { id: 'ei59', text: '你更喜欢：', options: [{ label: '演讲', value: 'E' }, { label: '书面', value: 'I' }] },
    { id: 'sn59', text: '你更喜欢：', options: [{ label: '例子', value: 'S' }, { label: '原理', value: 'N' }] },
    { id: 'tf59', text: '你认为自己更：', options: [{ label: '批判', value: 'T' }, { label: '包容', value: 'F' }] },
    { id: 'jp59', text: '你更喜欢：', options: [{ label: '预见', value: 'J' }, { label: '随遇而安', value: 'P' }] },
    { id: 'ei60', text: '你更喜欢：', options: [{ label: '大城市', value: 'E' }, { label: '小城镇', value: 'I' }] },
    { id: 'sn60', text: '你更喜欢：', options: [{ label: '实在', value: 'S' }, { label: '虚无', value: 'N' }] },
    { id: 'tf60', text: '你认为自己更：', options: [{ label: '原则', value: 'T' }, { label: '灵活', value: 'F' }] },
    { id: 'jp60', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei61', text: '你更喜欢：', options: [{ label: '分享快乐', value: 'E' }, { label: '独自品味', value: 'I' }] },
    { id: 'sn61', text: '你更喜欢：', options: [{ label: '步骤', value: 'S' }, { label: '方向', value: 'N' }] },
    { id: 'tf61', text: '你认为自己更：', options: [{ label: '严密', value: 'T' }, { label: '丰富', value: 'F' }] },
    { id: 'jp61', text: '你更喜欢：', options: [{ label: '计划', value: 'J' }, { label: '无计划', value: 'P' }] },
    { id: 'ei62', text: '你更喜欢：', options: [{ label: '讨论', value: 'E' }, { label: '思考', value: 'I' }] },
    { id: 'sn62', text: '你更喜欢：', options: [{ label: '现实', value: 'S' }, { label: '梦想', value: 'N' }] },
    { id: 'tf62', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp62', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei63', text: '你更喜欢：', options: [{ label: '注目', value: 'E' }, { label: '低调', value: 'I' }] },
    { id: 'sn63', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '架构', value: 'N' }] },
    { id: 'tf63', text: '你认为自己更：', options: [{ label: '清晰', value: 'T' }, { label: '柔软', value: 'F' }] },
    { id: 'jp63', text: '你更喜欢：', options: [{ label: '准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei64', text: '你更喜欢：', options: [{ label: '快节奏', value: 'E' }, { label: '慢节奏', value: 'I' }] },
    { id: 'sn64', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '思想', value: 'N' }] },
    { id: 'tf64', text: '你认为自己更：', options: [{ label: '理智', value: 'T' }, { label: '情感', value: 'F' }] },
    { id: 'jp64', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei65', text: '你更喜欢：', options: [{ label: '外向', value: 'E' }, { label: '内向', value: 'I' }] },
    { id: 'sn65', text: '你更喜欢：', options: [{ label: '事实', value: 'S' }, { label: '直觉', value: 'N' }] },
    { id: 'tf65', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '仁慈', value: 'F' }] },
    { id: 'jp65', text: '你更喜欢：', options: [{ label: '计划', value: 'J' }, { label: '灵活', value: 'P' }] },
    { id: 'ei66', text: '你更喜欢：', options: [{ label: '社交', value: 'E' }, { label: '独处', value: 'I' }] },
    { id: 'sn66', text: '你更喜欢：', options: [{ label: '现实', value: 'S' }, { label: '理想', value: 'N' }] },
    { id: 'tf66', text: '你认为自己更：', options: [{ label: '坚定', value: 'T' }, { label: '温柔', value: 'F' }] },
    { id: 'jp66', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '顺其自然', value: 'P' }] },
    { id: 'ei67', text: '你更喜欢：', options: [{ label: '表达', value: 'E' }, { label: '倾听', value: 'I' }] },
    { id: 'sn67', text: '你更喜欢：', options: [{ label: '具体', value: 'S' }, { label: '抽象', value: 'N' }] },
    { id: 'tf67', text: '你认为自己更：', options: [{ label: '务实', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp67', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei68', text: '你更喜欢：', options: [{ label: '热闹', value: 'E' }, { label: '安静', value: 'I' }] },
    { id: 'sn68', text: '你更喜欢：', options: [{ label: '熟悉', value: 'S' }, { label: '新奇', value: 'N' }] },
    { id: 'tf68', text: '你认为自己更：', options: [{ label: '客观', value: 'T' }, { label: '主观', value: 'F' }] },
    { id: 'jp68', text: '你更喜欢：', options: [{ label: '按计划', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei69', text: '你更喜欢：', options: [{ label: '广交', value: 'E' }, { label: '深交', value: 'I' }] },
    { id: 'sn69', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '大局', value: 'N' }] },
    { id: 'tf69', text: '你认为自己更：', options: [{ label: '理性', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp69', text: '你更喜欢：', options: [{ label: '确定', value: 'J' }, { label: '可能', value: 'P' }] },
    { id: 'ei70', text: '你更喜欢：', options: [{ label: '分享', value: 'E' }, { label: '独自', value: 'I' }] },
    { id: 'sn70', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '构思', value: 'N' }] },
    { id: 'tf70', text: '你认为自己更：', options: [{ label: '冷峻', value: 'T' }, { label: '热情', value: 'F' }] },
    { id: 'jp70', text: '你更喜欢：', options: [{ label: '有准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei71', text: '你更喜欢：', options: [{ label: '团队', value: 'E' }, { label: '个人', value: 'I' }] },
    { id: 'sn71', text: '你更喜欢：', options: [{ label: '常识', value: 'S' }, { label: '灵感', value: 'N' }] },
    { id: 'tf71', text: '你认为自己更：', options: [{ label: '讲理', value: 'T' }, { label: '讲情', value: 'F' }] },
    { id: 'jp71', text: '你更喜欢：', options: [{ label: '有组织', value: 'J' }, { label: '自发', value: 'P' }] },
    { id: 'ei72', text: '你更喜欢：', options: [{ label: '社交媒体', value: 'E' }, { label: '私人日记', value: 'I' }] },
    { id: 'sn72', text: '你更喜欢：', options: [{ label: '现成', value: 'S' }, { label: '全新', value: 'N' }] },
    { id: 'tf72', text: '你认为自己更：', options: [{ label: '分析', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp72', text: '你更喜欢：', options: [{ label: '有结构', value: 'J' }, { label: '无拘束', value: 'P' }] },
    { id: 'ei73', text: '你更喜欢：', options: [{ label: '演讲', value: 'E' }, { label: '书面', value: 'I' }] },
    { id: 'sn73', text: '你更喜欢：', options: [{ label: '例子', value: 'S' }, { label: '原理', value: 'N' }] },
    { id: 'tf73', text: '你认为自己更：', options: [{ label: '批判', value: 'T' }, { label: '包容', value: 'F' }] },
    { id: 'jp73', text: '你更喜欢：', options: [{ label: '预见', value: 'J' }, { label: '随遇而安', value: 'P' }] },
    { id: 'ei74', text: '你更喜欢：', options: [{ label: '大城市', value: 'E' }, { label: '小城镇', value: 'I' }] },
    { id: 'sn74', text: '你更喜欢：', options: [{ label: '实在', value: 'S' }, { label: '虚无', value: 'N' }] },
    { id: 'tf74', text: '你认为自己更：', options: [{ label: '原则', value: 'T' }, { label: '灵活', value: 'F' }] },
    { id: 'jp74', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei75', text: '你更喜欢：', options: [{ label: '分享快乐', value: 'E' }, { label: '独自品味', value: 'I' }] },
    { id: 'sn75', text: '你更喜欢：', options: [{ label: '步骤', value: 'S' }, { label: '方向', value: 'N' }] },
    { id: 'tf75', text: '你认为自己更：', options: [{ label: '严密', value: 'T' }, { label: '丰富', value: 'F' }] },
    { id: 'jp75', text: '你更喜欢：', options: [{ label: '计划', value: 'J' }, { label: '无计划', value: 'P' }] },
    { id: 'ei76', text: '你更喜欢：', options: [{ label: '讨论', value: 'E' }, { label: '思考', value: 'I' }] },
    { id: 'sn76', text: '你更喜欢：', options: [{ label: '现实', value: 'S' }, { label: '梦想', value: 'N' }] },
    { id: 'tf76', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp76', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei77', text: '你更喜欢：', options: [{ label: '注目', value: 'E' }, { label: '低调', value: 'I' }] },
    { id: 'sn77', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '架构', value: 'N' }] },
    { id: 'tf77', text: '你认为自己更：', options: [{ label: '清晰', value: 'T' }, { label: '柔软', value: 'F' }] },
    { id: 'jp77', text: '你更喜欢：', options: [{ label: '准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei78', text: '你更喜欢：', options: [{ label: '快节奏', value: 'E' }, { label: '慢节奏', value: 'I' }] },
    { id: 'sn78', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '思想', value: 'N' }] },
    { id: 'tf78', text: '你认为自己更：', options: [{ label: '理智', value: 'T' }, { label: '情感', value: 'F' }] },
    { id: 'jp78', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei79', text: '你更喜欢：', options: [{ label: '外向', value: 'E' }, { label: '内向', value: 'I' }] },
    { id: 'sn79', text: '你更喜欢：', options: [{ label: '事实', value: 'S' }, { label: '直觉', value: 'N' }] },
    { id: 'tf79', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '仁慈', value: 'F' }] },
    { id: 'jp79', text: '你更喜欢：', options: [{ label: '计划', value: 'J' }, { label: '灵活', value: 'P' }] },
    { id: 'ei80', text: '你更喜欢：', options: [{ label: '社交', value: 'E' }, { label: '独处', value: 'I' }] },
    { id: 'sn80', text: '你更喜欢：', options: [{ label: '现实', value: 'S' }, { label: '理想', value: 'N' }] },
    { id: 'tf80', text: '你认为自己更：', options: [{ label: '坚定', value: 'T' }, { label: '温柔', value: 'F' }] },
    { id: 'jp80', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '顺其自然', value: 'P' }] },
    { id: 'ei81', text: '你更喜欢：', options: [{ label: '表达', value: 'E' }, { label: '倾听', value: 'I' }] },
    { id: 'sn81', text: '你更喜欢：', options: [{ label: '具体', value: 'S' }, { label: '抽象', value: 'N' }] },
    { id: 'tf81', text: '你认为自己更：', options: [{ label: '务实', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp81', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei82', text: '你更喜欢：', options: [{ label: '热闹', value: 'E' }, { label: '安静', value: 'I' }] },
    { id: 'sn82', text: '你更喜欢：', options: [{ label: '熟悉', value: 'S' }, { label: '新奇', value: 'N' }] },
    { id: 'tf82', text: '你认为自己更：', options: [{ label: '客观', value: 'T' }, { label: '主观', value: 'F' }] },
    { id: 'jp82', text: '你更喜欢：', options: [{ label: '按计划', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei83', text: '你更喜欢：', options: [{ label: '广交', value: 'E' }, { label: '深交', value: 'I' }] },
    { id: 'sn83', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '大局', value: 'N' }] },
    { id: 'tf83', text: '你认为自己更：', options: [{ label: '理性', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp83', text: '你更喜欢：', options: [{ label: '确定', value: 'J' }, { label: '可能', value: 'P' }] },
    { id: 'ei84', text: '你更喜欢：', options: [{ label: '分享', value: 'E' }, { label: '独自', value: 'I' }] },
    { id: 'sn84', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '构思', value: 'N' }] },
    { id: 'tf84', text: '你认为自己更：', options: [{ label: '冷峻', value: 'T' }, { label: '热情', value: 'F' }] },
    { id: 'jp84', text: '你更喜欢：', options: [{ label: '有准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei85', text: '你更喜欢：', options: [{ label: '团队', value: 'E' }, { label: '个人', value: 'I' }] },
    { id: 'sn85', text: '你更喜欢：', options: [{ label: '常识', value: 'S' }, { label: '灵感', value: 'N' }] },
    { id: 'tf85', text: '你认为自己更：', options: [{ label: '讲理', value: 'T' }, { label: '讲情', value: 'F' }] },
    { id: 'jp85', text: '你更喜欢：', options: [{ label: '有组织', value: 'J' }, { label: '自发', value: 'P' }] },
    { id: 'ei86', text: '你更喜欢：', options: [{ label: '社交媒体', value: 'E' }, { label: '私人日记', value: 'I' }] },
    { id: 'sn86', text: '你更喜欢：', options: [{ label: '现成', value: 'S' }, { label: '全新', value: 'N' }] },
    { id: 'tf86', text: '你认为自己更：', options: [{ label: '分析', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp86', text: '你更喜欢：', options: [{ label: '有结构', value: 'J' }, { label: '无拘束', value: 'P' }] },
    { id: 'ei87', text: '你更喜欢：', options: [{ label: '演讲', value: 'E' }, { label: '书面', value: 'I' }] },
    { id: 'sn87', text: '你更喜欢：', options: [{ label: '例子', value: 'S' }, { label: '原理', value: 'N' }] },
    { id: 'tf87', text: '你认为自己更：', options: [{ label: '批判', value: 'T' }, { label: '包容', value: 'F' }] },
    { id: 'jp87', text: '你更喜欢：', options: [{ label: '预见', value: 'J' }, { label: '随遇而安', value: 'P' }] },
    { id: 'ei88', text: '你更喜欢：', options: [{ label: '大城市', value: 'E' }, { label: '小城镇', value: 'I' }] },
    { id: 'sn88', text: '你更喜欢：', options: [{ label: '实在', value: 'S' }, { label: '虚无', value: 'N' }] },
    { id: 'tf88', text: '你认为自己更：', options: [{ label: '原则', value: 'T' }, { label: '灵活', value: 'F' }] },
    { id: 'jp88', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei89', text: '你更喜欢：', options: [{ label: '分享快乐', value: 'E' }, { label: '独自品味', value: 'I' }] },
    { id: 'sn89', text: '你更喜欢：', options: [{ label: '步骤', value: 'S' }, { label: '方向', value: 'N' }] },
    { id: 'tf89', text: '你认为自己更：', options: [{ label: '严密', value: 'T' }, { label: '丰富', value: 'F' }] },
    { id: 'jp89', text: '你更喜欢：', options: [{ label: '计划', value: 'J' }, { label: '无计划', value: 'P' }] },
    { id: 'ei90', text: '你更喜欢：', options: [{ label: '讨论', value: 'E' }, { label: '思考', value: 'I' }] },
    { id: 'sn90', text: '你更喜欢：', options: [{ label: '现实', value: 'S' }, { label: '梦想', value: 'N' }] },
    { id: 'tf90', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp90', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei91', text: '你更喜欢：', options: [{ label: '注目', value: 'E' }, { label: '低调', value: 'I' }] },
    { id: 'sn91', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '架构', value: 'N' }] },
    { id: 'tf91', text: '你认为自己更：', options: [{ label: '清晰', value: 'T' }, { label: '柔软', value: 'F' }] },
    { id: 'jp91', text: '你更喜欢：', options: [{ label: '准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei92', text: '你更喜欢：', options: [{ label: '快节奏', value: 'E' }, { label: '慢节奏', value: 'I' }] },
    { id: 'sn92', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '思想', value: 'N' }] },
    { id: 'tf92', text: '你认为自己更：', options: [{ label: '理智', value: 'T' }, { label: '情感', value: 'F' }] },
    { id: 'jp92', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei93', text: '你更喜欢：', options: [{ label: '外向', value: 'E' }, { label: '内向', value: 'I' }] },
    { id: 'sn93', text: '你更喜欢：', options: [{ label: '事实', value: 'S' }, { label: '直觉', value: 'N' }] },
    { id: 'tf93', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '仁慈', value: 'F' }] },
    { id: 'jp93', text: '你更喜欢：', options: [{ label: '计划', value: 'J' }, { label: '灵活', value: 'P' }] },
    { id: 'ei94', text: '你更喜欢：', options: [{ label: '社交', value: 'E' }, { label: '独处', value: 'I' }] },
    { id: 'sn94', text: '你更喜欢：', options: [{ label: '现实', value: 'S' }, { label: '理想', value: 'N' }] },
    { id: 'tf94', text: '你认为自己更：', options: [{ label: '坚定', value: 'T' }, { label: '温柔', value: 'F' }] },
    { id: 'jp94', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '顺其自然', value: 'P' }] },
    { id: 'ei95', text: '你更喜欢：', options: [{ label: '表达', value: 'E' }, { label: '倾听', value: 'I' }] },
    { id: 'sn95', text: '你更喜欢：', options: [{ label: '具体', value: 'S' }, { label: '抽象', value: 'N' }] },
    { id: 'tf95', text: '你认为自己更：', options: [{ label: '务实', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp95', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei96', text: '你更喜欢：', options: [{ label: '热闹', value: 'E' }, { label: '安静', value: 'I' }] },
    { id: 'sn96', text: '你更喜欢：', options: [{ label: '熟悉', value: 'S' }, { label: '新奇', value: 'N' }] },
    { id: 'tf96', text: '你认为自己更：', options: [{ label: '客观', value: 'T' }, { label: '主观', value: 'F' }] },
    { id: 'jp96', text: '你更喜欢：', options: [{ label: '按计划', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei97', text: '你更喜欢：', options: [{ label: '广交', value: 'E' }, { label: '深交', value: 'I' }] },
    { id: 'sn97', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '大局', value: 'N' }] },
    { id: 'tf97', text: '你认为自己更：', options: [{ label: '理性', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp97', text: '你更喜欢：', options: [{ label: '确定', value: 'J' }, { label: '可能', value: 'P' }] },
    { id: 'ei98', text: '你更喜欢：', options: [{ label: '分享', value: 'E' }, { label: '独自', value: 'I' }] },
    { id: 'sn98', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '构思', value: 'N' }] },
    { id: 'tf98', text: '你认为自己更：', options: [{ label: '冷峻', value: 'T' }, { label: '热情', value: 'F' }] },
    { id: 'jp98', text: '你更喜欢：', options: [{ label: '有准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei99', text: '你更喜欢：', options: [{ label: '团队', value: 'E' }, { label: '个人', value: 'I' }] },
    { id: 'sn99', text: '你更喜欢：', options: [{ label: '常识', value: 'S' }, { label: '灵感', value: 'N' }] },
    { id: 'tf99', text: '你认为自己更：', options: [{ label: '讲理', value: 'T' }, { label: '讲情', value: 'F' }] },
    { id: 'jp99', text: '你更喜欢：', options: [{ label: '有组织', value: 'J' }, { label: '自发', value: 'P' }] },
    { id: 'ei100', text: '你更喜欢：', options: [{ label: '社交媒体', value: 'E' }, { label: '私人日记', value: 'I' }] },
    { id: 'sn100', text: '你更喜欢：', options: [{ label: '现成', value: 'S' }, { label: '全新', value: 'N' }] },
    { id: 'tf100', text: '你认为自己更：', options: [{ label: '分析', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp100', text: '你更喜欢：', options: [{ label: '有结构', value: 'J' }, { label: '无拘束', value: 'P' }] },
    { id: 'ei101', text: '你更喜欢：', options: [{ label: '热闹', value: 'E' }, { label: '清静', value: 'I' }] },
    { id: 'sn101', text: '你更喜欢：', options: [{ label: '现实', value: 'S' }, { label: '梦想', value: 'N' }] },
    { id: 'tf101', text: '你认为自己更：', options: [{ label: '理智', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp101', text: '你更喜欢：', options: [{ label: '有计划', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei102', text: '你更喜欢：', options: [{ label: '外向', value: 'E' }, { label: '内向', value: 'I' }] },
    { id: 'sn102', text: '你更喜欢：', options: [{ label: '事实', value: 'S' }, { label: '直觉', value: 'N' }] },
    { id: 'tf102', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '仁慈', value: 'F' }] },
    { id: 'jp102', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '灵活', value: 'P' }] },
    { id: 'ei103', text: '你更喜欢：', options: [{ label: '社交', value: 'E' }, { label: '独处', value: 'I' }] },
    { id: 'sn103', text: '你更喜欢：', options: [{ label: '具体', value: 'S' }, { label: '抽象', value: 'N' }] },
    { id: 'tf103', text: '你认为自己更：', options: [{ label: '务实', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp103', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei104', text: '你更喜欢：', options: [{ label: '分享', value: 'E' }, { label: '独自', value: 'I' }] },
    { id: 'sn104', text: '你更喜欢：', options: [{ label: '熟悉', value: 'S' }, { label: '新奇', value: 'N' }] },
    { id: 'tf104', text: '你认为自己更：', options: [{ label: '客观', value: 'T' }, { label: '主观', value: 'F' }] },
    { id: 'jp104', text: '你更喜欢：', options: [{ label: '按计划', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei105', text: '你更喜欢：', options: [{ label: '广交', value: 'E' }, { label: '深交', value: 'I' }] },
    { id: 'sn105', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '大局', value: 'N' }] },
    { id: 'tf105', text: '你认为自己更：', options: [{ label: '理性', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp105', text: '你更喜欢：', options: [{ label: '确定', value: 'J' }, { label: '可能', value: 'P' }] },
    { id: 'ei106', text: '你更喜欢：', options: [{ label: '讨论', value: 'E' }, { label: '思考', value: 'I' }] },
    { id: 'sn106', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '构思', value: 'N' }] },
    { id: 'tf106', text: '你认为自己更：', options: [{ label: '冷峻', value: 'T' }, { label: '热情', value: 'F' }] },
    { id: 'jp106', text: '你更喜欢：', options: [{ label: '有准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei107', text: '你更喜欢：', options: [{ label: '团队', value: 'E' }, { label: '个人', value: 'I' }] },
    { id: 'sn107', text: '你更喜欢：', options: [{ label: '常识', value: 'S' }, { label: '灵感', value: 'N' }] },
    { id: 'tf107', text: '你认为自己更：', options: [{ label: '讲理', value: 'T' }, { label: '讲情', value: 'F' }] },
    { id: 'jp107', text: '你更喜欢：', options: [{ label: '有组织', value: 'J' }, { label: '自发', value: 'P' }] },
    { id: 'ei108', text: '你更喜欢：', options: [{ label: '社交媒体', value: 'E' }, { label: '私人日记', value: 'I' }] },
    { id: 'sn108', text: '你更喜欢：', options: [{ label: '现成', value: 'S' }, { label: '全新', value: 'N' }] },
    { id: 'tf108', text: '你认为自己更：', options: [{ label: '分析', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp108', text: '你更喜欢：', options: [{ label: '有结构', value: 'J' }, { label: '无拘束', value: 'P' }] },
    { id: 'ei109', text: '你更喜欢：', options: [{ label: '演讲', value: 'E' }, { label: '书面', value: 'I' }] },
    { id: 'sn109', text: '你更喜欢：', options: [{ label: '例子', value: 'S' }, { label: '原理', value: 'N' }] },
    { id: 'tf109', text: '你认为自己更：', options: [{ label: '批判', value: 'T' }, { label: '包容', value: 'F' }] },
    { id: 'jp109', text: '你更喜欢：', options: [{ label: '预见', value: 'J' }, { label: '随遇而安', value: 'P' }] },
    { id: 'ei110', text: '你更喜欢：', options: [{ label: '大城市', value: 'E' }, { label: '小城镇', value: 'I' }] },
    { id: 'sn110', text: '你更喜欢：', options: [{ label: '实在', value: 'S' }, { label: '虚无', value: 'N' }] },
    { id: 'tf110', text: '你认为自己更：', options: [{ label: '原则', value: 'T' }, { label: '灵活', value: 'F' }] },
    { id: 'jp110', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei111', text: '你更喜欢：', options: [{ label: '分享快乐', value: 'E' }, { label: '独自品味', value: 'I' }] },
    { id: 'sn111', text: '你更喜欢：', options: [{ label: '步骤', value: 'S' }, { label: '方向', value: 'N' }] },
    { id: 'tf111', text: '你认为自己更：', options: [{ label: '严密', value: 'T' }, { label: '丰富', value: 'F' }] },
    { id: 'jp111', text: '你更喜欢：', options: [{ label: '计划', value: 'J' }, { label: '无计划', value: 'P' }] },
    { id: 'ei112', text: '你更喜欢：', options: [{ label: '讨论', value: 'E' }, { label: '思考', value: 'I' }] },
    { id: 'sn112', text: '你更喜欢：', options: [{ label: '现实', value: 'S' }, { label: '梦想', value: 'N' }] },
    { id: 'tf112', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp112', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei113', text: '你更喜欢：', options: [{ label: '注目', value: 'E' }, { label: '低调', value: 'I' }] },
    { id: 'sn113', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '架构', value: 'N' }] },
    { id: 'tf113', text: '你认为自己更：', options: [{ label: '清晰', value: 'T' }, { label: '柔软', value: 'F' }] },
    { id: 'jp113', text: '你更喜欢：', options: [{ label: '准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei114', text: '你更喜欢：', options: [{ label: '快节奏', value: 'E' }, { label: '慢节奏', value: 'I' }] },
    { id: 'sn114', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '思想', value: 'N' }] },
    { id: 'tf114', text: '你认为自己更：', options: [{ label: '理智', value: 'T' }, { label: '情感', value: 'F' }] },
    { id: 'jp114', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei115', text: '你更喜欢：', options: [{ label: '外向', value: 'E' }, { label: '内向', value: 'I' }] },
    { id: 'sn115', text: '你更喜欢：', options: [{ label: '事实', value: 'S' }, { label: '直觉', value: 'N' }] },
    { id: 'tf115', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '仁慈', value: 'F' }] },
    { id: 'jp115', text: '你更喜欢：', options: [{ label: '计划', value: 'J' }, { label: '灵活', value: 'P' }] },
    { id: 'ei116', text: '你更喜欢：', options: [{ label: '社交', value: 'E' }, { label: '独处', value: 'I' }] },
    { id: 'sn116', text: '你更喜欢：', options: [{ label: '现实', value: 'S' }, { label: '理想', value: 'N' }] },
    { id: 'tf116', text: '你认为自己更：', options: [{ label: '坚定', value: 'T' }, { label: '温柔', value: 'F' }] },
    { id: 'jp116', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '顺其自然', value: 'P' }] },
    { id: 'ei117', text: '你更喜欢：', options: [{ label: '表达想法', value: 'E' }, { label: '保持沉默', value: 'I' }] },
    { id: 'sn117', text: '你更喜欢：', options: [{ label: '具体', value: 'S' }, { label: '抽象', value: 'N' }] },
    { id: 'tf117', text: '你认为自己更：', options: [{ label: '务实', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp117', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei118', text: '你更喜欢：', options: [{ label: '热闹', value: 'E' }, { label: '安静', value: 'I' }] },
    { id: 'sn118', text: '你更喜欢：', options: [{ label: '熟悉', value: 'S' }, { label: '新奇', value: 'N' }] },
    { id: 'tf118', text: '你认为自己更：', options: [{ label: '客观', value: 'T' }, { label: '主观', value: 'F' }] },
    { id: 'jp118', text: '你更喜欢：', options: [{ label: '按计划', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei119', text: '你更喜欢：', options: [{ label: '广交', value: 'E' }, { label: '深交', value: 'I' }] },
    { id: 'sn119', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '大局', value: 'N' }] },
    { id: 'tf119', text: '你认为自己更：', options: [{ label: '理性', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp119', text: '你更喜欢：', options: [{ label: '确定', value: 'J' }, { label: '可能', value: 'P' }] },
    { id: 'ei120', text: '你更喜欢：', options: [{ label: '分享', value: 'E' }, { label: '独自', value: 'I' }] },
    { id: 'sn120', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '构思', value: 'N' }] },
    { id: 'tf120', text: '你认为自己更：', options: [{ label: '冷峻', value: 'T' }, { label: '热情', value: 'F' }] },
    { id: 'jp120', text: '你更喜欢：', options: [{ label: '有准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei121', text: '你更喜欢：', options: [{ label: '团队', value: 'E' }, { label: '个人', value: 'I' }] },
    { id: 'sn121', text: '你更喜欢：', options: [{ label: '常识', value: 'S' }, { label: '灵感', value: 'N' }] },
    { id: 'tf121', text: '你认为自己更：', options: [{ label: '讲理', value: 'T' }, { label: '讲情', value: 'F' }] },
    { id: 'jp121', text: '你更喜欢：', options: [{ label: '有组织', value: 'J' }, { label: '自发', value: 'P' }] },
    { id: 'ei122', text: '你更喜欢：', options: [{ label: '社交媒体', value: 'E' }, { label: '私人日记', value: 'I' }] },
    { id: 'sn122', text: '你更喜欢：', options: [{ label: '现成', value: 'S' }, { label: '全新', value: 'N' }] },
    { id: 'tf122', text: '你认为自己更：', options: [{ label: '分析', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp122', text: '你更喜欢：', options: [{ label: '有结构', value: 'J' }, { label: '无拘束', value: 'P' }] },
    { id: 'ei123', text: '你更喜欢：', options: [{ label: '演讲', value: 'E' }, { label: '书面', value: 'I' }] },
    { id: 'sn123', text: '你更喜欢：', options: [{ label: '例子', value: 'S' }, { label: '原理', value: 'N' }] },
    { id: 'tf123', text: '你认为自己更：', options: [{ label: '批判', value: 'T' }, { label: '包容', value: 'F' }] },
    { id: 'jp123', text: '你更喜欢：', options: [{ label: '预见', value: 'J' }, { label: '随遇而安', value: 'P' }] },
    { id: 'ei124', text: '你更喜欢：', options: [{ label: '大城市', value: 'E' }, { label: '小城镇', value: 'I' }] },
    { id: 'sn124', text: '你更喜欢：', options: [{ label: '实在', value: 'S' }, { label: '虚无', value: 'N' }] },
    { id: 'tf124', text: '你认为自己更：', options: [{ label: '原则', value: 'T' }, { label: '灵活', value: 'F' }] },
    { id: 'jp124', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei125', text: '你更喜欢：', options: [{ label: '分享快乐', value: 'E' }, { label: '独自品味', value: 'I' }] },
    { id: 'sn125', text: '你更喜欢：', options: [{ label: '步骤', value: 'S' }, { label: '方向', value: 'N' }] },
    { id: 'tf125', text: '你认为自己更：', options: [{ label: '严密', value: 'T' }, { label: '丰富', value: 'F' }] },
    { id: 'jp125', text: '你更喜欢：', options: [{ label: '计划', value: 'J' }, { label: '无计划', value: 'P' }] },
    { id: 'ei126', text: '你更喜欢：', options: [{ label: '讨论', value: 'E' }, { label: '思考', value: 'I' }] },
    { id: 'sn126', text: '你更喜欢：', options: [{ label: '现实', value: 'S' }, { label: '梦想', value: 'N' }] },
    { id: 'tf126', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp126', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei127', text: '你更喜欢：', options: [{ label: '注目', value: 'E' }, { label: '低调', value: 'I' }] },
    { id: 'sn127', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '架构', value: 'N' }] },
    { id: 'tf127', text: '你认为自己更：', options: [{ label: '清晰', value: 'T' }, { label: '柔软', value: 'F' }] },
    { id: 'jp127', text: '你更喜欢：', options: [{ label: '准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei128', text: '你更喜欢：', options: [{ label: '快节奏', value: 'E' }, { label: '慢节奏', value: 'I' }] },
    { id: 'sn128', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '思想', value: 'N' }] },
    { id: 'tf128', text: '你认为自己更：', options: [{ label: '理智', value: 'T' }, { label: '情感', value: 'F' }] },
    { id: 'jp128', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei129', text: '你更喜欢：', options: [{ label: '外向', value: 'E' }, { label: '内向', value: 'I' }] },
    { id: 'sn129', text: '你更喜欢：', options: [{ label: '事实', value: 'S' }, { label: '直觉', value: 'N' }] },
    { id: 'tf129', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '仁慈', value: 'F' }] },
    { id: 'jp129', text: '你更喜欢：', options: [{ label: '计划', value: 'J' }, { label: '灵活', value: 'P' }] },
    { id: 'ei130', text: '你更喜欢：', options: [{ label: '社交', value: 'E' }, { label: '独处', value: 'I' }] },
    { id: 'sn130', text: '你更喜欢：', options: [{ label: '现实', value: 'S' }, { label: '理想', value: 'N' }] },
    { id: 'tf130', text: '你认为自己更：', options: [{ label: '坚定', value: 'T' }, { label: '温柔', value: 'F' }] },
    { id: 'jp130', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '顺其自然', value: 'P' }] },
    { id: 'ei131', text: '你更喜欢：', options: [{ label: '表达想法', value: 'E' }, { label: '保持沉默', value: 'I' }] },
    { id: 'sn131', text: '你更喜欢：', options: [{ label: '具体', value: 'S' }, { label: '抽象', value: 'N' }] },
    { id: 'tf131', text: '你认为自己更：', options: [{ label: '务实', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp131', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei132', text: '你更喜欢：', options: [{ label: '热闹', value: 'E' }, { label: '安静', value: 'I' }] },
    { id: 'sn132', text: '你更喜欢：', options: [{ label: '熟悉', value: 'S' }, { label: '新奇', value: 'N' }] },
    { id: 'tf132', text: '你认为自己更：', options: [{ label: '客观', value: 'T' }, { label: '主观', value: 'F' }] },
    { id: 'jp132', text: '你更喜欢：', options: [{ label: '按计划', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei133', text: '你更喜欢：', options: [{ label: '广交', value: 'E' }, { label: '深交', value: 'I' }] },
    { id: 'sn133', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '大局', value: 'N' }] },
    { id: 'tf133', text: '你认为自己更：', options: [{ label: '理性', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp133', text: '你更喜欢：', options: [{ label: '确定', value: 'J' }, { label: '可能', value: 'P' }] },
    { id: 'ei134', text: '你更喜欢：', options: [{ label: '分享', value: 'E' }, { label: '独自', value: 'I' }] },
    { id: 'sn134', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '构思', value: 'N' }] },
    { id: 'tf134', text: '你认为自己更：', options: [{ label: '冷峻', value: 'T' }, { label: '热情', value: 'F' }] },
    { id: 'jp134', text: '你更喜欢：', options: [{ label: '有准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei135', text: '你更喜欢：', options: [{ label: '团队', value: 'E' }, { label: '个人', value: 'I' }] },
    { id: 'sn135', text: '你更喜欢：', options: [{ label: '常识', value: 'S' }, { label: '灵感', value: 'N' }] },
    { id: 'tf135', text: '你认为自己更：', options: [{ label: '讲理', value: 'T' }, { label: '讲情', value: 'F' }] },
    { id: 'jp135', text: '你更喜欢：', options: [{ label: '有组织', value: 'J' }, { label: '自发', value: 'P' }] },
    { id: 'ei136', text: '你更喜欢：', options: [{ label: '社交媒体', value: 'E' }, { label: '私人日记', value: 'I' }] },
    { id: 'sn136', text: '你更喜欢：', options: [{ label: '现成', value: 'S' }, { label: '全新', value: 'N' }] },
    { id: 'tf136', text: '你认为自己更：', options: [{ label: '分析', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp136', text: '你更喜欢：', options: [{ label: '有结构', value: 'J' }, { label: '无拘束', value: 'P' }] },
    { id: 'ei137', text: '你更喜欢：', options: [{ label: '演讲', value: 'E' }, { label: '书面', value: 'I' }] },
    { id: 'sn137', text: '你更喜欢：', options: [{ label: '例子', value: 'S' }, { label: '原理', value: 'N' }] },
    { id: 'tf137', text: '你认为自己更：', options: [{ label: '批判', value: 'T' }, { label: '包容', value: 'F' }] },
    { id: 'jp137', text: '你更喜欢：', options: [{ label: '预见', value: 'J' }, { label: '随遇而安', value: 'P' }] },
    { id: 'ei138', text: '你更喜欢：', options: [{ label: '大城市', value: 'E' }, { label: '小城镇', value: 'I' }] },
    { id: 'sn138', text: '你更喜欢：', options: [{ label: '实在', value: 'S' }, { label: '虚无', value: 'N' }] },
    { id: 'tf138', text: '你认为自己更：', options: [{ label: '原则', value: 'T' }, { label: '灵活', value: 'F' }] },
    { id: 'jp138', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei139', text: '你更喜欢：', options: [{ label: '分享快乐', value: 'E' }, { label: '独自品味', value: 'I' }] },
    { id: 'sn139', text: '你更喜欢：', options: [{ label: '步骤', value: 'S' }, { label: '方向', value: 'N' }] },
    { id: 'tf139', text: '你认为自己更：', options: [{ label: '严密', value: 'T' }, { label: '丰富', value: 'F' }] },
    { id: 'jp139', text: '你更喜欢：', options: [{ label: '计划', value: 'J' }, { label: '无计划', value: 'P' }] },
    { id: 'ei140', text: '你更喜欢：', options: [{ label: '讨论', value: 'E' }, { label: '思考', value: 'I' }] },
    { id: 'sn140', text: '你更喜欢：', options: [{ label: '现实', value: 'S' }, { label: '梦想', value: 'N' }] },
    { id: 'tf140', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp140', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei141', text: '你更喜欢：', options: [{ label: '注目', value: 'E' }, { label: '低调', value: 'I' }] },
    { id: 'sn141', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '架构', value: 'N' }] },
    { id: 'tf141', text: '你认为自己更：', options: [{ label: '清晰', value: 'T' }, { label: '柔软', value: 'F' }] },
    { id: 'jp141', text: '你更喜欢：', options: [{ label: '准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei142', text: '你更喜欢：', options: [{ label: '快节奏', value: 'E' }, { label: '慢节奏', value: 'I' }] },
    { id: 'sn142', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '思想', value: 'N' }] },
    { id: 'tf142', text: '你认为自己更：', options: [{ label: '理智', value: 'T' }, { label: '情感', value: 'F' }] },
    { id: 'jp142', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei143', text: '你更喜欢：', options: [{ label: '外向', value: 'E' }, { label: '内向', value: 'I' }] },
    { id: 'sn143', text: '你更喜欢：', options: [{ label: '事实', value: 'S' }, { label: '直觉', value: 'N' }] },
    { id: 'tf143', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '仁慈', value: 'F' }] },
    { id: 'jp143', text: '你更喜欢：', options: [{ label: '计划', value: 'J' }, { label: '灵活', value: 'P' }] },
    { id: 'ei144', text: '你更喜欢：', options: [{ label: '社交', value: 'E' }, { label: '独处', value: 'I' }] },
    { id: 'sn144', text: '你更喜欢：', options: [{ label: '现实', value: 'S' }, { label: '理想', value: 'N' }] },
    { id: 'tf144', text: '你认为自己更：', options: [{ label: '坚定', value: 'T' }, { label: '温柔', value: 'F' }] },
    { id: 'jp144', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '顺其自然', value: 'P' }] },
    { id: 'ei145', text: '你更喜欢：', options: [{ label: '表达想法', value: 'E' }, { label: '保持沉默', value: 'I' }] },
    { id: 'sn145', text: '你更喜欢：', options: [{ label: '具体', value: 'S' }, { label: '抽象', value: 'N' }] },
    { id: 'tf145', text: '你认为自己更：', options: [{ label: '务实', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp145', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei146', text: '你更喜欢：', options: [{ label: '热闹', value: 'E' }, { label: '安静', value: 'I' }] },
    { id: 'sn146', text: '你更喜欢：', options: [{ label: '熟悉', value: 'S' }, { label: '新奇', value: 'N' }] },
    { id: 'tf146', text: '你认为自己更：', options: [{ label: '客观', value: 'T' }, { label: '主观', value: 'F' }] },
    { id: 'jp146', text: '你更喜欢：', options: [{ label: '按计划', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei147', text: '你更喜欢：', options: [{ label: '广交', value: 'E' }, { label: '深交', value: 'I' }] },
    { id: 'sn147', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '大局', value: 'N' }] },
    { id: 'tf147', text: '你认为自己更：', options: [{ label: '理性', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp147', text: '你更喜欢：', options: [{ label: '确定', value: 'J' }, { label: '可能', value: 'P' }] },
    { id: 'ei148', text: '你更喜欢：', options: [{ label: '分享', value: 'E' }, { label: '独自', value: 'I' }] },
    { id: 'sn148', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '构思', value: 'N' }] },
    { id: 'tf148', text: '你认为自己更：', options: [{ label: '冷峻', value: 'T' }, { label: '热情', value: 'F' }] },
    { id: 'jp148', text: '你更喜欢：', options: [{ label: '有准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei149', text: '你更喜欢：', options: [{ label: '团队', value: 'E' }, { label: '个人', value: 'I' }] },
    { id: 'sn149', text: '你更喜欢：', options: [{ label: '常识', value: 'S' }, { label: '灵感', value: 'N' }] },
    { id: 'tf149', text: '你认为自己更：', options: [{ label: '讲理', value: 'T' }, { label: '讲情', value: 'F' }] },
    { id: 'jp149', text: '你更喜欢：', options: [{ label: '有组织', value: 'J' }, { label: '自发', value: 'P' }] },
    { id: 'ei150', text: '你更喜欢：', options: [{ label: '社交媒体', value: 'E' }, { label: '私人日记', value: 'I' }] },
    { id: 'sn150', text: '你更喜欢：', options: [{ label: '现成', value: 'S' }, { label: '全新', value: 'N' }] },
    { id: 'tf150', text: '你认为自己更：', options: [{ label: '分析', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp150', text: '你更喜欢：', options: [{ label: '有结构', value: 'J' }, { label: '无拘束', value: 'P' }] },
    { id: 'ei151', text: '你更喜欢：', options: [{ label: '热闹', value: 'E' }, { label: '清静', value: 'I' }] },
    { id: 'sn151', text: '你更喜欢：', options: [{ label: '现实', value: 'S' }, { label: '梦想', value: 'N' }] },
    { id: 'tf151', text: '你认为自己更：', options: [{ label: '理智', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp151', text: '你更喜欢：', options: [{ label: '有计划', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei152', text: '你更喜欢：', options: [{ label: '外向', value: 'E' }, { label: '内向', value: 'I' }] },
    { id: 'sn152', text: '你更喜欢：', options: [{ label: '事实', value: 'S' }, { label: '直觉', value: 'N' }] },
    { id: 'tf152', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '仁慈', value: 'F' }] },
    { id: 'jp152', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '灵活', value: 'P' }] },
    { id: 'ei153', text: '你更喜欢：', options: [{ label: '社交', value: 'E' }, { label: '独处', value: 'I' }] },
    { id: 'sn153', text: '你更喜欢：', options: [{ label: '具体', value: 'S' }, { label: '抽象', value: 'N' }] },
    { id: 'tf153', text: '你认为自己更：', options: [{ label: '务实', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp153', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei154', text: '你更喜欢：', options: [{ label: '分享', value: 'E' }, { label: '独自', value: 'I' }] },
    { id: 'sn154', text: '你更喜欢：', options: [{ label: '熟悉', value: 'S' }, { label: '新奇', value: 'N' }] },
    { id: 'tf154', text: '你认为自己更：', options: [{ label: '客观', value: 'T' }, { label: '主观', value: 'F' }] },
    { id: 'jp154', text: '你更喜欢：', options: [{ label: '按计划', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei155', text: '你更喜欢：', options: [{ label: '广交', value: 'E' }, { label: '深交', value: 'I' }] },
    { id: 'sn155', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '大局', value: 'N' }] },
    { id: 'tf155', text: '你认为自己更：', options: [{ label: '理性', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp155', text: '你更喜欢：', options: [{ label: '确定', value: 'J' }, { label: '可能', value: 'P' }] },
    { id: 'ei156', text: '你更喜欢：', options: [{ label: '讨论', value: 'E' }, { label: '思考', value: 'I' }] },
    { id: 'sn156', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '构思', value: 'N' }] },
    { id: 'tf156', text: '你认为自己更：', options: [{ label: '冷峻', value: 'T' }, { label: '热情', value: 'F' }] },
    { id: 'jp156', text: '你更喜欢：', options: [{ label: '有准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei157', text: '你更喜欢：', options: [{ label: '团队', value: 'E' }, { label: '个人', value: 'I' }] },
    { id: 'sn157', text: '你更喜欢：', options: [{ label: '常识', value: 'S' }, { label: '灵感', value: 'N' }] },
    { id: 'tf157', text: '你认为自己更：', options: [{ label: '讲理', value: 'T' }, { label: '讲情', value: 'F' }] },
    { id: 'jp157', text: '你更喜欢：', options: [{ label: '有组织', value: 'J' }, { label: '自发', value: 'P' }] },
    { id: 'ei158', text: '你更喜欢：', options: [{ label: '社交媒体', value: 'E' }, { label: '私人日记', value: 'I' }] },
    { id: 'sn158', text: '你更喜欢：', options: [{ label: '现成', value: 'S' }, { label: '全新', value: 'N' }] },
    { id: 'tf158', text: '你认为自己更：', options: [{ label: '分析', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp158', text: '你更喜欢：', options: [{ label: '有结构', value: 'J' }, { label: '无拘束', value: 'P' }] },
    { id: 'ei159', text: '你更喜欢：', options: [{ label: '演讲', value: 'E' }, { label: '书面', value: 'I' }] },
    { id: 'sn159', text: '你更喜欢：', options: [{ label: '例子', value: 'S' }, { label: '原理', value: 'N' }] },
    { id: 'tf159', text: '你认为自己更：', options: [{ label: '批判', value: 'T' }, { label: '包容', value: 'F' }] },
    { id: 'jp159', text: '你更喜欢：', options: [{ label: '预见', value: 'J' }, { label: '随遇而安', value: 'P' }] },
    { id: 'ei160', text: '你更喜欢：', options: [{ label: '大城市', value: 'E' }, { label: '小城镇', value: 'I' }] },
    { id: 'sn160', text: '你更喜欢：', options: [{ label: '实在', value: 'S' }, { label: '虚无', value: 'N' }] },
    { id: 'tf160', text: '你认为自己更：', options: [{ label: '原则', value: 'T' }, { label: '灵活', value: 'F' }] },
    { id: 'jp160', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei161', text: '你更喜欢：', options: [{ label: '分享快乐', value: 'E' }, { label: '独自品味', value: 'I' }] },
    { id: 'sn161', text: '你更喜欢：', options: [{ label: '步骤', value: 'S' }, { label: '方向', value: 'N' }] },
    { id: 'tf161', text: '你认为自己更：', options: [{ label: '严密', value: 'T' }, { label: '丰富', value: 'F' }] },
    { id: 'jp161', text: '你更喜欢：', options: [{ label: '计划', value: 'J' }, { label: '无计划', value: 'P' }] },
    { id: 'ei162', text: '你更喜欢：', options: [{ label: '讨论', value: 'E' }, { label: '思考', value: 'I' }] },
    { id: 'sn162', text: '你更喜欢：', options: [{ label: '现实', value: 'S' }, { label: '梦想', value: 'N' }] },
    { id: 'tf162', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp162', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei163', text: '你更喜欢：', options: [{ label: '注目', value: 'E' }, { label: '低调', value: 'I' }] },
    { id: 'sn163', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '架构', value: 'N' }] },
    { id: 'tf163', text: '你认为自己更：', options: [{ label: '清晰', value: 'T' }, { label: '柔软', value: 'F' }] },
    { id: 'jp163', text: '你更喜欢：', options: [{ label: '准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei164', text: '你更喜欢：', options: [{ label: '快节奏', value: 'E' }, { label: '慢节奏', value: 'I' }] },
    { id: 'sn164', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '思想', value: 'N' }] },
    { id: 'tf164', text: '你认为自己更：', options: [{ label: '理智', value: 'T' }, { label: '情感', value: 'F' }] },
    { id: 'jp164', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei165', text: '你更喜欢：', options: [{ label: '外向', value: 'E' }, { label: '内向', value: 'I' }] },
    { id: 'sn165', text: '你更喜欢：', options: [{ label: '事实', value: 'S' }, { label: '直觉', value: 'N' }] },
    { id: 'tf165', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '仁慈', value: 'F' }] },
    { id: 'jp165', text: '你更喜欢：', options: [{ label: '计划', value: 'J' }, { label: '灵活', value: 'P' }] },
    { id: 'ei166', text: '你更喜欢：', options: [{ label: '社交', value: 'E' }, { label: '独处', value: 'I' }] },
    { id: 'sn166', text: '你更喜欢：', options: [{ label: '现实', value: 'S' }, { label: '理想', value: 'N' }] },
    { id: 'tf166', text: '你认为自己更：', options: [{ label: '坚定', value: 'T' }, { label: '温柔', value: 'F' }] },
    { id: 'jp166', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '顺其自然', value: 'P' }] },
    { id: 'ei167', text: '你更喜欢：', options: [{ label: '表达想法', value: 'E' }, { label: '保持沉默', value: 'I' }] },
    { id: 'sn167', text: '你更喜欢：', options: [{ label: '具体', value: 'S' }, { label: '抽象', value: 'N' }] },
    { id: 'tf167', text: '你认为自己更：', options: [{ label: '务实', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp167', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei168', text: '你更喜欢：', options: [{ label: '热闹', value: 'E' }, { label: '安静', value: 'I' }] },
    { id: 'sn168', text: '你更喜欢：', options: [{ label: '熟悉', value: 'S' }, { label: '新奇', value: 'N' }] },
    { id: 'tf168', text: '你认为自己更：', options: [{ label: '客观', value: 'T' }, { label: '主观', value: 'F' }] },
    { id: 'jp168', text: '你更喜欢：', options: [{ label: '按计划', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei169', text: '你更喜欢：', options: [{ label: '广交', value: 'E' }, { label: '深交', value: 'I' }] },
    { id: 'sn169', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '大局', value: 'N' }] },
    { id: 'tf169', text: '你认为自己更：', options: [{ label: '理性', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp169', text: '你更喜欢：', options: [{ label: '确定', value: 'J' }, { label: '可能', value: 'P' }] },
    { id: 'ei170', text: '你更喜欢：', options: [{ label: '分享', value: 'E' }, { label: '独自', value: 'I' }] },
    { id: 'sn170', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '构思', value: 'N' }] },
    { id: 'tf170', text: '你认为自己更：', options: [{ label: '冷峻', value: 'T' }, { label: '热情', value: 'F' }] },
    { id: 'jp170', text: '你更喜欢：', options: [{ label: '有准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei171', text: '你更喜欢：', options: [{ label: '团队', value: 'E' }, { label: '个人', value: 'I' }] },
    { id: 'sn171', text: '你更喜欢：', options: [{ label: '常识', value: 'S' }, { label: '灵感', value: 'N' }] },
    { id: 'tf171', text: '你认为自己更：', options: [{ label: '讲理', value: 'T' }, { label: '讲情', value: 'F' }] },
    { id: 'jp171', text: '你更喜欢：', options: [{ label: '有组织', value: 'J' }, { label: '自发', value: 'P' }] },
    { id: 'ei172', text: '你更喜欢：', options: [{ label: '社交媒体', value: 'E' }, { label: '私人日记', value: 'I' }] },
    { id: 'sn172', text: '你更喜欢：', options: [{ label: '现成', value: 'S' }, { label: '全新', value: 'N' }] },
    { id: 'tf172', text: '你认为自己更：', options: [{ label: '分析', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp172', text: '你更喜欢：', options: [{ label: '有结构', value: 'J' }, { label: '无拘束', value: 'P' }] },
    { id: 'ei173', text: '你更喜欢：', options: [{ label: '演讲', value: 'E' }, { label: '书面', value: 'I' }] },
    { id: 'sn173', text: '你更喜欢：', options: [{ label: '例子', value: 'S' }, { label: '原理', value: 'N' }] },
    { id: 'tf173', text: '你认为自己更：', options: [{ label: '批判', value: 'T' }, { label: '包容', value: 'F' }] },
    { id: 'jp173', text: '你更喜欢：', options: [{ label: '预见', value: 'J' }, { label: '随遇而安', value: 'P' }] },
    { id: 'ei174', text: '你更喜欢：', options: [{ label: '大城市', value: 'E' }, { label: '小城镇', value: 'I' }] },
    { id: 'sn174', text: '你更喜欢：', options: [{ label: '实在', value: 'S' }, { label: '虚无', value: 'N' }] },
    { id: 'tf174', text: '你认为自己更：', options: [{ label: '原则', value: 'T' }, { label: '灵活', value: 'F' }] },
    { id: 'jp174', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei175', text: '你更喜欢：', options: [{ label: '分享快乐', value: 'E' }, { label: '独自品味', value: 'I' }] },
    { id: 'sn175', text: '你更喜欢：', options: [{ label: '步骤', value: 'S' }, { label: '方向', value: 'N' }] },
    { id: 'tf175', text: '你认为自己更：', options: [{ label: '严密', value: 'T' }, { label: '丰富', value: 'F' }] },
    { id: 'jp175', text: '你更喜欢：', options: [{ label: '计划', value: 'J' }, { label: '无计划', value: 'P' }] },
    { id: 'ei176', text: '你更喜欢：', options: [{ label: '讨论', value: 'E' }, { label: '思考', value: 'I' }] },
    { id: 'sn176', text: '你更喜欢：', options: [{ label: '现实', value: 'S' }, { label: '梦想', value: 'N' }] },
    { id: 'tf176', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp176', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei177', text: '你更喜欢：', options: [{ label: '注目', value: 'E' }, { label: '低调', value: 'I' }] },
    { id: 'sn177', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '架构', value: 'N' }] },
    { id: 'tf177', text: '你认为自己更：', options: [{ label: '清晰', value: 'T' }, { label: '柔软', value: 'F' }] },
    { id: 'jp177', text: '你更喜欢：', options: [{ label: '准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei178', text: '你更喜欢：', options: [{ label: '快节奏', value: 'E' }, { label: '慢节奏', value: 'I' }] },
    { id: 'sn178', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '思想', value: 'N' }] },
    { id: 'tf178', text: '你认为自己更：', options: [{ label: '理智', value: 'T' }, { label: '情感', value: 'F' }] },
    { id: 'jp178', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei179', text: '你更喜欢：', options: [{ label: '外向', value: 'E' }, { label: '内向', value: 'I' }] },
    { id: 'sn179', text: '你更喜欢：', options: [{ label: '事实', value: 'S' }, { label: '直觉', value: 'N' }] },
    { id: 'tf179', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '仁慈', value: 'F' }] },
    { id: 'jp179', text: '你更喜欢：', options: [{ label: '计划', value: 'J' }, { label: '灵活', value: 'P' }] },
    { id: 'ei180', text: '你更喜欢：', options: [{ label: '社交', value: 'E' }, { label: '独处', value: 'I' }] },
    { id: 'sn180', text: '你更喜欢：', options: [{ label: '现实', value: 'S' }, { label: '理想', value: 'N' }] },
    { id: 'tf180', text: '你认为自己更：', options: [{ label: '坚定', value: 'T' }, { label: '温柔', value: 'F' }] },
    { id: 'jp180', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '顺其自然', value: 'P' }] },
    { id: 'ei181', text: '你更喜欢：', options: [{ label: '表达想法', value: 'E' }, { label: '保持沉默', value: 'I' }] },
    { id: 'sn181', text: '你更喜欢：', options: [{ label: '具体', value: 'S' }, { label: '抽象', value: 'N' }] },
    { id: 'tf181', text: '你认为自己更：', options: [{ label: '务实', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp181', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei182', text: '你更喜欢：', options: [{ label: '热闹', value: 'E' }, { label: '安静', value: 'I' }] },
    { id: 'sn182', text: '你更喜欢：', options: [{ label: '熟悉', value: 'S' }, { label: '新奇', value: 'N' }] },
    { id: 'tf182', text: '你认为自己更：', options: [{ label: '客观', value: 'T' }, { label: '主观', value: 'F' }] },
    { id: 'jp182', text: '你更喜欢：', options: [{ label: '按计划', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei183', text: '你更喜欢：', options: [{ label: '广交', value: 'E' }, { label: '深交', value: 'I' }] },
    { id: 'sn183', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '大局', value: 'N' }] },
    { id: 'tf183', text: '你认为自己更：', options: [{ label: '理性', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp183', text: '你更喜欢：', options: [{ label: '确定', value: 'J' }, { label: '可能', value: 'P' }] },
    { id: 'ei184', text: '你更喜欢：', options: [{ label: '分享', value: 'E' }, { label: '独自', value: 'I' }] },
    { id: 'sn184', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '构思', value: 'N' }] },
    { id: 'tf184', text: '你认为自己更：', options: [{ label: '冷峻', value: 'T' }, { label: '热情', value: 'F' }] },
    { id: 'jp184', text: '你更喜欢：', options: [{ label: '有准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei185', text: '你更喜欢：', options: [{ label: '团队', value: 'E' }, { label: '个人', value: 'I' }] },
    { id: 'sn185', text: '你更喜欢：', options: [{ label: '常识', value: 'S' }, { label: '灵感', value: 'N' }] },
    { id: 'tf185', text: '你认为自己更：', options: [{ label: '讲理', value: 'T' }, { label: '讲情', value: 'F' }] },
    { id: 'jp185', text: '你更喜欢：', options: [{ label: '有组织', value: 'J' }, { label: '自发', value: 'P' }] },
    { id: 'ei186', text: '你更喜欢：', options: [{ label: '社交媒体', value: 'E' }, { label: '私人日记', value: 'I' }] },
    { id: 'sn186', text: '你更喜欢：', options: [{ label: '现成', value: 'S' }, { label: '全新', value: 'N' }] },
    { id: 'tf186', text: '你认为自己更：', options: [{ label: '分析', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp186', text: '你更喜欢：', options: [{ label: '有结构', value: 'J' }, { label: '无拘束', value: 'P' }] },
    { id: 'ei187', text: '你更喜欢：', options: [{ label: '演讲', value: 'E' }, { label: '书面', value: 'I' }] },
    { id: 'sn187', text: '你更喜欢：', options: [{ label: '例子', value: 'S' }, { label: '原理', value: 'N' }] },
    { id: 'tf187', text: '你认为自己更：', options: [{ label: '批判', value: 'T' }, { label: '包容', value: 'F' }] },
    { id: 'jp187', text: '你更喜欢：', options: [{ label: '预见', value: 'J' }, { label: '随遇而安', value: 'P' }] },
    { id: 'ei188', text: '你更喜欢：', options: [{ label: '大城市', value: 'E' }, { label: '小城镇', value: 'I' }] },
    { id: 'sn188', text: '你更喜欢：', options: [{ label: '实在', value: 'S' }, { label: '虚无', value: 'N' }] },
    { id: 'tf188', text: '你认为自己更：', options: [{ label: '原则', value: 'T' }, { label: '灵活', value: 'F' }] },
    { id: 'jp188', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei189', text: '你更喜欢：', options: [{ label: '分享快乐', value: 'E' }, { label: '独自品味', value: 'I' }] },
    { id: 'sn189', text: '你更喜欢：', options: [{ label: '步骤', value: 'S' }, { label: '方向', value: 'N' }] },
    { id: 'tf189', text: '你认为自己更：', options: [{ label: '严密', value: 'T' }, { label: '丰富', value: 'F' }] },
    { id: 'jp189', text: '你更喜欢：', options: [{ label: '计划', value: 'J' }, { label: '无计划', value: 'P' }] },
    { id: 'ei190', text: '你更喜欢：', options: [{ label: '讨论', value: 'E' }, { label: '思考', value: 'I' }] },
    { id: 'sn190', text: '你更喜欢：', options: [{ label: '现实', value: 'S' }, { label: '梦想', value: 'N' }] },
    { id: 'tf190', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp190', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei191', text: '你更喜欢：', options: [{ label: '注目', value: 'E' }, { label: '低调', value: 'I' }] },
    { id: 'sn191', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '架构', value: 'N' }] },
    { id: 'tf191', text: '你认为自己更：', options: [{ label: '清晰', value: 'T' }, { label: '柔软', value: 'F' }] },
    { id: 'jp191', text: '你更喜欢：', options: [{ label: '准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei192', text: '你更喜欢：', options: [{ label: '快节奏', value: 'E' }, { label: '慢节奏', value: 'I' }] },
    { id: 'sn192', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '思想', value: 'N' }] },
    { id: 'tf192', text: '你认为自己更：', options: [{ label: '理智', value: 'T' }, { label: '情感', value: 'F' }] },
    { id: 'jp192', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei193', text: '你更喜欢：', options: [{ label: '外向', value: 'E' }, { label: '内向', value: 'I' }] },
    { id: 'sn193', text: '你更喜欢：', options: [{ label: '事实', value: 'S' }, { label: '直觉', value: 'N' }] },
    { id: 'tf193', text: '你认为自己更：', options: [{ label: '公正', value: 'T' }, { label: '仁慈', value: 'F' }] },
    { id: 'jp193', text: '你更喜欢：', options: [{ label: '计划', value: 'J' }, { label: '灵活', value: 'P' }] },
    { id: 'ei194', text: '你更喜欢：', options: [{ label: '社交', value: 'E' }, { label: '独处', value: 'I' }] },
    { id: 'sn194', text: '你更喜欢：', options: [{ label: '现实', value: 'S' }, { label: '理想', value: 'N' }] },
    { id: 'tf194', text: '你认为自己更：', options: [{ label: '坚定', value: 'T' }, { label: '温柔', value: 'F' }] },
    { id: 'jp194', text: '你更喜欢：', options: [{ label: '条理', value: 'J' }, { label: '顺其自然', value: 'P' }] },
    { id: 'ei195', text: '你更喜欢：', options: [{ label: '表达想法', value: 'E' }, { label: '保持沉默', value: 'I' }] },
    { id: 'sn195', text: '你更喜欢：', options: [{ label: '具体', value: 'S' }, { label: '抽象', value: 'N' }] },
    { id: 'tf195', text: '你认为自己更：', options: [{ label: '务实', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp195', text: '你更喜欢：', options: [{ label: '结论', value: 'J' }, { label: '过程', value: 'P' }] },
    { id: 'ei196', text: '你更喜欢：', options: [{ label: '热闹', value: 'E' }, { label: '安静', value: 'I' }] },
    { id: 'sn196', text: '你更喜欢：', options: [{ label: '熟悉', value: 'S' }, { label: '新奇', value: 'N' }] },
    { id: 'tf196', text: '你认为自己更：', options: [{ label: '客观', value: 'T' }, { label: '主观', value: 'F' }] },
    { id: 'jp196', text: '你更喜欢：', options: [{ label: '按计划', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei197', text: '你更喜欢：', options: [{ label: '广交', value: 'E' }, { label: '深交', value: 'I' }] },
    { id: 'sn197', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '大局', value: 'N' }] },
    { id: 'tf197', text: '你认为自己更：', options: [{ label: '理性', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp197', text: '你更喜欢：', options: [{ label: '确定', value: 'J' }, { label: '可能', value: 'P' }] },
    { id: 'ei198', text: '你更喜欢：', options: [{ label: '分享', value: 'E' }, { label: '独自', value: 'I' }] },
    { id: 'sn198', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '构思', value: 'N' }] },
    { id: 'tf198', text: '你认为自己更：', options: [{ label: '冷峻', value: 'T' }, { label: '热情', value: 'F' }] },
    { id: 'jp198', text: '你更喜欢：', options: [{ label: '有准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei199', text: '你更喜欢：', options: [{ label: '团队', value: 'E' }, { label: '个人', value: 'I' }] },
    { id: 'sn199', text: '你更喜欢：', options: [{ label: '常识', value: 'S' }, { label: '灵感', value: 'N' }] },
    { id: 'tf199', text: '你认为自己更：', options: [{ label: '讲理', value: 'T' }, { label: '讲情', value: 'F' }] },
    { id: 'jp199', text: '你更喜欢：', options: [{ label: '有组织', value: 'J' }, { label: '自发', value: 'P' }] },
    { id: 'ei200', text: '你更喜欢：', options: [{ label: '社交媒体', value: 'E' }, { label: '私人日记', value: 'I' }] },
    { id: 'sn200', text: '你更喜欢：', options: [{ label: '现成', value: 'S' }, { label: '全新', value: 'N' }] },
    { id: 'tf200', text: '你认为自己更：', options: [{ label: '分析', value: 'T' }, { label: '同情', value: 'F' }] },
    { id: 'jp200', text: '你更喜欢：', options: [{ label: '有结构', value: 'J' }, { label: '无拘束', value: 'P' }] },

  ],
  calculateResult: (answers: Record<string, string>): TestResult => {
    return calculateMbtiResult(answers);
  },
};

export const ENNEAGRAM_TEST: Test = {
  id: 'enneagram',
  title: '九型人格专业版',
  description: '发现你的核心动机、恐惧与欲望，探索人格的深层结构。',
  category: 'personality',
  subCategory: '九型人格',
  questions: [
    { id: 'q1', text: '在冲突中，你通常倾向于：', options: [{ label: '直接面对，坚持立场并表达需求', value: '8' }, { label: '努力保持和平，避免对抗和不快', value: '9' }, { label: '退缩并专注于逻辑分析', value: '5' }] },
    { id: 'q2', text: '你在工作中更看重：', options: [{ label: '程序的正确性与完美', value: '1' }, { label: '同事间的关系与认可', value: '2' }, { label: '目标的达成与个人成就', value: '3' }] },
    { id: 'q3', text: '面对未知时，你通常：', options: [{ label: '沉浸在自己的情绪和感受中', value: '4' }, { label: '收集大量资料进行理性分析', value: '5' }, { label: '寻找可靠的盟友或规章制度', value: '6' }] },
    { id: 'q4', text: '你的生活态度更接近：', options: [{ label: '尽情享受，避免痛苦', value: '7' }, { label: '掌控局面，保护自己', value: '8' }, { label: '顺其自然，保持和谐', value: '9' }] },
    { id: 'q5', text: '当你感到压力时，你倾向于：', options: [{ label: '变得更加严苛和自责', value: '1' }, { label: '变得忧郁并退缩到内心世界', value: '4' }, { label: '寻找刺激和娱乐来逃避', value: '7' }] },
    { id: 'q6', text: '你如何看待“依赖”：', options: [{ label: '我乐于被需要，也愿意依赖他人', value: '2' }, { label: '我尽量保持独立，避免依赖', value: '5' }, { label: '依赖是弱小的表现，我必须强大', value: '8' }] },
    { id: 'q7', text: '你对成功的定义是：', options: [{ label: '获得社会的赞誉和地位', value: '3' }, { label: '履行责任并获得安全感', value: '6' }, { label: '拥有平静的生活和良好的人际关系', value: '9' }] },
    { id: 'q8', text: '你最害怕别人评价你：', options: [{ label: '不负责任或道德败坏', value: '1' }, { label: '冷漠或自私', value: '2' }, { label: '不可靠或背叛', value: '6' }] },
    { id: 'q9', text: '你更倾向于：', options: [{ label: '展现最好的一面给世界看', value: '3' }, { label: '探索自己与众不同的深层特质', value: '4' }, { label: '保持低调，观察并理解世界', value: '5' }] },
    { id: 'q10', text: '冲突发生时，你的第一反应是：', options: [{ label: '转移注意力，寻找开心的事情', value: '7' }, { label: '直接对抗，维护自己的权利', value: '8' }, { label: '妥协或回避，以平息事态', value: '9' }] },
    { id: 'q11', text: '你做决策的主要依据是：', options: [{ label: '道德准则和既定标准', value: '1' }, { label: '效率和预期的成果', value: '3' }, { label: '客观的事实和逻辑', value: '5' }] },
    { id: 'q12', text: '你最渴望得到的是：', options: [{ label: '别人的感激和爱', value: '2' }, { label: '别人的理解和共鸣', value: '4' }, { label: '别人的接纳和包容', value: '9' }] },
    { id: 'q13', text: '面对权威，你通常：', options: [{ label: '质疑并寻找潜在的威胁', value: '6' }, { label: '寻找其中的乐趣或机会', value: '7' }, { label: '挑战或试图掌控它', value: '8' }] },
    { id: 'q14', text: '你的内心独白经常是：', options: [{ label: '“我应该做得更好”', value: '1' }, { label: '“我必须对别人有用”', value: '2' }, { label: '“没有人真正懂我”', value: '4' }] },
    { id: 'q15', text: '你的精力通常投向：', options: [{ label: '竞争和自我提升', value: '3' }, { label: '冒险和新奇体验', value: '7' }, { label: '扩张和保护领地', value: '8' }] },
    { id: 'q16', text: '在社交场合，你更像是一个：', options: [{ label: '旁观者，观察而不参与', value: '5' }, { label: '参与者，寻求安全感和归属感', value: '6' }, { label: '调停者，让大家都感到舒适', value: '9' }] },
    { id: 'q17', text: '你对“规矩”的看法：', options: [{ label: '规矩是必须遵守的准则', value: '1' }, { label: '规矩是提供安全感的保障', value: '6' }, { label: '规矩如果破坏和谐，可以灵活处理', value: '9' }] },
    { id: 'q18', text: '你如何表达愤怒：', options: [{ label: '压抑它，转而变得更加努力讨好', value: '2' }, { label: '隐藏它，以免影响自己的形象', value: '3' }, { label: '直接爆发，不加掩饰', value: '8' }] },
    { id: 'q19', text: '你如何处理孤独：', options: [{ label: '享受它，那是灵感的来源', value: '4' }, { label: '利用它，进行深入的思考', value: '5' }, { label: '逃避它，寻找朋友聚会', value: '7' }] },
    { id: 'q20', text: '你更看重：', options: [{ label: '正确性', value: '1' }, { label: '独特性', value: '4' }, { label: '深刻性', value: '5' }] },
    { id: 'q21', text: '你最希望别人觉得你：', options: [{ label: '贴心', value: '2' }, { label: '出色', value: '3' }, { label: '可靠', value: '6' }] },
    { id: 'q22', text: '你的防御机制通常是：', options: [{ label: '否认痛苦', value: '7' }, { label: '否认脆弱', value: '8' }, { label: '否认冲突', value: '9' }] },
    { id: 'q23', text: '你的核心欲望是：', options: [{ label: '完美', value: '1' }, { label: '被爱', value: '2' }, { label: '成功', value: '3' }] },
    { id: 'q24', text: '你的核心恐惧是：', options: [{ label: '平庸', value: '4' }, { label: '无知', value: '5' }, { label: '孤立', value: '6' }] },
    { id: 'q25', text: '你的核心动力是：', options: [{ label: '快乐', value: '7' }, { label: '力量', value: '8' }, { label: '和平', value: '9' }] },
    { id: 'q26', text: '面对挑战，你通常：', options: [{ label: '坚持原则，不畏艰难', value: '1' }, { label: '灵活调整，务求必胜', value: '3' }, { label: '迎难而上，展现霸气', value: '8' }] },
    { id: 'q27', text: '你如何看待情感：', options: [{ label: '情感是连接他人的纽带', value: '2' }, { label: '情感是自我表达的艺术', value: '4' }, { label: '情感有时是干扰理性的负担', value: '5' }] },
    { id: 'q28', text: '你最不喜欢的环境是：', options: [{ label: '充满变数和不可控的环境', value: '6' }, { label: '枯燥乏味和受限的环境', value: '7' }, { label: '充满火药味和争吵的环境', value: '9' }] },
    { id: 'q29', text: '你对自我的要求是：', options: [{ label: '道德高尚', value: '1' }, { label: '乐善好施', value: '2' }, { label: '真实不虚', value: '4' }] },
    { id: 'q30', text: '你对能力的看法：', options: [{ label: '能力是为了获得社会地位', value: '3' }, { label: '能力是为了理解世界运行', value: '5' }, { label: '能力是为了不被他人主宰', value: '8' }] },
    { id: 'q31', text: '你如何面对未来：', options: [{ label: '谨慎规划，预防风险', value: '6' }, { label: '满怀期待，寻找机会', value: '7' }, { label: '顺其自然，随遇而安', value: '9' }] },
    { id: 'q32', text: '你是否觉得如果自己不完美，就不配得到尊重？', options: [{ label: '非常认同', value: '1' }, { label: '部分认同', value: '1' }, { label: '不认同', value: 'O' }] },
    { id: 'q33', text: '你是否经常通过帮助他人来确认自己的价值？', options: [{ label: '非常认同', value: '2' }, { label: '部分认同', value: '2' }, { label: '不认同', value: 'O' }] },
    { id: 'q34', text: '你是否觉得展示脆弱会阻碍你的成功？', options: [{ label: '非常认同', value: '3' }, { label: '部分认同', value: '3' }, { label: '不认同', value: 'O' }] },
    { id: 'q35', text: '你是否觉得平凡的生活是对你灵魂的扼杀？', options: [{ label: '非常认同', value: '4' }, { label: '部分认同', value: '4' }, { label: '不认同', value: 'O' }] },
    { id: 'q36', text: '你是否觉得社交活动往往是肤浅且耗能的？', options: [{ label: '非常认同', value: '5' }, { label: '部分认同', value: '5' }, { label: '不认同', value: 'O' }] },
    { id: 'q37', text: '你是否觉得怀疑和警惕是生存的必要手段？', options: [{ label: '非常认同', value: '6' }, { label: '部分认同', value: '6' }, { label: '不认同', value: 'O' }] },
    { id: 'q38', text: '你是否觉得生活应该充满刺激，否则就太无趣了？', options: [{ label: '非常认同', value: '7' }, { label: '部分认同', value: '7' }, { label: '不认同', value: 'O' }] },
    { id: 'q39', text: '你是否觉得只有变强，才能保护自己不被欺负？', options: [{ label: '非常认同', value: '8' }, { label: '部分认同', value: '8' }, { label: '不认同', value: 'O' }] },
    { id: 'q40', text: '你是否觉得为了维持和谐，委屈一下自己也没关系？', options: [{ label: '非常认同', value: '9' }, { label: '部分认同', value: '9' }, { label: '不认同', value: 'O' }] },
    { id: 'q41', text: '当事情出错时，你通常：', options: [{ label: '反思哪里不符合标准并纠正', value: '1' }, { label: '担心是否因为自己不够好而失去爱', value: '2' }, { label: '迅速寻找补救措施以维持形象', value: '3' }] },
    { id: 'q42', text: '你对“深度”的追求体现在：', options: [{ label: '情感的极致体验与自我探索', value: '4' }, { label: '知识的系统性掌握与客观真理', value: '5' }, { label: '对潜在风险的深度预判与防范', value: '6' }] },
    { id: 'q43', text: '你如何处理欲望：', options: [{ label: '追求多样的体验，填满生活', value: '7' }, { label: '追求力量与影响力，主导环境', value: '8' }, { label: '追求内心的宁静，简化需求', value: '9' }] },
    { id: 'q44', text: '你最不能忍受的是：', options: [{ label: '混乱与不公正', value: '1' }, { label: '被忽视与不被需要', value: '2' }, { label: '失败与无能感', value: '3' }] },
    { id: 'q45', text: '你倾向于如何保护自己：', options: [{ label: '退缩到想象与情感世界中', value: '4' }, { label: '退缩到逻辑与思维的堡垒中', value: '5' }, { label: '寻求权威或团体的保护', value: '6' }] },
    { id: 'q46', text: '你的活力来源于：', options: [{ label: '对新奇事物的探索', value: '7' }, { label: '对挑战的克服与征服', value: '8' }, { label: '与环境的和谐共处', value: '9' }] },
    { id: 'q47', text: '你认为人生的意义在于：', options: [{ label: '不断完善自我，达到至善', value: '1' }, { label: '奉献爱心，温暖他人', value: '2' }, { label: '创造价值，赢得尊重', value: '3' }] },
    { id: 'q48', text: '你最想逃避的是：', options: [{ label: '平庸与大众化', value: '4' }, { label: '无知与被侵扰', value: '5' }, { label: '焦虑与不确定性', value: '6' }] },
    { id: 'q49', text: '你对快乐的理解是：', options: [{ label: '感官的愉悦与自由', value: '7' }, { label: '意志的贯彻与胜利', value: '8' }, { label: '冲突的消解与宁静', value: '9' }] },
    { id: 'q50', text: '在团队中，你最容易扮演的角色是：', options: [{ label: '监督者，确保一切正确无误', value: '1' }, { label: '支持者，关注成员的情感需求', value: '2' }, { label: '推动者，关注目标的快速达成', value: '3' }] },
    { id: 'q51', text: '你对“孤独”的感受是：', options: [{ label: '一种高贵的忧郁，属于自我', value: '4' }, { label: '一种清醒的自由，便于思考', value: '5' }, { label: '一种潜在的威胁，需要警惕', value: '6' }] },
    { id: 'q52', text: '你如何面对诱惑：', options: [{ label: '积极拥抱，享受当下', value: '7' }, { label: '视其为挑战，试图掌控', value: '8' }, { label: '视其为干扰，保持距离', value: '9' }] },
    { id: 'q53', text: '你认为最理想的沟通方式是：', options: [{ label: '基于原则与事实的诚实交流', value: '1' }, { label: '基于情感与关怀的亲密互动', value: '2' }, { label: '基于效率与成果的专业对话', value: '3' }] },
    { id: 'q54', text: '你最看重他人的哪种特质：', options: [{ label: '真实与深度', value: '4' }, { label: '理智与独立', value: '5' }, { label: '忠诚与可靠', value: '6' }] },
    { id: 'q55', text: '你对“力量”的理解是：', options: [{ label: '能够改变世界的影响力', value: '7' }, { label: '能够主宰命运的掌控力', value: '8' }, { label: '能够包容万物的生命力', value: '9' }] },
    { id: 'q56', text: '你经常感到：', options: [{ label: '愤怒，因为世界不够完美', value: '1' }, { label: '委屈，因为付出没被看到', value: '2' }, { label: '焦虑，因为必须保持优秀', value: '3' }] },
    { id: 'q57', text: '你倾向于：', options: [{ label: '沉浸在过去的回忆与伤感中', value: '4' }, { label: '退缩到未来的计划与构想中', value: '5' }, { label: '寻找当下的安全感与依靠', value: '6' }] },
    { id: 'q58', text: '你对“痛苦”的态度是：', options: [{ label: '用快乐来掩盖它', value: '7' }, { label: '用愤怒来对抗它', value: '8' }, { label: '用麻木来回避它', value: '9' }] },
    { id: 'q59', text: '你最希望拥有的超能力是：', options: [{ label: '净化世界，消除一切错误', value: '1' }, { label: '读懂人心，给予最完美的爱', value: '2' }, { label: '预见未来，掌控所有成功', value: '3' }] },
    { id: 'q60', text: '你认为自己最独特的魅力在于：', options: [{ label: '对自我的极致忠诚与艺术感', value: '4' }, { label: '对真理的冷静洞察与智慧', value: '5' }, { label: '对他人的坚定守护与责任感', value: '6' }] },
  ],
  calculateResult: (answers: Record<string, string>): TestResult => {
    return calculateEnneagramResult(answers);
  },
};

export const JUNG_TEST: Test = {
  id: 'jung',
  title: '荣格八维认知功能测试',
  description: '探索你的认知功能偏好，理解你如何感知世界和做出决策。',
  category: 'personality',
  subCategory: '荣格八维',
  questions: [
    {
      id: 'se1',
      text: '你是否倾向于沉浸在当下的感官体验中，追求即时的行动？',
      options: [
        { label: '非常符合', value: 'Se' },
        { label: '比较符合', value: 'Se' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'ni1',
      text: '你是否经常有强烈的直觉，能够预见事情的长远发展趋势？',
      options: [
        { label: '非常符合', value: 'Ni' },
        { label: '比较符合', value: 'Ni' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'te1',
      text: '你是否倾向于通过逻辑、效率和客观标准来组织外部环境？',
      options: [
        { label: '非常符合', value: 'Te' },
        { label: '比较符合', value: 'Te' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'fi1',
      text: '你是否非常关注内在的价值观，并以此作为决策的核心依据？',
      options: [
        { label: '非常符合', value: 'Fi' },
        { label: '比较符合', value: 'Fi' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'ne1',
      text: '你是否经常脑洞大开，能从一个想法联想到无数种可能性？',
      options: [
        { label: '非常符合', value: 'Ne' },
        { label: '比较符合', value: 'Ne' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'ti1',
      text: '你是否喜欢拆解事物的逻辑架构，追求内在的一致性与真理？',
      options: [
        { label: '非常符合', value: 'Ti' },
        { label: '比较符合', value: 'Ti' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'fe1',
      text: '你是否非常在意他人的感受，倾向于维护集体的和谐？',
      options: [
        { label: '非常符合', value: 'Fe' },
        { label: '比较符合', value: 'Fe' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'si1',
      text: '你是否非常看重过去的经验和细节，追求稳定与可靠性？',
      options: [
        { label: '非常符合', value: 'Si' },
        { label: '比较符合', value: 'Si' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'se2',
      text: '你是否喜欢通过感官直接体验世界，如美食、运动或手工？',
      options: [
        { label: '非常符合', value: 'Se' },
        { label: '比较符合', value: 'Se' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'si2',
      text: '你是否对身体的内部感觉（如饥饿、疲劳）非常敏锐？',
      options: [
        { label: '非常符合', value: 'Si' },
        { label: '比较符合', value: 'Si' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'ne2',
      text: '你是否经常能看到事物之间表面上毫无关联的联系？',
      options: [
        { label: '非常符合', value: 'Ne' },
        { label: '比较符合', value: 'Ne' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'ni2',
      text: '你是否经常沉浸在对未来的宏大愿景或象征意义的思考中？',
      options: [
        { label: '非常符合', value: 'Ni' },
        { label: '比较符合', value: 'Ni' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'te2',
      text: '你是否认为结果和效率比过程中的个人感受更重要？',
      options: [
        { label: '非常符合', value: 'Te' },
        { label: '比较符合', value: 'Te' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'ti2',
      text: '你是否追求定义的精确性，无法忍受逻辑上的模糊？',
      options: [
        { label: '非常符合', value: 'Ti' },
        { label: '比较符合', value: 'Ti' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'fe2',
      text: '你是否擅长调节气氛，让身边的每个人都感到被接纳？',
      options: [
        { label: '非常符合', value: 'Fe' },
        { label: '比较符合', value: 'Fe' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'fi2',
      text: '你是否拥有一套极其私人且坚定的道德准则，不随波逐流？',
      options: [
        { label: '非常符合', value: 'Fi' },
        { label: '比较符合', value: 'Fi' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'se3',
      text: '你是否在危机时刻反应迅速，能立刻采取实际行动？',
      options: [
        { label: '非常符合', value: 'Se' },
        { label: '比较符合', value: 'Se' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'si3',
      text: '你是否喜欢遵循熟悉的流程和传统，这让你感到安心？',
      options: [
        { label: '非常符合', value: 'Si' },
        { label: '比较符合', value: 'Si' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'ne3',
      text: '你是否经常因为想到一个新点子而兴奋得难以入睡？',
      options: [
        { label: '非常符合', value: 'Ne' },
        { label: '比较符合', value: 'Ne' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'ni3',
      text: '你是否觉得很多事情的发生都有其深层的必然联系？',
      options: [
        { label: '非常符合', value: 'Ni' },
        { label: '比较符合', value: 'Ni' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'te3',
      text: '你是否擅长制定计划、分配资源并监督目标的达成？',
      options: [
        { label: '非常符合', value: 'Te' },
        { label: '比较符合', value: 'Te' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'ti3',
      text: '你是否喜欢独立思考，不轻易接受未经证实的观点？',
      options: [
        { label: '非常符合', value: 'Ti' },
        { label: '比较符合', value: 'Ti' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'fe3',
      text: '你是否觉得个人的成功如果不能回馈社会就毫无意义？',
      options: [
        { label: '非常符合', value: 'Fe' },
        { label: '比较符合', value: 'Fe' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'fi3',
      text: '你是否非常看重内心的真实，即使这会让你显得不合群？',
      options: [
        { label: '非常符合', value: 'Fi' },
        { label: '比较符合', value: 'Fi' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'se4',
      text: '你是否喜欢追求刺激的运动，如赛车、攀岩或冲浪？',
      options: [
        { label: '非常符合', value: 'Se' },
        { label: '比较符合', value: 'Se' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'si4',
      text: '你是否对环境的细微变化（如光线、气味）非常敏感？',
      options: [
        { label: '非常符合', value: 'Si' },
        { label: '比较符合', value: 'Si' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'ne4',
      text: '你是否喜欢玩文字游戏、隐喻或进行头脑风暴？',
      options: [
        { label: '非常符合', value: 'Ne' },
        { label: '比较符合', value: 'Ne' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'ni4',
      text: '你是否经常觉得现实世界只是某种更深层规律的体现？',
      options: [
        { label: '非常符合', value: 'Ni' },
        { label: '比较符合', value: 'Ni' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'te4',
      text: '你是否倾向于通过建立制度和流程来提高团队效率？',
      options: [
        { label: '非常符合', value: 'Te' },
        { label: '比较符合', value: 'Te' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'ti4',
      text: '你是否喜欢钻研复杂的技术细节，直到彻底弄懂为止？',
      options: [
        { label: '非常符合', value: 'Ti' },
        { label: '比较符合', value: 'Ti' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'fe4',
      text: '你是否觉得照顾他人的情绪是社交中最重要的责任？',
      options: [
        { label: '非常符合', value: 'Fe' },
        { label: '比较符合', value: 'Fe' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'fi4',
      text: '你是否经常反思自己的动机，追求灵魂的纯净？',
      options: [
        { label: '非常符合', value: 'Fi' },
        { label: '比较符合', value: 'Fi' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'se5',
      text: '你是否更喜欢动手实践，而不是在纸上谈兵？',
      options: [
        { label: '非常符合', value: 'Se' },
        { label: '比较符合', value: 'Se' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'si5',
      text: '你是否对家族传统或个人习惯有很强的坚持？',
      options: [
        { label: '非常符合', value: 'Si' },
        { label: '比较符合', value: 'Si' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'ne5',
      text: '你是否经常被新奇的想法吸引，甚至因此改变原有的计划？',
      options: [
        { label: '非常符合', value: 'Ne' },
        { label: '比较符合', value: 'Ne' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'ni5',
      text: '你是否经常有“预感”，且事后证明这些预感往往很准？',
      options: [
        { label: '非常符合', value: 'Ni' },
        { label: '比较符合', value: 'Ni' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'te5',
      text: '你是否认为在竞争中，胜负往往取决于资源的合理配置？',
      options: [
        { label: '非常符合', value: 'Te' },
        { label: '比较符合', value: 'Te' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'ti5',
      text: '你是否喜欢挑战权威的逻辑，寻找其中的不合理之处？',
      options: [
        { label: '非常符合', value: 'Ti' },
        { label: '比较符合', value: 'Ti' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'fe5',
      text: '你是否觉得融入一个温暖的集体比个人成就更重要？',
      options: [
        { label: '非常符合', value: 'Fe' },
        { label: '比较符合', value: 'Fe' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'fi5',
      text: '你是否对虚伪和做作的行为感到极度的反感？',
      options: [
        { label: '非常符合', value: 'Fi' },
        { label: '比较符合', value: 'Fi' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'se6',
      text: '你是否喜欢通过感官享受来缓解压力，如大吃一顿或SPA？',
      options: [
        { label: '非常符合', value: 'Se' },
        { label: '比较符合', value: 'Se' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'si6',
      text: '你是否对数字、日期或具体的历史细节有很好的记忆力？',
      options: [
        { label: '非常符合', value: 'Si' },
        { label: '比较符合', value: 'Si' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'ne6',
      text: '你是否喜欢探索不同的文化、艺术形式或生活方式？',
      options: [
        { label: '非常符合', value: 'Ne' },
        { label: '比较符合', value: 'Ne' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'ni6',
      text: '你是否经常思考宇宙、生命或人类命运等宏大课题？',
      options: [
        { label: '非常符合', value: 'Ni' },
        { label: '比较符合', value: 'Ni' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'te6',
      text: '你是否认为一个好的方案必须具备可操作性和可衡量性？',
      options: [
        { label: '非常符合', value: 'Te' },
        { label: '比较符合', value: 'Te' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'ti6',
      text: '你是否喜欢通过建立数学模型或逻辑框架来理解世界？',
      options: [
        { label: '非常符合', value: 'Ti' },
        { label: '比较符合', value: 'Ti' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'fe6',
      text: '你是否觉得在冲突中，寻找双方都能接受的折中方案是上策？',
      options: [
        { label: '非常符合', value: 'Fe' },
        { label: '比较符合', value: 'Fe' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'fi6',
      text: '你是否觉得内心的安宁比外界的赞誉更有价值？',
      options: [
        { label: '非常符合', value: 'Fi' },
        { label: '比较符合', value: 'Fi' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'general1',
      text: '你是否倾向于向内探索自己的精神世界？',
      options: [
        { label: '非常符合', value: 'Ni' },
        { label: '比较符合', value: 'Fi' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'se7',
      text: '你是否喜欢快节奏的生活，觉得这样才充实？',
      options: [
        { label: '非常符合', value: 'Se' },
        { label: '比较符合', value: 'Se' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'si7',
      text: '你是否对身体的健康状况有很强的自我管理意识？',
      options: [
        { label: '非常符合', value: 'Si' },
        { label: '比较符合', value: 'Si' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'ne7',
      text: '你是否喜欢阅读科幻小说或奇幻文学，探索未知的世界？',
      options: [
        { label: '非常符合', value: 'Ne' },
        { label: '比较符合', value: 'Ne' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'ni7',
      text: '你是否觉得很多事情的背后都隐藏着某种神秘的意义？',
      options: [
        { label: '非常符合', value: 'Ni' },
        { label: '比较符合', value: 'Ni' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'te7',
      text: '你是否认为在工作中，明确的KPI和考核是必要的？',
      options: [
        { label: '非常符合', value: 'Te' },
        { label: '比较符合', value: 'Te' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'ti7',
      text: '你是否喜欢研究底层原理，如编程语言的内核或物理定律？',
      options: [
        { label: '非常符合', value: 'Ti' },
        { label: '比较符合', value: 'Ti' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'fe7',
      text: '你是否觉得在社交中，赞美他人是一种美德？',
      options: [
        { label: '非常符合', value: 'Fe' },
        { label: '比较符合', value: 'Fe' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'fi7',
      text: '你是否觉得每个人都应该有权利追求自己独特的幸福？',
      options: [
        { label: '非常符合', value: 'Fi' },
        { label: '比较符合', value: 'Fi' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'general2',
      text: '你是否更看重直觉而非逻辑？',
      options: [
        { label: '非常符合', value: 'Ni' },
        { label: '比较符合', value: 'Ne' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'general3',
      text: '你是否更看重情感而非效率？',
      options: [
        { label: '非常符合', value: 'Fi' },
        { label: '比较符合', value: 'Fe' },
        { label: '不符合', value: 'O' }
      ]
    },
    {
      id: 'general4',
      text: '你是否更看重当下的体验而非长远的规划？',
      options: [
        { label: '非常符合', value: 'Se' },
        { label: '比较符合', value: 'Ne' },
        { label: '不符合', value: 'O' }
      ]
    },
  ],
  calculateResult: (answers: Record<string, string>): TestResult => {
    return calculateJungResult(answers);
  }
};

export const HOLLAND_TEST: Test = {
  id: 'holland',
  title: '霍兰德职业兴趣测试',
  description: '探索你的职业兴趣类型，寻找最适合你的职业环境。',
  category: 'career',
  questions: [
    {
      id: 'r1',
      text: '你是否喜欢修理机械或电器？',
      options: [
        { label: '非常喜欢', value: 'R' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'i1',
      text: '你是否喜欢研究科学理论或解决复杂的数学问题？',
      options: [
        { label: '非常喜欢', value: 'I' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'a1',
      text: '你是否喜欢进行艺术创作、写作或表演？',
      options: [
        { label: '非常喜欢', value: 'A' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 's1',
      text: '你是否喜欢帮助他人解决困难或进行教学？',
      options: [
        { label: '非常喜欢', value: 'S' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'e1',
      text: '你是否喜欢领导团队、进行演讲或推销产品？',
      options: [
        { label: '非常喜欢', value: 'E' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'c1',
      text: '你是否喜欢处理数据、整理文档或进行精细的行政工作？',
      options: [
        { label: '非常喜欢', value: 'C' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'r2',
      text: '你是否喜欢户外活动或需要体力的工作？',
      options: [
        { label: '非常喜欢', value: 'R' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'i2',
      text: '你是否喜欢阅读科学杂志或技术书籍？',
      options: [
        { label: '非常喜欢', value: 'I' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'a2',
      text: '你是否喜欢设计网页、服装或室内装饰？',
      options: [
        { label: '非常喜欢', value: 'A' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 's2',
      text: '你是否喜欢参加志愿者活动或社区服务？',
      options: [
        { label: '非常喜欢', value: 'S' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'e2',
      text: '你是否喜欢策划商业活动或进行创业？',
      options: [
        { label: '非常喜欢', value: 'E' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'c2',
      text: '你是否喜欢制定预算、理财或进行税务规划？',
      options: [
        { label: '非常喜欢', value: 'C' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'r3',
      text: '你是否喜欢操作重型设备或驾驶各种车辆？',
      options: [
        { label: '非常喜欢', value: 'R' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'i3',
      text: '你是否喜欢进行实验、观察或数据分析？',
      options: [
        { label: '非常喜欢', value: 'I' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'a3',
      text: '你是否喜欢演奏乐器或参加合唱团？',
      options: [
        { label: '非常喜欢', value: 'A' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 's3',
      text: '你是否喜欢照顾老人、儿童或小动物？',
      options: [
        { label: '非常喜欢', value: 'S' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'e3',
      text: '你是否喜欢在公众场合发表见解或影响他人？',
      options: [
        { label: '非常喜欢', value: 'E' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'c3',
      text: '你是否喜欢核对账目、检查错误或进行校对？',
      options: [
        { label: '非常喜欢', value: 'C' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'r4',
      text: '你是否喜欢在农场或花园里工作？',
      options: [
        { label: '非常喜欢', value: 'R' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'i4',
      text: '你是否喜欢研究复杂的系统或软件？',
      options: [
        { label: '非常喜欢', value: 'I' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'a4',
      text: '你是否喜欢设计独特的Logo或视觉形象？',
      options: [
        { label: '非常喜欢', value: 'A' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 's4',
      text: '你是否喜欢担任心理辅导员或职业规划师？',
      options: [
        { label: '非常喜欢', value: 'S' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'e4',
      text: '你是否喜欢在大型活动中担任主持人？',
      options: [
        { label: '非常喜欢', value: 'E' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'c4',
      text: '你是否喜欢管理库存或进行物流调度？',
      options: [
        { label: '非常喜欢', value: 'C' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'r5',
      text: '你是否喜欢木工活或制作家具？',
      options: [
        { label: '非常喜欢', value: 'R' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'i5',
      text: '你是否喜欢阅读医学或生物学方面的研究报告？',
      options: [
        { label: '非常喜欢', value: 'I' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'a5',
      text: '你是否喜欢编写剧本或创作小说？',
      options: [
        { label: '非常喜欢', value: 'A' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 's5',
      text: '你是否喜欢组织慈善晚宴或募捐活动？',
      options: [
        { label: '非常喜欢', value: 'S' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'e5',
      text: '你是否喜欢在谈判中争取最优条件？',
      options: [
        { label: '非常喜欢', value: 'E' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'c5',
      text: '你是否喜欢进行法律文书的起草或审核？',
      options: [
        { label: '非常喜欢', value: 'C' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'r6',
      text: '你是否喜欢进行户外探险或野外生存？',
      options: [
        { label: '非常喜欢', value: 'R' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'i6',
      text: '你是否喜欢研究历史文献或进行考古发掘？',
      options: [
        { label: '非常喜欢', value: 'I' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'a6',
      text: '你是否喜欢进行摄影创作或视频剪辑？',
      options: [
        { label: '非常喜欢', value: 'A' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 's6',
      text: '你是否喜欢在社区中心担任协调员？',
      options: [
        { label: '非常喜欢', value: 'S' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'e6',
      text: '你是否喜欢经营自己的网店或实体店？',
      options: [
        { label: '非常喜欢', value: 'E' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'c6',
      text: '你是否喜欢整理庞大的图书馆或档案室？',
      options: [
        { label: '非常喜欢', value: 'C' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'r7',
      text: '你是否喜欢修理自行车或摩托车？',
      options: [
        { label: '非常喜欢', value: 'R' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'i7',
      text: '你是否喜欢研究经济模型或股市趋势？',
      options: [
        { label: '非常喜欢', value: 'I' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'a7',
      text: '你是否喜欢参加戏剧表演或即兴演出？',
      options: [
        { label: '非常喜欢', value: 'A' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 's7',
      text: '你是否喜欢在学校担任辅导员或班主任？',
      options: [
        { label: '非常喜欢', value: 'S' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'e7',
      text: '你是否喜欢在辩论赛中担任主辩手？',
      options: [
        { label: '非常喜欢', value: 'E' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'c7',
      text: '你是否喜欢进行精细的财务审计工作？',
      options: [
        { label: '非常喜欢', value: 'C' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'r8',
      text: '你是否喜欢在建筑工地进行实际操作？',
      options: [
        { label: '非常喜欢', value: 'R' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'i8',
      text: '你是否喜欢研究人工智能或机器学习？',
      options: [
        { label: '非常喜欢', value: 'I' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'a8',
      text: '你是否喜欢进行室内设计或软装搭配？',
      options: [
        { label: '非常喜欢', value: 'A' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 's8',
      text: '你是否喜欢在养老院陪伴老人聊天？',
      options: [
        { label: '非常喜欢', value: 'S' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'e8',
      text: '你是否喜欢策划一场大型的商业发布会？',
      options: [
        { label: '非常喜欢', value: 'E' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'c8',
      text: '你是否喜欢进行严谨的数据录入和核对？',
      options: [
        { label: '非常喜欢', value: 'C' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'general1',
      text: '你是否更看重工作的稳定性而非挑战性？',
      options: [
        { label: '非常看重', value: 'C' },
        { label: '一般', value: 'O' },
        { label: '不看重', value: 'N' }
      ]
    },
    {
      id: 'r9',
      text: '你是否喜欢进行木工设计或手工模型制作？',
      options: [
        { label: '非常喜欢', value: 'R' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'i9',
      text: '你是否喜欢研究天文学或宇宙物理学？',
      options: [
        { label: '非常喜欢', value: 'I' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'a9',
      text: '你是否喜欢进行雕塑创作或陶瓷艺术？',
      options: [
        { label: '非常喜欢', value: 'A' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 's9',
      text: '你是否喜欢在心理咨询热线担任接线员？',
      options: [
        { label: '非常喜欢', value: 'S' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'e9',
      text: '你是否喜欢在商业谈判中担任首席代表？',
      options: [
        { label: '非常喜欢', value: 'E' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'c9',
      text: '你是否喜欢进行复杂的税务审计或合规检查？',
      options: [
        { label: '非常喜欢', value: 'C' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
    {
      id: 'general2',
      text: '你是否更喜欢在有明确规则的环境下工作？',
      options: [
        { label: '非常喜欢', value: 'C' },
        { label: '一般', value: 'O' },
        { label: '不喜欢', value: 'N' }
      ]
    },
  ],
  calculateResult: (answers: Record<string, string>): TestResult => {
    return calculateHollandResult(answers);
  }
};

export const STRESS_TEST: Test = {
  id: 'stress',
  title: '压力水平自测',
  description: '评估你近期的压力状态，关注心理健康。',
  category: 'health',
  questions: [
    {
      id: 's1',
      text: '你是否经常感到焦虑或坐立不安？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's2',
      text: '你是否感到睡眠质量下降，难以入睡或易醒？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's3',
      text: '你是否感到难以集中注意力，工作效率下降？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's4',
      text: '你是否感到情绪波动大，容易发火或沮丧？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's5',
      text: '你是否感到身体疲惫，即使休息后也难以恢复？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's6',
      text: '你是否感到对未来的生活缺乏信心和动力？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's7',
      text: '你是否感到社交是一种负担，倾向于自我封闭？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's8',
      text: '你是否感到记忆力下降，容易忘事？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's9',
      text: '你是否感到胸闷、心慌或呼吸不畅（排除器质性病变）？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's10',
      text: '你是否感到生活失去了乐趣，对以前感兴趣的事不再感兴趣？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's11',
      text: '你是否感到经常性的头痛或肌肉酸痛？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's12',
      text: '你是否感到食欲不振或过度进食？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's13',
      text: '你是否感到对工作或学习产生了强烈的抵触情绪？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's14',
      text: '你是否感到难以做出简单的决定？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's15',
      text: '你是否感到经常性的心跳加快或手心出汗？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's16',
      text: '你是否感到容易受到惊吓？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's17',
      text: '你是否感到生活中充满了无法解决的难题？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's18',
      text: '你是否感到经常性的胃部不适或消化不良？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's19',
      text: '你是否感到对周围的人失去了耐心？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's20',
      text: '你是否感到经常性的自我否定或自卑？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's21',
      text: '你是否感到生活节奏太快，让你喘不过气来？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's22',
      text: '你是否感到经常性的孤立无援？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's23',
      text: '你是否感到对未来的不确定性感到极度恐惧？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's24',
      text: '你是否感到经常性的坐立难安，必须找点事做？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's25',
      text: '你是否感到经常性的注意力涣散，容易走神？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's26',
      text: '你是否感到经常性的情绪低落，想哭却哭不出来？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's27',
      text: '你是否感到经常性的对小事斤斤计较？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's28',
      text: '你是否感到经常性的对未来感到绝望？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's29',
      text: '你是否感到经常性的对自己的身体状况感到担忧？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's30',
      text: '你是否感到经常性的对人际关系感到疲惫？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's31',
      text: '你是否感到经常性的对工作/学习环境感到压抑？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's32',
      text: '你是否感到经常性的对社交媒体感到焦虑？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's33',
      text: '你是否感到经常性的对财务状况感到压力？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's34',
      text: '你是否感到经常性的对家庭琐事感到烦躁？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's35',
      text: '你是否感到经常性的对自己的外貌感到不满？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's36',
      text: '你是否感到经常性的对时间流逝感到恐慌？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's37',
      text: '你是否感到经常性的对竞争感到厌恶？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's38',
      text: '你是否感到经常性的对自己的能力产生怀疑？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's39',
      text: '你是否感到经常性的对生活中的变动感到不安？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's40',
      text: '你是否感到经常性的对自己的选择感到后悔？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's41',
      text: '你是否感到经常性的对周围的噪音感到敏感？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's42',
      text: '你是否感到经常性的对自己的健康状况感到疑神疑鬼？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's43',
      text: '你是否感到经常性的对未来的责任感到沉重？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's44',
      text: '你是否感到经常性的对自己的过去感到羞愧？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's45',
      text: '你是否感到经常性的对社交场合感到恐惧？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's46',
      text: '你是否感到经常性的对自己的未来感到迷茫？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's47',
      text: '你是否感到经常性的对自己的现状感到不满？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's48',
      text: '你是否感到经常性的对生活中的琐事感到精疲力竭？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's49',
      text: '你是否感到经常性的对自己的情绪失去控制？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
    {
      id: 's50',
      text: '你是否感到经常性的对生活失去了掌控感？',
      options: [
        { label: '经常', value: '3' },
        { label: '有时', value: '2' },
        { label: '很少', value: '1' }
      ]
    },
  ],
  calculateResult: (answers: Record<string, string>): TestResult => {
    return calculateStressResult(answers);
  }
};

export const CATTELL_16PF_TEST: Test = {
  id: '16pf',
  title: '卡特尔16PF人格测验（187题专业版）',
  description: '卡特尔16种人格因素问卷（16PF）是心理学界公认的专业人格评估工具。它通过16个独立的人格特质维度，全面描绘个体的性格画像，广泛应用于职业咨询、人才选拔及心理临床诊断。',
  category: 'personality',
  subCategory: '卡特尔16PF',
  questions: [
    {
      id: 'q1',
      text: '我很明了本测验的说明：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q2',
      text: '我愿意回答每一个问题：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q3',
      text: '如果我有选择的权利，我愿意住在：',
      options: [
        { label: '闹市区', value: '2' },
        { label: '不一定', value: '1' },
        { label: '清静的郊区', value: '0' }
      ]
    },
    {
      id: 'q4',
      text: '我有足够的精力去应付困难：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q5',
      text: '我在看书时，如果有人说话，我：',
      options: [
        { label: '仍能专心', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不能专心', value: '0' }
      ]
    },
    {
      id: 'q6',
      text: '我对人生的态度是：',
      options: [
        { label: '乐观', value: '2' },
        { label: '不一定', value: '1' },
        { label: '悲观', value: '0' }
      ]
    },
    {
      id: 'q7',
      text: '我倾向于原谅别人的过错：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q8',
      text: '我在处理事情时，通常是：',
      options: [
        { label: '按部就班', value: '2' },
        { label: '不一定', value: '1' },
        { label: '随机应变', value: '0' }
      ]
    },
    {
      id: 'q9',
      text: '我在社交场合，通常是：',
      options: [
        { label: '主动交谈', value: '2' },
        { label: '不一定', value: '1' },
        { label: '保持沉默', value: '0' }
      ]
    },
    {
      id: 'q10',
      text: '我更喜欢：',
      options: [
        { label: '阅读', value: '2' },
        { label: '不一定', value: '1' },
        { label: '运动', value: '0' }
      ]
    },
    {
      id: 'q11',
      text: '我能够很容易地在人群中找到话题：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q12',
      text: '我倾向于在做决定前听取他人的意见：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q13',
      text: '我更喜欢有挑战性的工作：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q14',
      text: '我通常能保持冷静，即使在压力下：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q15',
      text: '我更喜欢与人合作而不是独自工作：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q16',
      text: '我倾向于关注事物的细节：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q17',
      text: '我更喜欢有规律的生活：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q18',
      text: '我通常能很快适应新环境：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q19',
      text: '我更喜欢在幕后工作而不是站在前台：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q20',
      text: '我倾向于相信自己的直觉：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q21',
      text: '我更喜欢处理抽象的概念而不是具体的事实：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q22',
      text: '我通常能很好地控制自己的情绪：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q23',
      text: '我更喜欢在团队中担任领导角色：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q24',
      text: '我倾向于在行动前进行周密的计划：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q25',
      text: '我更喜欢在安静的环境中工作：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q26',
      text: '我通常能很快发现他人的情绪变化：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q27',
      text: '我更喜欢尝试新事物而不是坚持传统：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q28',
      text: '我倾向于在压力下表现得更好：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q29',
      text: '我更喜欢在社交活动中结识新朋友：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q30',
      text: '我通常能很好地平衡工作和生活：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q31',
      text: '我倾向于在冲突中保持中立：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q32',
      text: '我更喜欢在熟悉的环境中工作：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q33',
      text: '我通常能很快从失败中恢复过来：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q34',
      text: '我更喜欢在做决定前收集尽可能多的信息：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q35',
      text: '我倾向于在团队中扮演支持者的角色：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q36',
      text: '我更喜欢处理具体的任务而不是长远的规划：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q37',
      text: '我通常能很好地理解复杂的理论：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q38',
      text: '我更喜欢在快节奏的环境中工作：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q39',
      text: '我倾向于在社交场合中保持低调：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q40',
      text: '我通常能很好地管理自己的时间：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q41',
      text: '我更喜欢在做决定前考虑所有的可能性：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q42',
      text: '我倾向于在团队中担任协调者的角色：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q43',
      text: '我更喜欢处理具有创造性的任务：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q44',
      text: '我通常能很好地应对突发状况：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q45',
      text: '我更喜欢在做决定前咨询专家的意见：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q46',
      text: '我倾向于在社交场合中主动结识新朋友：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q47',
      text: '我通常能很好地理解他人的需求：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q48',
      text: '我更喜欢在具有挑战性的环境中工作：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q49',
      text: '我倾向于在做决定前考虑长远的影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q50',
      text: '我通常能很好地保持专注，即使在干扰下：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q51',
      text: '我更喜欢在做决定前考虑所有的风险：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q52',
      text: '我倾向于在团队中担任执行者的角色：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q53',
      text: '我更喜欢处理具有逻辑性的任务：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q54',
      text: '我通常能很好地理解他人的意图：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q55',
      text: '我更喜欢在做决定前考虑所有的利益相关者：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q56',
      text: '我倾向于在社交场合中保持冷静：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q57',
      text: '我通常能很好地处理复杂的人际关系：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q58',
      text: '我更喜欢在具有竞争性的环境中工作：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q59',
      text: '我倾向于在做决定前考虑所有的历史背景：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q60',
      text: '我通常能很好地保持乐观，即使在困难下：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q61',
      text: '我更喜欢在做决定前考虑所有的道德影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q62',
      text: '我倾向于在团队中担任创新者的角色：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q63',
      text: '我更喜欢处理具有挑战性的数据：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q64',
      text: '我通常能很好地理解他人的情感：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q65',
      text: '我更喜欢在做决定前考虑所有的法律影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q66',
      text: '我倾向于在社交场合中保持活跃：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q67',
      text: '我通常能很好地处理突发的冲突：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q68',
      text: '我更喜欢在具有合作性的环境中工作：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q69',
      text: '我倾向于在做决定前考虑所有的技术细节：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q70',
      text: '我通常能很好地保持自律，即使在诱惑下：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q71',
      text: '我更喜欢在做决定前考虑所有的财务影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q72',
      text: '我倾向于在团队中担任领导者的角色：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q73',
      text: '我更喜欢处理具有艺术性的任务：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q74',
      text: '我通常能很好地理解他人的动机：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q75',
      text: '我更喜欢在做决定前考虑所有的环境影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q76',
      text: '我倾向于在社交场合中保持谦逊：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q77',
      text: '我通常能很好地处理长期的压力：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q78',
      text: '我更喜欢在具有创造性的环境中工作：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q79',
      text: '我倾向于在做决定前考虑所有的社会影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q80',
      text: '我通常能很好地保持专注，即使在疲劳下：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q81',
      text: '我更喜欢在做决定前考虑所有的政治影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q82',
      text: '我倾向于在团队中担任观察者的角色：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q83',
      text: '我更喜欢处理具有科学性的任务：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q84',
      text: '我通常能很好地理解他人的潜台词：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q85',
      text: '我更喜欢在做决定前考虑所有的文化影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q86',
      text: '我倾向于在社交场合中保持自信：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q87',
      text: '我通常能很好地处理多重任务：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q88',
      text: '我更喜欢在具有稳定性的环境中工作：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q89',
      text: '我倾向于在做决定前考虑所有的伦理影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q90',
      text: '我通常能很好地保持冷静，即使在被误解下：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q91',
      text: '我更喜欢在做决定前考虑所有的战略影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q92',
      text: '我倾向于在团队中担任协调者的角色：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q93',
      text: '我更喜欢处理具有实践性的任务：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q94',
      text: '我通常能很好地理解他人的非语言信号：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q95',
      text: '我更喜欢在做决定前考虑所有的个人影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q96',
      text: '我倾向于在社交场合中保持友善：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q97',
      text: '我通常能很好地处理紧急的任务：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q98',
      text: '我更喜欢在具有多样性的环境中工作：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q99',
      text: '我倾向于在做决定前考虑所有的长期目标：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q100',
      text: '我通常能很好地保持专注，即使在饥饿下：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q101',
      text: '我更喜欢在做决定前考虑所有的心理影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q102',
      text: '我倾向于在团队中担任支持者的角色：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q103',
      text: '我更喜欢处理具有理论性的任务：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q104',
      text: '我通常能很好地理解他人的价值观：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q105',
      text: '我更喜欢在做决定前考虑所有的精神影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q106',
      text: '我倾向于在社交场合中保持真诚：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q107',
      text: '我通常能很好地处理短期的压力：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q108',
      text: '我更喜欢在具有挑战性的环境中工作：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q109',
      text: '我倾向于在做决定前考虑所有的感官影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q110',
      text: '我通常能很好地保持专注，即使在噪音下：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q111',
      text: '我更喜欢在做决定前考虑所有的直觉影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q112',
      text: '我倾向于在团队中担任分析者的角色：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q113',
      text: '我更喜欢处理具有复杂性的任务：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q114',
      text: '我通常能很好地理解他人的信仰：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q115',
      text: '我更喜欢在做决定前考虑所有的逻辑影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q116',
      text: '我倾向于在社交场合中保持礼貌：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q117',
      text: '我通常能很好地处理情感的压力：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q118',
      text: '我更喜欢在具有启发性的环境中工作：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q119',
      text: '我倾向于在做决定前考虑所有的审美影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q120',
      text: '我通常能很好地保持专注，即使在焦虑下：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q121',
      text: '我更喜欢在做决定前考虑所有的情感影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q122',
      text: '我倾向于在团队中担任执行者的角色：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q123',
      text: '我更喜欢处理具有系统性的任务：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q124',
      text: '我通常能很好地理解他人的期望：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q125',
      text: '我更喜欢在做决定前考虑所有的伦理影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q126',
      text: '我倾向于在社交场合中保持大方：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q127',
      text: '我通常能很好地处理经济的压力：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q128',
      text: '我更喜欢在具有前瞻性的环境中工作：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q129',
      text: '我倾向于在做决定前考虑所有的历史影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q130',
      text: '我通常能很好地保持专注，即使在兴奋下：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q131',
      text: '我更喜欢在做决定前考虑所有的技术影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q132',
      text: '我倾向于在团队中担任监督者的角色：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q133',
      text: '我更喜欢处理具有创新性的任务：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q134',
      text: '我通常能很好地理解他人的局限：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q135',
      text: '我更喜欢在做决定前考虑所有的法律影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q136',
      text: '我倾向于在社交场合中保持幽默：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q137',
      text: '我通常能很好地处理工作的压力：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q138',
      text: '我更喜欢在具有包容性的环境中工作：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q139',
      text: '我倾向于在做决定前考虑所有的环境影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q140',
      text: '我通常能很好地保持专注，即使在悲伤下：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q141',
      text: '我更喜欢在做决定前考虑所有的社会影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q142',
      text: '我倾向于在团队中担任协调者的角色：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q143',
      text: '我更喜欢处理具有战略性的任务：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q144',
      text: '我通常能很好地理解他人的潜力：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q145',
      text: '我更喜欢在做决定前考虑所有的个人影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q146',
      text: '我倾向于在社交场合中保持稳重：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q147',
      text: '我通常能很好地处理家庭的压力：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q148',
      text: '我更喜欢在具有竞争性的环境中工作：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q149',
      text: '我倾向于在做决定前考虑所有的长期影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q150',
      text: '我通常能很好地保持专注，即使在压力下：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q151',
      text: '我更喜欢在做决定前考虑所有的心理影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q152',
      text: '我倾向于在团队中担任执行者的角色：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q153',
      text: '我更喜欢处理具有系统性的任务：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q154',
      text: '我通常能很好地理解他人的期望：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q155',
      text: '我更喜欢在做决定前考虑所有的伦理影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q156',
      text: '我倾向于在社交场合中保持大方：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q157',
      text: '我通常能很好地处理经济的压力：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q158',
      text: '我更喜欢在具有前瞻性的环境中工作：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q159',
      text: '我倾向于在做决定前考虑所有的历史影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q160',
      text: '我通常能很好地保持专注，即使在兴奋下：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q161',
      text: '我更喜欢在做决定前考虑所有的技术影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q162',
      text: '我倾向于在团队中担任监督者的角色：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q163',
      text: '我更喜欢处理具有创新性的任务：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q164',
      text: '我通常能很好地理解他人的局限：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q165',
      text: '我更喜欢在做决定前考虑所有的法律影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q166',
      text: '我倾向于在社交场合中保持幽默：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q167',
      text: '我通常能很好地处理工作的压力：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q168',
      text: '我更喜欢在具有包容性的环境中工作：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q169',
      text: '我倾向于在做决定前考虑所有的环境影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q170',
      text: '我通常能很好地保持专注，即使在悲伤下：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q171',
      text: '我更喜欢在做决定前考虑所有的社会影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q172',
      text: '我倾向于在团队中担任协调者的角色：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q173',
      text: '我更喜欢处理具有战略性的任务：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q174',
      text: '我通常能很好地理解他人的潜力：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q175',
      text: '我更喜欢在做决定前考虑所有的个人影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q176',
      text: '我倾向于在社交场合中保持稳重：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q177',
      text: '我通常能很好地处理家庭的压力：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q178',
      text: '我更喜欢在具有竞争性的环境中工作：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q179',
      text: '我倾向于在做决定前考虑所有的长期影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q180',
      text: '我通常能很好地保持专注，即使在压力下：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q181',
      text: '我更喜欢在做决定前考虑所有的心理影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q182',
      text: '我倾向于在团队中担任支持者的角色：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q183',
      text: '我更喜欢处理具有理论性的任务：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q184',
      text: '我通常能很好地理解他人的价值观：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q185',
      text: '我更喜欢在做决定前考虑所有的精神影响：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q186',
      text: '我倾向于在社交场合中保持真诚：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    },
    {
      id: 'q187',
      text: '我喜欢在工作中保持高度的专注：',
      options: [
        { label: '是的', value: '2' },
        { label: '不一定', value: '1' },
        { label: '不是的', value: '0' }
      ]
    }
  ],
  calculateResult: (answers: Record<string, string>): TestResult => {
    return calculate16PfResult(answers);
  }
};

export const KEIRSEY_TEST: Test = {
  id: 'keirsey',
  title: '凯尔西气质类型测试',
  description: '通过16道精选题目，快速识别你的四大气质类型：护卫者、艺术创作者、理想主义者或理性者。',
  category: 'personality',
  subCategory: '气质类型',
  questions: [
    {
      id: 'k1',
      text: '你更倾向于：',
      options: [
        { label: '关注事实和细节', value: 'S' },
        { label: '关注可能性和灵感', value: 'N' }
      ]
    },
    {
      id: 'k2',
      text: '在做决定时，你更看重：',
      options: [
        { label: '逻辑和客观分析', value: 'T' },
        { label: '价值观和人际和谐', value: 'F' }
      ]
    },
    {
      id: 'k3',
      text: '你更喜欢：',
      options: [
        { label: '有计划、有组织的生活', value: 'J' },
        { label: '灵活、自发的生活', value: 'P' }
      ]
    },
    {
      id: 'k4',
      text: '你通常：',
      options: [
        { label: '说话直接，注重实效', value: 'S' },
        { label: '说话委婉，注重意义', value: 'N' }
      ]
    },
    {
      id: 'k5',
      text: '你认为自己更像：',
      options: [
        { label: '务实的人', value: 'S' },
        { label: '有远见的人', value: 'N' }
      ]
    },
    {
      id: 'k6',
      text: '你更欣赏：',
      options: [
        { label: '常识', value: 'S' },
        { label: '想象力', value: 'N' }
      ]
    },
    {
      id: 'k7',
      text: '你更倾向于：',
      options: [
        { label: '遵守规则', value: 'J' },
        { label: '打破常规', value: 'P' }
      ]
    },
    {
      id: 'k8',
      text: '你更看重：',
      options: [
        { label: '公平', value: 'T' },
        { label: '仁慈', value: 'F' }
      ]
    },
    {
      id: 'k9',
      text: '你更喜欢：',
      options: [
        { label: '确定的结论', value: 'J' },
        { label: '开放的选择', value: 'P' }
      ]
    },
    {
      id: 'k10',
      text: '你通常：',
      options: [
        { label: '关注当下', value: 'S' },
        { label: '关注未来', value: 'N' }
      ]
    },
    {
      id: 'k11',
      text: '你认为哪种描述更贴切：',
      options: [
        { label: '冷静理智', value: 'T' },
        { label: '热情敏感', value: 'F' }
      ]
    },
    {
      id: 'k12',
      text: '你更喜欢：',
      options: [
        { label: '按部就班', value: 'J' },
        { label: '随机应变', value: 'P' }
      ]
    },
    {
      id: 'k13',
      text: '你更倾向于：',
      options: [
        { label: '实干', value: 'S' },
        { label: '思考', value: 'N' }
      ]
    },
    {
      id: 'k14',
      text: '你更看重：',
      options: [
        { label: '效率', value: 'T' },
        { label: '情感', value: 'F' }
      ]
    },
    {
      id: 'k15',
      text: '你更喜欢：',
      options: [
        { label: '结构化', value: 'J' },
        { label: '非结构化', value: 'P' }
      ]
    },
    {
      id: 'k16',
      text: '你认为自己：',
      options: [
        { label: '现实主义者', value: 'S' },
        { label: '理想主义者', value: 'N' }
      ]
    }
  ],
  calculateResult: (answers: Record<string, string>): TestResult => {
    return calculateKeirseyResult(answers);
  }
};

export const DND_ALIGNMENT_TEST: Test = {
  id: 'dnd-alignment',
  title: 'DnD 阵营测试',
  description: '你是守序善良的圣骑士，还是混乱邪恶的恶魔？通过15道情境题，揭示你在经典奇幻世界中的道德与伦理立场。',
  category: 'fun',
  subCategory: '角色扮演',
  questions: [
    {
      id: 'd1',
      text: '你发现一个钱包掉在地上，里面有很多钱，但没有失主的联系方式。你会：',
      options: [
        { label: '交给警察或失物招领处（守序）', value: 'L' },
        { label: '留在原地，或者分给需要的人（中立）', value: 'N' },
        { label: '直接收起来，反正没人看见（混乱）', value: 'C' }
      ]
    },
    {
      id: 'd2',
      text: '你对法律的态度是：',
      options: [
        { label: '法律是社会的基石，必须遵守', value: 'L' },
        { label: '法律在大多数时候是有用的，但有时需要灵活处理', value: 'N' },
        { label: '法律往往是压迫的工具，个人自由更重要', value: 'C' }
      ]
    },
    {
      id: 'd3',
      text: '如果你拥有绝对的权力，你会：',
      options: [
        { label: '建立一个公正、有序的社会（善良）', value: 'G' },
        { label: '维持现状，确保稳定（中立）', value: 'N' },
        { label: '随心所欲，追求自己的利益（邪恶）', value: 'E' }
      ]
    },
    {
      id: 'd4',
      text: '你如何看待承诺？',
      options: [
        { label: '一旦承诺，就必须履行', value: 'L' },
        { label: '尽量履行，但如果情况变化可以商量', value: 'N' },
        { label: '承诺只是当时的权宜之计', value: 'C' }
      ]
    },
    {
      id: 'd5',
      text: '在面对一个邪恶的敌人时，你会：',
      options: [
        { label: '通过正当的法律手段惩罚他', value: 'L' },
        { label: '只要能阻止他，手段不重要', value: 'N' },
        { label: '用比他更残忍的方式报复他', value: 'C' }
      ]
    },
    {
      id: 'd6',
      text: '你认为人性的本质是：',
      options: [
        { label: '本性善良，需要引导', value: 'G' },
        { label: '中性的，取决于环境', value: 'N' },
        { label: '自私自利的，需要约束', value: 'E' }
      ]
    },
    {
      id: 'd7',
      text: '你更喜欢哪种社会结构？',
      options: [
        { label: '等级森严、分工明确的组织', value: 'L' },
        { label: '松散合作、互不干涉的群体', value: 'N' },
        { label: '完全自由、没有约束的个体', value: 'C' }
      ]
    },
    {
      id: 'd8',
      text: '为了大众的利益，牺牲少数人是合理的吗？',
      options: [
        { label: '不，每个人的生命都同样宝贵（善良）', value: 'G' },
        { label: '这是一个艰难的抉择，取决于具体情况（中立）', value: 'N' },
        { label: '是的，只要能达到目的（邪恶）', value: 'E' }
      ]
    },
    {
      id: 'd9',
      text: '你对传统的态度是：',
      options: [
        { label: '尊重并传承传统', value: 'L' },
        { label: '取其精华，去其糟粕', value: 'N' },
        { label: '传统往往是进步的阻碍', value: 'C' }
      ]
    },
    {
      id: 'd10',
      text: '你如何看待谎言？',
      options: [
        { label: '诚实是最高准则，绝不撒谎', value: 'G' },
        { label: '善意的谎言是可以接受的', value: 'N' },
        { label: '谎言只是达到目的的工具', value: 'E' }
      ]
    },
    {
      id: 'd11',
      text: '你更倾向于：',
      options: [
        { label: '为了正义而战', value: 'G' },
        { label: '为了生存而战', value: 'N' },
        { label: '为了权力而战', value: 'E' }
      ]
    },
    {
      id: 'd12',
      text: '你如何看待权威？',
      options: [
        { label: '权威应该被尊重和服从', value: 'L' },
        { label: '权威应该被监督和质疑', value: 'N' },
        { label: '权威应该被挑战和推翻', value: 'C' }
      ]
    },
    {
      id: 'd13',
      text: '你认为最理想的世界是：',
      options: [
        { label: '充满爱与和平的世界', value: 'G' },
        { label: '平衡与自然的世界', value: 'N' },
        { label: '强者统治弱者的世界', value: 'E' }
      ]
    },
    {
      id: 'd14',
      text: '在团队中，你通常：',
      options: [
        { label: '遵守纪律，听从指挥', value: 'L' },
        { label: '独立思考，适度配合', value: 'N' },
        { label: '随心所欲，不听调遣', value: 'C' }
      ]
    },
    {
      id: 'd15',
      text: '你对弱者的态度是：',
      options: [
        { label: '尽力保护和帮助他们', value: 'G' },
        { label: '同情他们，但无力改变', value: 'N' },
        { label: '弱肉强食是自然法则', value: 'E' }
      ]
    }
  ],
  calculateResult: (answers: Record<string, string>): TestResult => {
    return calculateDndAlignmentResult(answers);
  }
};

export const LOVE_LANGUAGES_TEST: Test = {
  id: 'love-languages',
  title: '5种爱的语言测试',
  description: '每个人都有自己独特的“爱的语言”。通过30道题目，发现你最渴望的爱的方式，以及如何更好地爱你的伴侣。',
  category: 'career', // Putting it in career/relationships category
  subCategory: '亲密关系',
  questions: [
    {
      id: 'l1',
      text: '我更喜欢：',
      options: [
        { label: '伴侣对我表达赞美和肯定', value: 'Words' },
        { label: '伴侣为我做一些实际的事情（如做饭、洗碗）', value: 'Acts' }
      ]
    },
    {
      id: 'l2',
      text: '我更喜欢：',
      options: [
        { label: '伴侣送我精心挑选的礼物', value: 'Gifts' },
        { label: '伴侣花时间陪我进行深入的交谈', value: 'Time' }
      ]
    },
    {
      id: 'l3',
      text: '我更喜欢：',
      options: [
        { label: '伴侣在公共场合牵我的手', value: 'Touch' },
        { label: '伴侣在我忙碌时主动帮我分担家务', value: 'Acts' }
      ]
    },
    {
      id: 'l4',
      text: '我更喜欢：',
      options: [
        { label: '伴侣告诉我他/她有多爱我', value: 'Words' },
        { label: '伴侣带我去一个我一直想去的地方', value: 'Time' }
      ]
    },
    {
      id: 'l5',
      text: '我更喜欢：',
      options: [
        { label: '伴侣送我一份意外的小惊喜', value: 'Gifts' },
        { label: '伴侣在看电视时搂着我', value: 'Touch' }
      ]
    },
    {
      id: 'l6',
      text: '我更喜欢：',
      options: [
        { label: '伴侣陪我一起散步聊天', value: 'Time' },
        { label: '伴侣帮我处理一些棘手的琐事', value: 'Acts' }
      ]
    },
    {
      id: 'l7',
      text: '我更喜欢：',
      options: [
        { label: '伴侣写一张充满爱意的小纸条给我', value: 'Words' },
        { label: '伴侣在告别时给我一个深情的拥抱', value: 'Touch' }
      ]
    },
    {
      id: 'l8',
      text: '我更喜欢：',
      options: [
        { label: '伴侣送我一件我真正需要的礼物', value: 'Gifts' },
        { label: '伴侣推掉其他应酬专程来陪我', value: 'Time' }
      ]
    },
    {
      id: 'l9',
      text: '我更喜欢：',
      options: [
        { label: '伴侣在我遇到困难时给予鼓励', value: 'Words' },
        { label: '伴侣在我生病时悉心照顾我', value: 'Acts' }
      ]
    },
    {
      id: 'l10',
      text: '我更喜欢：',
      options: [
        { label: '伴侣在出差回来时给我带礼物', value: 'Gifts' },
        { label: '伴侣在睡前和我分享一天的感受', value: 'Time' }
      ]
    },
    {
      id: 'l11',
      text: '我更喜欢：',
      options: [
        { label: '伴侣在别人面前夸奖我', value: 'Words' },
        { label: '伴侣主动承担起照顾孩子的责任', value: 'Acts' }
      ]
    },
    {
      id: 'l12',
      text: '我更喜欢：',
      options: [
        { label: '伴侣送我一份象征我们爱情的礼物', value: 'Gifts' },
        { label: '伴侣在看电影时握着我的手', value: 'Touch' }
      ]
    },
    {
      id: 'l13',
      text: '我更喜欢：',
      options: [
        { label: '伴侣告诉我他/她为我感到骄傲', value: 'Words' },
        { label: '伴侣陪我一起去超市购物', value: 'Time' }
      ]
    },
    {
      id: 'l14',
      text: '我更喜欢：',
      options: [
        { label: '伴侣送我一份手工制作的礼物', value: 'Gifts' },
        { label: '伴侣在过马路时护着我', value: 'Touch' }
      ]
    },
    {
      id: 'l15',
      text: '我更喜欢：',
      options: [
        { label: '伴侣在我累的时候帮我按摩', value: 'Touch' },
        { label: '伴侣在我忙得不可开交时帮我跑腿', value: 'Acts' }
      ]
    },
    {
      id: 'l16',
      text: '我更喜欢：',
      options: [
        { label: '伴侣经常对我说“我爱你”', value: 'Words' },
        { label: '伴侣在周末全心全意地陪伴我', value: 'Time' }
      ]
    },
    {
      id: 'l17',
      text: '我更喜欢：',
      options: [
        { label: '伴侣送我一束花或一份小礼物', value: 'Gifts' },
        { label: '伴侣在我难过时静静地抱着我', value: 'Touch' }
      ]
    },
    {
      id: 'l18',
      text: '我更喜欢：',
      options: [
        { label: '伴侣肯定我的能力和成就', value: 'Words' },
        { label: '伴侣帮我修理坏掉的电器', value: 'Acts' }
      ]
    },
    {
      id: 'l19',
      text: '我更喜欢：',
      options: [
        { label: '伴侣和我一起制定未来的计划', value: 'Time' },
        { label: '伴侣在早晨吻别我', value: 'Touch' }
      ]
    },
    {
      id: 'l20',
      text: '我更喜欢：',
      options: [
        { label: '伴侣送我一份纪念日礼物', value: 'Gifts' },
        { label: '伴侣在我说话时全神贯注地听', value: 'Time' }
      ]
    },
    {
      id: 'l21',
      text: '我更喜欢：',
      options: [
        { label: '伴侣在社交媒体上表达对我的爱', value: 'Words' },
        { label: '伴侣在我加班时为我准备宵夜', value: 'Acts' }
      ]
    },
    {
      id: 'l22',
      text: '我更喜欢：',
      options: [
        { label: '伴侣送我一份昂贵的礼物', value: 'Gifts' },
        { label: '伴侣在散步时搂着我的肩膀', value: 'Touch' }
      ]
    },
    {
      id: 'l23',
      text: '我更喜欢：',
      options: [
        { label: '伴侣感谢我为家庭所做的贡献', value: 'Words' },
        { label: '伴侣陪我一起去旅行', value: 'Time' }
      ]
    },
    {
      id: 'l24',
      text: '我更喜欢：',
      options: [
        { label: '伴侣送我一份实用的礼物', value: 'Gifts' },
        { label: '伴侣在看书时靠在我身上', value: 'Touch' }
      ]
    },
    {
      id: 'l25',
      text: '我更喜欢：',
      options: [
        { label: '伴侣在我生病时为我倒水拿药', value: 'Acts' },
        { label: '伴侣在我难过时给我一个吻', value: 'Touch' }
      ]
    },
    {
      id: 'l26',
      text: '我更喜欢：',
      options: [
        { label: '伴侣夸奖我的外貌和穿着', value: 'Words' },
        { label: '伴侣和我一起进行户外运动', value: 'Time' }
      ]
    },
    {
      id: 'l27',
      text: '我更喜欢：',
      options: [
        { label: '伴侣送我一份我渴望已久的礼物', value: 'Gifts' },
        { label: '伴侣在我忙碌时帮我接电话', value: 'Acts' }
      ]
    },
    {
      id: 'l28',
      text: '我更喜欢：',
      options: [
        { label: '伴侣对我说一些甜蜜的情话', value: 'Words' },
        { label: '伴侣在看电视时握着我的手', value: 'Touch' }
      ]
    },
    {
      id: 'l29',
      text: '我更喜欢：',
      options: [
        { label: '伴侣陪我一起去参加聚会', value: 'Time' },
        { label: '伴侣帮我洗车或打扫卫生', value: 'Acts' }
      ]
    },
    {
      id: 'l30',
      text: '我更喜欢：',
      options: [
        { label: '伴侣送我一份特别的礼物', value: 'Gifts' },
        { label: '伴侣在睡前给我一个晚安吻', value: 'Touch' }
      ]
    }
  ],
  calculateResult: (answers: Record<string, string>): TestResult => {
    return calculateLoveLanguagesResult(answers);
  }
};

export const TCM_TEST: Test = {
  id: 'tcm-constitution',
  title: '中医体质分类与判定自测',
  description: '根据中华中医药学会标准，通过对身体状态的评估，判定你属于九种中医体质中的哪一种，并提供相应的养生建议。',
  category: 'health',
  subCategory: '中医养生',
  questions: [
    // 1. 气虚质 (Qi-deficient)
    { id: 'q1', text: '你容易疲乏吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q2', text: '你容易气短（呼吸短促，接不上气）吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q3', text: '你说话声音低弱无力吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q4', text: '你感到心慌吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q5', text: '你容易头晕或站起时眼黑吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q6', text: '你比别人容易患感冒吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q7', text: '你喜欢安静、懒得说话吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q8', text: '你活动后容易出汗吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },

    // 2. 阳虚质 (Yang-deficient)
    { id: 'q9', text: '你手脚发凉吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q10', text: '你胃部、背部或腰膝部怕冷吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q11', text: '你感到怕冷、比别人穿得多吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q12', text: '你吃（喝）凉的东西后会感到不舒服或者怕吃（喝）凉的东西吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q13', text: '你受凉或吃冷食后容易腹泻（拉肚子）吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q14', text: '你感到精力不振吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q15', text: '你大便稀溏吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },

    // 3. 阴虚质 (Yin-deficient)
    { id: 'q16', text: '你感到手脚心发热吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q17', text: '你感到身体、脸上发热吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q18', text: '你皮肤干燥吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q19', text: '你口唇颜色比一般人红吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q20', text: '你容易便秘或大便干燥吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q21', text: '你面部两颧潮红吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q22', text: '你感到眼睛干涩吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q23', text: '你感到口干咽燥、总想喝水吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },

    // 4. 痰湿质 (Phlegm-dampness)
    { id: 'q24', text: '你感到胸闷或腹部胀满吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q25', text: '你感到身体沉重不轻松吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q26', text: '你腹部肥满松软吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q27', text: '你额部油脂分泌多吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q28', text: '你上眼睑比别人肿（轻微隆起）吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q29', text: '你嘴里有黏黏的感觉吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q30', text: '你平时痰多，咽部总有痰堵着的感觉吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q31', text: '你舌苔厚腻吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },

    // 5. 湿热质 (Damp-heat)
    { id: 'q32', text: '你面部或鼻部有油腻感或者油亮发光吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q33', text: '你容易生痤疮或疮疖吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q34', text: '你感到口苦或嘴里有异味吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q35', text: '你大便黏滞不爽、有解不尽的感觉吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q36', text: '你小便时尿道有发热感、尿色浓（深）吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q37', text: '你阴囊潮湿吗？（男）/ 你带下增多、色黄吗？（女）', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },

    // 6. 血瘀质 (Blood-stasis)
    { id: 'q38', text: '你皮肤常在不知不觉中出现紫瘀斑（青一块紫一块）吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q39', text: '你皮肤上有丝状红缕（微血管扩张）吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q40', text: '你面色晦暗或容易出现褐斑吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q41', text: '你口唇颜色偏暗吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q42', text: '你感到身体某部位刺痛吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q43', text: '你眼眶暗黑吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q44', text: '你皮肤干涩、脱屑吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },

    // 7. 气郁质 (Qi-stagnation)
    { id: 'q45', text: '你感到精神抑郁、情绪低沉吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q46', text: '你多愁善感、容易情感脆弱吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q47', text: '你容易感到害怕或受到惊吓吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q48', text: '你感到胁肋部胀满吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q49', text: '你无缘无故叹气吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q50', text: '你咽喉部有异物感，吞之不下、吐之不出吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q51', text: '你容易失眠吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },

    // 8. 特禀质 (Special diathesis)
    { id: 'q52', text: '你容易过敏（对药物、食物、气味、花粉或其它隔季过敏）吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q53', text: '你打喷嚏吗？（非感冒时）', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q54', text: '你鼻塞、流鼻涕吗？（非感冒时）', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q55', text: '你容易因过敏出现风团、风疹块、皮肤瘙痒吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },
    { id: 'q56', text: '你皮肤一抓就红，并出现抓痕吗？', options: [{ label: '没有', value: '0' }, { label: '很少', value: '1' }, { label: '有时', value: '2' }, { label: '经常', value: '3' }, { label: '总是', value: '4' }] },

    // 9. 平和质 (Balanced)
    { id: 'q57', text: '你感到精力充沛吗？', options: [{ label: '总是', value: '0' }, { label: '经常', value: '1' }, { label: '有时', value: '2' }, { label: '很少', value: '3' }, { label: '没有', value: '4' }] },
    { id: 'q58', text: '你面色红润有光泽吗？', options: [{ label: '总是', value: '0' }, { label: '经常', value: '1' }, { label: '有时', value: '2' }, { label: '很少', value: '3' }, { label: '没有', value: '4' }] },
    { id: 'q59', text: '你睡眠好吗？', options: [{ label: '总是', value: '0' }, { label: '经常', value: '1' }, { label: '有时', value: '2' }, { label: '很少', value: '3' }, { label: '没有', value: '4' }] },
    { id: 'q60', text: '你胃口好吗？', options: [{ label: '总是', value: '0' }, { label: '经常', value: '1' }, { label: '有时', value: '2' }, { label: '很少', value: '3' }, { label: '没有', value: '4' }] }
  ],
  calculateResult: (answers: Record<string, string>): TestResult => {
    return calculateTcmResult(answers);
  }
};

export const BIG_FIVE_TEST: Test = {
  id: 'big-five',
  title: '大五人格测试 (OCEAN)',
  description: '大五人格模型是目前心理学界公认的最全面、最科学的人格分类模型。通过五个维度：开放性、尽责性、外向性、宜人性和神经质，全面揭示你的性格底色。',
  category: 'personality',
  subCategory: '专业人格',
  questions: [
    // Extraversion (E)
    { id: 'e1', text: '我是聚会上的焦点。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'e2', text: '我不介意成为关注的中心。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'e3', text: '我喜欢和人聊天。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'e4', text: '我精力充沛。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'e5', text: '我喜欢结交新朋友。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'e6', text: '我通常是带头行动的那个人。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'e7', text: '我喜欢热闹的聚会。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'e8', text: '我很容易和陌生人打成一片。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'e9', text: '我喜欢在团队中表达自己的观点。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'e10', text: '我经常感到充满活力。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },

    // Agreeableness (A)
    { id: 'a1', text: '我对他人的感受很敏感。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'a2', text: '我喜欢帮助他人。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'a3', text: '我相信他人是善良的。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'a4', text: '我待人真诚。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'a5', text: '我乐于分享我的时间。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'a6', text: '我很少对别人产生敌意。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'a7', text: '我倾向于原谅那些伤害过我的人。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'a8', text: '我喜欢看到别人成功。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'a9', text: '我通常能理解别人的难处。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'a10', text: '我愿意为了团队利益做出妥协。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },

    // Conscientiousness (C)
    { id: 'c1', text: '我做事总是准备得很充分。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'c2', text: '我喜欢井井有条。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'c3', text: '我总是按计划行事。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'c4', text: '我做事很细心。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'c5', text: '我总是能按时完成任务。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'c6', text: '我对自己要求很严格。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'c7', text: '我喜欢把东西放回原处。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'c8', text: '我很少浪费时间。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'c9', text: '我做事很有条理。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'c10', text: '我追求卓越的工作质量。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },

    // Neuroticism (N)
    { id: 'n1', text: '我很容易感到压力。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'n2', text: '我经常情绪波动。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'n3', text: '我很容易感到烦恼。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'n4', text: '我经常感到忧郁。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'n5', text: '我经常担心事情会变糟。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'n6', text: '我很容易感到恐慌。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'n7', text: '我经常觉得无法应对生活中的困难。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'n8', text: '我很容易感到自卑。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'n9', text: '我经常感到焦虑。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'n10', text: '我很容易受到他人评价的影响。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },

    // Openness (O)
    { id: 'o1', text: '我产生新想法的速度很快。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'o2', text: '我拥有丰富的想象力。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'o3', text: '我对抽象概念很感兴趣。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'o4', text: '我喜欢哲学性的讨论。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'o5', text: '我喜欢尝试新鲜事物。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'o6', text: '我对艺术和美学有特殊的感悟。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'o7', text: '我喜欢思考人生的意义。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'o8', text: '我喜欢听不同风格的音乐。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'o9', text: '我喜欢探索未知的领域。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
    { id: 'o10', text: '我经常会有一些离奇的幻想。', options: [{ label: '非常不符合', value: '1' }, { label: '比较不符合', value: '2' }, { label: '中立', value: '3' }, { label: '比较符合', value: '4' }, { label: '非常符合', value: '5' }] },
  ],
  calculateResult: (answers: Record<string, string>): TestResult => {
    return calculateBigFiveResult(answers);
  }
};

export const TESTS = [MBTI_TEST, BIG_FIVE_TEST, ENNEAGRAM_TEST, JUNG_TEST, HOLLAND_TEST, STRESS_TEST, CATTELL_16PF_TEST, KEIRSEY_TEST, DND_ALIGNMENT_TEST, LOVE_LANGUAGES_TEST, TCM_TEST];
