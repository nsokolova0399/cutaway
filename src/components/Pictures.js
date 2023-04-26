import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Pictures() {
    return (
        <div className="blockThird">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12 col-md-12 col-xs-12" style={textMyProjectTitle}>
                        <div>
                            <b>Стек:</b> HTML, CSS, Sass, JavaScript,Vue.js (Vue Router), React.js (React Route).
                        </div>
                        <div>
                            <b>Базы данных:</b> SQL (простые запросы, обновления данных, создание и удаления таблиц, вложенные запросы, объединение таблиц).
                            Понимаю устройство базы данных, построение базы данных с помощью ER модели.
                        </div>
                        <div>
                            <b>Язык запросов:</b> GraphQL.
                        </div>
                        <div>
                            <b>Система контроля версий:</b> Git.
                        </div>
                        <div>
                            Умею создавать макеты сайтов в Figma.
                        </div>
                        <div>
                            <b>Дополнительные языки программирования:</b> C++, C#, Python.
                        </div>
                    </div>
                    <div className="col-12 col-lg-12 col-md-12 col-xs-12">
                        <Carousel variant="dark">
                            <Carousel.Item interval={2500}>
                                <img
                                    className="d-block  w-100"
                                    src="./image/HackerNews.webp"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2500}>
                                <img
                                    className="d-block w-100"
                                    src="./image/Calculation.webp"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2500}>
                                <img
                                    className="d-block w-100"
                                    src="./image/Vue.webp"
                                    alt="Four slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2500}>
                                <img
                                    className="d-block w-100"
                                    src="./image/VueLearning.webp"
                                    alt="Five slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Pictures;

const textMyProjectTitle = {
    fontSize: "2.1rem",
    textDecoration: "none",
    color: "var(--color)",
    fontWeight: "400",
    paddingBottom: "2rem",
    lineHeight: 'normal',
}