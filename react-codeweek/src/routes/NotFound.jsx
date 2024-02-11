import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css"; // Importa i tuoi stili CSS per la pagina di errore

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>Oops! Pagina non trovata</h1>
      <div className={styles.linkContainer}>
        <Link to="/" className={styles.link}>
          Torna alla pagina principale
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
