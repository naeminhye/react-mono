import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types'; 
import "./Input.scss";

const Input = props => {
  const { children, className, icon, label, ...others } = props;

  const classes = classNames({
    normal__input: true,
    className: className || ""
  });

  return (
    <div>
      <div>{label}</div>
      <input className={classes} {...others} />
    </div>
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
