import { Sparkles, Sword, Shield, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-600/10 text-indigo-700 border border-indigo-200 mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Community-crafted guide</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Seven Knights Rebirth
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600">Ultimate Guide</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-xl">
              Build powerful teams, understand roles, and climb through content faster with a clean, beginner-friendly reference.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#tierlist" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:shadow-md transition">
                <CrownIcon /> Top Picks
              </a>
              <a href="#teambuilder" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-gray-900 border border-gray-200 font-semibold hover:bg-gray-50 transition">
                <Users className="w-5 h-5" /> Team Builder
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <Feature icon={<Sword className="w-4 h-4" />} label="Damage" />
              <Feature icon={<Shield className="w-4 h-4" />} label="Survivability" />
              <Feature icon={<Users className="w-4 h-4" />} label="Synergy" />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] md:aspect-[5/4] rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-pink-500 p-[2px] shadow-lg">
              <div className="w-full h-full rounded-2xl bg-white grid place-items-center">
                <div className="text-center p-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-600 to-pink-600 shadow-lg">
                    <Sword className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-gray-900">Plan. Build. Conquer.</h3>
                  <p className="mt-2 text-gray-600 max-w-sm">
                    Quickly see meta picks, compose balanced squads, and follow a straightforward path to progression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon, label }) {
  return (
    <div className="flex items-center gap-2 text-gray-700">
      <div className="p-2 rounded-md bg-gray-100 border border-gray-200">
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}

function CrownIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
      <path d="M3 7l4.5 3 4.5-6 4.5 6L21 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    </svg>
  )
}
