import React, { Fragment } from "react";
import styles from "./ShowDogs.module.css";
import DogCard from "../DogCard/DogCard";
import Pagination from "../Pagination/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { getDogs } from "../../Redux/actions/actions"

export default function ShowDogs(){
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.allDogs);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [dogsPerPage] = React.useState(8);
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
    const pagination = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    React.useEffect(() => {
        dispatch(getDogs());
    }, [dispatch]);

    return (
      <Fragment>
        <div id = {styles.Principal}>
          <Pagination
            dogsPerPage={dogsPerPage}
            allDogs={allDogs.length}
            pagination = {pagination}
            currentPage={currentPage}
          />
          <div className={styles.pagination}/>
          {
            currentDogs.map(el => {
              console.log(el);
              return (
                <DogCard 
                  key = {el.id}
                  id = {el.id}
                  name = {el.name}
                  image = {el.image}
                  temperament = {el.temperament}
                />
              );
            })
          }
        </div>
      </Fragment>
    );
}