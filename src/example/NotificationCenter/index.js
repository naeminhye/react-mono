import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { Button } from "components";

const NotificationCenter = (props) => {
  const { dataSource } = props;

  const [visible, setVisible] = useState(false);

  const displayClasses = classNames({
    [styles[`display-area`]]: true,
    [styles.visible]: visible,
  });

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className={styles.wrapper}>
      <Button.IconButton shape="circle" size="lg" onClick={toggleVisible} />
      <div className={displayClasses}>
        <div className={styles.content}>
          <ul>
            <li>notification 1</li>
            <li>notification 2</li>
            <li>notification 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotificationCenter;
