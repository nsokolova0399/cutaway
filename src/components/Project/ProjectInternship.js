import React from 'react';
import '../Project/project.css';

function ProjectInternship() {
    return (
        <div className="project__internship">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12 col-md-12 col-xs-12 project__text">
                        <b className="project__title">
                            Участие в хакатоне и в стажировке от Ренессанс Банка.
                        </b>
                        <p>
                            <a href="https://vk.com/mpei_ru?w=wall-51345945_12095" target="_blank" rel="noreferrer" className="hrefGithub">
                                Хакатон на тему: «Механика обслуживания клиентов через социальные мессенджеры».
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
                </div>
            </div>
        </div>
    );
}

export default ProjectInternship;
