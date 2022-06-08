import React, { useState } from "react";
import styles from "./AdvantagesList.module.css";
import { BiChevronDown } from "react-icons/bi";

export const AdvantagesList = ({ quote }) => {
  const [showList, setShowList] = useState(false);
  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div
      className={`${styles.advantagesListContainer} ${
        showList ? styles.open : ""
      }`}
    >
      <div className={styles.arrowContainer} onClick={toggleList}>
        <BiChevronDown />
      </div>
      <ul>
        {quote.advantages.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <span className={styles.linkToSite}>{quote.site}</span>
    </div>
  );
};
