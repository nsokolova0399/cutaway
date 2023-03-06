import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {ThemeContext, themes} from "../contexts/ThemeContext";
import Toggle from "./Toggle";
import {Link} from 'react-router-dom';

export const MyNavbar = () => {
    const menu = {
        textDecoration: "none",
        paddingLeft: "2rem",
        fontSize: "1.8rem",
        fontFamily: "PT Sans Caption Bold', arial",
        fontWeight: "500",
        lineHeight: "1.8",
        color: 'var(--color)',
    }

    return (
        <>
            <Navbar bg="light" className="myHeader text-right">
                <Container>
                    <Navbar>
                        <Nav.Link href="https://vk.com/nastasia__s_s" target="_blank" >
                            <div className="d-flex myImg">
                                <img
                                    alt="vk"
                                    src="./image/vk.svg"
                                />
                            </div>
                        </Nav.Link>
                        <Nav.Link href="https://t.me/nsokolova_03" target="_blank">
                            <div className="d-flex myImg">
                                <img
                                    alt="telegramm"
                                    src="./image/telegramm.svg"
                                />
                            </div>
                        </Nav.Link>
                        <div>
                            <Link to="/" style={menu}>
                                Главная
                            </Link>
                        </div>
                        <div>
                            <Link to="/Projects" style={menu}>
                                О Проектах
                            </Link>
                        </div>
                        <div>
                            <Link to="/Practice" style={menu}>
                                Практикум
                            </Link>
                        </div>
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




