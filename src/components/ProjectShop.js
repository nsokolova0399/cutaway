import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ProjectShop() {
    return (
        <div style={frontMain}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 col-md-12 col-xs-4" style={textMyProject}>
                        <a href="https://idyllic-swan-9dfe2d.netlify.app/" style={textMyProjectTitle} target="_blank" rel="noreferrer">Интернет-магазин женских платьев.</a>
                        <div><b>Стек:</b> &nbsp;<b>React.js</b>,
                            &nbsp; <b>HTML</b>, &nbsp;<b>CSS (SASS) </b>.
                        </div>
                        <div>
                            <b>
                                <a className="hrefGithub" target="_blank" rel="noreferrer" href="https://github.com/nsokolova0399/shopDresses">Ссылка
                                    на github.
                                </a>
                            </b>
                        </div>
                        <div>
                            <b>
                                <a className="hrefGithub" target="_blank" rel="noreferrer" href="https://idyllic-swan-9dfe2d.netlify.app/"> Тут можно посмотреть как работает проект.
                                </a>
                            </b>
                        </div>
                        <div>
                            Реализован интернет-магазин платьев. Данные лежат на сервисе mockAPI.<br/>
                            Реализовано:<br/>
                            - добавление товара в корзину, просмотр товаров в корзине;<br/>
                            - добавление товара в избранное, просмотр товаров в в избранном;<br/>
                            - просмотр карточки товара в модальном окне;<br/>
                            - оформление заказа и просмотр всех заказанных товаров.<br/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 col-md-12 col-xs-8">
                        <Carousel variant="dark" style={{padding: "3rem"}}>
                            <Carousel.Item interval={3000}>
                                <img
                                    className="d-block w-100"
                                    src="image/Shop1.jpg"
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2300}>
                                <img
                                    className="d-block w-100"
                                    src="image/Shop2.jpg"
                                    alt="Second slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3100}>
                                <img
                                    className="d-block w-100"
                                    src="image/Shop3.jpg"
                                    alt="Third slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <img
                                    className="d-block w-100"
                                    src="image/Shop4.jpg"
                                    alt="Third slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2500}>
                                <img
                                    className="d-block w-100"
                                    src="image/Shop5.jpg"
                                    alt="Third slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <img
                                    className="d-block w-100"
                                    src="image/Shop6.jpg"
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
    backgroundColor:"#860074",
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