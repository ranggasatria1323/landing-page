import './App.css'
import About from './components/About'
import Portofolio from './components/Portofolio'
import Hero from './components/Hero/Hero'
import HeroBody from './components/Hero/Hero_Body'
import Experience from './components/Timeline'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <div >
        <Hero />
        <HeroBody />
        <About />
        <Portofolio />
        <Experience />

        <Contact />
      </div>
    </>
  )
}

export default App
