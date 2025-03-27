import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement2,
  increment2,
  incrementByAmount2,
  incrementAsync2,
  resetCount2,
  selectCount2,
} from "../../redux/counterSlice";

import styles from "./index.module.scss";

const Counter2 = () => {
  const count2 = useSelector(selectCount2);
  const dispatch = useDispatch();
  const [incrementAmount2, setIncrementAmount2] = useState("10");

  return (
    <div className="counter2">
      <h1>Counter 2</h1>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment2())}
        >
          +
        </button>
        <span className={styles.value}>{count2}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement2())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount2}
          onChange={(e) => setIncrementAmount2(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount2(Number(incrementAmount2) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() =>
            dispatch(incrementAsync2(Number(incrementAmount2) || 0))
          }
        >
          Add Async
        </button>
        <button
          //   className={styles.button}
          onClick={() => dispatch(resetCount2())}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter2;
