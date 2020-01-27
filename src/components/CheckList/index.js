import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./CheckList.module.scss";
import { CheckBox } from "../index";

const IconCheckItem = props => {
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
    [styles[`mono__checkbox--item`]]: true,
    [className]: className,
    [styles[`checkbox--checked`]]: checked
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
      <div className={styles["mono__checkbox--item-content"]}>
        {icon}
        <div className={styles["mono__checkbox--item-content__label"]}>
          {label}
        </div>
      </div>
      <div className={styles["mono__checkbox--item-icon"]}></div>
    </div>
  );
};

const CheckList = props => {
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
    console.log("sleected list", _selected)
  };
  const classes = classNames({
    [styles["mono__checkbox"]]: true,
    [className]: className,
    [styles[`mono__checkbox--${type}`]]: type,
  });

  return (
    <div className={classes} {...others}>
      {type === "grid"
        ? options.map((option, index) => (
            <IconCheckItem
              name={name}
              key={index}
              className={index > 0 ? styles["left-space"] : ""}
              checked={selected.indexOf(option.value) !== -1}
              onChange={checked => {
                handleChangeSelect(checked, option);
              }}
              {...option}
            />
          ))
        : options.map((option, index) => (
            <CheckBox
              label={option.label}
              name={name}
              className={index > 0 ? styles["left-space"] : ""}
              defaultChecked={selected.indexOf(option.value) !== -1} 
              onChange={e => {
                let checked = e.target.checked;
                handleChangeSelect(checked, option);
              }}
            />
          ))}
    </div>
  );
};

CheckList.propTypes = {
  className: PropTypes.string,
  // value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(["list", "grid"])
};

CheckList.defaultProps = {
  type: "list"
};

export default CheckList;
