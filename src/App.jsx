import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Explore from './Components/Explore'
import Footer from './Components/Footer'
function App() {

  return (
    <div className='font'>
    <div className="fixed top-0 w-full"><Navbar/></div>
      <Hero/>
      <Explore/>
      <div className=''>

    <Footer/>
      </div>
    </div>
  )
}

export default App
