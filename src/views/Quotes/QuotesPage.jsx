import React, { useContext, useEffect, useState } from "react";
import { QuotesContext } from "../../store/contexts/quoteContext";
import { QuotesList } from "./quotes-list/QuotesList";
import styles from "./QuotesPage.module.css";
const QuotesPage = () => {
  const { quotesState, quotesDispatch } = useContext(QuotesContext);
  const [filteredQuotes, setFilteredQuotes] = useState(quotesState.quotes);
  useEffect(() => {
    //this is where i first filter
  }, []);

  return (
    <section className={styles.quotesPageContainer}>
      <QuotesList quotes={filteredQuotes} />
    </section>
  );
};
export default QuotesPage;
