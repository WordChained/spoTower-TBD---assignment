import React from "react";
import styles from "./AgeButton.module.css";
export const AgeButton = ({ onAgePick, age, activeAge }) => {
  const onClick = (ev) => {
    ev.preventDefault();
    onAgePick(age);
  };

  return (
    <button
      onClick={onClick}
      className={`${styles.ageButtonContainer} ${
        activeAge === age ? styles.active : ""
      }`}
    >
      {age}
    </button>
  );
};
