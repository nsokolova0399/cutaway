import React  from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Pictures() {

    return (
        <div className="blockThird">
            <Carousel variant="dark">
                <Carousel.Item interval={1000}>
                    <a href="https://github.com/nsokolova0399/Hacker-News" target="_blank"  rel="noreferrer">
                    <img
                        className="d-block w-100"
                        src="HackerNews.jpg"
                        alt="First slide"
                        style={{height:"100%"}}
                    />
                    </a>
                </Carousel.Item>
                <Carousel.Item interval={600}>
                    <a  href="https://github.com/nsokolova0399/quiz" target="_blank"  rel="noreferrer">
                    <img
                        className="d-block w-100"
                        src="Quiz.jpg"
                        alt="Second slide"
                        style={{height:"100%"}}
                    />
                    </a>
                </Carousel.Item>
                <Carousel.Item interval={600}>
                    <a href="https://github.com/nsokolova0399/calculator" target="_blank"  rel="noreferrer">
                    <img
                        className="d-block w-100"
                        src="Calculation.jpg"
                        alt="Third slide"
                        style={{height:"100%"}}
                    />
                    </a>
                </Carousel.Item>
                <Carousel.Item interval={600}>
                    <a href="https://github.com/nsokolova0399/frontend-main" target="_blank"  rel="noreferrer">
                    <img
                        className="d-block w-100"
                        src="Vue.jpg"
                        alt="Four slide"
                        style={{height:"100%"}}
                    />
                    </a>
                </Carousel.Item>
                <Carousel.Item interval={600}>
                    <a href="https://github.com/nsokolova0399/vue_learning" target="_blank" rel="noreferrer">
                    <img
                        className="d-block w-100"
                        src="VueLearning.jpg"
                        alt="Four slide"
                        style={{height:"100%"}}
                    />
                    </a>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}


export default Pictures;