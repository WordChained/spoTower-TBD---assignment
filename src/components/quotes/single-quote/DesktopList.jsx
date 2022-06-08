import React from "react";
import styles from "./DesktopList.module.css";
export const DesktopList = ({ quote }) => {
  return (
    <>
      <ul className={styles.desktopListContainer}>
        {quote.advantages.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <span className={styles.linkToSite}>{quote.site}</span>
    </>
  );
};
