import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ProjectVueLearning() {
    return (
        <div style={frontMain}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 col-md-12 col-xs-4" style={textMyProject}>
                        <a href="https://learinig-vue-1.netlify.app/"  rel="noreferrer"  style={textMyProjectTitle} target="_blank">
                         Проект-обучение навыкам по Vue.
                        </a>
                        <div><b>Стек:</b> &nbsp;<b>Vue.js</b> (vue-router, vuex),&nbsp;<b>Axios</b>,&nbsp;<b>CSS</b>.
                        </div>
                        <div>
                            <b>
                                <a style={textGit} className="hrefGithub" target="_blank" rel="noreferrer" href="https://github.com/nsokolova0399/vue_learning">Ссылка
                                    на github.
                                </a>
                            </b>
                        </div>
                        <div>
                            <b>
                                <a style={textGit} className="hrefGithub" target="_blank" rel="noreferrer" href="https://learinig-vue-1.netlify.app/"> Тут можно посмотреть как работает проект.
                                </a>
                            </b>
                        </div>
                        <div>
                            Программа реализована в качестве обучения базовым навыкам во Vue.js.
                            Поэтому в проекте есть базовые принципы работы с Vue3 (двустороннее
                            связывание, переиспользованный UI компонент(кнопки, модальное окно, input)
                            и т д), пользовательские директивы(фокус, пересечение(прокрутка страниц)).
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 col-md-12 col-xs-8">
                        <Carousel variant="dark" style={{padding: "3rem", }}>
                            <Carousel.Item interval={2800}>
                                <img
                                    className="d-block w-100"
                                    src="./image/VueLearning.webp"
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2500}>
                                <img
                                    className="d-block w-100"
                                    src="./image/VueLearning1.webp"
                                    alt="Second slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2100}>
                                <img
                                    className="d-block w-100"
                                    src="./image/VueLearning2.webp"
                                    alt="Third slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={2400}>
                                <img
                                    className="d-block w-100"
                                    src="./image/VueLearning3.webp"
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


export default ProjectVueLearning;

const frontMain = {
    backgroundColor:"rgb(255,94,94)",
    color: "white",
    maxHeight: "90rem",
    minHeight: "30rem",
}

const textMyProject = {
    padding: "2rem",
    fontSize: "1.7rem",
    fontWeight: "400",
}

const textMyProjectTitle = {
    fontSize: "1.9rem",
    textDecoration: "none",
    color:"white",
    fontWeight:"800"
}

const textGit = {
    color:"white",
}