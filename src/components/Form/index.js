import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types'; 
import Button from '../Button';

const Item = (props) => {
    const { children, className, labelClassName, icon, label, isRequired, ...others } = props;
    
    const classes = classNames({
        form__item: true,
        className: className || ""
    });
  
    const labelClasses = classNames({
        form__item__label: true,
        labelClassName: labelClassName || "",
        required: isRequired
    });
    
    return (
        <div className={classes} {...others}>
          <div className={labelClasses}>{label}</div>
            {children}
        </div>
    )
}

const Form = (props) => {
    
    const { children, className, title, actions, border, ...others } = props;

    const classes = classNames({
        form: true,
        border: border || "",
        className: className || ""
    });

    return (
        <div className={classes} {...others}>
            <div className="form__title">{title}</div>
            {children}
            {actions && <div className="form__action-group">
                {actions.map((action, index) => 
                    <div key={index} className={(index > 0) ? "form__action left-space" : "form__action"}>
                        {action}
                    </div>
                )}
            </div>}
        </div>
    )
}

Form.defaultProps = {
    actions: [
        <Button onClick={() => {
            console.log("Cancel")
        }}>Cancel</Button>,
        <Button type="primary" onClick={() => {
            console.log("OK")
        }}>OK</Button>
    ]
}

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node),
  actions: PropTypes.arrayOf(PropTypes.node)
}

Form.Item = Item

export default Form;