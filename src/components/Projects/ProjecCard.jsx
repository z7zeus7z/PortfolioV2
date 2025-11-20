import React from 'react';
import style from '../../styles/Projects.module.css';
import ProjectTech from './ProjectTech';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjecCard = (props) => {
  const{Img,Title,Desc,Tech,Git,Live,reverse} = props;
  
  return (
    <>
        <div  className={`${style.projectCard} ${reverse?style.reverse:""}`}   data-aos={reverse ? "fade-left" : "fade-right"}
  data-aos-delay="200">
            <div className={style.projectImg}><img src={Img} alt="Project Img" /></div>
            <div className={style.projectInfo}>
                <div className={style.projectTitle}><h3>{Title}</h3></div>
                <div className={style.projectDescription}><p>{Desc}</p></div>
            </div>
            <div className={style.projectTech}>
              {Tech.map((tech,index)=>(
                <ProjectTech key={index} name={tech}/>
              ))}
            </div>
            <div className={style.projectLinks}>
                <div className={style.link}><FontAwesomeIcon size='xl' icon={faArrowUpRightFromSquare}/><a target='_blank' href={Live}>Live Demo</a></div>
                <div className={style.link}><FontAwesomeIcon size='xl' icon={faGithub}/><a target='_blank' href={Git}>Git Repo</a></div>
            </div>
        </div>
    </>
  )
}

export default ProjecCard