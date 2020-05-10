import React, { useState, useEffect } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const ToggleSwitch = (props) => {
  const {
    rounded,
    checkedChildren,
    uncheckedChildren,
    className,
    name,
    onChange,
    variant,
    innerRef,
    checked,
    defaultChecked,
  } = props;

  const [_checked, _setChecked] = useState(defaultChecked || checked || false);

  const classes = classNames({
    [styles[`mono__toggle-switch`]]: true,
    [styles.wrapper]: true,
    [className]: className,
  });
  const slideClasses = classNames(styles.slider, styles[variant], {
    [styles.round]: rounded,
  });

  const checkedChildrenClasses = classNames(styles.children, styles.checked, {
    [styles.visible]: checked,
  });

  const uncheckedChildrenClasses = classNames(
    styles.children,
    styles.unchecked,
    {
      [styles.visible]: !checked,
    }
  );

  const handleChange = (e) => {
    const { checked } = e.target;
    _setChecked(checked);
    onChange && onChange({ name, checked });
  };

  useEffect(() => {
    _setChecked(checked);
  }, [checked]);

  return (
    <span className={classes}>
      <span className={styles.switch}>
        <input
          type="checkbox"
          checked={_checked}
          onChange={handleChange}
          name={name}
          ref={innerRef}
        />

        {/* Overlay */}
        <span className={slideClasses} />

        {/* Childrens */}
        <>
          <span className={checkedChildrenClasses}>
            {checkedChildren || null}
          </span>
          <span className={uncheckedChildrenClasses}>
            {uncheckedChildren || null}
          </span>
        </>
      </span>
    </span>
  );
};

ToggleSwitch.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  rounded: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "success", "danger"]),
  /* Children to show on active state  */
  checkedChildren: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
  /* Children to show on inactive state */
  uncheckedChildren: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
};

ToggleSwitch.defaultProps = {
  defaultChecked: false,
  checked: false,
  variant: "primary",
};

export default ToggleSwitch;
