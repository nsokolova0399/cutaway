import React from 'react';
import '../style/Mouse.css';

function Mouse() {
    function onmousedown(e) {
        let square = document.querySelector(`.${e.target.className}`);
        let border = document.querySelector('.main-border');

        square.ondragstart = function () {
            return false;
        };
        square.setAttribute('style', 'position: absolute')

        moveAt(e);
        document.querySelector('.main-puzzle').appendChild(square);

        function moveAt(e) {
            square.style.left = (e.pageX - square.offsetWidth / 2) + 'px';
            square.style.top = (e.pageY - square.offsetHeight / 2) + 'px';
            if (square.getBoundingClientRect().x > border.getBoundingClientRect().x - square.offsetWidth
                && square.getBoundingClientRect().x < border.getBoundingClientRect().x + border.getBoundingClientRect().width
                && square.getBoundingClientRect().y > border.getBoundingClientRect().y - square.offsetHeight
                && square.getBoundingClientRect().y < border.getBoundingClientRect().y + border.getBoundingClientRect().height
            ) {
                border.setAttribute('style', 'border-color: white')
            } else {
                border.setAttribute('style', 'border-color: #005a84')
            }
        }

        document.onmousemove = function (e) {
            moveAt(e);
        }
        document.ontouchmove = function (e) {
            moveAt(e);
        }

        square.onmouseup = function () {
            document.onmousemove = null;
            square.onmouseup = null;
        }
        square.ontouchend = function () {
            document.ontouchmove = null;
            square.ontouchend = null;
        }
        square.style.width = '13rem'
    }

    return (
        <div className="main-font" style={{backgroundColor: "#adb8ff", color: "black"}}>
            <h1 className="main-title" style={{color: "#0f0a97"}}>События мыши</h1>

            <div className="main-puzzle">
                <div className="main-block1-square">
                    <img className="item-1" alt="" src="image/rectangle1.svg" onMouseDown={onmousedown} onTouchStart={onmousedown} style={{}}/>
                    <img className="item-2" alt="" src="image/rectangle2.svg" onMouseDown={onmousedown} onTouchStart={onmousedown} style={{}}/>
                    <img className="item-3" alt="" src="image/rectangle3.svg" onMouseDown={onmousedown} onTouchStart={onmousedown} style={{}}/>
                    <img className="item-4" alt="" src="image/rectangle4.svg" onMouseDown={onmousedown} onTouchStart={onmousedown} style={{}}/>
                </div>
                <div className="main-block2">
                    <div className="main-border"></div>
                </div>
            </div>
        </div>
    )
}

export default Mouse;