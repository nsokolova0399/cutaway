import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {ThemeContext, themes} from "../contexts/ThemeContext";
import Toggle from "./Toggle";
import {Link} from 'react-router-dom';

export const MyNavbar = () => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const menu = {
        textDecoration: "none",
        paddingLeft: "2rem",
        fontSize: "1.8rem",
        fontFamily: "PT Sans Caption Bold', arial",
        fontWeight: "500",
        lineHeight: "1.8",
        color:isHover ? '#5de2fc': 'var(--color)' ,
    }

    return (
        <>

            <Navbar bg="light" className="myHeader text-right">
                <Container>
                    <Navbar>
                        <Nav.Link href="#home">
                            <div href="https://vk.com/nastasia__s_s" target="_blank" className="d-flex myImg">
                                <img
                                    alt=""
                                    src="vk.svg"
                                    width="34rem"
                                    height="34rem"
                                />
                            </div>
                        </Nav.Link>
                        <Nav.Link href="#home">
                            <div href="https://t.me/nsokolova_03" target="_blank" className="d-flex myImg">
                                <img
                                    alt=""
                                    src="telegramm.svg"
                                    width="34rem"
                                    height="34rem"
                                />
                            </div>
                        </Nav.Link>
                        <Link to="/Projects" style={menu}
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}>
                            О Проектах
                        </Link>
                    </Navbar>
                    <Navbar>
                        <Nav.Link href="#home">
                            <ThemeContext.Consumer>
                                {
                                    ({theme, setTheme}) => (
                                        <Toggle
                                            onChange={() => {
                                                if (theme === themes.light) setTheme(themes.dark)
                                                if (theme === themes.dark) setTheme(themes.light)
                                            }}
                                            value={theme === themes.dark}
                                        />
                                    )
                                }
                            </ThemeContext.Consumer>
                        </Nav.Link>
                    </Navbar>
                </Container>
            </Navbar>
        </>
    )
}





