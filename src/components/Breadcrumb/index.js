/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

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
          <i className={styles[`mono__breadcrumb--arrow`]} />
        </li>
      </ol>
    </div>
  );
};

Breadcrumb.propTypes = {
  className: PropTypes.string,
};

export default Breadcrumb;
