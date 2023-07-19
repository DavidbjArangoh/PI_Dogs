import React, { Fragment } from "react";
import styles from "./Home.module.css";
import NavBar from "../NavBar/NavBar";


export default function Home(){
    return (
        <Fragment>
            <header>
                Este será el header
            </header>
            <div id = {styles.Principal}>
                <NavBar/>
            </div>

        </Fragment>
        
    );
}