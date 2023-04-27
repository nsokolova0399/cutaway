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
                skyColor: 0x5a016f,
                cloudColor: 0x742074,
                sunColor: 0xffbdf2,
                sunGlareColor: 0xed00ff,
                sunlightColor: 0xff3030,
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
                <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
                <Slide direction={"up"} duration={"1000"} className="col-5 col-sm-5 col-md-5 col-lg-5 textBlockFirst text-center" style={textGreeting}>
                        Привет! Меня зовут — Анастасия. Я начинающий frontend разработчик. Здесь Вы можете больше
                        узнать обо мне, познакомиться с моими проектами.
                </Slide>
                <Fade direction={"center"} duration={"2000"} className="col-6 col-sm-6 col-md-6 col-lg-6 textBlockFirst" style={{paddingTop:"5.5rem"}}>
                    <div>
                    <img
                        alt="Arm"
                        src="./image/Arm.webp"
                        style={myImgArm}
                    />
                    <img
                        alt="Anastasia"
                        src="./image/me.webp"
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
    marginTop: "-5rem",
    marginLeft: "3rem",
    Right: "0rem",
    zIndex: "1",
    height: "45.5rem",
}
const myImgArm = {
    position: "absolute",
    marginLeft: "-8.65rem",
    marginTop: "5.2rem",
    animation: "myAnim 3s ease 2s infinite normal forwards",
    zIndex: "2",
    height: "18rem"
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