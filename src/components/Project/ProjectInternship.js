import React from 'react';
import '../Project/project.css';
import Carousel from 'react-bootstrap/Carousel';
import ren from "../../assets/image/renessans.jpg";


function ProjectInternship() {
    return (
        <div className="project__internship">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 col-md-12 col-xs-4 project__text">
                        <b className="project__title">
                            Участие в хакатоне и в стажировке от Ренессанс Банка.
                        </b>
                        <p>
                            <a href="https://docs.google.com/presentation/d/1zahKYAEbrxOHi7HP40LGGzXSdubHTEW5/edit?usp=sharing&ouid=115722607164271525547&rtpof=true&sd=true" target="_blank" rel="noreferrer" className="hrefGithub">
                                <b>Хакатон на тему: «Механика обслуживания клиентов через социальные мессенджеры».</b>
                            </a>
                            &nbsp; Был реализован прототип чат-бота для вк с MLPClassifier, проведена аналитика и посчитан
                            бюджет проекта за 24 часа. Выступление получило положительные отзывы и мы с командой заняли второе место.
                            После этого я получила fast track на летнюю стажировку.
                        </p>
                        <p>
                            Стажировку я проходила в отделе блока «Технологии», работала в команде.
                            Занималась созданием приложения для внутренних сотрудников. Все этапы выполнялись
                            самостоятельно, поэтому обязанности были обширны: аналитика, проработка
                            бизнес-логики приложения и пользовательского пути, проектирование и создание БД,
                            написание запросов и процедур на SQL, создание API, программирование на JS,
                            составление тех. документации и тестирование приложения.
                        </p>
                    </div>
                    <div className="col-12 col-lg-8 col-md-12 col-xs-8">
                        <Carousel variant="dark" style={{padding: "3rem"}}>
                            <Carousel.Item interval={3000}>
                                <img
                                    className="d-block w-100"
                                    src={ren}
                                    alt="First slide"
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

export default ProjectInternship;
