import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types'; 
import Item from './Item';
import "./Form.scss";

const Form = (props) => {
    
    const { children, className, ...others } = props;
  
    const classes = classNames({
        form: true,
        className: className || ""
    });

    return (
        <form className={classes} {...others}>
            {children}
        </form>
    )
}

Form.defaultProps = {
}

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node),
}

Form.Item = Item

export default Form;
// export {
//     Item
// }