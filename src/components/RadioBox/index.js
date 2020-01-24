import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from './RadioBox.module.scss'; 

const RadioBoxItem = props => {
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
    [styles[`mono__radiobox--item`]]: true,
    [className]: className,
    [styles[`radiobox--checked`]]: checked,
  });

  return (
    <div
      {...others}
      className={itemClasses}
      onClick={() => {
        onChange(!checked);
      }}
    >
      {/* <input checked={checked} type="radiobox" name={name} /> */}
      <div className={styles["mono__radiobox--item-content"]}>
        {icon}
        <div className={styles["mono__radiobox--item-content__label"]}>{label}</div>
      </div>
      <div className={styles["mono__radiobox--item-icon"]}></div>
    </div>
  );
};

const RadioBox = props => {
  const { children, className, options, onChange, name, ...others } = props;

  const [selected, setSelected] = useState("");

  const classes = classNames({
    [styles[`mono__radiobox`]]: true,
    [className]: className,
  });

  const handleChangeSelect = (checked, value) => {
    if (checked) {
      setSelected(value);
    }

    onChange && onChange(value);
  };

  return (
    <div className={classes} {...others}>
      {options.map((option, index) => (
        <RadioBoxItem
          name={name}
          key={index}
          className={index > 0 ? styles["left-space"] : ""}
          checked={selected === option.value}
          onChange={checked => {
            handleChangeSelect(checked, option.value);
          }}
          {...option}
        />
      ))}
    </div>
  );
};

RadioBox.propTypes = {
  className: PropTypes.string,
  // value: PropTypes.string,
  onChange: PropTypes.func
};

RadioBox.defaultProps = {};

export default RadioBox;
