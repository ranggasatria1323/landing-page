import './App.css'
import About from './components/About'
import Portofolio from './components/Portofolio'
import Hero from './components/Hero/Hero'
import HeroBody from './components/Hero/Hero_Body'
import Experience from './components/Timeline'

function App() {

  return (
    <>
      <div >
        <Hero />
        <HeroBody />
        <About />
        <Portofolio />
        <Experience />
      </div>
    </>
  )
}

export default App
