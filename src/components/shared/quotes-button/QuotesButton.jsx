import React from "react";
import styles from "./QuotesButton.module.css";
export const QuotesButton = ({ text, backgroundColor = "#f58e07" }) => {
  return (
    <button
      type="submit"
      style={{ backgroundColor }}
      className={styles.quotesButtonContainer}
    >
      {text}
    </button>
  );
};
