import React from "react";
import classNames from "classnames";

import styles from "../styles.module.scss";

const Control = (props) => {
  const onToggle = (e) => {
    e.preventDefault();
    props.onToggle(props.style);
  };
  const classes = classNames({
    [styles.control]: true,
    [styles.active]: props.active,
  });
  return (
    <span className={classes} onMouseDown={onToggle}>
      {props.label}
    </span>
  );
};

export default Control;
