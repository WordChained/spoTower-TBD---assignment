import React, { useState } from "react";
import { QuotesButton } from "../../../components/shared/quotes-button/QuotesButton";
import { useWindowSize } from "../../../hooks/useWindowSize";
import styles from "./QuoteCard.module.css";
import { AiFillStar } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { DesktopList } from "./DesktopList";
export const QuoteCard = ({ quote, index }) => {
  const windowSize = useWindowSize();
  const [showList, setShowList] = useState(false);
  const toggleList = () => {
    setShowList(!showList);
  };
  return (
    <div className={styles.quoteCardContainer}>
      {windowSize.width < 700 ? (
        <div className={styles.starContainer}>
          <AiFillStar />
        </div>
      ) : (
        <div className={styles.numberContainer}>
          <span>{index + 1}</span>
        </div>
      )}
      <div className={styles.imageContainer}>
        <img src={quote.image} alt="" />
      </div>
      <h3>{quote.promotionTitle}</h3>
      {windowSize.width < 700 ? (
        <div className={`${styles.list} ${showList ? styles.open : ""}`}>
          <div className={styles.arrowContainer} onClick={toggleList}>
            <BiChevronDown />
          </div>
          <ul>
            {quote.advanteges.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
      ) : (
        <DesktopList quote={quote} />
      )}
      {windowSize.width > 700 ? (
        <QuotesButton text="View My Quote" borderRadius={"3em"} width="50%" />
      ) : (
        <button className={styles.blueButton}>View My Quote</button>
      )}
    </div>
  );
};
