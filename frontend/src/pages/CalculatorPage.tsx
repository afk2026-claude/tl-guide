import { useState, useMemo } from 'react';
import { heroes } from '../data/heroes';
import { skills as allSkills } from '../data/skills';
import { affixes as allAffixes } from '../data/affixes';
import { analyzeBD, scoreBD } from '../engine/bdEngine';
import type { BDInput, EquipSlot, AffixTier, BDSuggestion } from '../types';

const slots: EquipSlot[] = ['武器', '头盔', '胸甲', '手套', '鞋子', '项链', '戒指', '腰带'];
const tierOptions: AffixTier[] = ['T0', 'T1', 'T2', 'T3', 'T4', 'T5'];

function HeroSelect({ input, setInput }: { input: BDInput; setInput: (v: BDInput) => void }) {
  const hero = heroes.find(h => h.id === input.heroId);
  return (
    <div className="bg-white/60 backdrop-blur rounded-2xl p-5 border-2 border-white/80">
      <label className="text-sm font-bold text-gray-600 block mb-3">选择英雄</label>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
        {heroes.map(h => (
          <button key={h.id} onClick={() => setInput({ ...input, heroId: h.id, traitId: '' })}
            className={`p-2 rounded-xl text-center transition-all ${input.heroId === h.id ? 'bg-magic-100 border-2 border-magic-400 scale-105' : 'bg-white/80 border-2 border-transparent hover:border-magic-200'}`}>
            <div className="text-2xl">{h.icon}</div>
            <div className="text-xs font-medium text-gray-600 mt-0.5">{h.name}</div>
          </button>
        ))}
      </div>
      {hero && (
        <div className="mt-4">
          <label className="text-sm font-bold text-gray-600 block mb-2">选择特性</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {hero.traits.map(t => (
              <button key={t.id} onClick={() => setInput({ ...input, traitId: t.id })}
                className={`p-3 rounded-xl text-left transition-all ${input.traitId === t.id ? 'bg-candy-50 border-2 border-candy-400' : 'bg-white/80 border-2 border-transparent hover:border-candy-200'}`}>
                <div className="font-bold text-sm text-gray-700">{t.name}</div>
                <div className="text-xs text-gray-400 mt-1 line-clamp-2">{t.description}</div>
                <div className="flex gap-2 mt-1">
                  <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-500">{t.tier}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-magic-50 text-magic-600">{t.suitableFor}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function SkillSelect({ input, setInput }: { input: BDInput; setInput: (v: BDInput) => void }) {
  const hero = heroes.find(h => h.id === input.heroId);
  const available = hero ? allSkills.filter(s => s.classes.includes(hero.name)) : allSkills;

  const toggle = (id: string) => {
    setInput({
      ...input,
      skills: input.skills.includes(id) ? input.skills.filter(s => s !== id) : [...input.skills, id]
    });
  };

  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (!search) return available.slice(0, 12);
    const q = search.toLowerCase();
    return available.filter(s => s.name.includes(q) || s.tags.some(t => t.includes(q)));
  }, [available, search]);

  return (
    <div className="bg-white/60 backdrop-blur rounded-2xl p-5 border-2 border-white/80">
      <label className="text-sm font-bold text-gray-600 block mb-3">选择技能（已选 {input.skills.length} 个）</label>
      <input type="text" placeholder="搜索技能..." value={search} onChange={e => setSearch(e.target.value)}
        className="w-full px-3 py-2 rounded-xl border-2 border-gray-100 focus:border-magic-300 outline-none text-sm mb-3 bg-white/80"
      />
      <div className="flex flex-wrap gap-2">
        {filtered.map(s => (
          <button key={s.id} onClick={() => toggle(s.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${input.skills.includes(s.id) ? 'bg-magic-500 text-white' : 'bg-white text-gray-500 border border-gray-200 hover:border-magic-300'}`}>
            {s.name}
          </button>
        ))}
      </div>
      {filtered.length === 0 && <p className="text-xs text-gray-400 mt-2">无匹配技能</p>}
    </div>
  );
}

function GearEditor({ input, setInput }: { input: BDInput; setInput: (v: BDInput) => void }) {
  const addGear = (slot: EquipSlot) => {
    setInput({ ...input, gear: [...input.gear, { slot, affixes: [] }] });
  };
  const removeGear = (idx: number) => {
    setInput({ ...input, gear: input.gear.filter((_, i) => i !== idx) });
  };
  const addAffix = (gi: number) => {
    const g = input.gear[gi];
    const newG = { ...g, affixes: [...g.affixes, { name: '', tier: 'T2' as AffixTier }] };
    const gear = [...input.gear]; gear[gi] = newG;
    setInput({ ...input, gear });
  };
  const updAffix = (gi: number, ai: number, field: string, val: string) => {
    const gear = [...input.gear];
    const aff = { ...gear[gi].affixes[ai], [field]: val };
    const affixes = [...gear[gi].affixes]; affixes[ai] = aff;
    gear[gi] = { ...gear[gi], affixes };
    setInput({ ...input, gear });
  };
  const rmAffix = (gi: number, ai: number) => {
    const gear = [...input.gear];
    gear[gi] = { ...gear[gi], affixes: gear[gi].affixes.filter((_, i) => i !== ai) };
    setInput({ ...input, gear });
  };

  const slotAffixes = (slot: EquipSlot) => allAffixes.filter(a => a.slot === slot);

  return (
    <div className="bg-white/60 backdrop-blur rounded-2xl p-5 border-2 border-white/80">
      <label className="text-sm font-bold text-gray-600 block mb-3">装备词条配置</label>
      <div className="flex flex-wrap gap-2 mb-4">
        {slots.filter(s => !input.gear.find(g => g.slot === s)).map(s => (
          <button key={s} onClick={() => addGear(s)}
            className="px-3 py-1.5 rounded-xl text-xs font-medium bg-white text-gray-500 border-2 border-dashed border-gray-300 hover:border-magic-300 hover:text-magic-600 transition-all">
            + {s}
          </button>
        ))}
      </div>
      <div className="space-y-3">
        {input.gear.map((g, gi) => (
          <div key={gi} className="bg-white/80 rounded-xl p-4 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm text-gray-700">{g.slot}</span>
              <button onClick={() => removeGear(gi)} className="text-xs text-red-400 hover:text-red-500">移除</button>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {g.affixes.map((a, ai) => (
                <div key={ai} className="flex items-center gap-1 bg-gray-50 rounded-lg px-2 py-1">
                  <select value={a.name} onChange={e => updAffix(gi, ai, 'name', e.target.value)}
                    className="text-xs border-none bg-transparent outline-none max-w-[100px]">
                    <option value="">选词条</option>
                    {slotAffixes(g.slot).map(aff => (
                      <option key={aff.id} value={aff.name}>{aff.name}</option>
                    ))}
                  </select>
                  <select value={a.tier} onChange={e => updAffix(gi, ai, 'tier', e.target.value)}
                    className="text-xs border-none bg-transparent outline-none">
                    {tierOptions.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <button onClick={() => rmAffix(gi, ai)} className="text-red-300 hover:text-red-500 text-xs">✕</button>
                </div>
              ))}
              {g.affixes.length < 6 && (
                <button onClick={() => addAffix(gi)} className="text-xs px-2 py-1 rounded-lg bg-gray-100 text-gray-400 hover:bg-magic-50 hover:text-magic-500 transition-all">
                  + 添加词条
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {input.gear.length === 0 && <p className="text-xs text-gray-400 text-center py-4">点击上方按钮添加装备部位</p>}
    </div>
  );
}

export default function CalculatorPage() {
  const [input, setInput] = useState<BDInput>({ heroId: '', traitId: '', skills: [], gear: [], level: 80 });
  const [results, setResults] = useState<BDSuggestion[] | null>(null);
  const [scored, setScored] = useState<ReturnType<typeof scoreBD> | null>(null);

  const canAnalyze = input.heroId && input.traitId;

  const handleAnalyze = () => {
    if (!canAnalyze) return;
    setResults(analyzeBD(input));
    setScored(scoreBD(input));
  };

  const reset = () => {
    setInput({ heroId: '', traitId: '', skills: [], gear: [], level: 80 });
    setResults(null);
    setScored(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-700 mb-1">🧮 BD 计算器</h1>
      <p className="text-gray-400 text-sm mb-6">选择职业、技能和装备词条，自动分析 BD 并给出优化建议</p>

      <div className="space-y-5">
        <HeroSelect input={input} setInput={setInput} />
        {input.heroId && <SkillSelect input={input} setInput={setInput} />}
        {input.heroId && <GearEditor input={input} setInput={setInput} />}

        <div className="flex gap-3">
          <button onClick={handleAnalyze} disabled={!canAnalyze}
            className={`flex-1 py-4 rounded-2xl font-bold text-lg transition-all ${canAnalyze ? 'bg-gradient-to-r from-magic-500 to-magic-600 text-white hover:scale-[1.02] shadow-lg shadow-magic-200' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
            {canAnalyze ? '🔮 开始分析 BD' : '请先选择英雄和特性'}
          </button>
          {results && (
            <button onClick={reset} className="px-6 py-4 rounded-2xl font-bold bg-white text-gray-500 border-2 border-gray-200 hover:border-red-300 hover:text-red-500 transition-all">
              重置
            </button>
          )}
        </div>
      </div>

      {/* 结果 */}
      {results && scored && (
        <div className="mt-8 animate-pop-in space-y-6">
          {/* 评分 */}
          <div className="bg-white/70 backdrop-blur rounded-2xl p-6 border-2 border-white/80 text-center">
            <div className="text-sm text-gray-400 mb-1">BD 综合评分</div>
            <div className="text-5xl font-extrabold bg-gradient-to-r from-magic-500 to-candy-500 bg-clip-text text-transparent">
              {scored.score}<span className="text-2xl text-gray-300">/{scored.max}</span>
            </div>
            <div className="text-lg font-bold text-gray-600 mt-1">{scored.label}</div>
            <div className="w-full bg-gray-100 rounded-full h-3 mt-4 max-w-xs mx-auto overflow-hidden">
              <div className="h-full bg-gradient-to-r from-magic-400 to-candy-400 rounded-full transition-all" style={{ width: `${scored.score}%` }} />
            </div>
          </div>

          {/* 建议 */}
          {results.length > 0 && (
            <div className="bg-white/70 backdrop-blur rounded-2xl p-6 border-2 border-white/80">
              <h3 className="font-bold text-gray-700 mb-4">📋 优化建议（{results.length} 条）</h3>
              <div className="space-y-3">
                {results.map((r, i) => (
                  <div key={i} className={`p-4 rounded-xl border-2 ${
                    r.priority === 'high' ? 'bg-red-50 border-red-200' :
                    r.priority === 'medium' ? 'bg-amber-50 border-amber-200' :
                    'bg-blue-50 border-blue-200'
                  }`}>
                    <div className="flex items-start gap-2">
                      <span className="text-lg shrink-0">
                        {r.priority === 'high' ? '🔴' : r.priority === 'medium' ? '🟡' : '🔵'}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-sm text-gray-700">{r.message}</div>
                        <div className="text-xs text-gray-500 mt-1">{r.reason}</div>
                        {r.slot && <span className="text-xs px-2 py-0.5 bg-gray-100 rounded text-gray-400 mt-1 inline-block">{r.slot}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {results.length === 0 && (
            <div className="bg-green-50 rounded-2xl p-8 text-center border-2 border-green-200">
              <div className="text-4xl mb-2">🎉</div>
              <p className="font-bold text-green-700">BD 配置看起来很完善！</p>
              <p className="text-sm text-green-500 mt-1">没有发现明显的优化空间</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
