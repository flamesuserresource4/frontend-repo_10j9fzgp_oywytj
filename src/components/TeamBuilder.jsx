import { useMemo, useState } from 'react'
import { Users, PlusCircle, X } from 'lucide-react'

const POOL = [
  { name: 'Rudy', role: 'Tank' },
  { name: 'Eileene', role: 'Support' },
  { name: 'Karin', role: 'Healer' },
  { name: 'Dellons', role: 'DPS' },
  { name: 'Jave', role: 'Bruiser' },
  { name: 'Rachel', role: 'DPS' },
  { name: 'Ace', role: 'DPS' },
]

export default function TeamBuilder() {
  const [team, setTeam] = useState([])

  const roles = useMemo(() => {
    const r = { Tank: 0, Healer: 0, Support: 0, DPS: 0, Bruiser: 0 }
    team.forEach((m) => (r[m.role] = (r[m.role] || 0) + 1))
    return r
  }, [team])

  const addToTeam = (hero) => {
    if (team.find((m) => m.name === hero.name)) return
    if (team.length >= 4) return
    setTeam([...team, hero])
  }

  const removeFromTeam = (name) => setTeam(team.filter((m) => m.name !== name))

  return (
    <section id="teambuilder" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Team Builder</h2>
            <p className="text-gray-600 mt-2">Compose a balanced 4-hero squad. Mix survivability, sustain, and damage.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-indigo-700 bg-indigo-600/10 px-3 py-1.5 rounded-full border border-indigo-200">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">{team.length}/4 Selected</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {POOL.map((h) => (
                <button
                  key={h.name}
                  onClick={() => addToTeam(h)}
                  className="group p-4 rounded-xl border border-gray-200 bg-white hover:shadow-md transition text-left"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{h.name}</div>
                      <div className="text-sm text-gray-600">{h.role}</div>
                    </div>
                    <PlusCircle className="w-5 h-5 text-indigo-600 opacity-0 group-hover:opacity-100 transition" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="p-5 rounded-2xl border border-gray-200 bg-white sticky top-6">
              <h3 className="font-bold text-gray-900 mb-3">Your Squad</h3>
              <div className="space-y-3">
                {team.length === 0 && (
                  <p className="text-sm text-gray-600">Pick up to 4 heroes to form a team.</p>
                )}
                {team.map((m) => (
                  <div key={m.name} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-200">
                    <div>
                      <div className="font-medium text-gray-900">{m.name}</div>
                      <div className="text-xs text-gray-600">{m.role}</div>
                    </div>
                    <button onClick={() => removeFromTeam(m.name)} className="p-1 rounded hover:bg-white">
                      <X className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-2">Role Coverage</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {Object.entries(roles).map(([role, count]) => (
                    <div key={role} className="flex items-center justify-between px-3 py-2 rounded-lg border bg-white">
                      <span className="text-gray-700">{role}</span>
                      <span className={`px-2 py-0.5 rounded text-white ${count > 0 ? 'bg-green-500' : 'bg-gray-400'}`}>{count}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-3 rounded-lg bg-indigo-50 text-indigo-800 border border-indigo-200 text-sm">
                Aim for 1 Tank, 1 Healer/Support, and 2 DPS for a safe, flexible team.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
