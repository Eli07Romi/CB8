import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Veggie.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { getPopularService } from "../../service/recipes.services";

const Veggie = () => {
  const localStorageKey = "veggie";
  const [veggie, setVeggie] = useState([]);
  const [perPage, setPerPage] = useState(6);

  useEffect(() => {
    getVeggie();
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setPerPage(1);
    } else {
      setPerPage(4);
    }
  };

  const getVeggie = async () => {
    try {
      const localData = localStorage.getItem(localStorageKey);
      if (localData) {
        setVeggie(JSON.parse(localData));
      } else {
        const data = await getPopularService(10, "");
        if (data && data.recipes) {
          const veggieRecipes = data.recipes.filter(
            (recipe) => recipe.vegetarian === true
          );
          localStorage.setItem(localStorageKey, JSON.stringify(veggieRecipes));
          setVeggie(veggieRecipes);
        }
      }
    } catch (error) {
      console.error("Error fetching vegetarian recipes:", error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: perPage, // Set perPage dynamically
          arrow: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {veggie.map((recipe, index) => (
          <SplideSlide key={index}>
            <section className={styles.card}>
              <Link to={`/recipes/${recipe.id}`}>
                <p>{recipe.title}</p>
                <img
                  className={styles.image}
                  src={recipe.image}
                  alt={recipe.title}
                />
              </Link>
            </section>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Veggie;
