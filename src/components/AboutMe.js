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
                        <div>
                            <div>Я учусь в <b style={bold}>НИУ МЭИ</b>.
                                По направлению: «Прикладная математика и информатика». На кафедре «ПМИИ» (ИВТИ).
                                Я <b style={bold}>отвественный</b> и <b style={bold}>творческий</b> человек.
                                Люблю учиться и узнавать что-то новое.
                            </div>
                            <div>
                                Мне нравится порядок, нравится планировать свой день. Это помогает мне сфокусироваться на деле и выполнить его в срок.
                                Но иногда мне <b style={bold}>бывает сложно</b> переключиться с одной задачи на другую, если
                                предыдущая была незавершена.
                            </div>
                            <div>
                                Я общительная, мне нравится работать в команде, <b style={bold}>обмениваться опытом</b>&nbsp;
                                и находить общие интересы.
                            </div>
                        </div>
                    </Fade>

                </div>
                <div className="row" style={{padding: "2rem"}}>
                    {/*<Fade direction={"left"} duration={"4000"}>*/}
                        <div className="col-12 col-lg-12 col-md-12 col-xs-12 titleText">
                            Почему frontend?
                        </div>
                    <Fade direction={"left"} duration={"4000"} className="col-12 col-lg-12 col-md-12 col-xs-12  titleTextBlock">
                            <div>Когда я начала думать над направлением в программировании, я посмотрела
                                много видео про это. Попробовала всего понемногу. Но больше
                                всего меня зацепил <b style={bold}>HTML</b>. Да, это не было полноценным
                                программированием,
                                но мне очень понравилось верстать страницы. Потом я познакомилась с фреймворком <b
                                    style={bold}>Vue</b> и библиотекой <b style={bold}>React</b>.
                                Тогда поняла, что это <b style={bold}>моё направление</b> и мне нравится изучать это.
                                Frontend позволяет увидеть результат работы сразу и это сильно мотивирует.
                            </div>
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
