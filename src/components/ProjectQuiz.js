import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ProjectQuiz() {
    return (
        <div style={frontMain}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 col-md-12 col-xs-4" style={textMyProject}>
                        <a href="https://quiz-z-1.netlify.app/"  rel="noreferrer"  style={textMyProjectTitle} target="_blank">
                            Quiz - короткий опрос по React.
                        </a>
                        <div>Стек: &nbsp;<b>React</b>,&nbsp;<b>CSS</b>.
                        </div>
                        <div>
                            Программа реализована в качестве знакомства с библиотекой React.
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 col-md-12 col-xs-8">
                        <Carousel variant="dark" style={{padding: "3rem", }}>
                            <Carousel.Item interval={1400}>
                                <img
                                    className="d-block w-100"
                                    src="Quiz.png"
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                    className="d-block w-100"
                                    src="Quiz1.png"
                                    alt="Second slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1100}>
                                <img
                                    className="d-block w-100"
                                    src="Quiz2.png"
                                    alt="Third slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1700}>
                                <img
                                    className="d-block w-100"
                                    src="Quiz3.png"
                                    alt="Four slide"
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


export default ProjectQuiz;

const frontMain = {
    backgroundColor: "#9bf969",
    color: "black",
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
    color:"black",
    fontWeight:"800"
}