import React, {useState, useEffect, useRef} from 'react'
import CLOUDS from 'vanta/dist/vanta.clouds.min'
import {Fade, Slide} from 'react-awesome-reveal'

const MyVanta = () => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const myRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(CLOUDS({
                el:  myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                skyColor: 0x0,
                cloudColor: 0x8c1990,
                sunColor: 0xff1885,
                sunGlareColor: 0xff3030,
                speed: 1.50
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])


    return <div ref={myRef} className="blockFirst">
        <div className="container">
            <div className="row" style={{justifyContent:"space-between", display:"flex"}}>
                <Slide direction={"up"} duration={"1000"} className="col-5 col-sm-5 col-md-5 col-lg-5 textBlockFirst text-center" style={textGreeting}>
                        Привет! Меня зовут - Анастасия. Я начинающий frontend разработчик. Здесь Вы можете больше
                        узнать обо мне, познакомиться с моими проектами.
                </Slide>
                <Fade direction={"center"} duration={"2000"} className="col-6 col-sm-6 col-md-6 col-lg-6 textBlockFirst" style={{paddingTop:"6rem"}}>
                    <div>
                    <img
                        alt="Arm"
                        src="./image/Arm.svg"
                        style={myImgArm}
                    />
                    <img
                        alt="Anastasia"
                        src="./image/Anastasia.svg"
                        style={myImgAnastasia}
                    />
                    </div>
                </Fade>
            </div>
        </div>

    </div>
}

const myImgAnastasia = {
    position: "absolute",
    marginTop: "-4.70rem",
    marginLeft: "4.2rem",
    Right: "0rem",
    zIndex: "1",
    height: "32rem",
}
const myImgArm = {
    position: "absolute",
    marginLeft: "-4.9rem",
    marginTop: "4.5rem",
    animation: "myAnim 3s ease 2s infinite normal forwards",
    zIndex: "0",
    height: "15rem"
}
const textGreeting = {
    paddingTop:"4rem",
    paddingBottom:"auto",
    fontSize: "2.5rem",
    fontFamily: "GloberSemiBold, sans-serif",
    fontWeight: "200",
    lineHeight: "1.8",
}


export default MyVanta