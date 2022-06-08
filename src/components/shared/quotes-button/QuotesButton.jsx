import React from "react";
import styles from "./QuotesButton.module.css";
export const QuotesButton = ({ text, age, zipCode }) => {
  return (
    <button
      type="submit"
      className={styles.quotesButtonContainer}
      disabled={!age || zipCode.length < 5}
    >
      {text}
    </button>
  );
};
