/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import Icons from "components/Icons";

const Breadcrumb = (props) => {
  const { className } = props;

  const classes = classNames({
    [styles[`mono__breadcrumb`]]: true,
    [className]: className,
  });

  return (
    <div className={classes}>
      <ol className={styles[`mono__breadcrumb--container`]}>
        <li className={styles[`mono__breadcrumb--root-item`]}>
          <a href="#" className={styles[`mono__breadcrumb--root-item-link`]}>
            <span>Home</span>
          </a>
          <span className={styles[`mono__breadcrumb--delimiter`]}>
            <Icons.ArrowRight size={14} />
          </span>
        </li>
      </ol>
    </div>
  );
};

Breadcrumb.propTypes = {
  className: PropTypes.string,
};

export default Breadcrumb;
