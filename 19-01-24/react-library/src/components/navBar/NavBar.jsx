import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.Navbar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/copyright">Copyright</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
