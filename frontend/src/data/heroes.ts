import { Hero } from '../types';

export const heroes: Hero[] = [
  {
    id: 'rehan',
    name: '雷恩',
    title: '狂人',
    icon: '💪',
    description: '近战狂战士，以怒气为核心的爆发型英雄。攻击或受伤积攒怒气，满怒进入暴气状态获得巨额加成。',
    tags: ['近战', '怒气', '爆发', '新手友好'],
    traits: [
      { id: 'rehan-1', name: '怒火', description: '攻击或受伤积攒怒气，怒气满进入暴气状态，获得攻速+30%和减伤效果', mechanics: '怒气管理 → 暴气 → 攻速+30%', tier: 'T1', suitableFor: '新手、近战爱好者、开荒' },
      { id: 'rehan-2', name: '怒影', description: '自动技能流派，高生命附加伤害，上限极高但依赖遗物装备', mechanics: '自动技能 → 千力流 → 爆裂触发', tier: 'T1', suitableFor: '有资源的进阶玩家' }
    ]
  },
  {
    id: 'carino',
    name: '卡里诺',
    title: '圣枪游侠',
    icon: '🏹',
    description: '远程投射物专家，拥有独特的弹药系统。特殊弹药组合可打出高额爆发伤害，操作感十足。',
    tags: ['远程', '投射物', '弹药系统', '高爆发'],
    traits: [
      { id: 'carino-1', name: '荣光游侠', description: '投射物技能、弹药系统（6发弹匣），特殊弹药组合带来多样化输出', mechanics: '弹药管理 → 特殊弹药组合 → 倾泻输出', tier: 'T1', suitableFor: '操作自信的玩家' },
      { id: 'carino-2', name: '致命掠影', description: '弹匣消耗提高伤害，机动装填+法术迸发联动，当前版本单次伤害最高', mechanics: '弹匣消耗 → 增伤叠加 → 机动装填', tier: 'T0', suitableFor: '追求极致爆发的玩家' }
    ]
  },
  {
    id: 'gemma',
    name: '吉玛',
    title: '冰焰',
    icon: '❄️',
    description: '元素法师，掌握冰与火的双重力量。可走冰系、火系或冰火融合路线，玩法多样。',
    tags: ['法师', '冰火', '元素', '远程法术'],
    traits: [
      { id: 'gemma-1', name: '冰火融合', description: '冰火双能量槽，积攒融合能量进入冰火暴走状态，大幅提升元素伤害', mechanics: '冰火能量 → 融合暴走 → 元素增伤', tier: 'T1', suitableFor: '法师爱好者、喜欢灵活玩法' },
      { id: 'gemma-2', name: '冰洁之心', description: '冰霜系专精，强化冰结和冰封效果。SS10赛季冰封额外+45%冰冷伤害', mechanics: '冰霜专精 → 冰结冰封 → 冰冷增伤', tier: 'T1~T2', suitableFor: '冰系法术爱好者' }
    ]
  },
  {
    id: 'youga',
    name: '尤加',
    title: '时空见证者',
    icon: '⏳',
    description: '操控时空之力的法系英雄。创造扭曲时空领域增强自身，或使用持续伤害收割敌人。',
    tags: ['法师', '时空', '领域', '持续伤害'],
    traits: [
      { id: 'youga-1', name: '时空幻象', description: '消耗魔力积攒时空能量，创造扭曲时空获得巨额增伤，可召唤幻象协同作战', mechanics: '魔力消耗 → 时空能量 → 扭曲时空领域', tier: 'T1', suitableFor: '法系阵地战玩家' },
      { id: 'youga-2', name: '时空流逝', description: '持续伤害+收割机制，记录伤害并附加，可突破2.1b伤害上限', mechanics: '持续伤害 → 伤害记录 → 收割附加', tier: 'T1', suitableFor: '持续伤害流派玩家' }
    ]
  },
  {
    id: 'moto',
    name: '莫托',
    title: '指挥官',
    icon: '🤖',
    description: '召唤机械军团作战的指挥官。可召唤机械警卫、蜘蛛坦克等，最适合新手的英雄之一。',
    tags: ['召唤', '机械', '新手友好', '开荒'],
    traits: [
      { id: 'moto-1', name: '号令征召', description: '召唤机械警卫、蜘蛛坦克等，超载状态提升攻速/伤害。捡垃圾也能到刻7', mechanics: '召唤物 → 超载状态 → 攻速伤害提升', tier: 'T1~T2', suitableFor: '新手、躺平党、搬砖党' },
      { id: 'moto-2', name: '冲锋征召', description: '统御值系统，更强的召唤协同能力，装备要求不高但伤害高', mechanics: '统御值 → 召唤协同 → 高伤害', tier: 'T0~T1', suitableFor: '想玩召唤但有一定追求的玩家' }
    ]
  },
  {
    id: 'erika',
    name: '艾瑞卡',
    title: '猫眼',
    icon: '🐱',
    description: '敏捷型近战输出，移动速度转换为攻击伤害。速刷天花板，跑图极快。',
    tags: ['近战', '敏捷', '速刷', '高速移动'],
    traits: [
      { id: 'erika-1', name: '疾风追猎', description: '移动速度转换为攻击伤害，连续攻击联动。速刷天花板，跑图效率极高', mechanics: '移速转伤害 → 连续攻击 → 速刷', tier: 'T0~T1', suitableFor: '喜欢跑图快、速刷的玩家' },
      { id: 'erika-2', name: '电光猫影', description: '麻痹效果叠加，移动速度提升麻痹效果。SS10赛季麻痹数值提升', mechanics: '麻痹叠加 → 移速转效果 → 控制输出', tier: 'T1', suitableFor: '喜欢控制+输出结合的玩家' }
    ]
  },
  {
    id: 'thea',
    name: '希雅',
    title: '神谕者',
    icon: '🌙',
    description: '祝福体系英雄，通过多种祝福 buff 强化自身。装备成型后强度极高，全能型英雄。',
    tags: ['祝福', 'BUFF', '后期强势', '全能'],
    traits: [
      { id: 'thea-1', name: '众神之伟智', description: 'BUFF秒开系统，BUFF数量提升伤害。需要特定装备组合，后期极强', mechanics: 'BUFF管理 → 伤害提升', tier: 'T0', suitableFor: '有资源的老手' },
      { id: 'thea-2', name: '众神之化身', description: '哨卫搭配体系，攻守兼备的全能型玩法', mechanics: '哨卫搭配 → 全能攻守', tier: 'T0', suitableFor: '进阶玩家' }
    ]
  },
  {
    id: 'bing',
    name: '宾',
    title: '逃亡者',
    icon: '💣',
    description: '炸弹专家，技能范围大、伤害高。赛季手册英雄，需要一定操作技巧。',
    tags: ['炸弹', '范围伤害', '高爆发', '操作'],
    traits: [
      { id: 'bing-1', name: '炸弹专家', description: '扔炸弹造成大范围高额伤害，操作灵活但需要手速', mechanics: '炸弹投掷 → 范围爆炸 → 高额伤害', tier: 'T0', suitableFor: '操作自信、追求爽感的玩家' }
    ]
  }
];
