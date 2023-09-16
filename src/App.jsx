import Header from "./components/Header"
import Hero from "./sections/Hero"
import Spots from "./sections/Spots"

function App() {
  return (
    <div className="min-h-screen font-inter w-full py-4 lg:py-10 px-6 lg:px-0">
      <Header/>
      <div className="container mx-auto">
        <Hero/>
        <Spots/>
      </div>
    </div>
  )
}

export default App
