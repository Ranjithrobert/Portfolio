import React from "react";
import ReactDOM  from "react-dom/client";
import { BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import About from "./About";
import Home from "./Component/HomeComponent";
import NoMatchComponent from "./Component/NotMatchComponent";

function App(){
    return(
        <Router>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="*" element={<NoMatchComponent/>}/>
            </Routes>
        </Router>
    )
}
export default App

