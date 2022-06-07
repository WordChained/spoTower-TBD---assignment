import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { QuotesList } from "../../components/quotes/quotes-list/QuotesList";
import { QuotesContext } from "../../store/contexts/quoteContext";
import styles from "./QuotesPage.module.css";
const QuotesPage = () => {
  const { quotesState } = useContext(QuotesContext);
  const [filteredQuotes, setFilteredQuotes] = useState(quotesState.quotes);
  useEffect(() => {
    if (!quotesState.quotes.length) return;
    setFilteredQuotes(
      quotesState.quotes.filter((quote) => {
        return (
          quote.ageRestriction < quotesState.filter.age &&
          quote.zipCodeList.includes(quotesState.filter.zipCode)
        );
      })
    );
  }, [quotesState.filter]);

  return (
    <section className={styles.quotesPageContainer}>
      <Link to={"/"}>Back to Search</Link>
      {!!filteredQuotes.length ? (
        <QuotesList quotes={filteredQuotes} />
      ) : (
        <div className={styles.placeholder}>No luck..</div>
      )}
    </section>
  );
};
export default QuotesPage;
