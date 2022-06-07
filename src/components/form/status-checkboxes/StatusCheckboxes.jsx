import { nanoid } from "nanoid";
import React, { useState } from "react";
import { Checkbox } from "./single-checkbox/Checkbox";
import styles from "./StatusCheckboxes.module.css";
export const StatusCheckboxes = () => {
  const [married, setMarried] = useState(true);
  const [multipleVehicles, setMultipleVehicles] = useState(true);
  const [currentlyInsured, setCurrentlyInsured] = useState(true);
  const [ownesHome, setOwnesHome] = useState(true);
  const statusOptions = [
    { text: "I'm married", value: married },
    { text: "I own multiple vehicles", value: multipleVehicles },
    { text: "I'm currently insured", value: currentlyInsured },
    { text: "I own a home", value: ownesHome },
  ];
  const setValues = (value) => {
    switch (value) {
      case "I'm married":
        return setMarried(!married);
      case "I own multiple vehicles":
        return setMultipleVehicles(!multipleVehicles);
      case "I'm currently insured":
        return setCurrentlyInsured(!currentlyInsured);
      case "I own a home":
        return setOwnesHome(!ownesHome);
      default:
        return;
    }
  };
  return (
    <div className={styles.statusCheckboxesContainer}>
      {statusOptions.map((status) => (
        <Checkbox status={status} key={nanoid()} setValues={setValues} />
      ))}
    </div>
  );
};
