import React from "react";
import "./App.css";
import SW5_logo from "assets/SW5_logo.png";
import Menu from "./components/menu";
import Stage from "components/Stage";
import Path from "components/path";
import { stagesData } from "data/stagesData";

export default function App() {
    return (
        <div className="container">
            <Menu className="lateral-menu" stagesData={stagesData}/>

            <div className="main">
                <img
                    src={SW5_logo}
                    alt="Samurai Warriors 5"
                    className="logo-img"
                />
                <h1 className="main-title">Objective List & Rare Weapons</h1>

                {stagesData.map((path, key) => (
                    <Path key={key} path={path} />
                ))}
            </div>
        </div>
    );
}
