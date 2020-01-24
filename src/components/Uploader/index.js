import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Button from "../Button";
import styles from './Uploader.module.scss'; 

const Uploader = props => {
  return (
    <div className={styles["mono__uploader"]}>
      <div className={styles["mono__uploader--drag"]}>
        <input type="file" id="uploader__input" className={styles["mono__uploader--input"]} />
        <div className={styles["mono__uploader--drag-hint"]}>
          <label htmlFor="uploader__input"> Drag & drop files or folders here or browse file</label>
        </div>
      </div>
      {/*  className="mono__uploader__button" */}
      <input type="file" accept="true" multiple style={{ display: "none" }}></input>
    </div>
  );
};

export default Uploader;
