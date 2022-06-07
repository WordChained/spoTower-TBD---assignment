import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { filterQuotesAction } from "../../store/actions/quoteActions";
import { QuotesContext } from "../../store/contexts/quoteContext";
import { QuotesButton } from "../shared/quotes-button/QuotesButton";
import { AgePicker } from "./age-picker/AgePicker";
import styles from "./Form.module.css";
import { StatusCheckboxes } from "./status-checkboxes/StatusCheckboxes";
import { ZipCodeInput } from "./zip-code-input/ZipcodeInput";
export const Form = () => {
  const { quotesState, quotesDispatch } = useContext(QuotesContext);
  const [zipCode, setZipCode] = useState("");
  const [age, setAge] = useState(undefined);
  const navigate = useNavigate();
  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!zipCode) {
      alert("you must pick an age gap");
      return;
    }
    const ageInNumber = getAgeInNumber();
    quotesDispatch(filterQuotesAction({ age: ageInNumber, zipCode }));
    console.log(ev.target);
    navigate("/quotes");
  };
  const getAgeInNumber = () => {
    switch (age) {
      case "<18":
        return 18;
      case "19-24":
        return 19;
      case "25-34":
        return 25;
      case "35-49":
        return 35;
      case "50-64":
        return 50;
      case "65 >":
        return 65;
      default:
        return 0;
    }
  };
  return (
    <form className={styles.formContainer} onSubmit={onSubmit}>
      <div className={styles.titles}>
        <h2>Get Cheap Car Insurance in M</h2>
        <h5> Find & compare your best rates in 1 minute</h5>
      </div>
      <ZipCodeInput setZipCode={setZipCode} />
      <AgePicker setAge={setAge} />
      <StatusCheckboxes />
      <QuotesButton text={"GET QUOTES"} />
    </form>
  );
};
