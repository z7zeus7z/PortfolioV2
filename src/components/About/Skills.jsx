import React from 'react'
import style from '../../styles/About.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faNodeJs, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
const Skills = () => {
   
  return (
    <>
      <div className={style.skillIconsContainer}>
        <div className={style.skill}><FontAwesomeIcon className={style.icon} icon={faReact}/><p>React :</p></div>
        <div className={style.skill}><FontAwesomeIcon className={style.icon} icon={faJs}/><p>JavaScript :</p></div>
        <div className={style.skill}><FontAwesomeIcon className={style.icon} icon={faNodeJs}/><p>NodeJs :</p></div>
        <div className={style.skill}><FontAwesomeIcon className={style.icon} icon={faHtml5}/><p>HTMl5 :</p></div>
        <div className={style.skill}><FontAwesomeIcon className={style.icon} icon={faCss3Alt}/><p>CSS :</p></div>
      </div>
      <div className={style.sliderContainer}>
        <div className={style.slider}><div style={{width:"80%"}} className={style.percent}></div><p>90%</p></div>
        <div className={style.slider}><div style={{width:"75%"}} className={style.percent}></div><p>80%</p></div>
        <div className={style.slider}><div style={{width:"60%"}} className={style.percent}></div><p>70%</p></div>
        <div className={style.slider}><div style={{width:"90%"}} className={style.percent}></div><p>100%</p></div>
        <div className={style.slider}><div style={{width:"90%"}} className={style.percent}></div><p>100%</p></div>
      </div>
    </>
  )
}

export default Skills