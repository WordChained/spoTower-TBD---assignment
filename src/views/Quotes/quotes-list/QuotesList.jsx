import React from "react";
import { QuoteCard } from "../single-quote/QuoteCard";
import styles from "./QuotesList.module.css";
export const QuotesList = ({ quotes }) => {
  return (
    <div className={styles.quotesListContainer}>
      {quotes.map((quote) => (
        <QuoteCard key={quote.id} quote={quote} />
      ))}
    </div>
  );
};
