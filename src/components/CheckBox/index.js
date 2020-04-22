import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./CheckBox.module.scss";

const CheckBox = (props) => {
  const {
    children,
    className,
    halfCheck,
    label,
    defaultChecked,
    loading,
    ...others
  } = props;

  const classes = classNames({
    [styles[`mono__checkbox`]]: true,
    [className]: className,
    [styles[`notall`]]: halfCheck,
  });

  return (
    <div className={classes}>
      {loading ? (
        <div
          style={{
            backgroundImage:
              "url('https://assets.hcaptcha.com/captcha/v1/501e148/static/images/pulse.svg')",
            width: 18,
            height: 18,
          }}
        ></div>
      ) : (
        <input type="checkbox" {...others} />
      )}
      {label && (
        <span className={styles["mono__checkbox--label"]}>{label}</span>
      )}
    </div>
  );
};

CheckBox.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  halfCheck: PropTypes.bool,
  label: PropTypes.string,
  defaultChecked: PropTypes.bool,
};

CheckBox.defaultProps = {
  halfCheck: false,
  defaultChecked: false,
};

export default CheckBox;
