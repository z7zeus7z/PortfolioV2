import React from 'react'
import style from '../../styles/Nav.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faAddressCard, faPaperPlane, faFolderOpen   } from "@fortawesome/free-regular-svg-icons";

const MobileNav = () => {
  return (
    <>
        <div className={style.mobileNavContainer}>
            <div className={style.mobileNavLinks}>
              <a href="#home"><div className={style.mobileNavLink}><FontAwesomeIcon size='xl' icon={faHouse}/></div></a>  
               <a href="#about"><div className={style.mobileNavLink}><FontAwesomeIcon size='xl' icon={faAddressCard}/></div></a> 
               <a href="#projects"><div className={style.mobileNavLink}><FontAwesomeIcon size='xl' icon={faFolderOpen}/></div></a> 
              <a href="#contacts"><div className={style.mobileNavLink}><FontAwesomeIcon size='xl' icon={faPaperPlane}/></div></a>  
            </div>
        </div>
    </>
  )
}

export default MobileNav