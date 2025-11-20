import React from 'react'
import style from '../../styles/About.module.css';
import Skills from './Skills';
const About = () => {
    
  return (
    <>
        <div id='about' className={style.aboutPageContainer}>
            <div className="wrapper">
                 <div className={style.aboutInfo}>
                    <div className={style.aboutMe}  data-aos="fade-left" 
              data-aos-duration="1000">
                        <h3 className={style.pageTitle}>About</h3>
                        <p>
                           I’m Zaid, a Full-Stack MERN Developer who loves building clean, modern, and high-performance web apps.
                            I turn ideas into smooth, responsive digital experiences using React, Node.js, and MongoDB.
                            Always learning, always creating — code, design, and innovation drive everything I do. 
                        </p>
                    </div>
                     <div className={style.skillsContainer} data-aos="fade-right" 
              data-aos-duration="1000"><Skills/></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About