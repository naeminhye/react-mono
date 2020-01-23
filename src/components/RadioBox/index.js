import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

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

  return (
    <div
      {...others}
      className={`mono__checkbox--item${checked ? " checkbox--checked" : ""}${
        className ? " " + className : ""
      }`}
      onClick={() => {
        onChange(!checked);
      }}
    >
      {/* <input checked={checked} type="checkbox" name={name} /> */}
      <div className="mono__checkbox--item-content">
        {icon}
        <div className="mono__checkbox--item-content__label">{label}</div>
      </div>
      <div className="mono__checkbox--item-icon"></div>
    </div>
  );
};

const RadioBox = props => {
  const { children, className, options, onChange, name, ...others } = props;

  const [selected, setSelected] = useState("");

  const handleChangeSelect = (checked, value) => {
    if (checked) {
      setSelected(value);
    }

    onChange && onChange(value);
  };

  return (
    <div className="mono__checkbox" {...others}>
      {options.map((option, index) => (
        <RadioBoxItem
          name={name}
          key={index}
          className={index > 0 ? "left-space" : ""}
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
