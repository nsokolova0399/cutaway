import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Project/project.css';
import shop1 from '../../assets/image/Shop1.jpg';
import shop2 from '../../assets/image/Shop2.jpg';
import shop3 from '../../assets/image/Shop3.jpg';
import shop4 from '../../assets/image/Shop4.jpg';
import shop5 from '../../assets/image/Shop5.jpg';
import shop6 from '../../assets/image/Shop6.jpg';

function ProjectShop() {
    return (
        <div className="project__shop">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 col-md-12 col-xs-4 project__text">
                        <a href="https://idyllic-swan-9dfe2d.netlify.app/" className="project__title" target="_blank" rel="noreferrer">Интернет-магазин женских платьев.</a>
                        <div><b>Стек:</b> &nbsp;<b>React.js</b>,
                            &nbsp; <b>HTML</b>, &nbsp;<b>CSS (SASS) </b>.
                        </div>
                        <div>
                            <b>
                                <a className="hrefGithub" target="_blank" rel="noreferrer" href="https://github.com/nsokolova0399/shopDresses">
                                    Ссылка на github.
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
                                    src={shop1}
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2300}>
                                <img
                                    className="d-block w-100"
                                    src={shop2}
                                    alt="Second slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3100}>
                                <img
                                    className="d-block w-100"
                                    src={shop3}
                                    alt="Third slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <img
                                    className="d-block w-100"
                                    src={shop4}
                                    alt="Third slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2500}>
                                <img
                                    className="d-block w-100"
                                    src={shop5}
                                    alt="Third slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <img
                                    className="d-block w-100"
                                    src={shop6}
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
