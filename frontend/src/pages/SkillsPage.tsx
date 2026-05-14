import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { skills } from '../data/skills';
import { heroes } from '../data/heroes';
import type { SkillCategory } from '../types';

const categories: SkillCategory[] = ['近战攻击', '远程投射', '法术', '召唤魔灵', '位移生存', '增益', '贯注'];
const allClasses = heroes.map(h => h.name);

function SkillCard({ skill }: { skill: typeof skills[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white/70 backdrop-blur rounded-xl p-4 border-2 border-white/80 hover:border-magic-200 transition-all cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-700">{skill.name}</h3>
          <div className="flex flex-wrap gap-1 mt-1">
            <span className="px-2 py-0.5 bg-magic-50 text-magic-600 rounded text-xs font-medium">{skill.category}</span>
            <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-xs">{skill.type}</span>
          </div>
        </div>
        <span className="text-xs text-gray-400 shrink-0">{open ? '▲' : '▼'}</span>
      </div>
      <p className="text-sm text-gray-500 mt-2 line-clamp-2">{skill.description}</p>
      {open && (
        <div className="mt-3 pt-3 border-t border-gray-100 animate-pop-in">
          <p className="text-sm"><span className="font-semibold text-gray-600">效果：</span><span className="text-gray-500">{skill.effect}</span></p>
          <div className="flex flex-wrap gap-1 mt-2">
            {skill.tags.map(t => <span key={t} className="px-2 py-0.5 bg-candy-50 text-candy-600 rounded text-xs">{t}</span>)}
          </div>
          <div className="mt-2 text-xs text-gray-400">适用职业：{skill.classes.join('、')}</div>
        </div>
      )}
    </div>
  );
}

export default function SkillsPage() {
  const [searchParams] = useSearchParams();
  const classParam = searchParams.get('class') || '';

  const [search, setSearch] = useState('');
  const [classFilter, setClassFilter] = useState(classParam);
  const [catFilter, setCatFilter] = useState<SkillCategory | 'all'>('all');

  useEffect(() => {
    if (classParam) setClassFilter(classParam);
  }, [classParam]);

  const filtered = useMemo(() =>
    skills.filter(s => {
      if (classFilter && !s.classes.includes(classFilter)) return false;
      if (catFilter !== 'all' && s.category !== catFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        return s.name.includes(q) || s.description.includes(q) || s.tags.some(t => t.includes(q));
      }
      return true;
    }),
  [search, classFilter, catFilter]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-700 mb-1">🔍 技能查询</h1>
      <p className="text-gray-400 text-sm mb-6">共 {skills.length} 个技能，按角色、名称或效果搜索</p>

      {/* 搜索 */}
      <div className="bg-white/60 backdrop-blur rounded-2xl p-4 border-2 border-white/80 mb-6 space-y-3">
        <input
          type="text" placeholder="搜索技能名称、描述或标签..."
          value={search} onChange={e => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-magic-300 outline-none text-sm bg-white/80"
        />
        <div className="flex flex-wrap gap-2 items-center">
          <button onClick={() => setClassFilter('')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${!classFilter ? 'bg-magic-500 text-white' : 'bg-white text-gray-500 border border-gray-200 hover:border-magic-300'}`}>全部职业</button>
          {allClasses.map(c => (
            <button key={c} onClick={() => setClassFilter(classFilter === c ? '' : c)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${classFilter === c ? 'bg-magic-500 text-white' : 'bg-white text-gray-500 border border-gray-200 hover:border-magic-300'}`}>{c}</button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <button onClick={() => setCatFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${catFilter === 'all' ? 'bg-candy-400 text-white' : 'bg-white text-gray-500 border border-gray-200 hover:border-candy-300'}`}>全部分类</button>
          {categories.map(c => (
            <button key={c} onClick={() => setCatFilter(catFilter === c ? 'all' : c)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${catFilter === c ? 'bg-candy-400 text-white' : 'bg-white text-gray-500 border border-gray-200 hover:border-candy-300'}`}>{c}</button>
          ))}
        </div>
      </div>

      {/* 结果 */}
      <div className="grid md:grid-cols-2 gap-3">
        {filtered.map(s => <SkillCard key={s.id} skill={s} />)}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <div className="text-4xl mb-3">🤔</div>
          <p>没有匹配的技能，试试其他关键词</p>
        </div>
      )}
      {filtered.length > 0 && (
        <p className="text-center text-xs text-gray-400 mt-4">共 {filtered.length} 个结果</p>
      )}
    </div>
  );
}
