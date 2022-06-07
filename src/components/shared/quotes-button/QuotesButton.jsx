import React from "react";
import styles from "./QuotesButton.module.css";
export const QuotesButton = ({
  text,
  backgroundColor = "#f58e07",
  borderRadius = "12px",
  width = "100%",
  age,
  zipCode,
  canBeDisabled = false,
}) => {
  return (
    <button
      type="submit"
      style={{ backgroundColor, borderRadius, width }}
      className={styles.quotesButtonContainer}
      disabled={canBeDisabled && (!age || zipCode.length < 5)}
    >
      {text}
    </button>
  );
};
