import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './pictures.css'
import HackerNews from '../../assets/image/HackerNews.webp';
import Calculation from '../../assets/image/Calculation.webp';
import Vue from '../../assets/image/Vue.webp';
import VueLearning from '../../assets/image/VueLearning.webp';

function Pictures() {
    return (
        <div className="pictures">
                <div className="pictures__row">
                    <div className="pictures__row-text">
                        <div>
                            <b>Стек:</b> HTML, CSS, Sass, JavaScript,Vue.js (Vue Router, Vuelidate, Vue-Notification), React.js (React Route).
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
                    <div className="pictures__row-text">
                        <Carousel variant="dark">
                            <Carousel.Item interval={2500}>
                                <img
                                    className="d-block  w-100"
                                    src={HackerNews}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2500}>
                                <img
                                    className="d-block w-100"
                                    src={Calculation}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2500}>
                                <img
                                    className="d-block w-100"
                                    src={Vue}
                                    alt="Four slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2500}>
                                <img
                                    className="d-block w-100"
                                    src={VueLearning}
                                    alt="Five slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
        </div>
    );
}

export default Pictures;