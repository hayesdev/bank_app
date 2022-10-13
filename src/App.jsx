import React from "react";
import styles from "./styles";

const App = () => (
  <div className="bg-primary overflow-hidden w-full">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>NavBar</div>
    </div>
  </div>
);

export default App;
