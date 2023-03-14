import React, {useState} from "react";
import '../style/Grid.css';

const img1_1 = "image/vogue1.jpg";
const img1_2 = "image/vogue5.jpg";
const img2_1 = "image/vogue2.jpg";
const img2_2 = "image/vogue8.jpg";
const img3_1 = "image/vogue3.jpg";
const img3_2 = "image/vogue6.jpg";
const img4_1 = "image/vogue4.jpg";
const img4_2 = "image/vogue7.jpg";

function Grid() {

    const [Img1_2, setImg1] = useState(img1_1);
    const [Img2_2, setImg2] = useState(img2_1);
    const [Img3_2, setImg3] = useState(img3_1);
    const [Img4_2, setImg4] = useState(img4_1);

    return (
        <div className="main-font" style={{ backgroundColor: "#ffadde",color: "black"}}>
            <h1 className="main-title" style={{color: "#CA3E61"}}>CSS Grid</h1>
            <div className="main-grid">
                <div className="main-grid-text">
                    Главным цветом года 2023 года по версии института цвета Pantone стал оттенок красного Viva Magenta
                    (карминово-красный оттенок с фиолетовым подтоном), который отсылает к идее объединения, общения,
                    солидарности.
                </div>
                <img alt="" onMouseEnter={() => {
                    Img1_2 === img1_1 ? setImg1(img1_2) : setImg1(img1_1)
                }} src={Img1_2} className="main-grid-image1"/>
                <img alt="" onMouseEnter={() => {
                    Img2_2 === img2_1 ? setImg2(img2_2) : setImg2(img2_1)
                }} src={Img2_2} className="main-grid-image2"/>
                <img alt="" onMouseEnter={() => {
                    Img3_2 === img3_1 ? setImg3(img3_2) : setImg3(img3_1)
                }} src={Img3_2} className="main-grid-image3"/>
                <img alt="" onMouseEnter={() => {
                    Img4_2 === img4_1 ? setImg4(img4_2) : setImg4(img4_1)
                }} src={Img4_2} className="main-grid-image4"/>
            </div>
        </div>
    );
}

export default Grid;

