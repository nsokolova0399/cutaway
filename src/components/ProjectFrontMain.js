import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ProjectFrontMain() {
    return (
        <div style={frontMain}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 col-md-12 col-xs-4" style={textMyProject}>
                        <a href="https://github.com/nsokolova0399/frontend-main" rel="noreferrer"
                           style={textMyProjectTitle} target="_blank">Разработка интерфейсной части системы поиска
                            решения на основе прецендентов.</a>
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
                                    src="./image/Vue.webp"
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2200}>
                                <img
                                    className="d-block w-100"
                                    src="./image/Vue1.webp"
                                    alt="Second slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2200}>
                                <img
                                    className="d-block w-100"
                                    src="./image/Vue2.webp"
                                    alt="Third slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2200}>
                                <img
                                    className="d-block w-100"
                                    src="./image/Vue3.webp"
                                    alt="Four slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2200}>
                                <img
                                    className="d-block w-100"
                                    src="./image/Vue4.webp"
                                    alt="Four slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2200}>
                                <img
                                    className="d-block w-100"
                                    src="./image/Vue5.webp"
                                    alt="Five slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2200}>
                                <img
                                    className="d-block w-100"
                                    src="./image/Vue6.webp"
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

const frontMain = {
    backgroundColor: "#6A2C70",
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
    color: "#ffffff",
    fontWeight: "800"
}