import React from "react";
import styles from "./QuotesList.nodule.css";
export const QuotesList = ({ quotes }) => {
  return (
    <div className={styles.quotesListContainer}>
      {quotes.map((quote) => (
        <QuoteCard key={quote.id}>
          {/* quote title */}
          {/* quote list */}
          {/* quote line and arrow*/}
          {/* quote button*/}
        </QuoteCard>
      ))}
    </div>
  );
};
