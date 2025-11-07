import { CheckCircle2, ChevronRight } from 'lucide-react'

const steps = [
  {
    title: 'Early Game (1-20)',
    items: [
      'Focus on story clear; don\'t reroll endlessly',
      'Build one core DPS and a tank',
      'Use free resources on awakenings and basic gear',
    ],
  },
  {
    title: 'Mid Game (20-40)',
    items: [
      'Unlock dailies and farm efficiency nodes',
      'Craft a sustain support and start set bonuses',
      'Target S/A picks for big upgrades',
    ],
  },
  {
    title: 'Late Game (40+)',
    items: [
      'Optimize stats and synergy, not just rarity',
      'Specialize gear per role; refine skill timing',
      'Experiment with boss-specific comps',
    ],
  },
]

export default function ProgressionPath() {
  return (
    <section id="progression" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Progression Path</h2>
          <p className="text-gray-600 mt-2">A concise roadmap to keep you moving forward without resource traps.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-gray-900">{s.title}</h3>
              </div>
              <ul className="space-y-2">
                {s.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <ChevronRight className="w-4 h-4 mt-0.5 text-indigo-600" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
