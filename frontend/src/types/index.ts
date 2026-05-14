// ===== 英雄/角色 =====
export interface HeroTrait {
  id: string;
  name: string;
  description: string;
  mechanics: string;
  tier: string;
  suitableFor: string;
}

export interface Hero {
  id: string;
  name: string;
  title: string;
  icon: string;
  description: string;
  traits: HeroTrait[];
  tags: string[];
}

// ===== 技能 =====
export type SkillType = 'active' | 'support' | 'passive' | 'catalyst';
export type SkillCategory = '近战攻击' | '远程投射' | '法术' | '召唤魔灵' | '位移生存' | '增益' | '贯注' | '光环';

export interface Skill {
  id: string;
  name: string;
  type: SkillType;
  category: SkillCategory;
  tags: string[];
  description: string;
  effect: string;
  classes: string[];
}

// ===== 装备词条 =====
export type EquipSlot = '武器' | '头盔' | '胸甲' | '手套' | '鞋子' | '项链' | '戒指' | '腰带';
export type AffixType = 'prefix' | 'suffix';
export type AffixTier = 'T0' | 'T1' | 'T2' | 'T3' | 'T4' | 'T5';

export interface Affix {
  id: string;
  name: string;
  slot: EquipSlot;
  type: AffixType;
  tiers: { tier: AffixTier; value: string; ilvl: number }[];
  description: string;
  tags: string[];
  source?: string; // 来源: 打造/掉落/灰烬
}

// ===== BD 计算 =====
export interface GearInput {
  slot: EquipSlot;
  affixes: { name: string; tier: AffixTier }[];
}

export interface BDInput {
  heroId: string;
  traitId: string;
  skills: string[];
  gear: GearInput[];
  level: number;
}

export interface BDSuggestion {
  type: 'improve' | 'replace' | 'add';
  slot?: EquipSlot;
  message: string;
  priority: 'high' | 'medium' | 'low';
  reason: string;
}
