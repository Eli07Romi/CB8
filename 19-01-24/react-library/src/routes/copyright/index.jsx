import React from "react";
import styles from "./index.module.scss";
import NavBar from "../../components/navBar";

export default function Copyright() {
  return (
    <div className={styles.Copyright}>
      <NavBar />
      <div className={styles.Wrapper}>
        <h1>Copyright Information</h1>
        <h5>Ultimo aggiornamento: 20 Gennaio 2024</h5>

        <p>
          Questo sito è dedicato alla divulgazione di informazioni sui libri ed
          è conforme alle leggi sul copyright.
        </p>

        <h2>PRIVACY</h2>
        <p>
          Per favore consulta la nostra Informativa sulla Privacy e le nostre
          Politiche sui Cookies e sulla Pubblicità su Internet.
        </p>
        <h2>COPYRIGHT</h2>
        <p>
          Tutti i diritti d'autore e i marchi appartengono ai rispettivi
          proprietari. Le informazioni fornite su questo sito sono solo a scopo
          informativo.
        </p>
        <h2>LICENZA PER L’ACCESSO AL SITO</h2>

        <p>
          Il nostro obiettivo è rispettare appieno le leggi sul copyright e
          fornire un servizio che rispetti i diritti degli autori e degli
          editori.
        </p>
        <h2>DIRITTO D'AUTORE</h2>
        <p>
          Se ritieni che i tuoi diritti d'autore siano stati violati o hai
          domande sulla nostra politica di copyright, contattaci.
        </p>

        <p>Grazie per la tua comprensione e collaborazione.</p>
      </div>
    </div>
  );
}
