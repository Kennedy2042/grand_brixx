import { Outlet, useLocation } from "react-router-dom"
import Header from "../header/Header"
import HeroSection from "../heroSection/HeroSection"
import Footer from "../footer/Footer"

const Layout = () => {

  const location = useLocation();

  const homePage = location.pathname === '/'


  return (
    <>
    <Header/>
    <HeroSection/>
    <Outlet/>
    <Footer marginTop={homePage ? '7rem' : null }/>
    </>
  )
}

export default Layout