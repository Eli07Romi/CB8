import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Popular.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { getPopularService } from "../../service/recipes.services";

function Popular() {
  const localStorageKey = "popular";
  const [popular, setPopular] = useState([]);
  const [perPage, setPerPage] = useState(4);

  useEffect(() => {
    getPopular();
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

  const getPopular = async () => {
    try {
      const localData = localStorage.getItem(localStorageKey);
      if (localData) {
        setPopular(JSON.parse(localData));
      } else {
        const data = await getPopularService(10);
        if (data && data.recipes) {
          localStorage.setItem(localStorageKey, JSON.stringify(data.recipes));
          setPopular(data.recipes);
        }
      }
    } catch (error) {
      console.error("Error fetching popular recipes:", error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Popular Picks</h3>
      <Splide
        options={{
          perPage: perPage,
          arrow: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {popular.map((recipe, index) => (
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
}

export default Popular;
