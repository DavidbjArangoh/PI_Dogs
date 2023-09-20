import React, { Fragment } from "react";
import styles from './DogCard.module.css';

export default function DogCard({id, name, image, temperament}){
    return (
        <Fragment>
            <div id = {styles.Principal}>
                <h1 className= {styles.Title}>{name}</h1>
                <img className = {styles.images} 
                    src = {image}/>
                <p className= {styles.Temp}>{temperament}</p>
            </div>
        </Fragment>
    )
}