/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Pagination.module.scss";
import { Icons } from "../index";

const Pagination = (props) => {
  const {
    total,
    pageSize,
    current,
    className,
    onChange,
    onShowSizeChange,
    ...others
  } = props;
  const [currentPage, setCurrentPage] = useState(current);

  const getNumOfPgs = (_total = total, _size = pageSize) => {
    return _total % _size > 0
      ? Math.floor(_total / _size) + 1
      : Math.floor(_total / _size);
  };
  const classes = classNames({
    [styles["mono__pagination"]]: true,
    [className]: className,
  });

  const prev = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const next = () => {
    if (currentPage !== getNumOfPgs()) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <ul className={classes} {...others}>
      <li
        title="Previous Page"
        className={classNames({
          [styles["mono__pagination--item"]]: true,
          [styles["mono__pagination--item-prev"]]: true,
        })}
        aria-disabled="true"
        onClick={prev}
      >
        <Icons.ArrowLeft size={18} />
      </li>

      {[...Array(getNumOfPgs())].map((e, i) => (
        <li
          title={i + 1}
          className={classNames({
            [styles["mono__pagination--item"]]: true,
            [styles["mono__pagination--item-active"]]: i + 1 === currentPage,
          })}
          tabIndex={i}
          onClick={() => {
            setCurrentPage(i + 1);
            onChange && onChange(i + 1);
          }}
        >
          <a>{i + 1}</a>
        </li>
      ))}
      <li
        title="Next Page"
        tabIndex="0"
        className={classNames({
          [styles["mono__pagination--item"]]: true,
          [styles["mono__pagination--item-next"]]: true,
        })}
        aria-disabled="false"
        onClick={next}
      >
        <Icons.ArrowRight size={18} />
      </li>
    </ul>
  );
};

Pagination.defaultProps = {
  current: 1,
  pageSize: 5,
  pageSizeOptions: ["5", "10", "20", "30", "40"],
};

Pagination.propTypes = {
  current: PropTypes.number,
  pageSize: PropTypes.number,
  pageSizeOptions: PropTypes.array,
  total: PropTypes.number,
  onChange: PropTypes.func,
  onShowSizeChange: PropTypes.func,
};
export default Pagination;
