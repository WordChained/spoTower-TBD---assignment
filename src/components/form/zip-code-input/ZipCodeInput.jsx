import React from "react";
import styles from "./ZipCodeInput.module.css";
import { MdLocationPin } from "react-icons/md";
export const ZipCodeInput = ({ setZipCode }) => {
  const onInput = (ev) => {
    setZipCode(ev.target.value);
  };

  return (
    <div className={styles.zipCodeInputContainer}>
      <span className={styles.locationIconContainer}>
        <MdLocationPin />
      </span>
      <input
        type="text"
        placeholder="Enter Your Zip Code"
        min={5}
        onInput={onInput}
      />
    </div>
  );
};
