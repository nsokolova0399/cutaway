import React, {useState, useEffect, useRef} from 'react'
import FOG from 'vanta/dist/vanta.fog.min'
import {Fade, Slide} from 'react-awesome-reveal'

const MyVanta = () => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const myRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(FOG({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: true,
                minHeight: 200.00,
                minWidth: 200.00,
                highlightColor: 0x540c54,
                midtoneColor: 0xa515d4,
                lowlightColor: 0x120c30,
                baseColor: 0x210454,
                speed: 4.00,
                zoom: 0.80
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])


    return <div ref={myRef} className="blockFirst">
        <div className="container">
            <div className="row" >
                <div className="col-1 "></div>
                <Slide direction={"up"} duration={"1000"} className="col-5 col-sm-5 col-md-5 col-lg-5 textBlockFirst text-center" style={textGreeting}>
                        Привет! Меня зовут - Анастасия. Я начинающий frontend разработчик. Здесь Вы можете больше
                        узнать обо мне, познакомиться с моими проектами.
                </Slide>
                <Fade direction={"center"} duration={"2000"} className="col-6 col-sm-6 col-md-6 col-lg-6 textBlockFirst" style={{paddingTop:"6rem"}}>
                    <div>
                    <img
                        alt=""
                        src="/Arm.svg"
                        style={myImgArm}
                    />
                    <img
                        alt=""
                        src="/Anastasia.svg"
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
    paddingTop:"2rem",
    fontSize: "2.5rem",
    fontFamily: "GloberSemiBold, sans-serif",
    fontWeight: "200",
    lineHeight: "1.8",
}


export default MyVanta