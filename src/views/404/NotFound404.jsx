import React from "react";
import styles from "./NotFound404.module.css";
import { Link } from "react-router-dom";
const NotFound404 = () => {
  return (
    <div className={styles.notFound404Container}>
      <h1>PAGE NOT FOUND</h1>
      <Link to="/">Back to safety...</Link>
    </div>
  );
};
export default NotFound404;
