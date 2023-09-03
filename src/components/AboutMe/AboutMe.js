import React from 'react';
import Fade from 'react-awesome-reveal';
import './aboutme.css';

function AboutMe() {
    return (
        <div className="aboutme">
            <div className="aboutme__row">
                <div className="aboutme__title">
                    О себе:
                </div>
                <Fade direction={"left"} duration={"2000"} className="aboutme__text">
                    <p>Окончила бакалавриант в <b>НИУ МЭИ</b>
                        &nbsp;по направлению: «Прикладная математика и информатика» (ИВТИ).
                        В вузе занималась программированием на C++, C#, Python, SQL.
                        Заняла второе место в хакатоне Ренессанс Банка, затем попала на стажировку и успешно
                        её прошла.
                    </p>
                </Fade>
            </div>
            <div className="aboutme__row">
                <div className="aboutme__title">
                    Почему frontend?
                </div>
                <Fade direction={"left"} duration={"4000"}
                      className="aboutme__text">
                    <p>
                        В определенный момент поняла, что хочу заниматься чем-то более
                        творческим. Сначала я прошла курс на Stepik по верстке,
                        изучила базовые принципы <b>HTML, CSS</b>.
                        Потом научный руководитель предложил мне изучить Vue.js/JS для
                        научной работы и я с удовольствием принялась за изучение. Далее
                        я самостоятельно начала изучать <b>React.js</b>, делая небольшие проекты
                        в портфолио.
                        Frontend позволяет увидеть результат работы сразу и это сильно мотивирует.
                        Сейчас я активно продолжаю изучение, наращиваю базовые навыки и пытаюсь раскрыть свой
                        потенциал.
                    </p>
                </Fade>
            </div>
        </div>
    );
}

export default AboutMe;