import React, { useState, useRef } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Collapse = (props) => {
  const { className, children, panelClassName, bordered, header } = props;

  const [active, setActive] = useState(false);

  const panelEl = useRef(null);

  const classes = classNames({
    [styles[`mono__collapse`]]: true,
    [styles[`mono__collapse--active`]]: active,
    [styles[`mono__collapse--bordered`]]: bordered,
    [className]: className,
  });

  const headerClasses = classNames({
    [styles[`mono__collapse--header`]]: true,
  });

  const panelClasses = classNames({
    [styles[`mono__collapse--panel`]]: true,
    [panelClassName]: panelClassName,
  });

  const onToggle = () => {
    setActive(!active);
    console.log("panelEl.current.offsetHeight", panelEl.current.offsetHeight);
    // if (panelEl.current) {
    //   panelEl.current.style.height = panelEl.current.clientHeight;
    // }
  };

  return (
    <div className={classes}>
      <div className={headerClasses} onClick={onToggle}>
        {header}
      </div>
      <div
        className={panelClasses}
        style={{ height: active ? panelEl.current.offsetHeight : 0 }}
      >
        <div className={styles[`mono__collapse--panel-content`]} ref={panelEl}>
          {children}
        </div>
      </div>
    </div>
  );
};

Collapse.propTypes = {
  className: PropTypes.string,
};

export default Collapse;
