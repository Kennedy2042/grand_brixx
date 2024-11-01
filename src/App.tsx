import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Home from './home/Home'
import Contact from './contact/Contact'
import About from './about/About'
import Listing from './listing/Listing'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />}/>
            <Route path='/listing' element={<Listing/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
