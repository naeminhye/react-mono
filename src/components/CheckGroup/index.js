import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { CheckBox } from "../index";

const IconCheckItem = (props) => {
  const {
    children,
    className,
    label,
    value,
    icon,
    defaultChecked,
    onChange,
    name,
    ...others
  } = props;

  const [checked, setChecked] = useState(defaultChecked || false);

  const classes = classNames({
    [styles[`mono__check-group--item`]]: true,
    [className]: className,
    [styles[`check-group--checked`]]: checked,
  });

  return (
    <div
      {...others}
      className={classes}
      onClick={() => {
        onChange(!checked);
        setChecked(!checked);
      }}
    >
      {/* <input checked={checked} type="checkbox" name={name} /> */}
      <div className={styles["mono__check-group--item-content"]}>
        {icon}
        <div className={styles["mono__check-group--item-content__label"]}>
          {label}
        </div>
      </div>
      <div className={styles["mono__check-group--item-icon"]}></div>
    </div>
  );
};

const CheckGroup = (props) => {
  const {
    children,
    className,
    options,
    onChange,
    name,
    type,
    ...others
  } = props;

  const [selected, setSelected] = useState([]);

  const handleChangeSelect = (checked, option) => {
    let _selected = selected;

    if (checked && selected.indexOf(option.value) === -1) {
      _selected.push(option.value);
    } else if (!checked && selected.indexOf(option.value) !== -1) {
      _selected.splice(selected.indexOf(option.value), 1);
    }
    setSelected(_selected);
    onChange && onChange(_selected);
    console.log("sleected list", _selected);
  };
  const classes = classNames({
    [styles["mono__check-group"]]: true,
    [className]: className,
    [styles[`mono__check-group--${type}`]]: type,
  });

  return (
    <div className={classes} {...others}>
      {type === "grid"
        ? options.map((option, index) => (
            <IconCheckItem
              name={name}
              key={index}
              checked={selected.indexOf(option.value) !== -1}
              onChange={(checked) => {
                handleChangeSelect(checked, option);
              }}
              {...option}
            />
          ))
        : options.map((option, index) => (
            <CheckBox
              label={option.label}
              name={name}
              defaultChecked={selected.indexOf(option.value) !== -1}
              onChange={(e) => {
                let checked = e.target.checked;
                handleChangeSelect(checked, option);
              }}
            />
          ))}
    </div>
  );
};

CheckGroup.propTypes = {
  className: PropTypes.string,
  // value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(["list", "grid"]),
};

CheckGroup.defaultProps = {
  type: "list",
};

export default CheckGroup;
