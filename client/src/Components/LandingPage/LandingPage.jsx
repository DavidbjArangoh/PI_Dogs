import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import woof from "../../Resources/LandingPage/4638.mp3";



export default function LandingPage(){
    const playWoof = () => {
        const audio = new Audio(woof);
        audio.play();
    };
    return (
        <div id = {styles.Principal}>
            <h1 id = {styles.Title}> Welcome to</h1>
            <Link to='/home' id = {styles.Link}>
                <button id = {styles.Button} onClick={playWoof}> DOGS </button>
            </Link>
        </div>
    )
}