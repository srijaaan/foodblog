import './App.css'
import About from './components/About/about.component'
import Footer from './components/Footer/footer.component'
import Hero from './components/Hero/hero.component'
import Latest from './components/Latest/latest.component'


const App = () => {
  return (
    <div>
    <Hero/>
    <About/>
    <Latest/>
    <Footer/>
    </div>
  )
}

export default App
