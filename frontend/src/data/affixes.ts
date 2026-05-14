import { Affix } from '../types';

export const affixes: Affix[] = [
  // ===== 武器 =====
  { id: 'weap-phys-dmg', name: '物理伤害', slot: '武器', type: 'prefix', tiers: [
    { tier: 'T1', value: '物理伤害 +60%~79%', ilvl: 85 },
    { tier: 'T2', value: '物理伤害 +40%~59%', ilvl: 70 },
    { tier: 'T3', value: '物理伤害 +25%~39%', ilvl: 55 },
  ], description: '增加武器物理伤害百分比', tags: ['物理', '伤害'], source: '打造/不详灰烬' },
  { id: 'weap-element-dmg', name: '元素伤害', slot: '武器', type: 'prefix', tiers: [
    { tier: 'T1', value: '元素伤害 +45%~64%', ilvl: 85 },
    { tier: 'T2', value: '元素伤害 +30%~44%', ilvl: 70 },
    { tier: 'T3', value: '元素伤害 +18%~29%', ilvl: 55 },
  ], description: '增加元素伤害百分比', tags: ['元素', '伤害'], source: '打造/不详灰烬' },
  { id: 'weap-fire-dmg', name: '火焰伤害', slot: '武器', type: 'prefix', tiers: [
    { tier: 'T1', value: '火焰伤害 +55%~74%', ilvl: 85 },
    { tier: 'T2', value: '火焰伤害 +35%~54%', ilvl: 70 },
    { tier: 'T3', value: '火焰伤害 +20%~34%', ilvl: 55 },
  ], description: '增加火焰伤害百分比', tags: ['火焰', '伤害'], source: '打造/不详灰烬' },
  { id: 'weap-crit-dmg', name: '暴击伤害', slot: '武器', type: 'suffix', tiers: [
    { tier: 'T1', value: '暴击伤害 +35%~44%', ilvl: 85 },
    { tier: 'T2', value: '暴击伤害 +25%~34%', ilvl: 70 },
    { tier: 'T3', value: '暴击伤害 +15%~24%', ilvl: 55 },
  ], description: '增加暴击伤害百分比', tags: ['暴击', '伤害'], source: '打造/不眠灰烬' },
  { id: 'weap-crit-rate', name: '暴击值', slot: '武器', type: 'suffix', tiers: [
    { tier: 'T1', value: '暴击值 +180~219', ilvl: 85 },
    { tier: 'T2', value: '暴击值 +120~179', ilvl: 70 },
    { tier: 'T3', value: '暴击值 +70~119', ilvl: 55 },
  ], description: '增加暴击值', tags: ['暴击', '攻速'], source: '打造/不眠灰烬' },
  { id: 'weap-attack-speed', name: '攻击速度', slot: '武器', type: 'suffix', tiers: [
    { tier: 'T1', value: '攻击速度 +20%~26%', ilvl: 85 },
    { tier: 'T2', value: '攻击速度 +14%~19%', ilvl: 70 },
    { tier: 'T3', value: '攻击速度 +8%~13%', ilvl: 55 },
  ], description: '增加攻击速度', tags: ['攻速', '攻击'], source: '打造' },
  { id: 'weap-cast-speed', name: '施法速度', slot: '武器', type: 'suffix', tiers: [
    { tier: 'T1', value: '施法速度 +20%~26%', ilvl: 85 },
    { tier: 'T2', value: '施法速度 +14%~19%', ilvl: 70 },
    { tier: 'T3', value: '施法速度 +8%~13%', ilvl: 55 },
  ], description: '增加施法速度', tags: ['施法速度', '法术'], source: '打造' },
  { id: 'weap-skill-level', name: '法术技能等级', slot: '武器', type: 'prefix', tiers: [
    { tier: 'T1', value: '所有法术技能等级 +2', ilvl: 85 },
    { tier: 'T2', value: '所有法术技能等级 +1', ilvl: 70 },
  ], description: '提升所有法术技能等级', tags: ['技能等级', '法术'], source: '不详灰烬' },

  // ===== 头盔 =====
  { id: 'helm-life', name: '最大生命', slot: '头盔', type: 'prefix', tiers: [
    { tier: 'T1', value: '最大生命 +280~349', ilvl: 85 },
    { tier: 'T2', value: '最大生命 +200~279', ilvl: 70 },
    { tier: 'T3', value: '最大生命 +120~199', ilvl: 55 },
  ], description: '增加最大生命值', tags: ['生命', '生存'], source: '打造' },
  { id: 'helm-shield', name: '最大护盾', slot: '头盔', type: 'prefix', tiers: [
    { tier: 'T1', value: '最大护盾 +180~239', ilvl: 85 },
    { tier: 'T2', value: '最大护盾 +120~179', ilvl: 70 },
    { tier: 'T3', value: '最大护盾 +70~119', ilvl: 55 },
  ], description: '增加最大护盾值', tags: ['护盾', '生存'], source: '打造' },
  { id: 'helm-shield-pct', name: '护盾百分比', slot: '头盔', type: 'prefix', tiers: [
    { tier: 'T1', value: '护盾 +35%~44%', ilvl: 85 },
    { tier: 'T2', value: '护盾 +25%~34%', ilvl: 70 },
    { tier: 'T3', value: '护盾 +15%~24%', ilvl: 55 },
  ], description: '增加护盾百分比', tags: ['护盾', '生存'], source: '打造' },
  { id: 'helm-fire-res', name: '火焰抗性', slot: '头盔', type: 'suffix', tiers: [
    { tier: 'T1', value: '火焰抗性 +40%~48%', ilvl: 85 },
    { tier: 'T2', value: '火焰抗性 +30%~39%', ilvl: 70 },
    { tier: 'T3', value: '火焰抗性 +20%~29%', ilvl: 55 },
  ], description: '增加火焰抗性', tags: ['抗性', '火焰'], source: '打造' },
  { id: 'helm-cold-res', name: '冰冷抗性', slot: '头盔', type: 'suffix', tiers: [
    { tier: 'T1', value: '冰冷抗性 +40%~48%', ilvl: 85 },
    { tier: 'T2', value: '冰冷抗性 +30%~39%', ilvl: 70 },
    { tier: 'T3', value: '冰冷抗性 +20%~29%', ilvl: 55 },
  ], description: '增加冰冷抗性', tags: ['抗性', '冰冷'], source: '打造' },
  { id: 'helm-light-res', name: '闪电抗性', slot: '头盔', type: 'suffix', tiers: [
    { tier: 'T1', value: '闪电抗性 +40%~48%', ilvl: 85 },
    { tier: 'T2', value: '闪电抗性 +30%~39%', ilvl: 70 },
    { tier: 'T3', value: '闪电抗性 +20%~29%', ilvl: 55 },
  ], description: '增加闪电抗性', tags: ['抗性', '闪电'], source: '打造' },

  // ===== 胸甲 =====
  { id: 'chest-life', name: '最大生命', slot: '胸甲', type: 'prefix', tiers: [
    { tier: 'T1', value: '最大生命 +320~399', ilvl: 85 },
    { tier: 'T2', value: '最大生命 +240~319', ilvl: 70 },
    { tier: 'T3', value: '最大生命 +160~239', ilvl: 55 },
  ], description: '增加最大生命值', tags: ['生命', '生存'], source: '打造' },
  { id: 'chest-shield', name: '最大护盾', slot: '胸甲', type: 'prefix', tiers: [
    { tier: 'T1', value: '最大护盾 +220~289', ilvl: 85 },
    { tier: 'T2', value: '最大护盾 +160~219', ilvl: 70 },
    { tier: 'T3', value: '最大护盾 +100~159', ilvl: 55 },
  ], description: '增加最大护盾值', tags: ['护盾', '生存'], source: '打造' },
  { id: 'chest-aura', name: '光环效果', slot: '胸甲', type: 'prefix', tiers: [
    { tier: 'T1', value: '光环效果 +30%~39%', ilvl: 85 },
    { tier: 'T2', value: '光环效果 +20%~29%', ilvl: 70 },
    { tier: 'T3', value: '光环效果 +12%~19%', ilvl: 55 },
  ], description: '增加光环效果', tags: ['光环', '增益'], source: '打造' },

  // ===== 手套 =====
  { id: 'glove-attack-speed', name: '攻击速度', slot: '手套', type: 'suffix', tiers: [
    { tier: 'T1', value: '攻击速度 +16%~20%', ilvl: 85 },
    { tier: 'T2', value: '攻击速度 +11%~15%', ilvl: 70 },
    { tier: 'T3', value: '攻击速度 +6%~10%', ilvl: 55 },
  ], description: '增加攻击速度', tags: ['攻速', '攻击'], source: '打造' },
  { id: 'glove-cast-speed', name: '施法速度', slot: '手套', type: 'suffix', tiers: [
    { tier: 'T1', value: '施法速度 +16%~20%', ilvl: 85 },
    { tier: 'T2', value: '施法速度 +11%~15%', ilvl: 70 },
    { tier: 'T3', value: '施法速度 +6%~10%', ilvl: 55 },
  ], description: '增加施法速度', tags: ['施法速度', '法术'], source: '打造' },

  // ===== 鞋子 =====
  { id: 'boot-move', name: '移动速度', slot: '鞋子', type: 'prefix', tiers: [
    { tier: 'T1', value: '移动速度 +30%~38%', ilvl: 85 },
    { tier: 'T2', value: '移动速度 +22%~29%', ilvl: 70 },
    { tier: 'T3', value: '移动速度 +14%~21%', ilvl: 55 },
  ], description: '增加移动速度', tags: ['移动速度', ' utility'], source: '打造' },
  { id: 'boot-cdr', name: '冷却回复速度', slot: '鞋子', type: 'suffix', tiers: [
    { tier: 'T1', value: '冷却回复速度 +20%~26%', ilvl: 85 },
    { tier: 'T2', value: '冷却回复速度 +14%~19%', ilvl: 70 },
    { tier: 'T3', value: '冷却回复速度 +8%~13%', ilvl: 55 },
  ], description: '增加冷却回复速度', tags: ['冷却', ' utility'], source: '打造' },

  // ===== 项链 =====
  { id: 'neck-skill-level', name: '主动技能等级', slot: '项链', type: 'prefix', tiers: [
    { tier: 'T1', value: '所有主动技能等级 +2', ilvl: 85 },
    { tier: 'T2', value: '所有主动技能等级 +1', ilvl: 70 },
  ], description: '提升所有主动技能等级', tags: ['技能等级', '通用'], source: '打造' },
  { id: 'neck-crit-dmg', name: '暴击伤害', slot: '项链', type: 'suffix', tiers: [
    { tier: 'T1', value: '暴击伤害 +30%~38%', ilvl: 85 },
    { tier: 'T2', value: '暴击伤害 +20%~29%', ilvl: 70 },
    { tier: 'T3', value: '暴击伤害 +12%~19%', ilvl: 55 },
  ], description: '增加暴击伤害', tags: ['暴击', '伤害'], source: '打造' },

  // ===== 戒指 =====
  { id: 'ring-element-dmg', name: '元素附加伤害', slot: '戒指', type: 'prefix', tiers: [
    { tier: 'T1', value: '攻击和法术附加 (16~24)-(31~45) 元素伤害', ilvl: 85 },
    { tier: 'T2', value: '攻击和法术附加 (10~15)-(20~30) 元素伤害', ilvl: 70 },
    { tier: 'T3', value: '攻击和法术附加 (5~9)-(10~19) 元素伤害', ilvl: 55 },
  ], description: '附加元素伤害到攻击和法术', tags: ['元素', '附加伤害'], source: '打造' },
  { id: 'ring-life', name: '最大生命', slot: '戒指', type: 'prefix', tiers: [
    { tier: 'T1', value: '最大生命 +200~259', ilvl: 85 },
    { tier: 'T2', value: '最大生命 +140~199', ilvl: 70 },
    { tier: 'T3', value: '最大生命 +80~139', ilvl: 55 },
  ], description: '增加最大生命值', tags: ['生命', '生存'], source: '打造' },
  { id: 'ring-all-res', name: '全元素抗性', slot: '戒指', type: 'suffix', tiers: [
    { tier: 'T1', value: '全元素抗性 +18%~24%', ilvl: 85 },
    { tier: 'T2', value: '全元素抗性 +12%~17%', ilvl: 70 },
    { tier: 'T3', value: '全元素抗性 +8%~11%', ilvl: 55 },
  ], description: '增加所有元素抗性', tags: ['抗性', '元素', '通用'], source: '打造' },

  // ===== 腰带 =====
  { id: 'belt-life', name: '最大生命', slot: '腰带', type: 'prefix', tiers: [
    { tier: 'T1', value: '最大生命 +240~309', ilvl: 85 },
    { tier: 'T2', value: '最大生命 +160~239', ilvl: 70 },
    { tier: 'T3', value: '最大生命 +100~159', ilvl: 55 },
  ], description: '增加最大生命值', tags: ['生命', '生存'], source: '打造' },
  { id: 'belt-cdr', name: '冷却回复速度', slot: '腰带', type: 'suffix', tiers: [
    { tier: 'T1', value: '冷却回复速度 +18%~24%', ilvl: 85 },
    { tier: 'T2', value: '冷却回复速度 +12%~17%', ilvl: 70 },
    { tier: 'T3', value: '冷却回复速度 +7%~11%', ilvl: 55 },
  ], description: '增加冷却回复速度', tags: ['冷却', '通用'], source: '打造' },
  { id: 'belt-all-res', name: '全元素抗性', slot: '腰带', type: 'suffix', tiers: [
    { tier: 'T1', value: '全元素抗性 +20%~28%', ilvl: 85 },
    { tier: 'T2', value: '全元素抗性 +14%~19%', ilvl: 70 },
    { tier: 'T3', value: '全元素抗性 +8%~13%', ilvl: 55 },
  ], description: '增加所有元素抗性', tags: ['抗性', '通用'], source: '打造' },
];
