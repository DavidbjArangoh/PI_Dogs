import React, { Fragment } from "react";
import styles from "./NavBar.module.css";
// import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import OrdenButtons from "../OrdenButtons/OrdenButtons";

export default function NavBar(){
    return (
        <Fragment>
            <div id = {styles.Principal}>
                <OrdenButtons>
                    Filtrar
                </OrdenButtons>
                <SearchBar>
                    Aqui va una search bar
                </SearchBar>
            </div>
        </Fragment>
    )
}