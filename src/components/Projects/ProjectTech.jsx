import React from 'react';
import style from '../../styles/Projects.module.css';
const ProjectTech = (props) => {
  const{name}=props
  return (
    <>
        <div className={style.techContainer}>
            <div className={style.techName}><p>{name}</p></div>
        </div>
    </>
  )
}

export default ProjectTech