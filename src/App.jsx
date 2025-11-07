import Hero from './components/Hero'
import TierList from './components/TierList'
import TeamBuilder from './components/TeamBuilder'
import ProgressionPath from './components/ProgressionPath'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-lg tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600">7K Rebirth</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#tierlist" className="hover:text-gray-900">Tier List</a>
            <a href="#teambuilder" className="hover:text-gray-900">Team Builder</a>
            <a href="#progression" className="hover:text-gray-900">Progression</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <TierList />
        <TeamBuilder />
        <ProgressionPath />
      </main>

      <footer className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-gray-600">
          <p>Fan-made resource for Seven Knights Rebirth. Not affiliated with the game publisher.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
