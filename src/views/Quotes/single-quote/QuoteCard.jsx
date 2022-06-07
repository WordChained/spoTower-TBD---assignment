import React from "react";
import styles from "./QuoteCard.module.css";
export const QuoteCard = ({ children }) => {
  return <div className={styles.quoteCardContainer}>{children}</div>;
};
