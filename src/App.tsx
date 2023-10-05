import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import PokemonVote from './components/Pokemons'

function App() {

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <PokemonVote />
      <Footer />
    </div>
  )
}

export default App
