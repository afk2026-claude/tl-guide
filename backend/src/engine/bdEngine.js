// 后端 BD 分析引擎（JS 版本）

const SKILL_CLASS_MAP = {
  狂人: ['跃击', '旋风斩', '专注斩', '烈焰斩', '冰凌斩', '暴走巨刃', '月华斩', '碎冰刺击', '寒霜破击', '充能猛击', '灰烬之锤', '野蛮冲锋', '锐利贯注', '复苏战吼', '公牛之怒', '石肤术'],
  圣枪游侠: ['寒冰射击', '闪电射击', '分裂射击', '燃烧射击', '电光弹', '炮轰', '侵蚀弹', '侵蚀投掷', '标记箭雨', '箭雨', '不竭弹雨', '暗影冲刺', '模糊', '双重突刺'],
  冰焰: ['五彩魔矢', '裂变火球', '暴风雪', '冰环术', '闪电链', '雷云放射', '冰锥术', '冰魄射线', '闪电风暴', '寒霜地面', '寒冰盾', '魔力沸腾', '闪现', '寒冰贯注', '熔火贯注'],
  时空见证者: ['五彩魔矢', '闪电链', '暗影弹', '暗影之沼', '摄念夺识', '闪电风暴', '闪现', '魔力沸腾', '侵蚀贯注', '石肤术', '召唤腐化之灵'],
  指挥官: ['召唤机械警卫', '召唤火焰之灵', '召唤寒冰之灵', '召唤雷霆之灵', '召唤磐石之灵', '召唤腐化之灵', '夺目绽放', '生息滋养'],
  猫眼: ['跃击', '双重突刺', '凋零刺击', '雷影斩', '暗影冲刺', '模糊', '雷霆贯注'],
  神谕者: ['月华斩', '五彩魔矢', '闪现'],
  逃亡者: ['火箭跳']
};

export function analyzeBD(input) {
  const suggestions = [];
  const heroId = input.heroId || '';

  // 1. 技能完整性
  if (!input.skills || input.skills.length === 0) {
    suggestions.push({
      type: 'add', priority: 'high',
      message: '未选择任何技能',
      reason: '技能是 BD 的核心，建议至少选择 3-5 个核心技能'
    });
  }

  // 2. 装备完整性
  const slots = ['武器', '头盔', '胸甲', '手套', '鞋子', '项链', '戒指', '腰带'];
  const equipped = (input.gear || []).filter(g => g.affixes && g.affixes.length > 0).map(g => g.slot);

  for (const slot of slots) {
    if (!equipped.includes(slot)) {
      suggestions.push({
        type: 'add', slot, priority: 'high',
        message: `${slot} 未装备任何词条`,
        reason: `缺少 ${slot} 词条会损失大量属性，建议优先补齐`
      });
    }
  }

  // 3. 词条数量检查
  for (const gear of input.gear || []) {
    if (gear.affixes && gear.affixes.length < 3) {
      suggestions.push({
        type: 'improve', slot: gear.slot, priority: 'medium',
        message: `${gear.slot} 只有 ${gear.affixes.length} 条词缀`,
        reason: '词缀数量不足，建议通过定向加工补充到 4-6 条'
      });
    }
  }

  // 4. 职业核心属性检查
  const isCaster = ['gemma', 'youga', 'thea'].includes(heroId);
  const isSummoner = heroId === 'moto';
  const isMelee = ['rehan', 'erika', 'bing'].includes(heroId);

  const allAffixNames = (input.gear || []).flatMap(g => (g.affixes || []).map(a => a.name));

  if (isCaster && !allAffixNames.some(n => n.includes('施法'))) {
    suggestions.push({
      type: 'add', priority: 'high',
      message: '法系职业缺少施法速度词条',
      reason: '施法速度是法系输出的核心属性，建议在武器/手套上获取'
    });
  }

  if (isSummoner && !allAffixNames.some(n => n.includes('召唤'))) {
    suggestions.push({
      type: 'add', priority: 'high',
      message: '召唤流派缺少召唤物相关词条',
      reason: '召唤物伤害/等级是核心属性，建议在武器/项链上获取'
    });
  }

  if (isMelee && !allAffixNames.some(n => n.includes('攻击速度') || n.includes('攻速'))) {
    suggestions.push({
      type: 'add', priority: 'high',
      message: '近战职业缺少攻击速度词条',
      reason: '攻速是近战的核心属性，建议在武器/手套上获取'
    });
  }

  // 5. 生存检查
  if (!allAffixNames.some(n => n.includes('生命') || n.includes('护盾'))) {
    suggestions.push({
      type: 'add', priority: 'high',
      message: '没有任何生命或护盾词条，生存能力堪忧',
      reason: '建议在头盔/胸甲/腰带上补充最大生命或护盾词条'
    });
  }

  if (!allAffixNames.some(n => n.includes('抗性'))) {
    suggestions.push({
      type: 'add', priority: 'medium',
      message: '缺少抗性词条',
      reason: '抗性不足会导致元素伤害承受过高，建议在戒指/腰带上补充'
    });
  }

  // 按优先级排序
  const order = { high: 0, medium: 1, low: 2 };
  suggestions.sort((a, b) => order[a.priority] - order[b.priority]);

  return suggestions;
}

export function scoreBD(input) {
  let score = 0;
  const max = 100;

  // 装备完整度 (40分)
  const slots = ['武器', '头盔', '胸甲', '手套', '鞋子', '项链', '戒指', '腰带'];
  const equipped = (input.gear || []).filter(g => g.affixes && g.affixes.length > 0).length;
  score += (equipped / slots.length) * 40;

  // 词条数量 (30分)
  const totalAffixes = (input.gear || []).reduce((sum, g) => sum + (g.affixes || []).length, 0);
  score += Math.min(totalAffixes / 16, 1) * 30;

  // 技能选择 (30分)
  const validSkills = (input.skills || []).filter(id => typeof id === 'string').length;
  score += (validSkills / Math.max((input.skills || []).length, 1)) * 30;

  const finalScore = Math.round(Math.min(score, max));
  let label = '初步构思 💭';
  if (finalScore >= 80) label = '优秀 ✨';
  else if (finalScore >= 60) label = '良好 👍';
  else if (finalScore >= 40) label = '待完善 🔧';

  return { score: finalScore, max, label };
}
