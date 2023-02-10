import React from "react";
import ProjectFrontMain from "../components/ProjectFrontMain";
import ProjectCalculation from "../components/ProjectCalculation"
import ProjectHackerNews from "../components/ProjectHackerNews"
import ProjectVueLearning from "../components/ProjectVueLearning"
import ProjectQuiz from "../components/ProjectQuiz";
export const Projects = () => {
    return (
        <>
            <ProjectFrontMain></ProjectFrontMain>
            <div style={{height: "8rem", backgroundColor: "#ffffff"}}></div>
            <ProjectCalculation></ProjectCalculation>
            <div style={{height: "8rem", backgroundColor: "#ffffff"}}></div>
            <ProjectHackerNews></ProjectHackerNews>
            <div style={{height: "8rem", backgroundColor: "#ffffff"}}></div>
            <ProjectVueLearning></ProjectVueLearning>
            <div style={{height: "8rem", backgroundColor: "#ffffff"}}></div>
            <ProjectQuiz></ProjectQuiz>
        </>
    )
}

