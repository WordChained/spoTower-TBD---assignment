import React from "react";
import styles from "./ZipCodeInput.module.css";
import { MdLocationPin } from "react-icons/md";
export const ZipCodeInput = ({ setZipCode }) => {
  const onInput = (ev) => {
    let regExp = /[a-zA-Z]/g;
    if (regExp.test(ev.target.value)) {
      setZipCode("");
      return;
    } else setZipCode(ev.target.value);
  };

  return (
    <div className={styles.zipCodeInputContainer}>
      <span className={styles.locationIconContainer}>
        <MdLocationPin />
      </span>
      <input
        type="number"
        placeholder="Enter Your Zip Code"
        min={5}
        onInput={onInput}
      />
    </div>
  );
};
