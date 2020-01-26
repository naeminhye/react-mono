import React, { useState, useRef } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Pagination.module.scss";
import { Icons } from "components";

const Pagination = props => {
  const { className, ...others } = props;

  const classes = classNames({
    [styles["mono__pagination"]]: true,
    [className]: className
  });
  return (
    <ul className={classes} {...others}>
      <li
        title="Previous Page"
        className={classNames({
          [styles["mono__pagination--item"]]: true,
          [styles["mono__pagination--item-prev"]]: true
        })}
        aria-disabled="true"
      >
        <Icons.ArrowLeft size={18} />  

      </li>
      
      <li
        title="1"
        className={classNames({
          [styles["mono__pagination--item"]]: true,
          [styles["mono__pagination--item-active"]]: true
        })}
        tabindex="0"
      >
        <a>1</a>
      </li>
      <li
        title="2"
        className={styles["mono__pagination--item"]}
        tabindex="0"
      >
        <a>2</a>
      </li>
      <li
        title="3"
        className={styles["mono__pagination--item"]}
        tabindex="0"
      >
        <a>3</a>
      </li>
      <li
        title="4"
        className={styles["mono__pagination--item"]}
        tabindex="0"
      >
        <a>4</a>
      </li>
      <li
        title="5"
        className={styles["mono__pagination--item"]}
        tabindex="0"
      >
        <a>5</a>
      </li>
      <li
        title="Next Page"
        tabindex="0"
        className={classNames({
          [styles["mono__pagination--item"]]: true,
          [styles["mono__pagination--item-next"]]: true
        })}
        aria-disabled="false"
      >
      <Icons.ArrowRight size={18} />  
      </li>
    </ul>
  );
};

//current
// pageSize
//pageSizeOptions ['5', '10', '20', '30', '40']
export default Pagination;
