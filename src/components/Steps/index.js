/* eslint-disable no-unused-vars */
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Steps.module.scss";

const Step = (props) => {
  const {
    className,
    active,
    index,
    title,
    description,
    status,
    disabled,
  } = props;
  const _classes = classNames({
    [styles["mono__steps--item"]]: true,
    [styles[status]]: status,
    [className]: className,
  });

  return (
    <div className={_classes}>
      <div className={styles["mono__steps--item-index"]}>{index}</div>
      <div className={styles["mono__steps--item-content"]}>
        <div className={styles["mono__steps--item-content-title"]}>{title}</div>
        <div className={styles["mono__steps--item-content-description"]}>
          {description}
        </div>
      </div>
    </div>
  );
};

Step.defaultProps = {
  status: "process",
  disabled: false,
};

Step.propTypes = {
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  status: PropTypes.oneOf(["wait", "process", "finish", "error"]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
};

const Steps = (props) => {
  const { className, children, current, onChange, ...others } = props;

  const classes = classNames({
    [styles["mono__steps"]]: true,
    [className]: className,
  });

  return (
    <div className={classes} {...others}>
      {/* {steps.map((step, index) => <Step
        status="finish"
        index={index}
        title={step.title}
        description={step.description}
      />)} */}
      {children}
    </div>
  );
};

Steps.Step = Step;

Steps.defaultProps = {
  status: "process",
  initial: 0,
  current: 0,
  direction: "horizontal",
  labelPlacement: "horizontal",
  steps: [],
};

Steps.propTypes = {
  className: PropTypes.string,
  current: PropTypes.number,
  initial: PropTypes.number,
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
  labelPlacement: PropTypes.oneOf(["horizontal", "vertical"]),
  status: PropTypes.oneOf(["wait", "process", "finish", "error"]),
  onChange: PropTypes.func,

  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    })
  ),
};
export default Steps;
