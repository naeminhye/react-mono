import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Button from '../Button';

const Modal = (props) => {
  const { className, title, visible, children, width, onClose } = props;

  const classes = classNames({
    [styles[`mono__modal`]]: true,
    [className]: className,
  });

  const modalStyle = {
    display: visible ? 'flex' : 'none',
    width: width && `${width}px`,
  };

  return (
    <div className={styles['mono__modal--backdrop']} style={modalStyle}>
      <div className={classes} style={{ transform: 'translateY(0px)' }}>
        <div className={styles['mono__modal--close-button']}>
          <Button.IconButton shape="circle" size="xs" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
          </Button.IconButton>
        </div>
        <div className={styles['mono__modal--title']}>{title}</div>
        <div className={styles['mono__modal--body']}>{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
};

export default Modal;
