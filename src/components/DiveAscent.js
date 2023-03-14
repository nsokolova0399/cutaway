import React, {useEffect} from "react";
import '../style/DiveAscent.css';

function DiveAscent() {
    //лучше прикреплять слушателей на этапе монтирования компонента
    useEffect(() => {
            for (let elem of document.querySelectorAll('.ascent1 ')) {
                elem.addEventListener("click", e => alert(`Всплытие: ${elem.tagName} `));

            }
            for (let elem of document.querySelectorAll('.ascent2 ')) {
                elem.addEventListener("click", e => alert(`Погружение: ${elem.tagName}`), true);
                elem.addEventListener("click", e => alert(`Всплытие: ${elem.tagName}`));
            }
        }
    )
    return (
        <div className="main-font" style={{backgroundColor: "#ffadad", color: "black"}}>
            <h1 className="main-title" style={{color: "#b80d0d"}}>Всплытие и погружение</h1>
            <div className="main-block">
                <div className="main-block1">
                    <h1 className="main-title1">Всплытие</h1>
                    <form className="ascent1 ascent-1">
                        <div className="ascent1 ascent-2">
                            <p className="ascent1 ascent-3"/>
                        </div>
                    </form>
                </div>
                <div className="main-block2">
                    <h1 className="main-title1">Погружение</h1>
                    <form className="ascent2  ascent-1">
                        <div className="ascent2 ascent-2">
                            <p className="ascent2 ascent-3"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DiveAscent;
