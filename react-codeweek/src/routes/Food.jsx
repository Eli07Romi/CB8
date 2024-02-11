import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipesComplexSearchService } from "../service/recipes.services";
import styles from "./Food.module.css";
import Loader from "../components/loader/Loader";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Food = () => {
  const localStorageKey = "food";
  const { type } = useParams();
  const [food, setFoodtype] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFoodtype = async () => {
      setLoading(true);
      // const localStore = localStorage.getItem(localStorageKey); //** remind for me --> commenta questa per disattivare*/
      const localStore = false; //
      if (localStore) {
        setFoodtype(JSON.parse(localStore));
      } else {
        const data = await getRecipesComplexSearchService(10, type);
        if (data && data.results) {
          localStorage.setItem(localStorageKey, JSON.stringify(data.results));
          setFoodtype(data.results);
        }
      }
      setLoading(false);
    };

    getFoodtype();
  }, [type]);

  return (
    <div className={styles.wrapper}>
      {loading && <Loader />}
      <h3 className={styles.title}>{capitalizeFirstLetter(type)}</h3>
      {!loading && (
        <div className={styles.column}>
          {food.length > 0 ? (
            food.map((item) => (
              <div className={styles.card} key={item.id}>
                <div className={styles.overlay}>{item.title}</div>{" "}
                <img src={item.image} alt={item.title} />
              </div>
            ))
          ) : (
            <p>No food items found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Food;
