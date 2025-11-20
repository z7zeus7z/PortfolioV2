import React from 'react'
import style from '../../styles/Footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
        <div className={style.footerPageContainer}>
            <div className="wrapper">
              <div className={style.contentContainer}>
                <div className={style.logo}><h2><span>&lt;</span>ZeusDev<span>/&gt;</span></h2></div>
                <div className={style.mediaContainer}>
                 <a target='_blank' href="https://www.facebook.com/zaidghost4/?locale=ar_AR"><div className={style.media}><FontAwesomeIcon icon={faFacebook}/></div></a> 
                  <a target='_blank' href="https://www.instagram.com/zaidsabbah7/"><div className={style.media}><FontAwesomeIcon icon={faInstagram}/></div></a>
                  <a target='_blank' href="https://www.linkedin.com/in/zaid-sabbah-964038235/"><div className={style.media}><FontAwesomeIcon icon={faLinkedin}/></div></a>
                </div>
                <div className={style.quickLinks}>
                  <h4>Quick Links</h4>
                  <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Footer