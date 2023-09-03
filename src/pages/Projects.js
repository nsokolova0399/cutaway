import React from "react";
import ProjectFrontMain from "../components/Project/ProjectFrontMain";
import ProjectCalculation from "../components/Project/ProjectCalculation";
import ProjectHackerNews from "../components/Project/ProjectHackerNews";
import ProjectVueLearning from "../components/Project/ProjectVueLearning";
import ProjectShop from "../components/Project/ProjectShop";
import ProjectCase from "../components/Project/ProjectCase";
import ProjectInternship from "../components/Project/ProjectInternship";
import '../components/Project/project.css';


export const Projects = () => {
    return (
        <div>
            <ProjectFrontMain />
            <div className="blockWhite"/>
            <ProjectShop />
            <div className="blockWhite"/>
            <ProjectHackerNews />
            <div className="blockWhite"/>
            <ProjectVueLearning/>
            <div className="blockWhite"/>
            <ProjectCalculation />
            <div className="blockWhite"/>
            <ProjectCase />
            <div className="blockWhite"/>
            <ProjectInternship />
        </div>
    )
}

