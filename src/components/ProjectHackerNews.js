import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ProjectHackerNews() {

    return (
        <div style={frontMain}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 col-md-12 col-xs-4" style={textMyProject}>
                        <a href="https://capable-starlight-afd13b.netlify.app/" style={textMyProjectTitle} rel="noreferrer" target="_blank">
                            Интерфейс для сайта Hacker News
                        </a>.
                        <div>Стек:  &nbsp;<b>React (React Router)</b>, &nbsp;<b>CSS</b>
                            , &nbsp;<b>TypeScript</b>
                            .
                        </div>
                        <div>
                            <a href="https://news.ycombinator.com/news" style={textMyProjectTitle} rel="noreferrer" target="_blank">
                                Hacker News</a> - социальный новостной сайт.
                            Главная страница показывает последние 100 новостей в виде списка, отсортированного по дате.
                            Каждая новость содержит: название, рейтинг, ник автора, дату публикации. По клику на новость
                            происходит переход на страницу новости. Список новостей обновляется раз в минуту без участия
                            пользователя. Есть кнопка принудительного обновления новостей.
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 col-md-12 col-xs-8">
                        <Carousel variant="dark" style={{padding: "3rem"}}>
                            <Carousel.Item interval={1700}>
                                <img
                                    className="d-block w-100"
                                    src="HackerNews.jpg"
                                    alt="First slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1600}>
                                <img
                                    className="d-block w-100"
                                    src="HackerNews1.jpg"
                                    alt="Second slide"
                                    style={{height: "100%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1700}>
                                <img
                                    className="d-block w-100"
                                    src="HackerNews2.jpg"
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


export default ProjectHackerNews;

const frontMain = {
    backgroundColor: "#F08A5D",
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