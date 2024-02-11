import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Category.module.css";
import { FaHome } from "react-icons/fa";
import { GiItalia, GiNoodles, GiHamburger } from "react-icons/gi";
import { BiSolidSushi } from "react-icons/bi";

function Category() {
  return (
    <div className={styles.list}>
      <NavLink to={"/"} className={styles.categoryLink}>
        <FaHome className={styles.categoryIcon} />
        <span className={styles.title}>Home</span>
      </NavLink>
      <NavLink to={"food/italian"} className={styles.categoryLink}>
        <GiItalia className={styles.categoryIcon} />
        <span className={styles.title}>Italian</span>
      </NavLink>
      <NavLink to={"food/chinese"} className={styles.categoryLink}>
        <GiNoodles className={styles.categoryIcon} />
        <span className={styles.title}>Chinese</span>
      </NavLink>
      <NavLink to={"food/american"} className={styles.categoryLink}>
        <GiHamburger className={styles.categoryIcon} />
        <span className={styles.title}>American</span>
      </NavLink>
      <NavLink to={"food/japanese"} className={styles.categoryLink}>
        <BiSolidSushi className={styles.categoryIcon} />
        <span className={styles.title}>Japanese</span>
      </NavLink>
    </div>
  );
}

export default Category;
