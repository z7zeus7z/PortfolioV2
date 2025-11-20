import React from 'react'
import style from '../../styles/Projects.module.css'
import ProjecCard from './ProjecCard'
import project2img from '../../assets/Project2.png'
const Projects = () => {
    const projects = [
  
  {
   id:1,
   Img :project2img,
   Title:"Luxora",
   Desc:"A modern full-stack furniture store built with the MERN stack, featuring product browsing, categories, cart system, checkout, and an admin dashboard.",
   Tech:["React","Js","NodeJs","MongoDB","express"],
   Git:"https://github.com/z7zeus7z/Luxora",
   Live:"https://luxora-frontend-l8yk.onrender.com/"
  },
  
];
  return (
    <>
        <div id='projects' className={style.projectPageContainer}>
            <div className='wrapper'>
                <div className={style.projectCardsContainer}>
                    {projects.map((project,index)=>(
                      <ProjecCard
                        key={project.id}
                        Img={project.Img}
                        Title={project.Title}
                        Desc = {project.Desc}
                        Tech={project.Tech}
                        Git={project.Git}
                        Live={project.Live}
                        reverse={index % 2 !==0}
                      />
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects