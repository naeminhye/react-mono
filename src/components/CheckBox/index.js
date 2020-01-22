import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

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

  return (
    <div
      {...others}
      className={`mono__checkbox--item${_checked ? " checkbox--checked" : ""}${
        className ? " " + className : ""
      }`}
      onClick={() => {
        onChange(!_checked);
        setChecked(!_checked);
      }}
    >
      <input checked={_checked} type="checkbox" name={name} />
      <div className="mono__checkbox--item-content">
        {icon}
        <div className="mono__checkbox--item-content__label">{label}</div>
      </div>
      <div className="mono__checkbox--item-icon"></div>
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
    <div className="mono__checkbox" {...others}>
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
