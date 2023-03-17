import React from 'react';
import '../style/Mouse.css';

function Mouse() {
    function moveAt(e, pageX, pageY, square, border,withSquare,heightSquare) {
        square.style.left = (pageX - withSquare / 2) + 'px';
        square.style.top = (pageY - heightSquare / 2) + 'px';
        if (square.getBoundingClientRect().x > border.getBoundingClientRect().x - withSquare
            && square.getBoundingClientRect().x < border.getBoundingClientRect().x + border.getBoundingClientRect().width
            && square.getBoundingClientRect().y > border.getBoundingClientRect().y - heightSquare
            && square.getBoundingClientRect().y < border.getBoundingClientRect().y + border.getBoundingClientRect().height
        ) {
            border.setAttribute('style', 'border-color: white')
        } else {
            border.setAttribute('style', 'border-color: #005a84')
        }
    }

    function onmousedown(e) {
        let square = document.querySelector(`.${e.target.className}`);
        let border = document.querySelector('.main-border');

        square.ondragstart = function () {
            return false;
        };

        square.setAttribute('style', 'position: absolute')

        let pageX = e.pageX;
        let pageY = e.pageY;
        let withSquare = square.offsetWidth;
        let heightSquare = square.offsetHeight;
        let clientW = document.body.clientWidth;
        let clientH = document.body.offsetHeight;

        if (pageX + withSquare / 2 < clientW && pageY + heightSquare / 2 < clientH) {
            moveAt(e, pageX, pageY, square, border,withSquare,heightSquare);
            document.querySelector('.main-puzzle').appendChild(square);

            document.onmousemove = function (e) {
                pageX = e.pageX;
                pageY = e.pageY;
                if (pageX + withSquare / 2 < clientW && pageY + heightSquare / 2 < clientH) {
                    moveAt(e, pageX, pageY, square, border, withSquare,heightSquare);
                }
            }
        }

        square.onmouseup = function () {
            document.onmousemove = null;
            square.onmouseup = null;
        }

        square.style.width = '13rem'
    }


    function ontouchstart(e) {
        let square = document.querySelector(`.${e.target.className}`);
        let border = document.querySelector('.main-border');

        square.ondragstart = function () {
            return false;
        };

        square.setAttribute('style', 'position: absolute; z-index:1000')
        let pageX = e.targetTouches[0].pageX;
        let pageY = e.targetTouches[0].pageY;
        let withSquare = square.offsetWidth;
        let heightSquare = square.offsetHeight;
        let clientW = document.body.clientWidth;
        let clientH = document.body.offsetHeight;

        if (pageX + withSquare / 2 < clientW && pageY + heightSquare / 2 < clientH) {
            moveAt(e, pageX, pageY, square, border,withSquare,heightSquare);
            document.querySelector('.main-puzzle').appendChild(square);

            document.ontouchmove = function (e) {
                pageX = e.targetTouches[0].pageX;
                pageY = e.targetTouches[0].pageY;
                if (pageX + withSquare / 2 < clientW && pageY + heightSquare / 2 < clientH) {
                    moveAt(e, pageX, pageY, square, border, withSquare,heightSquare);
                }
            }
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
                    <img className="item-1" alt="" src="image/rectangle1.svg" onMouseDown={onmousedown}
                         onTouchStart={ontouchstart} style={{}}/>
                    <img className="item-2" alt="" src="image/rectangle2.svg" onMouseDown={onmousedown}
                         onTouchStart={ontouchstart} style={{}}/>
                    <img className="item-3" alt="" src="image/rectangle3.svg" onMouseDown={onmousedown}
                         onTouchStart={ontouchstart} style={{}}/>
                    <img className="item-4" alt="" src="image/rectangle4.svg" onMouseDown={onmousedown}
                         onTouchStart={ontouchstart} style={{}}/>
                </div>
                <div className="main-block2-square">
                    <div className="main-border"></div>
                </div>
            </div>
        </div>
    )
}

export default Mouse;