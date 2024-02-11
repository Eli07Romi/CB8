import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import Loader from "../components/loader/Loader";
import { getRecipesInformationService } from "../service/recipes.services";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const tabArray = ["instructions", "ingredients"];
  const [tab, setTab] = useState(tabArray[0]);

  const myTabVerify = (name) => {
    return name === tab;
  };

  const getClassActive = (name) => {
    return myTabVerify(name) ? styles.active : "";
  };

  useEffect(() => {
    const getDetail = async () => {
      setLoading(true);
      const data = await getRecipesInformationService(id);
      if (data) {
        setDetail(data);
      }
      setLoading(false);
    };
    getDetail();
  }, [id]);

  return (
    <div>
      {loading && <Loader />}
      {!loading && detail && (
        <div className={styles.detailWrapper}>
          <div className={styles.imageContainer}>
            <h2>{detail.title}</h2>
            <img src={detail.image} alt={detail.title} />{" "}
          </div>

          <section className={styles.info}>
            <button
              onClick={() => setTab(tabArray[0])}
              className={`button button-primary ${getClassActive(tabArray[0])}`}
            >
              Instructions
            </button>

            <button
              onClick={() => setTab(tabArray[1])}
              className={`button button-outline ${getClassActive(tabArray[1])}`}
            >
              Ingredients
            </button>

            {myTabVerify(tabArray[0]) && (
              <div>
                <h3 dangerouslySetInnerHTML={{ __html: detail.summary }}></h3>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: detail.instructions,
                  }}
                ></h3>
              </div>
            )}
            {myTabVerify(tabArray[1]) && (
              <div>
                <ul>
                  {detail.extendedIngredients.map((ing) => {
                    return <li key={ing.id}>{ing.original}</li>;
                  })}
                </ul>
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
};

export default Detail;
