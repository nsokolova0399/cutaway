import React from "react";
import ProjectFrontMain from "../components/ProjectFrontMain";
import ProjectCalculation from "../components/ProjectCalculation"
import ProjectHackerNews from "../components/ProjectHackerNews"

export const Projects = () => {
    return (
        <>
            <ProjectFrontMain></ProjectFrontMain>
            <div style={{height: "8rem", backgroundColor: "#ffffff"}}></div>
            <ProjectCalculation></ProjectCalculation>
            <div style={{height: "8rem", backgroundColor: "#ffffff"}}></div>
            <ProjectHackerNews></ProjectHackerNews>
        </>
    )
}

