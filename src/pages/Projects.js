import React from "react";
import ProjectFrontMain from "../components/ProjectFrontMain";
import ProjectCalculation from "../components/ProjectCalculation"
import ProjectHackerNews from "../components/ProjectHackerNews"
import ProjectVueLearning from "../components/ProjectVueLearning"
import ProjectShop from "../components/ProjectShop"
import Case from "../components/Case"

// import ProjectBD from "../components/ProjectBD"

export const Projects = () => {
    return (
        <>
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
            <Case />
            {/*<div className="blockWhite"/>*/}
            {/*<ProjectBD />*/}
        </>
    )
}

