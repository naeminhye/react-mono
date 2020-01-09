import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types'; 
import "./Button.scss";

const Button = props => {
  const { children, className, icon, ...others } = props;

  const classes = classNames({
    btn: true,
    className: className || ""
  });

  return (
    <button className={classes} {...others}>
      {/* <div className="btn__icon">{icon}</div> */}
      <div className="btn__content">{children}</div>
    </button>
  );
};

Button.defaultProps = {
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
}

export default Button;
