import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Item from './Item';

const List = (props) => {
  const { className, children, dataSource, renderItem } = props;

  const classes = classNames({
    [styles[`mono__list`]]: true,
    [className]: className,
  });

  return (
    <div className={classes}>
      <ul className={styles[`mono__list--items`]}>
        {children
          ? { children }
          : dataSource &&
            dataSource.map((item, index) => {
              return <Item key={index}>{renderItem(item)}</Item>;
            })}
      </ul>
    </div>
  );
};

List.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.array,
};

List.Item = Item;

export default List;
