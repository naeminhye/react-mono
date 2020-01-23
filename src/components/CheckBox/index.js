import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from './CheckBox.module.scss'; 

const CheckBoxItem = props => {
  const {
    children,
    className,
    label,
    value, 
    icon,
    checked,
    onChange,
    name,
    ...others
  } = props;

  const [_checked, setChecked] = useState(checked || false);

  const classes = classNames({
    [styles[`mono__checkbox--item`]]: true,
    [className]: className,
    [styles[`checkbox--checked`]]: _checked,
  });

  return (
    <div
      {...others}
      className={classes}
      // className={`mono__checkbox--item${_checked ? " checkbox--checked" : ""}${
      //   className ? " " + className : ""
      // }`}
      onClick={() => {
        onChange(!_checked);
        setChecked(!_checked);
      }}
    >
      {/* <input checked={_checked} type="checkbox" name={name} /> */}
      <div className={styles["mono__checkbox--item-content"]}>
        {icon}
        <div className={styles["mono__checkbox--item-content__label"]}>{label}</div>
      </div>
      <div className={styles["mono__checkbox--item-icon"]}></div>
    </div>
  );
};

const CheckBox = props => {
  const { children, className, options, onChange, name, ...others } = props;

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
  };

  return (
    <div className={styles["mono__checkbox"]} {...others}>
      {options.map((option, index) => (
        <CheckBoxItem
          name={name}
          key={index}
          className={index > 0 ? "left-space" : ""}
          checked={selected.indexOf(option.value) !== -1}
          onChange={checked => {
            handleChangeSelect(checked, option);
          }}
          {...option}
        />
      ))}
    </div>
  );
};

CheckBox.propTypes = {
  className: PropTypes.string,
  // value: PropTypes.string,
  onChange: PropTypes.func
};

CheckBox.defaultProps = {};

export default CheckBox;
