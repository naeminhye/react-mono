import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "../styles.module.scss";
import Icons from "components/Icons";

const TextArea = (props) => {
  const {
    value,
    autoSize,
    defaultValue,
    onPressEnter,
    onChange,
    onResize,
    rows,
    disabled,
    bordered,
    resize,
    style,
    allowClear,
    onClear,
    ...others
  } = props;

  const classes = classNames({
    [styles[`mono__textarea`]]: true,
    [styles[`mono__textarea--bordered`]]: bordered,
    [styles[`mono__textarea--disabled`]]: disabled,
  });

  const _style = {
    resize,
  };

  const onDefaultClear = () => {
    onClear && onClear();
  };

  return (
    <div className={[styles[`mono__textarea--wrapper`]]}>
      <textarea
        className={classes}
        disabled={disabled}
        onChange={(e) => {
          onChange && onChange(e);
        }}
        {...others}
        style={{ ..._style, ...style }}
      >
        {value}
      </textarea>
      {allowClear && value !== "" && (
        <div
          className={[styles[`mono__input--clear-icon`]]}
          onClick={onDefaultClear}
        >
          <Icons.Close size={12} />
        </div>
      )}
    </div>
  );
};

TextArea.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onPressEnter: PropTypes.func,
  onResize: PropTypes.func,
  bordered: PropTypes.bool,
  defaultValue: PropTypes.string,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  resize: PropTypes.oneOf(["none", "vertical", "horizontal", "auto", "both"]),
  allowClear: PropTypes.bool,
};

TextArea.defaultProps = {
  bordered: false,
  disabled: false,
  resize: "auto",
};

export default TextArea;
