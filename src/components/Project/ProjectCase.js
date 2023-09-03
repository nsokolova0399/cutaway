import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import '../Project/project.css';
import case1 from '../../assets/image/Case1.jpg';
import case2 from '../../assets/image/Case2.jpg';
import case3 from '../../assets/image/Case3.jpg';
import case4 from '../../assets/image/Case4.jpg';
import case5 from '../../assets/image/Case5.jpg';
import case6 from '../../assets/image/Case6.jpg';
import case7 from '../../assets/image/Case7.jpg';
import case8 from '../../assets/image/Case8.jpg';
import diplom from '../../assets/image/Диплом.jpg';

function ProjectCase() {
    return (
        <div className="project__case">
            <div className="container">
                <div className="row">
                    <div className="col-4 project__text">
                        <a href="https://docs.google.com/presentation/d/1e2AYyHJVNsmeRVLRn4UktP2XICxPNR7REGNcY9BMsvM/edit?usp=sharing" className="project__title"
                           target="_blank" rel="noreferrer">Участие в кейс чемпионате Changellenge>> Cup Russia 2023.</a>
                        <div>
                            <b>Тема кейса: карта мечты для ВТБ</b>
                        </div>
                        <div>
                            <b><a className="hrefGithub" href="https://docs.google.com/presentation/d/1e2AYyHJVNsmeRVLRn4UktP2XICxPNR7REGNcY9BMsvM/edit?usp=sharing">Посмотреть результаты (презентацию) можно здесь</a></b>
                        </div>
                        <div>
                            Решение вошло в топ 25% лучших решений первого тура.
                        </div>
                    </div>

                    <div className="col-8">
                        <Carousel variant="dark" style={{padding: "3rem"}}>
                            <Carousel.Item interval={3500}>
                                <img
                                    className="d-block w-100"
                                    src={case1}
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <img
                                    className="d-block w-100"
                                    src={case2}
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2800}>
                                <img
                                    className="d-block w-100"
                                    src={case3}
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3100}>
                                <img
                                    className="d-block w-100"
                                    src={case4}
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3500}>
                                <img
                                    className="d-block w-100"
                                    src={case5}
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3800}>
                                <img
                                    className="d-block w-100"
                                    src={case6}
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2900}>
                                <img
                                    className="d-block w-100"
                                    src={case7}
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3100}>
                                <img
                                    className="d-block w-100"
                                    src={case8}
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3500}>
                                <img
                                    className="d-block w-100"
                                    src={diplom}
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


export default ProjectCase;

