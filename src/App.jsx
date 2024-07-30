
import { Routes , Route} from "react-router-dom"
import About from './pages-routes/About.jsx'
import Home from './pages-routes/Home.jsx'
import Service from './pages-routes/Service.jsx'
import Contact from './pages-routes/Contact.jsx'
import './App.css'
function App(){

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
