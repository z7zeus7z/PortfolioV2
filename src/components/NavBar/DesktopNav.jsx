import React from 'react'
import style from "../../styles/Nav.module.css";
const DesktopNav = () => {
  return (
    <>
        <div className={style.desktopNavContainer}>
            <div className={style.logo}><h2><span>&lt;</span>ZeusDev<span>/&gt;</span></h2></div>
            <div className={style.desktopNavLinks}>
              <ul>
             <a href="#home"><li className={style.links}>Home</li></a>   
              <a href="#about"><li className={style.links}>About</li></a>  
              <a href="#projects"><li className={style.links}>Projects</li></a>  
            <a href="#contacts"> <li className={style.links}>Contact</li></a>   
              </ul>
            </div>
        </div>
    </>
  )
}

export default DesktopNav