
import React from "react";
import styles from "./buttoncounter.module.css" ;
import { useState } from "react";

const App = () => {
  return (
   <>
            <div className={styles.counter}>
                <p className={styles.para}>Button clicked {count} times</p>
                <button className={styles.button} onClick={displayCount}>Submit</button>
            </div>
            <button className={styles.button} onClick={decrementCount}>Decrement</button>
        </>
  )
}

export default App
