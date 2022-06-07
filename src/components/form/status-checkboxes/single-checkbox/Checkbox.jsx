import React from "react";
import styles from "./Checkbox.module.css";
export const Checkbox = ({ status, setValues }) => {
  const onChange = (ev) => {
    ev.preventDefault();
    setValues(ev.target.value);
  };
  return (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        name="status"
        value={status.text}
        checked={status.value}
        onChange={onChange}
      />
      {status.text}
    </label>
  );
};
