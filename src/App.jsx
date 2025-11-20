import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DesktopNav from "./components/NavBar/DesktopNav";
import MobileNav from "./components/NavBar/MobileNav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
function App() {
  const [isDesktop,setIsDesktop]=useState(window.innerWidth>768);

  useEffect(()=>{
    const handleResize = ()=>setIsDesktop(window.innerWidth>768);
    window.addEventListener("resize",handleResize);
    return ()=> window.removeEventListener("resize",handleResize);
  },[]);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,     
      offset: 120,    
    });
  }, []);


  return (
    <>
      {isDesktop?<DesktopNav/>:<MobileNav/>}
      
        <Home isDesktop={isDesktop}/>
        <About isDesktop={isDesktop}/>
        <Projects/>
        <Contacts/>
        <Footer/>
    </>
  )
}

export default App
