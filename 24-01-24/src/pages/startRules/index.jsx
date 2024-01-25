import { useState } from "react";
import styles from "../../styles/startRules.module.scss";

export default function StartRules() {
  const [isRule1Expanded, setIsRule1Expanded] = useState(false);
  const [isRule2Expanded, setIsRule2Expanded] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const toggleRule1 = () => {
    setIsRule1Expanded(!isRule1Expanded);
  };

  const toggleRule2 = () => {
    setIsRule2Expanded(!isRule2Expanded);
  };

  const handleSendMessage = () => {
    console.log(`Messaggio inviato da ${email}: ${message}`);
    setEmail("");
    setMessage("");
  };

  return (
    <div className={styles.StartRules}>
      <h1>Regole d'uso della Pokedex</h1>

      <div className={styles.Accordion} onClick={toggleRule1}>
        <div className={styles.ToggleIcon}>
          {isRule1Expanded ? (
            <i className={`${styles.bi} bi-caret-down-fill`}></i>
          ) : (
            <i className={`${styles.bi} bi bi-caret-right`}></i>
          )}
        </div>
        <h2>Regola 1: Rispetto dei Pokémon</h2>
      </div>

      {isRule1Expanded && (
        <div className={styles.Content}>
          <p>
            I Pokémon sono creature straordinarie e devono essere trattati con
            rispetto. Non fare del male ai Pokémon e non li sfruttare per scopi
            crudeli.
          </p>
        </div>
      )}

      <div className={styles.Accordion} onClick={toggleRule2}>
        <div className={styles.ToggleIcon}>
          {isRule2Expanded ? (
            <i className={`${styles.bi} bi-caret-down-fill`}></i>
          ) : (
            <i className={`${styles.bi} bi bi-caret-right`}></i>
          )}
        </div>
        <h2>Regola 2: Utilizzo responsabile della Pokedex</h2>
      </div>

      {isRule2Expanded && (
        <div className={styles.Content}>
          <p>
            Utilizza la Pokedex in modo responsabile. Non spiare o cercare di
            danneggiare i Pokémon attraverso l'uso improprio della Pokedex.
          </p>
        </div>
      )}

      <div className={styles.ContactSection}>
        <h2>Contattaci</h2>
        <p>
          Hai altri dubbi? Se in passato hai maltrattato un Pokemon, o sei stato
          tu stesso maltrattato da un Pokemon, inviaci la tua testimonianza
        </p>

        <div className={styles.ContactForm}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="message">Messaggio:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button onClick={handleSendMessage}>Invia Messaggio</button>
        </div>
      </div>
    </div>
  );
}
