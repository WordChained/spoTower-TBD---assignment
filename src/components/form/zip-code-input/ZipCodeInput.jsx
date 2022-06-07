import React from "react";
import styles from "./ZipCodeInput.module.css";
import { MdLocationPin } from "react-icons/md";
export const ZipCodeInput = () => {
  return (
    <div className={styles.zipCodeInputContainer}>
      <span className={styles.locationIconContainer}>
        <MdLocationPin />
      </span>
      <input type="text" placeholder="Enter Your Zip Code" />
    </div>
  );
};
