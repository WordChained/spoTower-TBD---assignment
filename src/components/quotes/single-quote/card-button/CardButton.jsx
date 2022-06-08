import React from "react";
import styles from "./CardButton.module.css";
export const CardButton = ({ text }) => {
  return <button className={styles.cardButtonContainer}>{text}</button>;
};
