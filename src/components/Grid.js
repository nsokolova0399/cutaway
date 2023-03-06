import React from "react";
import '../style/Grid.css';
function Grid() {
    return (
        <div className="main-font">
            <div className="main-grid">
                <div className="main-grid-text">
                    Главным цветом года 2023 года по версии института цвета Pantone стал оттенок красного Viva Magenta (карминово-красный оттенок с фиолетовым подтоном), который отсылает к идее объединения, общения, солидарности. </div>
                <img className="main-grid-image1" src="./image/vogue1.jpg" />
                <img className="main-grid-image2" src="./image/vogue2.jpg" />
                <img className="main-grid-image3" src="./image/vogue3.jpg" />
                <img className="main-grid-image4" src="./image/vogue4.jpg" />
                </div>
        </div>
    );
}
export default Grid;

