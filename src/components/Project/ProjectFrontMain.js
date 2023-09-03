import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Project/project.css';
import vue from '../../assets/image/Vue.webp';
import vue1 from '../../assets/image/Vue1.webp';
import vue2 from '../../assets/image/Vue2.webp';
import vue3 from '../../assets/image/Vue3.webp';
import vue4 from '../../assets/image/Vue4.webp';
import vue5 from '../../assets/image/Vue5.webp';
import vue6 from '../../assets/image/Vue6.webp';

function ProjectFrontMain() {
    return (
        <div className="project__front-main">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 col-md-12 col-xs-4 project__text">
                        <a href="https://github.com/nsokolova0399/frontend-main" rel="noreferrer"
                           className="project__title" target="_blank">
                            Разработка интерфейсной части системы поиска
                            решения на основе прецедентов.
                        </a>
                        <div><b>Стек: </b> <b>Vue.js</b> (vue-router, vuelidate, vue-apollo, vue-notification),
                            &nbsp;<b>Bootstrap-vue</b>, &nbsp;<b>GraphQL</b>, &nbsp;<b>CSS</b>.
                        </div>
                        <div>
                            <b>
                                <a className="hrefGithub" rel="noreferrer" target="_blank" href="https://github.com/nsokolova0399/frontend-main">Ссылка
                                    на github.
                                </a>
                            </b>
                        </div>
                        <div>
                            Реализована регистрация, аутентификация и авторизация пользователя.
                            Реализовано меню для работы с приложением. Приложение может создать датасет,
                            который потом можно загрузить и получить точность готового алгоритма k-NN.
                            Метод k-ближайших соседей (k Nearest Neighbors, или kNN) – популярный алгоритм
                            классификации,
                            который используется в разных типах задач машинного обучения.
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 col-md-12 col-xs-8">
                        <Carousel variant="dark" style={{padding: "3rem",}}>
                            <Carousel.Item interval={2200}>
                                <img
                                    className="d-block w-100"
                                    src={vue}
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2200}>
                                <img
                                    className="d-block w-100"
                                    src={vue1}
                                    alt="Second slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2200}>
                                <img
                                    className="d-block w-100"
                                    src={vue2}
                                    alt="Third slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2200}>
                                <img
                                    className="d-block w-100"
                                    src={vue3}
                                    alt="Four slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2200}>
                                <img
                                    className="d-block w-100"
                                    src={vue4}
                                    alt="Four slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2200}>
                                <img
                                    className="d-block w-100"
                                    src={vue5}
                                    alt="Five slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2200}>
                                <img
                                    className="d-block w-100"
                                    src={vue6}
                                    alt="Six slide"
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

export default ProjectFrontMain;
