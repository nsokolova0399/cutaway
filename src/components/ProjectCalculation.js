import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ProjectCalculation() {

    return (
        <div style={frontMain}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 col-md-12 col-xs-4" style={textMyProject}>
                        <a href="https://calculator-rr-1.netlify.app/" style={textMyProjectTitle} target="_blank" rel="noreferrer">Простой калькулятор на JS.</a>
                        <div>Стек: &nbsp;<b>JS</b>,
                            &nbsp; <b>HTML</b>, &nbsp;<b>CSS</b>.
                        </div>
                        <div>
                            Реализован парсер для обработки входной строки (в дальнейшим
                            можно добавить кнопок и реализовать скобки, возведение в степень и т д).
                            Реализовано popup меню для изменения темы сайта и дизайна калькулятора. &nbsp;
                            <a href="https://www.figma.com/file/RXMis4i7rYRaI62bD11YmG/calculator?node-id=0%3A1"target="_blank" rel="noreferrer" style={textMyProjectTitle} >
                                Макет в Figma. </a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 col-md-12 col-xs-8">
                        <Carousel variant="dark" style={{padding: "3rem"}}>
                            <Carousel.Item interval={1800}>
                                <img
                                    className="d-block w-100"
                                    src="Calculation.jpg"
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1400}>
                                <img
                                    className="d-block w-100"
                                    src="Calculation1.jpg"
                                    alt="Second slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1400}>
                                <img
                                    className="d-block w-100"
                                    src="Calculation2.jpg"
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


export default ProjectCalculation;

const frontMain = {
    backgroundColor: "#B83B5E",
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