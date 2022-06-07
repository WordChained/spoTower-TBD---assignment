import { nanoid } from "nanoid";
import { useState } from "react";
import { AgeButton } from "./age-button/AgeButton";
import styles from "./AgePicker.module.css";
export const AgePicker = ({ setAge }) => {
  const ages = ["<18", "19-24", "25-34", "35-49", "50-64", "65 >"];
  const [activeAge, setActiveAge] = useState(undefined);
  const onAgePick = (ageToSet) => {
    setActiveAge(ageToSet);
    setAge(ageToSet);
  };
  return (
    <div className={styles.agePickerContainer}>
      <label>Your Age</label>
      <div className={styles.buttons}>
        {ages.map((age) => (
          <AgeButton
            key={nanoid()}
            age={age}
            onAgePick={onAgePick}
            activeAge={activeAge}
          />
        ))}
      </div>
    </div>
  );
};
