import { Skill } from '../types';

export const skills: Skill[] = [
  // ===== 近战攻击 =====
  { id: 'leap', name: '跃击', type: 'active', category: '近战攻击', tags: ['近战', '位移', '范围'], description: '跳至目标位置猛击地面，对范围内敌人造成 228% 武器伤害。每4秒获得一次充能。', effect: '228% 武器伤害，每层充能+20%伤害、+10%范围', classes: ['狂人', '猫眼'] },
  { id: 'cyclone', name: '旋风斩', type: 'active', category: '近战攻击', tags: ['近战', '引导', '范围'], description: '引导时对自身周围敌人造成 83% 武器伤害；引导满层有几率释放斩击 138% 伤害。引导时可移动。', effect: '83% 持续伤害，满层斩击 138%', classes: ['狂人'] },
  { id: 'focus-slice', name: '专注斩', type: 'active', category: '近战攻击', tags: ['近战', '扇形', '专注'], description: '挥击前方扇形区域造成 154% 武器伤害；斩击为 308% 伤害。击中时获得专注值。', effect: '挥击 154%，斩击 308%', classes: ['狂人'] },
  { id: 'flame-slice', name: '烈焰斩', type: 'active', category: '近战攻击', tags: ['近战', '火焰', '范围'], description: '挥击前方扇形造成 346% 武器伤害。全部物理伤害转化为火焰伤害。', effect: '346% 武器火伤，范围加成增加火浪', classes: ['狂人'] },
  { id: 'ice-slice', name: '冰凌斩', type: 'active', category: '近战攻击', tags: ['近战', '冰霜', '范围'], description: '扇形挥击造成 142% 武器伤害。全部转冰冷伤害。对冻结敌人可触发爆炸 213%。', effect: '142% 冰伤，冻结爆炸 213%', classes: ['狂人'] },
  { id: 'berserk-blade', name: '暴走巨刃', type: 'active', category: '近战攻击', tags: ['近战', '范围', '叠层'], description: '挥击自身范围敌人造成 210%；斩击 421%。击败敌人或击中劲敌增加技能范围。', effect: '挥击 210%，斩击 421%，最多叠20层范围', classes: ['狂人'] },
  { id: 'moon-slice', name: '月华斩', type: 'active', category: '近战攻击', tags: ['近战', '魔力', '增伤'], description: '挥击 105%~185%；斩击 211%~370%。每100点最大魔力额外+1%伤害（最多70%）。', effect: '挥击 105%~185%，斩击 211%~370%，魔力增伤', classes: ['狂人', '神谕者'] },
  { id: 'dual-thrust', name: '双重突刺', type: 'active', category: '近战攻击', tags: ['近战', '突刺', '创伤'], description: '向前突刺2次，每次 186% 武器伤害。首次造成创伤时第二次必定创伤。', effect: '2×186% 武器伤害，必暴机制', classes: ['猫眼', '圣枪游侠'] },
  { id: 'ice-thrust', name: '碎冰刺击', type: 'active', category: '近战攻击', tags: ['近战', '冰霜', '投射物'], description: '向前突刺 201% 武器伤害，命中后发射2个冰凌各 201% 冰伤。', effect: '突刺 201% + 2×冰凌 201%', classes: ['狂人'] },
  { id: 'decay-thrust', name: '凋零刺击', type: 'active', category: '近战攻击', tags: ['近战', '腐蚀', '叠层'], description: '向前突刺 201% 腐蚀伤害；击中叠层，每层+3%腐蚀伤害（叠乘），满层+1投射物。', effect: '201% 腐蚀，每层+3%叠乘', classes: ['猫眼'] },
  { id: 'frost-smash', name: '寒霜破击', type: 'active', category: '近战攻击', tags: ['近战', '冰霜', '范围'], description: '猛击地面产生冰刺，造成 202% 武器冰伤。每波冰刺额外+30%伤害（叠乘）。', effect: '202% 冰伤，每波+30%叠乘', classes: ['狂人'] },
  { id: 'thunder-smash', name: '充能猛击', type: 'active', category: '近战攻击', tags: ['近战', '闪电', '引导'], description: '引导结束时猛击地面 438% 武器伤害。全部转闪电伤害，产生电场持续2秒。', effect: '438% 闪电，2秒电场', classes: ['狂人'] },
  { id: 'ash-hammer', name: '灰烬之锤', type: 'active', category: '近战攻击', tags: ['近战', '火焰', '追踪'], description: '猛击地面 369% 武器伤害，生成3个追踪灰烬投射物各 369% 火伤。', effect: '369% + 3×追踪369%火伤', classes: ['狂人'] },
  { id: 'lightning-slash', name: '雷影斩', type: 'active', category: '近战攻击', tags: ['近战', '闪电', '斩击'], description: '斩击系技能，每1%斩击几率增加连续攻击伤害递增2%。', effect: '斩击递增，每1%几率+2%伤害', classes: ['猫眼'] },
  { id: 'quake', name: '震撼大地', type: 'active', category: '近战攻击', tags: ['近战', '范围', '物理'], description: '猛击地面产生冲击波，造成大范围物理伤害。', effect: '范围物理伤害', classes: ['狂人'] },
  { id: 'brute-charge', name: '野蛮冲锋', type: 'active', category: '近战攻击', tags: ['近战', '冲锋', '引导'], description: '引导冲锋穿过敌人，造成 57% 武器伤害；满层释放野蛮打击 570%。', effect: '引导 57%，满层释放 570%', classes: ['狂人'] },

  // ===== 远程投射 =====
  { id: 'ice-shot', name: '寒冰射击', type: 'active', category: '远程投射', tags: ['远程', '冰霜', '范围'], description: '发射冰锥 313% 武器伤害，命中后爆炸 157% 冰伤。全部物理转冰冷。', effect: '313% + 爆炸 157% 冰伤', classes: ['圣枪游侠'] },
  { id: 'lightning-shot', name: '闪电射击', type: 'active', category: '远程投射', tags: ['远程', '闪电', '分裂'], description: '发射闪电箭 334% 武器伤害，分裂3道闪电各 334%，转闪电伤。', effect: '334% + 3×分裂 334%', classes: ['圣枪游侠'] },
  { id: 'split-shot', name: '分裂射击', type: 'active', category: '远程投射', tags: ['远程', '物理', '分裂'], description: '发射3个投射物 347% 武器伤害；击败敌人有50%几率继续分裂。', effect: '3×347%，击败50%再分裂', classes: ['圣枪游侠'] },
  { id: 'fire-shot', name: '燃烧射击', type: 'active', category: '远程投射', tags: ['远程', '火焰', '点燃'], description: '发射烈焰箭 256% 武器伤害，额外+30%点燃几率，转火伤。', effect: '256% 火伤，+30%点燃', classes: ['圣枪游侠'] },
  { id: 'lightning-bolt', name: '电光弹', type: 'active', category: '远程投射', tags: ['远程', '闪电', '穿透'], description: '发射永久穿透的电光弹 302% 武器伤害，转闪电伤。', effect: '302% 闪电，永久穿透', classes: ['圣枪游侠'] },
  { id: 'cannon', name: '炮轰', type: 'active', category: '远程投射', tags: ['远程', '火焰', '自动瞄准'], description: '连续抛射4个自动瞄准炮弹 41% 武器伤害，转火伤。', effect: '4×41% 自动瞄准火伤', classes: ['圣枪游侠'] },
  { id: 'corrode-shot', name: '侵蚀弹', type: 'active', category: '远程投射', tags: ['远程', '腐蚀', '地面'], description: '抛射侵蚀弹 95% 武器伤害，产生腐蚀地面造成持续腐蚀伤害。', effect: '95% + 地面每秒57持续伤害', classes: ['圣枪游侠'] },
  { id: 'corrode-throw', name: '侵蚀投掷', type: 'active', category: '远程投射', tags: ['远程', '腐蚀', '多重'], description: '发射3个投射物 383% 武器腐蚀伤害。', effect: '3×383% 腐蚀伤害', classes: ['圣枪游侠'] },
  { id: 'mark-rain', name: '标记箭雨', type: 'active', category: '远程投射', tags: ['远程', '火焰', '标记'], description: '发射标记箭 35% 武器伤害，标记后落下5个爆炸箭矢 162% 火伤。', effect: '标记35% + 5×爆炸162%火伤', classes: ['圣枪游侠'] },
  { id: 'arrow-rain', name: '箭雨', type: 'active', category: '远程投射', tags: ['远程', '范围', '物理'], description: '发射15个投射物随机攻击敌人，各造成 134% 武器伤害。', effect: '15×134% 武器伤害', classes: ['圣枪游侠'] },
  { id: 'endless-rain', name: '不竭弹雨', type: 'active', category: '远程投射', tags: ['远程', '引导', '范围'], description: '引导结束时落下多波弹雨 124% 武器伤害，引导层数增加波数。', effect: '124% 每波，引导增波数', classes: ['圣枪游侠'] },

  // ===== 法术 =====
  { id: 'color-missile', name: '五彩魔矢', type: 'active', category: '法术', tags: ['法术', '追踪', '元素'], description: '发射3个追踪魔矢，造成 592-1100 法术伤害。随机选一种元素。击败敌人10%爆炸。', effect: '592-1100 元素，追踪+爆炸', classes: ['冰焰', '时空见证者', '神谕者'] },
  { id: 'split-fire', name: '裂变火球', type: 'active', category: '法术', tags: ['法术', '火焰', '分裂'], description: '发射火球 674-1011 法术火伤，分裂3个小火球 337-506。', effect: '674-1011 + 3×337-506 分裂', classes: ['冰焰'] },
  { id: 'blizzard', name: '暴风雪', type: 'active', category: '法术', tags: ['法术', '冰霜', '范围'], description: '指定位置落下3波暴风雪，203-303 法术冰伤。击中时敌人额外+10%受冰伤。', effect: '3×203-303 冰伤，+10%受伤加深', classes: ['冰焰'] },
  { id: 'ice-ring', name: '冰环术', type: 'active', category: '法术', tags: ['法术', '冰霜', '范围'], description: '自身周围形成冰环 612-918 法术冰伤。击杀敌人20%几率再次触发。', effect: '612-918 冰环，击杀20%重置', classes: ['冰焰'] },
  { id: 'lightning-chain', name: '闪电链', type: 'active', category: '法术', tags: ['法术', '闪电', '连锁'], description: '发射闪电链 73-1393 法术闪电伤害，弹射2次。', effect: '73-1393 闪电，弹射2次', classes: ['冰焰', '时空见证者'] },
  { id: 'thunder-cloud', name: '雷云放射', type: 'active', category: '法术', tags: ['法术', '闪电', '引导'], description: '引导时凝聚雷云持续打击敌人 36-682 法术闪电伤害，最多5层引导。', effect: '36-682 闪电，5层引导', classes: ['冰焰'] },
  { id: 'ice-cone', name: '冰锥术', type: 'active', category: '法术', tags: ['法术', '冰霜', '投射物'], description: '发射冰锥造成 762-1144 法术冰冷伤害。', effect: '762-1144 冰冷伤害', classes: ['冰焰'] },
  { id: 'shadow-ball', name: '暗影弹', type: 'active', category: '法术', tags: ['法术', '腐蚀', '范围'], description: '发射暗影弹 564-846 法术腐蚀伤害，可移动暗影之沼。', effect: '564-846 腐蚀 + 暗影之沼', classes: ['时空见证者'] },
  { id: 'shadow-bog', name: '暗影之沼', type: 'active', category: '法术', tags: ['法术', '腐蚀', '地面'], description: '定点腐蚀爆炸 420-420 法术腐蚀伤害，产生沼泽地面持续3秒造成持续伤害。', effect: '420 爆炸 + 3秒持续 557/秒', classes: ['时空见证者'] },
  { id: 'mind-drain', name: '摄念夺识', type: 'active', category: '法术', tags: ['法术', '腐蚀', '引导', '回复'], description: '引导链接多个敌人，每秒 675 持续腐蚀伤害。每链接一条每秒恢复0.5%最大生命。', effect: '675/秒持续，链接回血0.5%/秒', classes: ['时空见证者'] },
  { id: 'frost-ray', name: '冰魄射线', type: 'active', category: '法术', tags: ['法术', '冰霜', '引导'], description: '引导发射冰射线 191-295 和冰凌 591-884，霰弹衰减系数65%。', effect: '191-295射线 + 591-884冰凌', classes: ['冰焰'] },
  { id: 'thunder-storm', name: '闪电风暴', type: 'active', category: '法术', tags: ['法术', '闪电', '范围'], description: '召唤闪电风暴造成范围闪电伤害（20级 45-853）。', effect: '45-853 范围闪电（20级）', classes: ['冰焰', '时空见证者'] },
  { id: 'frost-ground', name: '寒霜地面', type: 'active', category: '法术', tags: ['法术', '冰霜', '地面'], description: '制造寒冰地面持续造成冰冷伤害（20级485），消耗蓄能可增加伤害。', effect: '485/秒 冰冷（20级）', classes: ['冰焰'] },

  // ===== 位移/生存 =====
  { id: 'blink', name: '闪现', type: 'active', category: '位移生存', tags: ['位移', '通用'], description: '向指定方向位移一段距离。', effect: '短距离位移', classes: ['冰焰', '时空见证者', '神谕者'] },
  { id: 'shadow-dash', name: '暗影冲刺', type: 'active', category: '位移生存', tags: ['位移', '伤害', '减速'], description: '向指定方向位移，对路径上的敌人造成伤害并减速。', effect: '位移 + 伤害 + 减速', classes: ['猫眼', '圣枪游侠'] },
  { id: 'rocket-jump', name: '火箭跳', type: 'active', category: '位移生存', tags: ['位移', '火焰', '伤害'], description: '炮击脚下地面 221% 火伤，向后跳跃。', effect: '221% 火伤 + 后跳', classes: ['逃亡者'] },
  { id: 'stone-skin', name: '石肤术', type: 'active', category: '位移生存', tags: ['生存', '防护', '通用'], description: '获得防护：吸收70%受到的伤害（最多吸收1500点），持续6秒。', effect: '吸收70%伤害，上限1500，6秒', classes: ['狂人', '冰焰', '时空见证者'] },
  { id: 'ice-shield', name: '寒冰盾', type: 'active', category: '位移生存', tags: ['生存', '冰霜', '防护'], description: '获得防护：额外-29%受到的物理和火焰伤害，持续5秒，生成3个环绕冰盾。', effect: '-29%物火伤害，3冰盾 80-121', classes: ['冰焰'] },
  { id: 'blur', name: '模糊', type: 'active', category: '位移生存', tags: ['生存', '闪避', '叠层'], description: '获得防护：闪避或避免伤害时叠层，+10.5%避免伤害。', effect: '+10.5%避免伤害，闪避叠层', classes: ['猫眼', '圣枪游侠'] },
  { id: 'recover-shout', name: '复苏战吼', type: 'active', category: '位移生存', tags: ['回复', '战吼', '生命'], description: '发出战吼使友军获得增益，4秒内恢复40-1160生命。', effect: '4秒恢复40-1160生命', classes: ['狂人'] },
  { id: 'bull-rage', name: '公牛之怒', type: 'active', category: '增益', tags: ['增益', '近战', '伤害'], description: '获得亢奋：近战技能额外+27%伤害，持续6秒。消耗生命而非魔力。', effect: '+27%近战伤害，6秒，耗血', classes: ['狂人'] },
  { id: 'mana-boil', name: '魔力沸腾', type: 'active', category: '增益', tags: ['增益', '法术', '消耗'], description: '获得亢奋：持续消耗魔力，额外+16.65%法术伤害，永久持续至魔力为0。', effect: '+16.65%法术伤害，持续到空蓝', classes: ['冰焰', '时空见证者'] },

  // ===== 召唤/魔灵 =====
  { id: 'summon-guard', name: '召唤机械警卫', type: 'active', category: '召唤魔灵', tags: ['召唤', '机械', '输出'], description: '召唤机械警卫作为主要输出召唤物。', effect: '召唤机械警卫', classes: ['指挥官'] },
  { id: 'summon-fire', name: '召唤火焰之灵', type: 'active', category: '召唤魔灵', tags: ['召唤', '火焰', '暴击'], description: '召唤1个火焰之灵魔灵。触发时提供攻击和法术暴击值+115。', effect: '火焰之灵，暴击值+115', classes: ['指挥官', '冰焰'] },
  { id: 'summon-ice', name: '召唤寒冰之灵', type: 'active', category: '召唤魔灵', tags: ['召唤', '冰霜', '回复'], description: '召唤1个寒冰之灵魔灵。触发时每秒恢复3.825%最大生命和护盾。', effect: '寒冰之灵，恢复3.825%/秒', classes: ['指挥官', '冰焰'] },
  { id: 'summon-thunder', name: '召唤雷霆之灵', type: 'active', category: '召唤魔灵', tags: ['召唤', '闪电', '攻速'], description: '召唤1个雷霆之灵魔灵。100%物转闪电，触发时+6%攻速/施法速度，+7.25%伤害。', effect: '雷霆之灵，+6%攻速，+7.25%伤害', classes: ['指挥官', '冰焰'] },
  { id: 'summon-stone', name: '召唤磐石之灵', type: 'active', category: '召唤魔灵', tags: ['召唤', '生存', '减伤'], description: '召唤1个磐石之灵魔灵。触发时额外-8.05%受到的击中伤害（最多-50%）。', effect: '磐石之灵，-8.05%击中伤害（最多-50%）', classes: ['指挥官'] },
  { id: 'summon-corrode', name: '召唤腐化之灵', type: 'active', category: '召唤魔灵', tags: ['召唤', '腐蚀', '减伤'], description: '召唤1个腐化之灵魔灵。100%物转腐蚀，触发时额外-9.15%持续伤害（最多-50%）。', effect: '腐化之灵，-9.15%持续伤害', classes: ['指挥官', '时空见证者'] },
  { id: 'flourish', name: '夺目绽放', type: 'active', category: '召唤魔灵', tags: ['召唤', '传送', '增伤'], description: '将所有魔灵传送至指定地点，对高稀有度敌人伤害额外增加（最多+60%）。', effect: '传送魔灵，+60%对稀有敌', classes: ['指挥官'] },

  // ===== 贯注 =====
  { id: 'sharp-focus', name: '锐利贯注', type: 'active', category: '贯注', tags: ['贯注', '近战', '爆发'], description: '近战击中获得贯注值，满100时释放锐利打击 479% 武器攻击伤害。', effect: '满贯注 479% 武器伤害', classes: ['狂人'] },
  { id: 'corrode-focus', name: '侵蚀贯注', type: 'active', category: '贯注', tags: ['贯注', '腐蚀', '追踪'], description: '自动获得贯注值，满100时发射追踪侵蚀法球，造成 648-648 腐蚀伤害。', effect: '满贯注 648 腐蚀追踪', classes: ['时空见证者'] },
  { id: 'ice-focus', name: '寒冰贯注', type: 'active', category: '贯注', tags: ['贯注', '冰霜', '追踪'], description: '满100时创造跟随移动的寒冰风暴，每0.5秒造成 467-701 法术冰冷伤害。', effect: '寒冰风暴 467-701/0.5秒', classes: ['冰焰'] },
  { id: 'thunder-focus', name: '雷霆贯注', type: 'active', category: '贯注', tags: ['贯注', '闪电', '移动'], description: '每移动2米获得贯注值，满100时降下雷击 1109% 武器攻击伤害。', effect: '满贯注 1109% 雷击', classes: ['猫眼'] },
  { id: 'melt-focus', name: '熔火贯注', type: 'active', category: '贯注', tags: ['贯注', '火焰', '真实伤害'], description: '施加点燃获得贯注值，击败敌人时造成其最大生命25%的真实伤害。', effect: '击败造成25%最大生命真实伤害', classes: ['冰焰'] },
];
