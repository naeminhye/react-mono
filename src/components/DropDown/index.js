import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const options = [
  {
    value: "option-1",
    label: "Option 1"
  },
  {
    value: "option-2",
    label: "Option 2"
  },
  {
    value: "option-3",
    label: "Option 3"
  }
];

const Select = props => {
  const {
    children,
    className,
    optionClassName,
    defaultValue,
    ...others
  } = props;
//   const { showOptions, setShowOptions } = useState(false);
var _show = false
  const { selectedValue, setSelectedValue } = useState(
    defaultValue || options[0].value
  );

  const classes = classNames({
    select: true,
    [className]: className || ""
  });

  const toggleOptions = () => {
    // setShowOptions(true)
    _show = !_show;
    console.log("show",_show)
  };

  return (
    <div className={classes} onClick={toggleOptions} {...others}>
      {/* {children} */}
      {/* <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select> */}

      {_show && <div className="option-lists">
        {options.map((option, index) => {
          // if(selectedValue === option.value) {
          // }
          const optionClasses = classNames({
            "option-item": true,
            optionClassName: optionClassName || "",
            "selected-item": selectedValue === option.value,
            hide: !_show
          });

          return (
            <div className={optionClasses} key={option.value}>
              {option.label}
            </div>
          );
        })}
      </div>}
    </div>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

Select.defaultProps = {};

export default Select;
