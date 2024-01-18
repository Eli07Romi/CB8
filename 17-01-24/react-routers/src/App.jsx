import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.App}>
      <h1 className="titolo">Ciao</h1>
    </div>
  );
}

export default App;
