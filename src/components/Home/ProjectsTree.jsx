import React from 'react'
import style from '../../styles/Home.module.css';
import ProcessCard from './ProcessCard';
const ProjectsTree = () => {
  return (
    <>
        <div className={style.projectsTreeContainer}>
            <h2>Tech stack</h2>
            <div className={style.processCardContainer}>
                {["react","nodejs","expressjs","mongodb","css3","html5","js","github"].map((name,index)=>(<ProcessCard key={index} name={name} index={index}/>))}
            </div>
        </div>
    </>
  )
}

export default ProjectsTree