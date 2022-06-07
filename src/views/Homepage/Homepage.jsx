import React from "react";
import { Form } from "../../components/form/Form";
import styles from "./Homepage.module.css";
export const Homepage = () => {
  return (
    <main className={styles.homepageContainer}>
      <Form />
    </main>
  );
};
