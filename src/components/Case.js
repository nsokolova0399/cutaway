import React from 'react';
import Carousel from "react-bootstrap/Carousel";

function ProjectCalculation() {
    return (
        <div style={frontMain}>
            <div className="container">
                <div className="row" style={{color:"#ff6600"}}>
                    <div className="col-4" style={textMyProject} >
                        <a href="https://docs.google.com/presentation/d/1e2AYyHJVNsmeRVLRn4UktP2XICxPNR7REGNcY9BMsvM/edit?usp=sharing" style={textMyProjectTitle} target="_blank" rel="noreferrer">Участие в кейс чемпионате Changellenge>> Cup Russia 2023.</a>
                        <div>
                            <b>Тема кейса: карта мечты для ВТБ</b>
                        </div>
                        <div>
                            <b><a style={{textDecoration: "none",  color:"#ff6600"}} href="https://docs.google.com/presentation/d/1e2AYyHJVNsmeRVLRn4UktP2XICxPNR7REGNcY9BMsvM/edit?usp=sharing">Посмотреть результаты (презентацию) можно здесь</a></b>
                        </div>
                    </div>

                    <div className="col-8">
                        <Carousel variant="dark" style={{padding: "3rem"}}>
                            <Carousel.Item interval={3500}>
                                <img
                                    className="d-block w-100"
                                    src="./image/Case1.jpg"
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <img
                                    className="d-block w-100"
                                    src="./image/Case2.jpg"
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2800}>
                                <img
                                    className="d-block w-100"
                                    src="./image/Case3.jpg"
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3100}>
                                <img
                                    className="d-block w-100"
                                    src="./image/Case4.jpg"
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3500}>
                                <img
                                    className="d-block w-100"
                                    src="./image/Case5.jpg"
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3800}>
                                <img
                                    className="d-block w-100"
                                    src="./image/Case6.jpg"
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2900}>
                                <img
                                    className="d-block w-100"
                                    src="./image/Case7.jpg"
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3100}>
                                <img
                                    className="d-block w-100"
                                    src="./image/Case8.jpg"
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3500}>
                                <img
                                    className="d-block w-100"
                                    src="./image/Диплом.jpg"
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProjectCalculation;

const frontMain = {
    backgroundColor:"rgb(255,252,94)",
    color: "white",
    maxHeight: "90rem",
    minHeight: "30rem",
}

const textMyProject = {
    padding: "2rem",
    fontSize: "1.7rem",
    fontWeight: "400"
}

const textMyProjectTitle = {
    fontSize: "1.9rem",
    textDecoration: "none",
    color:"#ff6600",
    fontWeight:"800"
}