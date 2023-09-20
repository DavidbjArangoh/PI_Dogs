import React, { Fragment } from "react";
import styles from "./Home.module.css";
import NavBar from "../NavBar/NavBar";
import ShowDogs from "../ShowDogs/ShowDogs"

export default function Home(){
    return (
        <Fragment>
            <header>
                Este será el header
            </header>
            <div id = {styles.Principal}>
                <NavBar/>
                <ShowDogs/>
            </div>
        </Fragment>
        
    );
}