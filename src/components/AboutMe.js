import React from 'react';
import Fade from 'react-awesome-reveal';

function AboutMe() {

    return (
        <div className="blockSecond">
            <div className="container">
                <div className="row" style={{padding: "2rem"}}>
                    <div className="col-12 col-lg-12 col-md-12 col-xs-12 titleText">
                        О себе:
                    </div>
                    <Fade direction={"left"} duration={"2000"} className="col-12 col-lg-12 col-md-12 col-xs-12  titleTextBlock">
                        <p>
                            <p>Я учусь в <b style={bold}>НИУ МЭИ</b>.
                                По направлению: «Прикладная математика и информатика». На кафедре «ПМИИ» (ИВТИ).
                                Я <b style={bold}>творческий</b> и <b style={bold}>эмоциональный</b> человек.
                            </p>
                            <p>
                                Мне нравится спокойствие, тишина. Это помогает мне быть сосредоточенной на задаче.
                                Но мне <b style={bold}>бывает сложно</b> переключиться с одной задачи на другую, если
                                предыдущая
                                была незавершена.
                            </p>
                            <p>
                                Я общительный человек, спокойно себя чувствую в незнакомой компании.
                                Мне нравится <b style={bold}>обмениваться опытом</b> с людьми и находить общие интересы.
                            </p>
                        </p>
                    </Fade>

                </div>
                {/*<div className="row">*/}
                {/*    <div className="col-12 col-lg-12 col-md-12 col-xs-12"></div>*/}
                {/*</div>*/}
                <div className="row" style={{padding: "2rem"}}>
                    {/*<Fade direction={"left"} duration={"4000"}>*/}
                        <div className="col-12 col-lg-12 col-md-12 col-xs-12 titleText">
                            Почему frontend?
                        </div>
                    <Fade direction={"left"} duration={"4000"} className="col-12 col-lg-12 col-md-12 col-xs-12  titleTextBlock">
                            <p>Когда я начала думать над направлением в программировании, я посмотрела
                                много видео про это. Попробовала всего понемногу. Но больше
                                всего меня зацепил <b style={bold}>HTML</b>. Да, это не было полноценным
                                программированием,
                                но мне очень понравилось верстать страницы. Потом я познакомилась с фреймворком <b
                                    style={bold}>Vue</b> и библиотекой <b style={bold}>React</b>.
                                Тогда поняла, что это <b style={bold}>моё направление</b> и мне нравится изучать это.
                            </p>
                    </Fade>
                </div>
            </div>
        </div>
    );
}


export default AboutMe;


const bold = {
    fontWeight: "800"
}
