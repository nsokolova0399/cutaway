import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home} from './pages/Home'
import {MyNavbar} from './components/MyNavbar'
import React from "react";
import ThemeProvider from "./providers/ThemeProvider";
import './App.css';
import {Projects} from "./pages/Projects";
import {Practice} from "./pages/Practice";

function App() {
    return (
        <ThemeProvider>
        <BrowserRouter>
            <MyNavbar />
               <Routes>
                   <Route path={"/"} element={<Home />}/>
                   <Route path={"/Projects"} element={<Projects />}/>
                   <Route path={"/Practice"} element={<Practice />}/>
               </Routes>
        </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;