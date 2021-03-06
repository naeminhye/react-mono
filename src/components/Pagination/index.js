/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Icons from '../Icons';
import DropDown from '../DropDown';

const showPageSizeOptions = (options) => {
  let result = [];
  options.forEach((op) => {
    result.push({
      value: op,
      label: op,
    });
  });
  return result;
};

const Pagination = (props) => {
  const {
    total,
    pageSize,
    current,
    className,
    onChange,
    onShowSizeChange,
    pageSizeOptions,
    ...others
  } = props;
  const [currentPage, setCurrentPage] = useState(current);
  const [_pageSize, setPageSize] = useState(pageSize);

  const getNumOfPgs = (_total = total, _size = _pageSize) => {
    return _total % _size > 0
      ? Math.floor(_total / _size) + 1
      : Math.floor(_total / _size);
  };

  const classes = classNames({
    [styles['mono__pagination']]: true,
    [className]: className,
  });

  const prev = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      onChange && onChange(currentPage - 1);
    }
  };

  const next = () => {
    if (currentPage !== getNumOfPgs()) {
      setCurrentPage(currentPage + 1);
      onChange && onChange(currentPage + 1);
    }
  };

  return (
    <ul className={classes} {...others}>
      <li
        key="previouse-page"
        title="Previous Page"
        className={classNames({
          [styles['mono__pagination--item']]: true,
          [styles['mono__pagination--item-prev']]: true,
        })}
        aria-disabled="true"
        onClick={prev}
      >
        <Icons.ArrowLeft size={18} />
      </li>

      {[...Array(getNumOfPgs())].map((e, i) => (
        <li
          key={`Page ${i + 1}`}
          title={i + 1}
          className={classNames({
            [styles['mono__pagination--item']]: true,
            [styles['mono__pagination--item-active']]: i + 1 === currentPage,
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
        key="next-page"
        title="Next Page"
        tabIndex="0"
        className={classNames({
          [styles['mono__pagination--item']]: true,
          [styles['mono__pagination--item-next']]: true,
        })}
        aria-disabled="false"
        onClick={next}
      >
        <Icons.ArrowRight size={18} />
      </li>
      {pageSizeOptions && (
        <li className={styles['mono__pagination--options']}>
          <DropDown
            size="xs"
            style={{ width: '100px' }}
            value={pageSizeOptions[0]}
            options={showPageSizeOptions(pageSizeOptions)}
            onChange={(targetPageSize) => {
              setPageSize(targetPageSize);
              onShowSizeChange(currentPage, parseInt(targetPageSize));
            }}
          />
        </li>
      )}
    </ul>
  );
};

Pagination.defaultProps = {
  current: 1,
  pageSize: 5,
  pageSizeOptions: ['5', '10', '20', '30', '40'],
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
