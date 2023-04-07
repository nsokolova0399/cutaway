import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ProjectShop() {
    return (
        <div style={frontMain}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 col-md-12 col-xs-4" style={textMyProject}>
                        <a href="https://calculator-rr-1.netlify.app/" style={textMyProjectTitle} target="_blank" rel="noreferrer">Интернет-магазин женских платьев.</a>
                        <div><b>Стек:</b> &nbsp;<b>React.js</b>,
                            &nbsp; <b>HTML</b>, &nbsp;<b>CSS (SASS) </b>.
                        </div>
                        <div>
                            <b>
                                <a className="hrefGithub" target="_blank" rel="noreferrer" href="https://github.com/nsokolova0399/vue_learning">Ссылка
                                    на github.
                                </a>
                            </b>
                        </div>
                        <div>
                            <b>
                                <a className="hrefGithub" target="_blank" rel="noreferrer" href="https://learinig-vue-1.netlify.app/"> Тут можно посмотреть как работает проект.
                                </a>
                            </b>
                        </div>
                        <div>
                            Реализован парсер для обработки входной строки (в дальнейшим
                            можно добавить кнопок и реализовать скобки, возведение в степень и т д).
                            Реализовано popup меню для изменения темы сайта и дизайна калькулятора. &nbsp;
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 col-md-12 col-xs-8">
                        <Carousel variant="dark" style={{padding: "3rem"}}>
                            <Carousel.Item interval={2500}>
                                <img
                                    className="d-block w-100"
                                    src="./image/Calculation.webp"
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2300}>
                                <img
                                    className="d-block w-100"
                                    src="./image/Calculation1.webp"
                                    alt="Second slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2800}>
                                <img
                                    className="d-block w-100"
                                    src="./image/Calculation2.webp"
                                    alt="Third slide"
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


export default ProjectShop;

const frontMain = {
    backgroundColor: "#61b83b",
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
    color:"#ffffff",
    fontWeight:"800"
}