import React from "react";
import classNames from "classnames";
import "./Button.scss";

const Button = props => {
  const { children, className, icon, ...others } = props;

  const classes = classNames({
    btn: true,
    className: className || ""
  });

  return (
    <button className={classes} {...others}>
      <div className="btn__icon">{icon}</div>

      <div className="btn__content">{children}</div>
    </button>
  );
};

export default Button;
