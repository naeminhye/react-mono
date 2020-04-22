import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { RadioBox } from "../index";

const RadioListItem = (props) => {
  const {
    children,
    className,
    label,
    checked,
    onChange,
    name,
    icon,
    ...others
  } = props;

  const itemClasses = classNames({
    [styles[`mono__radiolist--item`]]: true,
    [className]: className,
    [styles[`radiolist--checked`]]: checked,
  });

  return (
    <div
      {...others}
      className={itemClasses}
      onClick={() => {
        onChange(!checked);
      }}
    >
      {/* <input checked={checked} type="radiolist" name={name} /> */}
      <div className={styles["mono__radiolist--item-content"]}>
        {icon}
        <div className={styles["mono__radiolist--item-content__label"]}>
          {label}
        </div>
      </div>
      <div className={styles["mono__radiolist--item-icon"]}></div>
    </div>
  );
};

const RadioList = (props) => {
  const {
    children,
    className,
    options,
    onChange,
    name,
    type,
    icon,
    ...others
  } = props;

  const [selected, setSelected] = useState("");

  const classes = classNames({
    [styles[`mono__radiolist`]]: true,
    [className]: className,
    [styles[`mono__radiolist--${type}`]]: type,
  });

  const handleChangeSelect = (checked, value) => {
    if (checked) {
      setSelected(value);
    }

    onChange && onChange(value);
  };

  return (
    <div className={classes} {...others}>
      {type === "grid"
        ? options.map((option, index) => (
            <RadioListItem
              name={name}
              key={index}
              checked={selected === option.value}
              onChange={(checked) => {
                handleChangeSelect(checked, option.value);
              }}
              {...option}
            />
          ))
        : options.map((option, index) => (
            <RadioBox
              name={name}
              key={index}
              label={option.label}
              value={option.value}
              checked={selected === option.value}
              onChange={(checked) => {
                handleChangeSelect(checked, option.value);
              }}
            />
          ))}
    </div>
  );
};

RadioList.propTypes = {
  className: PropTypes.string,
  // value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(["list", "grid"]),
};

RadioList.defaultProps = {
  type: "list",
};

export default RadioList;
