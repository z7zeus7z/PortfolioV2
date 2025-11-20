import React from "react";
import style from "../../styles/Home.module.css";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const iconMap = {
  react: <FaReact  color="#61DAFB" size={60}/>,
  nodejs: <FaNodeJs color="#339933" size={60}/>,
  expressjs: <SiExpress color="#000000" size={60}/>,
  mongodb: <SiMongodb color="#47A248" size={60}/>,
  css3: <FaCss3Alt color="#1572B6" size={60}/>,
  html5: <FaHtml5 color="#ffffffff" size={60}/>,
  js: <FaJs color="#F7DF1E" size={60}/>,
  github: <FaGithub color="#181717" size={60}/>,
};

const ProcessCard = ({ name, index }) => {
  return (
    <div
      className={style.processCard}
      style={{
        animationDelay: `${index * 0.4}s, ${index * 0.3}s`,
      }}
    >
      <div className={style.techIcon}>
        {iconMap[name]} 
      </div>
    </div>
  );
};

export default ProcessCard;
