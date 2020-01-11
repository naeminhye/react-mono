import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types'; 
import "../Form.scss";

const Item = (props) => {
    const { children, className, labelClassName, icon, label, ...others } = props;
    
    const classes = classNames({
        form__item: true,
        className: className || ""
    });
  
    const labelClasses = classNames({
        input__label: true,
        labelClassName: labelClassName || ""
    });
    
    return (
        <div className={classes} {...others}>
          <div className={labelClasses}>{label}</div>
            {children}
        </div>
    )
}

export default Item;