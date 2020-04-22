import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const DropDown = (props) => {
  const { options, className, value, onChange, ...others } = props;
  const [selectedValue, setSelectedValue] = useState(value);

  const classes = classNames({
    [styles["mono__dropdown"]]: true,
    [className]: className || "",
  });

  return (
    <div className={classes} {...others}>
      <div className={styles["mono__dropdown--current"]} tabIndex={1}>
        <div className={styles["mono__dropdown--value"]}>
          <input
            className={styles["mono__dropdown--input"]}
            type="radio"
            id={selectedValue}
            defaultValue={2}
            name="Ben"
            defaultChecked="checked"
          />
          <div className={styles["mono__dropdown--input-text"]}>
            {options.find((option) => option.value === selectedValue).label}
          </div>
        </div>
        <img
          className={styles["mono__dropdown__icon"]}
          src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
          alt="Arrow Icon"
          aria-hidden="true"
        />
      </div>
      <ul className={styles["mono__dropdown__list"]}>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => {
              onChange(option.value);
              setSelectedValue(option.value);
            }}
          >
            <label
              className={styles["mono__dropdown--option"]}
              htmlFor={option.value}
              // eslint-disable-next-line jsx-a11y/aria-proptypes
              aria-hidden="aria-hidden"
            >
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

DropDown.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

DropDown.defaultProps = {};

export default DropDown;
