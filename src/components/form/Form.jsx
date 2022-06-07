import React from "react";
import { QuotesButton } from "../shared/quotes-button/QuotesButton";
import { AgePicker } from "./age-picker/AgePicker";
import styles from "./Form.module.css";
import { StatusCheckboxes } from "./status-checkboxes/StatusCheckboxes";
import { ZipCodeInput } from "./zip-code-input/ZipcodeInput";
export const Form = () => {
  return (
    <form className={styles.formContainer}>
      <div className={styles.titles}>
        <h2>Get Cheap Car Insurance in M</h2>
        <h5> Find & compare your best rates in 1 minute</h5>
      </div>
      <ZipCodeInput />
      <AgePicker />
      <StatusCheckboxes />
      <QuotesButton text={"GET QUOTES"} />
    </form>
  );
};
