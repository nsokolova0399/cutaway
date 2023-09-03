import React from "react";
import Greeting from "../components/Greeting/Greeting";
import Pictures from "../components/Pictures/Pictures";
import AboutMe from "../components/AboutMe/AboutMe";

export const Home = () => {
    return (
        <div className="home">
            <Greeting />
            <AboutMe />
            <Pictures />
        </div>
    )
}

