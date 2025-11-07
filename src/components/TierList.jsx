import { Star, Flame, Shield, Swords } from 'lucide-react'

const tiers = [
  {
    name: 'S',
    color: 'from-amber-500 to-orange-600',
    note: 'Best-in-slot picks that define the meta',
    heroes: [
      { name: 'Rudy', role: 'Tank', tags: ['Barrier','Taunt'] },
      { name: 'Eileene', role: 'Support', tags: ['Atk Buff','Crit'] },
      { name: 'Karin', role: 'Healer', tags: ['Cleanse','Revive'] },
      { name: 'Dellons', role: 'DPS', tags: ['Burst','Lifesteal'] },
    ],
  },
  {
    name: 'A',
    color: 'from-violet-500 to-indigo-600',
    note: 'Strong and consistent, flexible in most content',
    heroes: [
      { name: 'Rachel', role: 'DPS', tags: ['Debuff','Single Target'] },
      { name: 'Jave', role: 'Bruiser', tags: ['Counter','Defense Down'] },
      { name: 'Ace', role: 'DPS', tags: ['Execute','Stun'] },
    ],
  },
  {
    name: 'B',
    color: 'from-sky-500 to-cyan-600',
    note: 'Good early to midgame, needs support to shine',
    heroes: [
      { name: 'Lina', role: 'Support', tags: ['Speed','Atk Buff'] },
      { name: 'Kris', role: 'Assassin', tags: ['Poison','Burst'] },
    ],
  },
]

export default function TierList() {
  return (
    <section id="tierlist" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Tier List</h2>
            <p className="text-gray-600 mt-2">A quick snapshot of recommended heroes and why they work.</p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-sm text-gray-600">
            <Legend color="bg-amber-500" label="S" />
            <Legend color="bg-violet-500" label="A" />
            <Legend color="bg-sky-500" label="B" />
          </div>
        </div>

        <div className="space-y-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className={`px-6 py-4 bg-gradient-to-r ${t.color}`}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-extrabold text-white">{t.name}</span>
                  <span className="text-white/90">{t.note}</span>
                </div>
              </div>
              <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {t.heroes.map((h) => (
                  <HeroCard key={h.name} hero={h} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HeroCard({ hero }) {
  return (
    <div className="p-4 rounded-xl border border-gray-200 bg-white hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-bold text-gray-900">{hero.name}</h4>
        <Star className="w-5 h-5 text-amber-500" />
      </div>
      <p className="text-sm text-gray-600 mt-1">{hero.role}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {hero.tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-3 h-3 rounded ${color}`} />
      <span className="text-sm">{label}</span>
    </div>
  )
}
