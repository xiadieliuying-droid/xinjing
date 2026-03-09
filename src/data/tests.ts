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
    { id: 'sn2', text: '你更喜欢哪种类型的描述：', options: [{ label: '具体的、可感知的描述', value: 'S' }, { label: '比喻的、象征的、抽象的描述', value: 'N' }] },
    { id: 'tf2', text: '当朋友遇到困难时，你的第一反应通常是：', options: [{ label: '分析问题原因并提供解决方案', value: 'T' }, { label: '给予情感支持并表达同情', value: 'F' }] },
    { id: 'jp2', text: '面对一项新任务，你倾向于：', options: [{ label: '先制定详细计划再开始执行', value: 'J' }, { label: '边做边摸索，根据情况调整', value: 'P' }] },
    { id: 'ei3', text: '在团队讨论中，你通常：', options: [{ label: '先说出想法，在交流中完善', value: 'E' }, { label: '先在脑中思考成熟，再开口表达', value: 'I' }] },
    { id: 'sn3', text: '你更欣赏哪种人：', options: [{ label: '脚踏实地、注重实效的人', value: 'S' }, { label: '富有想象力、眼光长远的人', value: 'N' }] },
    { id: 'tf3', text: '你认为哪种评价更让你受用：', options: [{ label: '"你是一个非常有逻辑和能力的人"', value: 'T' }, { label: '"你是一个非常善良和体贴的人"', value: 'F' }] },
    { id: 'jp3', text: '对于截止日期，你的态度通常是：', options: [{ label: '提前规划，尽早完成以避免压力', value: 'J' }, { label: '在最后期限的压力下效率最高', value: 'P' }] },
    { id: 'ei4', text: '在聚会中，你通常会：', options: [{ label: '活跃气氛、主动与他人交谈', value: 'E' }, { label: '安静观察、等待被他人引荐', value: 'I' }] },
    { id: 'sn4', text: '你更喜欢哪种工作：', options: [{ label: '处理具体事务和现有流程', value: 'S' }, { label: '构思新方案和探索可能性', value: 'N' }] },
    { id: 'tf4', text: '在评价他人时，你更看重：', options: [{ label: '对方的能力和逻辑严密性', value: 'T' }, { label: '对方的善良和对他人的关怀', value: 'F' }] },
    { id: 'jp4', text: '你的办公桌或房间通常：', options: [{ label: '整洁有序，每样东西都有固定位置', value: 'J' }, { label: '随意堆放，但你能找到需要的东西', value: 'P' }] },
    { id: 'ei5', text: '你更喜欢哪种社交节奏：', options: [{ label: '频繁的聚会和广泛的交际圈', value: 'E' }, { label: '偶尔的深度交谈和紧密的小圈子', value: 'I' }] },
    { id: 'sn5', text: '在信息获取时，你更倾向于：', options: [{ label: '相信经验和已有的事实', value: 'S' }, { label: '相信直觉和潜在的预感', value: 'N' }] },
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
    { id: 'ei10', text: '在日常交流中，你更喜欢哪种沟通方式：', options: [{ label: '面对面交谈', value: 'E' }, { label: '文字交流', value: 'I' }] },
    { id: 'sn10', text: '在观察事物时，你更倾向于：', options: [{ label: '关注细节', value: 'S' }, { label: '关注大局', value: 'N' }] },
    { id: 'tf10', text: '在情绪管理方面，你认为自己更：', options: [{ label: '理智冷静', value: 'T' }, { label: '热情洋溢', value: 'F' }] },
    { id: 'jp10', text: '你更喜欢：', options: [{ label: '明确的结论', value: 'J' }, { label: '开放的可能性', value: 'P' }] },
    { id: 'ei11', text: '在聚会中，你通常：', options: [{ label: '主动结识新朋友', value: 'E' }, { label: '只和熟人聊天', value: 'I' }] },
    { id: 'sn11', text: '你更喜欢：', options: [{ label: '实用的工具', value: 'S' }, { label: '艺术的灵感', value: 'N' }] },
    { id: 'tf11', text: '在判断陌生人行为时，你认为自己更：', options: [{ label: '客观公正', value: 'T' }, { label: '主观同情', value: 'F' }] },
    { id: 'jp11', text: '你更喜欢：', options: [{ label: '提前预约', value: 'J' }, { label: '临时起意', value: 'P' }] },
    { id: 'ei12', text: '你更喜欢：', options: [{ label: '快节奏的生活', value: 'E' }, { label: '慢节奏的生活', value: 'I' }] },
    { id: 'sn12', text: '你更喜欢：', options: [{ label: '事实和数据', value: 'S' }, { label: '理论和模型', value: 'N' }] },
    { id: 'tf12', text: '在处理家庭人际关系时，你认为自己更：', options: [{ label: '坚定果断', value: 'T' }, { label: '温柔体贴', value: 'F' }] },
    { id: 'jp12', text: '你更喜欢：', options: [{ label: '有条不紊', value: 'J' }, { label: '顺其自然', value: 'P' }] },
    { id: 'ei13', text: '你更喜欢：', options: [{ label: '多人合作', value: 'E' }, { label: '独立工作', value: 'I' }] },
    { id: 'sn13', text: '你更喜欢：', options: [{ label: '现实主义', value: 'S' }, { label: '理想主义', value: 'N' }] },
    { id: 'tf13', text: '在做职业决定时，你认为自己更：', options: [{ label: '务实', value: 'T' }, { label: '感性', value: 'F' }] },
    { id: 'jp13', text: '你更喜欢：', options: [{ label: '确定性', value: 'J' }, { label: '灵活性', value: 'P' }] },
    { id: 'ei14', text: '你更喜欢：', options: [{ label: '热闹的餐厅', value: 'E' }, { label: '安静的咖啡馆', value: 'I' }] },
    { id: 'sn14', text: '你更喜欢：', options: [{ label: '具体的任务', value: 'S' }, { label: '抽象的概念', value: 'N' }] },
    { id: 'tf14', text: '在解决技术问题时，你认为自己更：', options: [{ label: '头脑清晰', value: 'T' }, { label: '心地柔软', value: 'F' }] },
    { id: 'jp14', text: '你更喜欢：', options: [{ label: '按计划行事', value: 'J' }, { label: '随遇而安', value: 'P' }] },
    { id: 'ei15', text: '你更喜欢：', options: [{ label: '广交朋友', value: 'E' }, { label: '知己二三', value: 'I' }] },
    { id: 'sn15', text: '你更喜欢：', options: [{ label: '熟悉的事物', value: 'S' }, { label: '新奇的事物', value: 'N' }] },
    { id: 'tf15', text: '在公共场合情感表达上，你认为自己更：', options: [{ label: '理智', value: 'T' }, { label: '情感', value: 'F' }] },
    { id: 'jp15', text: '你更喜欢：', options: [{ label: '有准备', value: 'J' }, { label: '即兴发挥', value: 'P' }] },
    { id: 'ei16', text: '你更喜欢：', options: [{ label: '表达自己', value: 'E' }, { label: '倾听别人', value: 'I' }] },
    { id: 'sn16', text: '你更喜欢：', options: [{ label: '细节', value: 'S' }, { label: '大局', value: 'N' }] },
    { id: 'tf16', text: '在与陌生人相处时，你认为自己更：', options: [{ label: '冷静', value: 'T' }, { label: '热情', value: 'F' }] },
    { id: 'jp16', text: '你更喜欢：', options: [{ label: '有计划', value: 'J' }, { label: '无计划', value: 'P' }] },
    { id: 'ei17', text: '你更喜欢：', options: [{ label: '团队运动', value: 'E' }, { label: '个人运动', value: 'I' }] },
    { id: 'sn17', text: '你更喜欢：', options: [{ label: '实干', value: 'S' }, { label: '构思', value: 'N' }] },
    { id: 'tf17', text: '在学术争论中，你认为自己更：', options: [{ label: '讲理', value: 'T' }, { label: '讲情', value: 'F' }] },
    { id: 'jp17', text: '你更喜欢：', options: [{ label: '有组织', value: 'J' }, { label: '自发性', value: 'P' }] },
    { id: 'ei18', text: '你更喜欢：', options: [{ label: '社交媒体', value: 'E' }, { label: '私人日记', value: 'I' }] },
    { id: 'sn18', text: '你更喜欢：', options: [{ label: '常识', value: 'S' }, { label: '灵感', value: 'N' }] },
    { id: 'tf18', text: '在评价下属工作时，你认为自己更：', options: [{ label: '分析型', value: 'T' }, { label: '同情型', value: 'F' }] },
    { id: 'jp18', text: '你更喜欢：', options: [{ label: '有结构', value: 'J' }, { label: '无拘束', value: 'P' }] },
    { id: 'ei19', text: '你更喜欢：', options: [{ label: '公开演讲', value: 'E' }, { label: '书面报告', value: 'I' }] },
    { id: 'sn19', text: '你更喜欢：', options: [{ label: '现成的方案', value: 'S' }, { label: '全新的尝试', value: 'N' }] },
    { id: 'tf19', text: '在评价政治观点时，你认为自己更：', options: [{ label: '批判性', value: 'T' }, { label: '包容性', value: 'F' }] },
    { id: 'jp19', text: '你更喜欢：', options: [{ label: '有预见', value: 'J' }, { label: '随遇而安', value: 'P' }] },
    { id: 'ei20', text: '你更喜欢：', options: [{ label: '大城市', value: 'E' }, { label: '小城镇', value: 'I' }] },
    { id: 'sn20', text: '你更喜欢：', options: [{ label: '具体的例子', value: 'S' }, { label: '抽象的原理', value: 'N' }] },
    { id: 'tf20', text: '在做道德决定时，你认为自己更：', options: [{ label: '原则性', value: 'T' }, { label: '灵活性', value: 'F' }] },
    { id: 'jp20', text: '你更喜欢：', options: [{ label: '有条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei21', text: '你更喜欢：', options: [{ label: '分享快乐', value: 'E' }, { label: '独自品味', value: 'I' }] },
    { id: 'sn21', text: '你更喜欢：', options: [{ label: '实实在在', value: 'S' }, { label: '虚无缥缈', value: 'N' }] },
    { id: 'tf21', text: '在思考科学问题时，你认为自己更：', options: [{ label: '逻辑严密', value: 'T' }, { label: '情感丰富', value: 'F' }] },
    { id: 'jp21', text: '你更喜欢：', options: [{ label: '有计划', value: 'J' }, { label: '无计划', value: 'P' }] },
    { id: 'ei22', text: '你更喜欢：', options: [{ label: '集体讨论', value: 'E' }, { label: '独立思考', value: 'I' }] },
    { id: 'sn22', text: '你更喜欢：', options: [{ label: '具体的步骤', value: 'S' }, { label: '模糊的方向', value: 'N' }] },
    { id: 'tf22', text: '在判断商业行为时，你认为自己更：', options: [{ label: '客观公正', value: 'T' }, { label: '主观同情', value: 'F' }] },
    { id: 'jp22', text: '你更喜欢：', options: [{ label: '有结论', value: 'J' }, { label: '有过程', value: 'P' }] },
    { id: 'ei23', text: '你更喜欢：', options: [{ label: '引人注目', value: 'E' }, { label: '保持低调', value: 'I' }] },
    { id: 'sn23', text: '你更喜欢：', options: [{ label: '现实的挑战', value: 'S' }, { label: '未来的梦想', value: 'N' }] },
    { id: 'tf23', text: '在解决人际关系问题时，你认为自己更：', options: [{ label: '头脑清晰', value: 'T' }, { label: '心地柔软', value: 'F' }] },
    { id: 'jp23', text: '你更喜欢：', options: [{ label: '有准备', value: 'J' }, { label: '即兴', value: 'P' }] },
    { id: 'ei24', text: '你更喜欢：', options: [{ label: '快节奏', value: 'E' }, { label: '慢节奏', value: 'I' }] },
    { id: 'sn24', text: '你更喜欢：', options: [{ label: '具体的细节', value: 'S' }, { label: '宏观的架构', value: 'N' }] },
    { id: 'tf24', text: '在私人场合情感表达上，你认为自己更：', options: [{ label: '理智', value: 'T' }, { label: '情感', value: 'F' }] },
    { id: 'jp24', text: '你更喜欢：', options: [{ label: '有条理', value: 'J' }, { label: '随性', value: 'P' }] },
    { id: 'ei25', text: '你认为自己更像是：', options: [{ label: '外向的人', value: 'E' }, { label: '内向的人', value: 'I' }] },
    { id: 'ei26', text: '在社交场合，你通常：', options: [{ label: '主动与他人交流', value: 'E' }, { label: '等待他人主动', value: 'I' }] },
    { id: 'ei27', text: '你更喜欢：', options: [{ label: '与很多人保持联系', value: 'E' }, { label: '与少数人保持深度关系', value: 'I' }] },
    { id: 'ei28', text: '当你感到压力时，你会：', options: [{ label: '寻求他人的支持和交流', value: 'E' }, { label: '独自冷静和反思', value: 'I' }] },
    { id: 'ei29', text: '你更喜欢哪种工作环境：', options: [{ label: '开放的、多人协作的环境', value: 'E' }, { label: '安静的、独立工作的环境', value: 'I' }] },
    { id: 'ei30', text: '在社交活动后，你通常需要：', options: [{ label: '很少休息，继续参加其他活动', value: 'E' }, { label: '大量休息来恢复精力', value: 'I' }] },
    { id: 'ei31', text: '你更喜欢哪种娱乐方式：', options: [{ label: '参加聚会或集体活动', value: 'E' }, { label: '独自或与少数朋友安静相处', value: 'I' }] },
    { id: 'ei32', text: '在会议中，你通常：', options: [{ label: '积极参与讨论，分享想法', value: 'E' }, { label: '倾听为主，必要时才发言', value: 'I' }] },
    { id: 'ei33', text: '你认为自己的能量来源于：', options: [{ label: '与他人的互动', value: 'E' }, { label: '自我反思和独处', value: 'I' }] },
    { id: 'ei34', text: '在社交中，你更倾向于：', options: [{ label: '广泛交友，认识不同的人', value: 'E' }, { label: '深交几个朋友，保持密切关系', value: 'I' }] },
    { id: 'ei35', text: '你更喜欢哪种学习方式：', options: [{ label: '小组讨论和互动学习', value: 'E' }, { label: '独自阅读和思考', value: 'I' }] },
    { id: 'ei36', text: '在表达自己时，你更倾向于：', options: [{ label: '直接表达，不怕被关注', value: 'E' }, { label: '谨慎表达，避免过多关注', value: 'I' }] },
    { id: 'ei37', text: '你对新环境的适应方式：', options: [{ label: '主动探索，快速融入', value: 'E' }, { label: '观察了解后再逐渐融入', value: 'I' }] },
    { id: 'ei38', text: '你更喜欢哪种社交角色：', options: [{ label: '中心人物，活跃气氛', value: 'E' }, { label: '配角，支持他人', value: 'I' }] },
    { id: 'ei39', text: '在空闲时间，你通常：', options: [{ label: '安排社交活动，充实生活', value: 'E' }, { label: '享受独处时光，放松身心', value: 'I' }] },
    { id: 'ei40', text: '你对陌生人的态度：', options: [{ label: '主动接近，建立联系', value: 'E' }, { label: '保持距离，逐步了解', value: 'I' }] },
    { id: 'ei41', text: '你更喜欢哪种沟通方式：', options: [{ label: '面对面交谈', value: 'E' }, { label: '文字或邮件交流', value: 'I' }] },
    { id: 'ei42', text: '在团队项目中，你更倾向于：', options: [{ label: '担任领导者，组织协调', value: 'E' }, { label: '作为成员，专注执行', value: 'I' }] },
    { id: 'ei43', text: '你对社交邀请的态度：', options: [{ label: '通常接受，乐于参与', value: 'E' }, { label: '选择性接受，需要考虑', value: 'I' }] },
    { id: 'ei44', text: '你在社交中的能量水平：', options: [{ label: '持续高涨，不易疲惫', value: 'E' }, { label: '逐渐消耗，需要充电', value: 'I' }] },
    { id: 'ei45', text: '你更喜欢哪种话题讨论：', options: [{ label: '广泛的、轻松的话题', value: 'E' }, { label: '深入的、有意义的话题', value: 'I' }] },
    { id: 'ei46', text: '在社交中，你更关注：', options: [{ label: '当下的互动和氛围', value: 'E' }, { label: '深层次的理解和连接', value: 'I' }] },
    { id: 'ei47', text: '你对社交网络的使用：', options: [{ label: '活跃，经常更新和互动', value: 'E' }, { label: '偶尔使用，保持低调', value: 'I' }] },
    { id: 'ei48', text: '你更喜欢哪种工作模式：', options: [{ label: '团队协作，共同完成', value: 'E' }, { label: '独立工作，自主完成', value: 'I' }] },
    { id: 'ei49', text: '你对冒险和新体验的态度：', options: [{ label: '积极尝试，寻求刺激', value: 'E' }, { label: '谨慎对待，权衡利弊', value: 'I' }] },
    { id: 'ei50', text: '你认为自己在社交中更像是：', options: [{ label: '给予者，主动付出', value: 'E' }, { label: '接收者，被动回应', value: 'I' }] },
    
    // Sensing/Intuition (50 questions)
    { id: 'sn25', text: '在评价他人时，你更欣赏：', options: [{ label: '脚踏实地的人', value: 'S' }, { label: '有远见的人', value: 'N' }] },
    { id: 'sn26', text: '在日常获取信息时，你的方式更倾向于：', options: [{ label: '通过感官直接体验', value: 'S' }, { label: '通过直觉和联想', value: 'N' }] },
    { id: 'sn27', text: '在生活中，你更关注：', options: [{ label: '当前的实际情况', value: 'S' }, { label: '未来的可能性', value: 'N' }] },
    { id: 'sn28', text: '在日常问题处理上，你更擅长：', options: [{ label: '处理具体的细节问题', value: 'S' }, { label: '思考抽象的概念问题', value: 'N' }] },
    { id: 'sn29', text: '当学习新事物时，你更倾向于：', options: [{ label: '通过实践和经验', value: 'S' }, { label: '通过理论和概念', value: 'N' }] },
    { id: 'sn30', text: '在理解复杂事物时，你更倾向于：', options: [{ label: '具体的事实和细节', value: 'S' }, { label: '整体的意义和关联', value: 'N' }] },
    { id: 'sn31', text: '在选择产品时，你更关注：', options: [{ label: '事物的实用性', value: 'S' }, { label: '事物的创新性', value: 'N' }] },
    { id: 'sn32', text: '在面对完全陌生的情况时，你更倾向于：', options: [{ label: '相信已有的经验', value: 'S' }, { label: '探索新的可能性', value: 'N' }] },
    { id: 'sn33', text: '在学习过程中，你更擅长：', options: [{ label: '记忆具体的事实', value: 'S' }, { label: '理解抽象的概念', value: 'N' }] },
    { id: 'sn34', text: '在规划未来时，你更关注：', options: [{ label: '现实的细节', value: 'S' }, { label: '未来的趋势', value: 'N' }] },
    { id: 'sn35', text: '在评估事物价值时，你更倾向于：', options: [{ label: '注重眼前的实际', value: 'S' }, { label: '注重长远的意义', value: 'N' }] },
    { id: 'sn36', text: '在解决工作问题时，你更倾向于：', options: [{ label: '具体的行动', value: 'S' }, { label: '抽象的思考', value: 'N' }] },
    { id: 'sn37', text: '在感知周围环境时，你更倾向于：', options: [{ label: '依赖感官经验', value: 'S' }, { label: '依赖直觉理解', value: 'N' }] },
    { id: 'sn38', text: '在分析问题时，你更关注：', options: [{ label: '具体的细节', value: 'S' }, { label: '整体的概念', value: 'N' }] },
    { id: 'sn39', text: '在日常思考方式上，你更倾向于：', options: [{ label: '实际的思考', value: 'S' }, { label: '理论的思考', value: 'N' }] },
    { id: 'sn40', text: '在处理信息时，你更倾向于：', options: [{ label: '具体的信息', value: 'S' }, { label: '抽象的信息', value: 'N' }] },
    { id: 'sn41', text: '在思考人生问题时，你更倾向于：', options: [{ label: '现实的思考', value: 'S' }, { label: '理想的思考', value: 'N' }] },
    { id: 'sn42', text: '在获取新经验时，你更倾向于：', options: [{ label: '具体的经验', value: 'S' }, { label: '抽象的概念', value: 'N' }] },
    { id: 'sn43', text: '在应用所学知识时，你更倾向于：', options: [{ label: '实际的应用', value: 'S' }, { label: '理论的探索', value: 'N' }] },
    { id: 'sn44', text: '在理解艺术作品时，你更关注：', options: [{ label: '具体的细节', value: 'S' }, { label: '整体的意义', value: 'N' }] },
    { id: 'sn45', text: '在解决个人问题时，你更倾向于：', options: [{ label: '具体的行动', value: 'S' }, { label: '抽象的思考', value: 'N' }] },
    { id: 'sn46', text: '在感知外界信息时，你更倾向于：', options: [{ label: '依赖感官经验', value: 'S' }, { label: '依赖直觉理解', value: 'N' }] },
    { id: 'sn47', text: '在观察自然现象时，你更关注：', options: [{ label: '具体的细节', value: 'S' }, { label: '整体的概念', value: 'N' }] },
    { id: 'sn48', text: '在思考复杂问题时，你更倾向于：', options: [{ label: '实际的思考', value: 'S' }, { label: '理论的思考', value: 'N' }] },
    { id: 'sn49', text: '在接收信息时，你更倾向于：', options: [{ label: '具体的信息', value: 'S' }, { label: '抽象的信息', value: 'N' }] },
    { id: 'sn50', text: '在思考职业发展时，你更倾向于：', options: [{ label: '现实的思考', value: 'S' }, { label: '理想的思考', value: 'N' }] },
    
    // Thinking/Feeling (50 questions)
    { id: 'tf25', text: '在做职业决定的依据上，你更依赖：', options: [{ label: '逻辑思考', value: 'T' }, { label: '情感判断', value: 'F' }] },
    { id: 'tf26', text: '在学术研究中，你更重视：', options: [{ label: '客观事实', value: 'T' }, { label: '个人价值观', value: 'F' }] },
    { id: 'tf27', text: '你在工作团队中更注重：', options: [{ label: '任务的完成质量', value: 'T' }, { label: '团队的和谐氛围', value: 'F' }] },
    { id: 'tf28', text: '你评价求职者时更看重：', options: [{ label: '能力和效率', value: 'T' }, { label: '品德和态度', value: 'F' }] },
    { id: 'tf29', text: '你解决技术问题时更倾向于：', options: [{ label: '分析问题的逻辑', value: 'T' }, { label: '考虑他人的感受', value: 'F' }] },
    { id: 'tf30', text: '你在家庭冲突中更倾向于：', options: [{ label: '坚持自己的观点', value: 'T' }, { label: '寻求共识和和谐', value: 'F' }] },
    { id: 'tf31', text: '你做商业决定时更注重：', options: [{ label: '结果和效率', value: 'T' }, { label: '过程和感受', value: 'F' }] },
    { id: 'tf32', text: '在学术讨论中，你更重视：', options: [{ label: '逻辑的一致性', value: 'T' }, { label: '情感的连贯性', value: 'F' }] },
    { id: 'tf33', text: '你在评价艺术作品时更注重：', options: [{ label: '客观的标准', value: 'T' }, { label: '主观的感受', value: 'F' }] },
    { id: 'tf34', text: '你在做投资决定时更依赖：', options: [{ label: '理性思考', value: 'T' }, { label: '情感直觉', value: 'F' }] },
    { id: 'tf35', text: '在社会议题上，你更重视：', options: [{ label: '公平和正义', value: 'T' }, { label: '慈悲和宽容', value: 'F' }] },
    { id: 'tf36', text: '你在处理工作问题时更倾向于：', options: [{ label: '分析问题', value: 'T' }, { label: '理解问题', value: 'F' }] },
    { id: 'tf37', text: '在科学研究中，你更重视：', options: [{ label: '逻辑的正确性', value: 'T' }, { label: '情感的真实性', value: 'F' }] },
    { id: 'tf38', text: '你在做教育决定时更注重：', options: [{ label: '客观的分析', value: 'T' }, { label: '主观的价值', value: 'F' }] },
    { id: 'tf39', text: '在数据分析中，你更重视：', options: [{ label: '事实和数据', value: 'T' }, { label: '感受和体验', value: 'F' }] },
    { id: 'tf40', text: '你在处理客户问题时更倾向于：', options: [{ label: '逻辑分析', value: 'T' }, { label: '情感共鸣', value: 'F' }] },
    { id: 'tf41', text: '在项目管理中，你更重视：', options: [{ label: '效率和结果', value: 'T' }, { label: '和谐和过程', value: 'F' }] },
    { id: 'tf42', text: '你在做医疗决定时更注重：', options: [{ label: '客观的事实', value: 'T' }, { label: '主观的感受', value: 'F' }] },
    { id: 'tf43', text: '在法律事务中，你更重视：', options: [{ label: '逻辑的一致性', value: 'T' }, { label: '情感的一致性', value: 'F' }] },
    { id: 'tf44', text: '你在处理环境问题时更倾向于：', options: [{ label: '分析问题', value: 'T' }, { label: '理解问题', value: 'F' }] },
    { id: 'tf45', text: '你在做军事决定时更注重：', options: [{ label: '客观的分析', value: 'T' }, { label: '主观的价值', value: 'F' }] },
    { id: 'tf46', text: '在伦理判断中，你更重视：', options: [{ label: '逻辑的正确性', value: 'T' }, { label: '情感的真实性', value: 'F' }] },
    { id: 'tf47', text: '你在做科技决定时更注重：', options: [{ label: '客观的事实', value: 'T' }, { label: '主观的感受', value: 'F' }] },
    { id: 'tf48', text: '在市场调研中，你更重视：', options: [{ label: '事实和数据', value: 'T' }, { label: '感受和体验', value: 'F' }] },
    { id: 'tf49', text: '你在处理国际关系问题时更倾向于：', options: [{ label: '逻辑分析', value: 'T' }, { label: '情感共鸣', value: 'F' }] },
    { id: 'tf50', text: '在体育竞赛中，你更重视：', options: [{ label: '效率和结果', value: 'T' }, { label: '和谐和过程', value: 'F' }] },
    
    // Judging/Perceiving (50 questions)
    { id: 'jp25', text: '你处理工作任务的方式更倾向于：', options: [{ label: '按计划执行', value: 'J' }, { label: '灵活应变', value: 'P' }] },
    { id: 'jp26', text: '在周末生活安排上，你更倾向于：', options: [{ label: '有计划地安排', value: 'J' }, { label: '随遇而安', value: 'P' }] },
    { id: 'jp27', text: '你对工作中未完成的任务感觉：', options: [{ label: '必须尽快完成', value: 'J' }, { label: '可以稍后处理', value: 'P' }] },
    { id: 'jp28', text: '在工作环境中，你更喜欢：', options: [{ label: '明确的规则和结构', value: 'J' }, { label: '灵活的方式和自由', value: 'P' }] },
    { id: 'jp29', text: '你对个人时间的管理更倾向于：', options: [{ label: '严格按照计划', value: 'J' }, { label: '灵活调整计划', value: 'P' }] },
    { id: 'jp30', text: '你对职业生活的规划更倾向于：', options: [{ label: '长期规划', value: 'J' }, { label: '短期规划', value: 'P' }] },
    { id: 'jp31', text: '你对旅行中的意外情况态度更倾向于：', options: [{ label: '感到不安', value: 'J' }, { label: '感到兴奋', value: 'P' }] },
    { id: 'jp32', text: '在面对工作变化时，你更倾向于：', options: [{ label: '提前做好准备', value: 'J' }, { label: '临时应对变化', value: 'P' }] },
    { id: 'jp33', text: '你对学习生活的态度更倾向于：', options: [{ label: '结构化', value: 'J' }, { label: '非结构化', value: 'P' }] },
    { id: 'jp34', text: '在面对投资不确定性时，你更倾向于：', options: [{ label: '追求确定性', value: 'J' }, { label: '接受不确定性', value: 'P' }] },
    { id: 'jp35', text: '在日常饮食方式上，你更倾向于：', options: [{ label: '有计划地生活', value: 'J' }, { label: '随性地生活', value: 'P' }] },
    { id: 'jp36', text: '在做旅行计划时，你更倾向于：', options: [{ label: '提前规划', value: 'J' }, { label: '即兴发挥', value: 'P' }] },
    { id: 'jp37', text: '在处理家务时，你更倾向于：', options: [{ label: '有条理地做事', value: 'J' }, { label: '灵活地做事', value: 'P' }] },
    { id: 'jp38', text: '在对待学习任务时，你更倾向于：', options: [{ label: '追求完成感', value: 'J' }, { label: '享受过程感', value: 'P' }] },
    { id: 'jp39', text: '在健身行动方式上，你更倾向于：', options: [{ label: '计划先行', value: 'J' }, { label: '行动先行', value: 'P' }] },
    { id: 'jp40', text: '在工作环境秩序上，你更倾向于：', options: [{ label: '有序的生活', value: 'J' }, { label: '自由的生活', value: 'P' }] },
    { id: 'jp41', text: '在应对健康问题时，你更倾向于：', options: [{ label: '提前准备', value: 'J' }, { label: '随机应变', value: 'P' }] },
    { id: 'jp42', text: '在社交行动规划上，你更倾向于：', options: [{ label: '有计划地行动', value: 'J' }, { label: '即兴地行动', value: 'P' }] },
    { id: 'jp43', text: '在项目结果期望上，你更倾向于：', options: [{ label: '确定的结果', value: 'J' }, { label: '开放的结果', value: 'P' }] },
    { id: 'jp44', text: '在学习做事结构上，你更倾向于：', options: [{ label: '有结构地做事', value: 'J' }, { label: '无结构地做事', value: 'P' }] },
    { id: 'jp45', text: '在家庭规划安排上，你更倾向于：', options: [{ label: '提前规划', value: 'J' }, { label: '即兴发挥', value: 'P' }] },
    { id: 'jp46', text: '在工作做事风格上，你更倾向于：', options: [{ label: '有条理地做事', value: 'J' }, { label: '灵活地做事', value: 'P' }] },
    { id: 'jp47', text: '在家庭任务完成上，你更倾向于：', options: [{ label: '追求完成感', value: 'J' }, { label: '享受过程感', value: 'P' }] },
    { id: 'jp48', text: '在学习行动顺序上，你更倾向于：', options: [{ label: '计划先行', value: 'J' }, { label: '行动先行', value: 'P' }] },
    { id: 'jp49', text: '在个人财务秩序上，你更倾向于：', options: [{ label: '有序的生活', value: 'J' }, { label: '自由的生活', value: 'P' }] },
    { id: 'jp50', text: '在应对家庭变化时，你更倾向于：', options: [{ label: '提前准备', value: 'J' }, { label: '随机应变', value: 'P' }] }
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
    }
  ],
  calculateResult: (answers: Record<string, string>): TestResult => {
    return calculateJungResult(answers);
  },
};

export const HOLLAND_TEST: Test = {
  id: 'holland',
  title: '霍兰德职业兴趣测试',
  description: '了解你的职业兴趣类型，找到最适合你的工作领域。',
  category: 'career',
  subCategory: '职业兴趣',
  questions: [
    { id: 'q1', text: '你喜欢与工具、机器和设备打交道吗？', options: [{ label: '是', value: 'R' }, { label: '否', value: 'O' }] }
  ],
  calculateResult: (answers: Record<string, string>): TestResult => {
    return calculateHollandResult(answers);
  },
};

export const STRESS_TEST: Test = {
  id: 'stress',
  title: '压力测试',
  description: '评估你的压力水平和应对方式。',
  category: 'wellness',
  subCategory: '心理健康',
  questions: [
    { id: 'q1', text: '你经常感到紧张和焦虑吗？', options: [{ label: '是', value: '1' }, { label: '否', value: '0' }] }
  ],
  calculateResult: (answers: Record<string, string>): TestResult => {
    return calculateStressResult(answers);
  },
};

export const SIXTEEN_PF_TEST: Test = {
  id: '16pf',
  title: '卡特尔16种人格因素测试',
  description: '全面评估你的16种人格特质。',
  category: 'personality',
  subCategory: '人格特质',
  questions: [
    { id: 'q1', text: '你是一个开朗活泼的人吗？', options: [{ label: '是', value: 'A+' }, { label: '否', value: 'A-' }] }
  ],
  calculateResult: (answers: Record<string, string>): TestResult => {
    return calculate16PfResult(answers);
  },
};

export const KEIRSEY_TEST: Test = {
  id: 'keirsey',
  title: '凯尔西气质类型测试',
  description: '了解你的气质类型和行为模式。',
  category: 'personality',
  subCategory: '气质类型',
  questions: [
    { id: 'q1', text: '你更关注事实还是可能性？', options: [{ label: '事实', value: 'S' }, { label: '可能性', value: 'N' }] }
  ],
  calculateResult: (answers: Record<string, string>): TestResult => {
    return calculateKeirseyResult(answers);
  },
};

export const DND_ALIGNMENT_TEST: Test = {
  id: 'dnd-alignment',
  title: 'DND阵营测试',
  description: '发现你在龙与地下城游戏中的道德阵营。',
  category: 'fun',
  subCategory: '游戏',
  questions: [
    { id: 'q1', text: '你认为法律和秩序比个人自由更重要吗？', options: [{ label: '是', value: 'L' }, { label: '否', value: 'C' }] }
  ],
  calculateResult: (answers: Record<string, string>): TestResult => {
    return calculateDndAlignmentResult(answers);
  },
};

export const LOVE_LANGUAGES_TEST: Test = {
  id: 'love-languages',
  title: '爱的语言测试',
  description: '了解你和伴侣的爱的表达和接收方式。',
  category: 'relationship',
  subCategory: '亲密关系',
  questions: [
    { id: 'q1', text: '你更喜欢收到礼物还是品质时间？', options: [{ label: '礼物', value: 'G' }, { label: '品质时间', value: 'T' }] }
  ],
  calculateResult: (answers: Record<string, string>): TestResult => {
    return calculateLoveLanguagesResult(answers);
  },
};

export const TCM_TEST: Test = {
  id: 'tcm',
  title: '中医体质测试',
  description: '了解你的中医体质类型和养生建议。',
  category: 'wellness',
  subCategory: '中医养生',
  questions: [
    { id: 'q1', text: '你容易感到疲劳吗？', options: [{ label: '是', value: '1' }, { label: '否', value: '0' }] }
  ],
  calculateResult: (answers: Record<string, string>): TestResult => {
    return calculateTcmResult(answers);
  },
};

export const BIG_FIVE_TEST: Test = {
  id: 'big-five',
  title: '大五人格测试',
  description: '评估你的五大人格特质：开放性、责任心、外向性、宜人性和神经质。',
  category: 'personality',
  subCategory: '人格特质',
  questions: [
    { id: 'q1', text: '你是一个开放接受新经验的人吗？', options: [{ label: '是', value: 'O+' }, { label: '否', value: 'O-' }] }
  ],
  calculateResult: (answers: Record<string, string>): TestResult => {
    return calculateBigFiveResult(answers);
  },
};

export const TESTS = [
  MBTI_TEST,
  ENNEAGRAM_TEST,
  JUNG_TEST,
  HOLLAND_TEST,
  STRESS_TEST,
  SIXTEEN_PF_TEST,
  KEIRSEY_TEST,
  DND_ALIGNMENT_TEST,
  LOVE_LANGUAGES_TEST,
  TCM_TEST,
  BIG_FIVE_TEST
];
