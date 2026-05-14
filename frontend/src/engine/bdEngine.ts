import { BDInput, BDSuggestion, GearInput } from '../types';
import type { Hero } from '../types';
import { heroes } from '../data/heroes';
import { skills } from '../data/skills';
import { affixes as affixData } from '../data/affixes';

// ===== 核心分析函数 =====
export function analyzeBD(input: BDInput): BDSuggestion[] {
  const suggestions: BDSuggestion[] = [];
  const hero = heroes.find(h => h.id === input.heroId);
  if (!hero) return suggestions;

  // 1. 技能与职业匹配检查
  checkSkillClassMatch(input, hero.name, suggestions);

  // 2. 装备词条完整性检查
  checkGearCompleteness(input, suggestions);

  // 3. 词条优先级建议
  checkAffixPriority(input, hero, suggestions);

  // 4. 生存能力检查
  checkSurvival(input, suggestions);

  return suggestions.sort((a, b) => {
    const order = { high: 0, medium: 1, low: 2 };
    return order[a.priority] - order[b.priority];
  });
}

// 1. 技能与职业匹配
function checkSkillClassMatch(input: BDInput, heroName: string, suggestions: BDSuggestion[]) {
  const heroSkills = skills.filter(s => s.classes.includes(heroName));
  for (const skillId of input.skills) {
    const skill = skills.find(s => s.id === skillId);
    if (!skill) continue;
    if (!skill.classes.includes(heroName)) {
      suggestions.push({
        type: 'replace',
        message: `技能「${skill.name}」不属于 ${heroName} 的技能池`,
        priority: 'high',
        reason: `该技能无法被 ${heroName} 使用，建议替换为 ${heroSkills.slice(0, 3).map(s => s.name).join('、')} 等`
      });
    }
  }
}

// 2. 装备完整性
function checkGearCompleteness(input: BDInput, suggestions: BDSuggestion[]) {
  const slots = ['武器', '头盔', '胸甲', '手套', '鞋子', '项链', '戒指', '腰带'];
  const equipped = new Set(input.gear.map(g => g.slot));

  for (const slot of slots) {
    if (!equipped.has(slot as any)) {
      suggestions.push({
        type: 'add',
        slot: slot as any,
        message: `${slot} 部位未装备任何词条`,
        priority: 'high',
        reason: `缺少 ${slot} 词条会损失大量属性，建议优先补齐`
      });
    } else {
      const gear = input.gear.find(g => g.slot === slot)!;
      if (gear.affixes.length < 3) {
        suggestions.push({
          type: 'improve',
          slot: slot as any,
          message: `${slot} 只有 ${gear.affixes.length} 条词缀，未满（最多6条）`,
          priority: 'medium',
          reason: '词缀数量不足会影响整体属性，建议通过定向加工补充'
        });
      }
    }
  }
}

// 3. 词条优先级
function checkAffixPriority(input: BDInput, hero: Hero, suggestions: BDSuggestion[]) {
  const isCaster = hero.traits.some(t => t.mechanics.includes('法术'));
  const isSummoner = hero.id === 'moto';
  const isMelee = ['rehan', 'erika', 'bing'].includes(hero.id);

  for (const gear of input.gear) {
    for (const aff of gear.affixes) {
      const affixDef = affixData.find(a => a.name === aff.name && a.slot === gear.slot);
      if (!affixDef) continue;

      // 检查T级
      const tierIdx = affixDef.tiers.findIndex(t => t.tier === aff.tier);
      if (tierIdx > 0) {
        const best = affixDef.tiers[0];
        suggestions.push({
          type: 'improve',
          slot: gear.slot,
          message: `${gear.slot} 的「${aff.name}」当前为 ${aff.tier}，可提升至 ${best.tier}（${best.value}）`,
          priority: 'medium',
          reason: `提升 ${aff.name} 等级可显著增加对应属性`
        });
      }
    }
  }

  // 职业核心属性检查
  if (isCaster) {
    const hasCastSpeed = input.gear.some(g => g.affixes.some(a => a.name === '施法速度'));
    if (!hasCastSpeed) suggestions.push({
      type: 'add', priority: 'high',
      message: '法系职业缺少施法速度词条',
      reason: '施法速度是法系输出的核心属性，建议在武器/手套上获取'
    });
  }

  if (isSummoner) {
    const hasSummonDmg = input.gear.some(g => g.affixes.some(a => a.name.includes('召唤')));
    if (!hasSummonDmg) suggestions.push({
      type: 'add', priority: 'high',
      message: '召唤流派缺少召唤物相关词条',
      reason: '召唤物伤害/等级是召唤流派的核心属性，建议在武器/项链上获取'
    });
  }

  if (isMelee) {
    const hasAtkSpeed = input.gear.some(g => g.affixes.some(a => a.name === '攻击速度'));
    if (!hasAtkSpeed) suggestions.push({
      type: 'add', priority: 'high',
      message: '近战职业缺少攻击速度词条',
      reason: '攻速是近战的核心属性，建议在武器/手套上获取'
    });
  }
}

// 4. 生存检查
function checkSurvival(input: BDInput, suggestions: BDSuggestion[]) {
  const hasLife = input.gear.some(g => g.affixes.some(a => a.name === '最大生命'));
  const hasShield = input.gear.some(g => g.affixes.some(a => a.name.includes('护盾')));
  const hasRes = input.gear.some(g => g.affixes.some(a => a.name.includes('抗性')));

  if (!hasLife && !hasShield) {
    suggestions.push({
      type: 'add', priority: 'high',
      message: '没有任何生命或护盾词条，生存能力堪忧',
      reason: '建议在头盔/胸甲/腰带上补充最大生命或护盾词条'
    });
  }

  if (!hasRes) {
    suggestions.push({
      type: 'add', priority: 'medium',
      message: '缺少抗性词条',
      reason: '抗性不足会导致元素伤害承受过高，建议在头盔/戒指/腰带上补充'
    });
  }
}

// ===== 简单评分 =====
export function scoreBD(input: BDInput): { score: number; max: number; label: string } {
  let score = 0;
  const max = 100;

  // 装备完整度 (40分)
  const slots = ['武器', '头盔', '胸甲', '手套', '鞋子', '项链', '戒指', '腰带'];
  const equipped = input.gear.filter(g => g.affixes.length > 0).length;
  score += (equipped / slots.length) * 40;

  // 词条数量 (30分)
  const totalAffixes = input.gear.reduce((sum, g) => sum + g.affixes.length, 0);
  score += Math.min(totalAffixes / 16, 1) * 30;

  // 技能选择 (30分)
  const validSkills = input.skills.filter(id => skills.some(s => s.id === id)).length;
  score += (validSkills / Math.max(input.skills.length, 1)) * 30;

  const finalScore = Math.round(score);
  let label: string;
  if (finalScore >= 80) label = '优秀 ✨';
  else if (finalScore >= 60) label = '良好 👍';
  else if (finalScore >= 40) label = '待完善 🔧';
  else label = '初步构思 💭';

  return { score: finalScore, max, label };
}
