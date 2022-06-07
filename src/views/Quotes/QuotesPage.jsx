import React, { useContext, useEffect, useState } from "react";
import { QuoteContext } from "../../store/contexts/quoteContext";
import { QuotesList } from "./quotes-list/QuotesList";
import styles from "./QuotesPage.module.css";
export const QuotesPage = () => {
  const { quoteState } = useContext(QuoteContext);
  const [filteredQuotes, setFilteredQuotes] = useState(quoteState.quotes);
  useEffect(() => {
    //this is where i first filter
  }, []);

  return (
    <section className={styles.quotesPageContainer}>
      <QuotesList quotes={filteredQuotes} />
    </section>
  );
};
