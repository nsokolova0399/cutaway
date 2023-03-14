import React from "react";
import ProjectFrontMain from "../components/ProjectFrontMain";
import ProjectCalculation from "../components/ProjectCalculation"
import ProjectHackerNews from "../components/ProjectHackerNews"
import ProjectVueLearning from "../components/ProjectVueLearning"

export const Projects = () => {
    return (
        <>
            <ProjectFrontMain/>
            <div style={{height: "8rem", backgroundColor: "#ffffff"}}/>
            <ProjectCalculation/>
            <div style={{height: "8rem", backgroundColor: "#ffffff"}}/>
            <ProjectHackerNews/>
            <div style={{height: "8rem", backgroundColor: "#ffffff"}}/>
            <ProjectVueLearning/>
        </>
    )
}

