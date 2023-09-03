import {Fade, Slide} from 'react-awesome-reveal'
import React from "react";
import "./greeting.css";
import me from "../../assets/image/me.png"

const Greeting = () => {
    return <div className="greeting">
        <Slide direction={"up"} duration={"1000"} className="greeting__text">
                Привет! Меня зовут — Анастасия. Я начинающий frontend-разработчик.
                Здесь ты можешь больше узнать обо мне, познакомиться с моими проектами.
        </Slide>
        <Fade direction={"center"} duration={"2000"} className="greeting__image">
            <img
                alt="Anastasia"
                src={me}
            />
        </Fade>
    </div>
}


export default Greeting