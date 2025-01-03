
import React from "react";
import styles from "./buttoncounter.module.css" ;
import { useState } from "react";

const App = () => {
  const [count , setCount] = useState(0);
    const displayCount = ()=>{
        setCount(count + 1);
    };
  return (
   <>
            <div className={styles.counter}>
                <p className={styles.para}>Button clicked {count} times</p>
                <button className={styles.button} onClick={displayCount}>Submit</button>
            </div>
        </>
  )
}

export default App
