import React from "react";
import { MdKitchen } from "react-icons/md";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <section className={styles.icons}>
        <p className={styles.blink}>
          <MdKitchen />
          ... Looking for Recipes...
        </p>
      </section>
    </div>
  );
};

export default Loader;
