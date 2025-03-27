import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement1,
  increment1,
  incrementByAmount1,
  incrementAsync1,
  resetCount1,
  selectCount1,
} from "../../redux/counterSlice";

import styles from "./index.module.scss";

const Counter1 = () => {
  const count1 = useSelector(selectCount1);
  const dispatch = useDispatch();
  const [incrementAmount1, setIncrementAmount1] = useState("2");

  return (
    <div>
      <h1>Counter 1</h1>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment1())}
        >
          +
        </button>
        <span className={styles.value}>{count1}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement1())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount1}
          onChange={(e) => setIncrementAmount1(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount1(Number(incrementAmount1) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() =>
            dispatch(incrementAsync1(Number(incrementAmount1) || 0))
          }
        >
          Add Async
        </button>
        <button
          // className={styles.button}
          onClick={() => dispatch(resetCount1())}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter1;
