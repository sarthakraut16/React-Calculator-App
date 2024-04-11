import React from "react";
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onCalculate }) => {
  let buttonNames = [
    "AC",
    "0",
    "/",
    "*",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button
          className={`${styles.buttons} ${
            buttonName === "AC" ? styles.delete : null
          } ${buttonName === "=" ? styles.eval : null}`}
          onClick={()=>onCalculate(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
