import Header from "./components/Header"
import Hero from "./sections/Hero"
import Spots from "./sections/Spots"

function App() {
  return (
    <div className="min-h-screen font-inter w-full py-4 lg:py-10 px-6 lg:px-0">
      <Header/>
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-14">
        <Hero/>
        <Spots/>
      </div>
    </div>
  )
}

export default App
