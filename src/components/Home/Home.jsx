import React from 'react';
import Typewriter from "typewriter-effect";
import style from '../../styles/Home.module.css';
import mypic from '../../assets/myimg.png';
import ProjectsTree from './ProjectsTree';
const Home = () => {
  return (
    <>
        <div id='home' className={style.homeContainer}> 
            <div className='wrapper'>
                <div className={style.ContentContainer}>
                     <div className={style.imgContainer}>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#d54343ff" d="M37.8,-36.6C50.4,-25.1,63.1,-12.6,66.1,3C69,18.5,62.3,37.1,49.7,47.7C37.1,58.4,18.5,61.2,1.9,59.3C-14.7,57.4,-29.5,50.8,-40.6,40.1C-51.8,29.5,-59.4,14.7,-60.6,-1.2C-61.7,-17.1,-56.5,-34.2,-45.4,-45.7C-34.2,-57.2,-17.1,-63,-2.3,-60.7C12.6,-58.5,25.1,-48.1,37.8,-36.6Z" transform="translate(100 100) scale(1.5)" />
                    </svg>
                    <div className={style.mypicContainer}><img src={mypic} alt="" /></div>
                </div>
                <div className={style.introduction}>
                    <h3>Hi , Im Zaid <br/>  <Typewriter options={{strings:["A MERN Stack Developer.", "A JavaScript Problem Solver.","A React & Node.js Enthusiast"],autoStart:true,loop:true,delay:75,deleteSpeed:40}}/></h3>
                    <p>I enjoy turning complex problems into simple, efficient solutions. With experience in React, Node.js, and MongoDB, I build scalable web apps that deliver seamless user experiences.</p>
                    <div className={style.cta_Btns}>
                        <button className={style.ctaButton}><a href="#projects">View Work</a></button>
                        <button className={style.ctaButton}>Download CV</button>
                    </div>
                </div>
                <ProjectsTree/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home