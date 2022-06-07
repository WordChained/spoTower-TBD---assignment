import React from "react";
import styles from "./QuotesButton.module.css";
export const QuotesButton = ({ text }) => {
  return (
    <button type="submit" className={styles.quotesButtonContainer}>
      {text}
    </button>
  );
};
