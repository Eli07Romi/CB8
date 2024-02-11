import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../routes/Food.module.css";
import Loader from "../components/loader/Loader";
import { getRecipesComplexSearchService } from "../service/recipes.services";

const Searched = () => {
  const { searchItem } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSearch = async () => {
      setLoading(true);
      const data = await getRecipesComplexSearchService(10, "", searchItem);
      if (data && data.results) {
        setResults(data.results);
      }
      setLoading(false);
    };
    getSearch();
  }, [searchItem]);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Results for:{searchItem}</h3>
      {loading && <Loader />}
      {!loading && (
        <div className={styles.column}>
          {results.map((item) => (
            <div className={styles.card} key={item.id}>
              <Link to={`/recipes/${item.id}`}>
                <div className={styles.overlay}>{item.title}</div>{" "}
                <img src={item.image} alt={item.title} />
              </Link>
            </div>
          ))}
          {results.length === 0 && <p>No food items found</p>}
        </div>
      )}
    </div>
  );
};

export default Searched;
