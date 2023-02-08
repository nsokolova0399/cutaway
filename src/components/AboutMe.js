import React from 'react';
import Fade from 'react-awesome-reveal';

function AboutMe() {

    return (
        <div className="blockSecond">
            <div className="row" style={{paddingTop: "5rem", paddingLeft: "12rem"}}>
                <div direction={"down"} damping={"1500"} className="col-5 col-lg-5 col-md-5 col-xs-5 titleText">О
                    себе:
                </div>
                <div className="col-5 col-lg-5 col-md-5 col-xs-5 titleText" style={{paddingLeft: "7rem"}}>
                    Почему frontend?
                </div>
            </div>
            <div className="row">
                <div className="col-1 col-lg-1 col-md-1 col-xs-1"></div>
            </div>
            <div className="row" style={{paddingLeft: "12rem", paddingBottom: "3rem"}}>
                <Fade  direction={"left"} duration={"4000"} className="col-5 col-lg-5 col-md-5 col-xs-5  titleTextBlock">
                    <p>
                    <p>Я учусь в <b style={bold}>НИУ МЭИ</b>.
                        По направлению: «Прикладная математика и информатика». На кафедре «ПМИИ» (ИВТИ).
                        Я <b style={bold}>творческий</b> и <b style={bold}>эмоциональный</b> человек.
                    </p>
                    <p>
                        Мне нравится спокойствие, тишина. Это помогает мне быть сосредоточенной на задаче.
                        Но мне <b style={bold}>бывает сложно</b> переключиться с одной задачи на другую, если предыдущая
                        была незавершена.
                    </p>
                    <p>
                        Я общительный человек, спокойно себя чувствую в незнакомой компании.
                        Мне нравится <b style={bold}>обмениваться опытом</b> с людьми и находить общие интересы.
                    </p>
                    </p>
                </Fade>
                <Fade direction={"right"} duration={"1000"} className="col-5 col-lg-5 col-md-5 col-xs-5  titleTextBlock"
                      style={{paddingLeft: "7rem"}}>
                    <p>Когда я начала думать над направлением в программировании, я посмотрела
                        много видео про это. Попробовала всего понемногу. Но больше
                        всего меня зацепил <b style={bold}>HTML</b>. Да, это не было полноценным программированием,
                        но мне очень понравилось верстать страницы. Потом я познакомилась с фреймворком <b
                            style={bold}>Vue</b> и библиотекой <b style={bold}>React</b>.
                        Тогда поняла, что это <b style={bold}>моё направление</b> и мне нравится изучать это.
                    </p>
                </Fade>

            </div>
        </div>
    );
}


export default AboutMe;


const bold = {
    fontWeight: "800"
}
