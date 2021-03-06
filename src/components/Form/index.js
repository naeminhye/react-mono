import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Button from "../Button";
import styles from "./styles.module.scss";

const Item = (props) => {
  const {
    children,
    className,
    labelClassName,
    icon,
    label,
    isRequired,
    ...others
  } = props;

  const classes = classNames({
    [styles["mono__form--item"]]: true,
    [className]: className,
  });

  const labelClasses = classNames({
    [styles["mono__form--item-label"]]: true,
    labelClassName: labelClassName,
    [styles["required"]]: isRequired,
  });

  return (
    <div className={classes} {...others}>
      <div className={labelClasses}>{label}</div>
      {children}
    </div>
  );
};

const Form = (props) => {
  const { children, className, title, actions, border, ...others } = props;

  const classes = classNames({
    [styles["mono__form"]]: true,
    [styles["border"]]: border,
    [className]: className,
  });

  return (
    <div className={classes} {...others}>
      <div className={styles["mono__form--title"]}>{title}</div>
      {children}
      {actions && (
        <div className={styles["mono__form--action-group"]}>
          {actions.map((action, index) => (
            <div key={index} className={styles["mono__form--action"]}>
              {action}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Form.defaultProps = {
  actions: [
    <Button
      onClick={() => {
        console.log("Cancel");
      }}
    >
      Cancel
    </Button>,
    <Button
      type="primary"
      onClick={() => {
        console.log("OK");
      }}
    >
      OK
    </Button>,
  ],
};

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node),
  actions: PropTypes.arrayOf(PropTypes.node),
};

Form.Item = Item;

export default Form;
