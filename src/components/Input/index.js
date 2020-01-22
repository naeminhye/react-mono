import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types'; 

const Input = props => {
  const { children, className, icon, label, ...others } = props;

  const classes = classNames({
    'mono__input': true,
    className: className || ""
  });

  return (
    <input className={classes} {...others} />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string, 
  onChange: PropTypes.func
}

Input.defaultProps = {
}

export default Input;
