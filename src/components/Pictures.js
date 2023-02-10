import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Pictures() {
    return (
        <div className="blockThird">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12 col-md-12 col-xs-12" style={textMyProjectTitle}>
                        <div>
                            <b>Стек:</b> HTML, CSS, Sass, JavaScript, Vue.js (Vue Router, Vuex), React.js (React Route,
                            Redux).
                        </div>
                        <div>
                            <b>Базы данных:</b> GraphQL, SQL.
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
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100"
                                    src="HackerNews.png"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={600}>
                                <img
                                    className="d-block w-100"
                                    src="Quiz.png"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={600}>
                                <img
                                    className="d-block w-100"
                                    src="Calculation.png"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={600}>
                                <img
                                    className="d-block w-100"
                                    src="Vue.png"
                                    alt="Four slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={600}>
                                <img
                                    className="d-block w-100"
                                    src="VueLearning.png"
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
    fontSize: "1.9rem",
    textDecoration: "none",
    color: "var(--color)",
    fontWeight: "400",
    paddingBottom: "2rem",
}