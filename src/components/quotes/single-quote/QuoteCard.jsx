import React from "react";
import styles from "./QuoteCard.module.css";
import { CardButton } from "./card-button/CardButton";
import { AdvantagesList } from "./advantages-list/AdvantagesList";
export const QuoteCard = ({ quote, index, isOnlyCard }) => {
  return (
    <div
      className={styles.quoteCardContainer}
      style={{ margin: isOnlyCard ? "auto" : "" }}
    >
      <div className={styles.indexAndStar}>{index + 1}</div>
      <div className={styles.imageContainer}>
        <img src={quote.image} alt="" />
      </div>
      <h3>{quote.promotionTitle}</h3>
      <AdvantagesList quote={quote} />
      <CardButton text="View My Quote" />
    </div>
  );
};
