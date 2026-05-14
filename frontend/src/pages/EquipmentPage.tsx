import { useState, useMemo } from 'react';
import { affixes } from '../data/affixes';
import type { EquipSlot } from '../types';

const slots: EquipSlot[] = ['武器', '头盔', '胸甲', '手套', '鞋子', '项链', '戒指', '腰带'];

const tierColors: Record<string, string> = {
  T0: 'text-amber-500 font-bold',
  T1: 'text-orange-600 font-bold',
  T2: 'text-purple-500',
  T3: 'text-blue-500',
  T4: 'text-blue-400',
  T5: 'text-gray-500',
};

function AffixCard({ affix }: { affix: typeof affixes[0] }) {
  return (
    <div className="bg-white/70 backdrop-blur rounded-xl p-4 border-2 border-white/80 hover:border-magic-200 transition-all">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-gray-700">{affix.name}</h3>
        <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-500">{affix.type === 'prefix' ? '前缀' : '后缀'}</span>
      </div>
      {affix.source && <span className="text-xs text-magic-500 mb-2 block">来源：{affix.source}</span>}
      <div className="space-y-1">
        {affix.tiers.map(t => (
          <div key={t.tier} className="flex justify-between items-center text-sm px-2 py-1 rounded bg-white/50">
            <span className={tierColors[t.tier] || ''}>{t.tier}</span>
            <span className="text-gray-600">{t.value}</span>
            <span className="text-gray-400 text-xs">ilvl {t.ilvl}+</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-2">{affix.description}</p>
      <div className="flex flex-wrap gap-1 mt-2">
        {affix.tags.map(t => <span key={t} className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-xs">{t}</span>)}
      </div>
    </div>
  );
}

export default function EquipmentPage() {
  const [slotFilter, setSlotFilter] = useState<EquipSlot | 'all'>('all');
  const [typeFilter, setTypeFilter] = useState<'all' | 'prefix' | 'suffix'>('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() =>
    affixes.filter(a => {
      if (slotFilter !== 'all' && a.slot !== slotFilter) return false;
      if (typeFilter !== 'all' && a.type !== typeFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        return a.name.includes(q) || a.tags.some(t => t.includes(q)) || a.description.includes(q);
      }
      return true;
    }),
  [slotFilter, typeFilter, search]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-700 mb-1">⚔️ 装备词条</h1>
      <p className="text-gray-400 text-sm mb-6">各部位词缀 T 级一览，T1 为打造毕业，T0 需侵蚀获得</p>

      <div className="bg-white/60 backdrop-blur rounded-2xl p-4 border-2 border-white/80 mb-6 space-y-3">
        <input type="text" placeholder="搜索词条名称或标签..."
          value={search} onChange={e => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-magic-300 outline-none text-sm bg-white/80"
        />
        <div className="flex flex-wrap gap-2 items-center">
          <button onClick={() => setSlotFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${slotFilter === 'all' ? 'bg-magic-500 text-white' : 'bg-white text-gray-500 border border-gray-200 hover:border-magic-300'}`}>全部部位</button>
          {slots.map(s => (
            <button key={s} onClick={() => setSlotFilter(slotFilter === s ? 'all' : s)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${slotFilter === s ? 'bg-magic-500 text-white' : 'bg-white text-gray-500 border border-gray-200 hover:border-magic-300'}`}>{s}</button>
          ))}
        </div>
        <div className="flex gap-2">
          {(['all', 'prefix', 'suffix'] as const).map(t => (
            <button key={t} onClick={() => setTypeFilter(t)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${typeFilter === t ? 'bg-candy-400 text-white' : 'bg-white text-gray-500 border border-gray-200 hover:border-candy-300'}`}>
              {t === 'all' ? '全部' : t === 'prefix' ? '前缀' : '后缀'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {filtered.map(a => <AffixCard key={a.id} affix={a} />)}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <div className="text-4xl mb-3">🔧</div>
          <p>没有匹配的词条，试试其他关键词</p>
        </div>
      )}
    </div>
  );
}
