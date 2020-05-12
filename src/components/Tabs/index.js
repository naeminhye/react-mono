import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Tabs = (props) => {
  const { className, direction, activeIndex, tabs, onChange, bordered } = props;

  const classes = classNames({
    [styles[`mono__tabs`]]: true,
    [styles[`mono__tabs--${direction}`]]: direction !== "horizontal",
    [styles[`mono__tabs--bordered`]]: bordered,
    [className]: className,
  });

  const disabledTabsList = () => {
    return tabs.map((e) => (e.disabled ? e.label : null));
  };

  const isTabDisabled = (index) => {
    const disabled = disabledTabsList();
    const tab = tabs[index];
    return disabled.includes(tab.label);
  };

  const onClick = (i) => {
    const isDisabled = isTabDisabled(i);
    if (!isDisabled) {
      onChange(i);
    }
  };

  //Get the list of tab
  const generateTabsHeading = () => {
    const isDisabled = isTabDisabled(activeIndex);
    const disabled = disabledTabsList();

    return tabs.map((e, i) => {
      return (
        <div
          key={e.label}
          onClick={() => onClick(i)}
          className={classNames(styles["mono__tabs--heading-tab"], {
            [styles.active]: activeIndex === i && !isDisabled,
            [styles.disabled]: disabled.includes(e.label),
          })}
        >
          {e.label}
        </div>
      );
    });
  };

  //Get the content of only active tab
  const getActiveTab = () => {
    const disabled = isTabDisabled(activeIndex);

    if (activeIndex > tabs.length || disabled) {
      return null;
    }

    const content = tabs[activeIndex] && tabs[activeIndex].content;
    return <div className={styles.content}>{content}</div>;
  };

  return (
    <div className={classes}>
      <div className={styles["mono__tabs--heading"]}>
        {generateTabsHeading()}
      </div>
      <div className={styles["mono__tabs--contents"]}>{getActiveTab()}</div>
    </div>
  );
};

Tabs.propTypes = {
  className: PropTypes.string,
  activeIndex: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
      disabled: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  direction: PropTypes.oneOf(["vertical", "horizontal"]),
  bordered: PropTypes.bool,
};

Tabs.defaultProps = {
  activeIndex: 0,
  direction: "horizontal",
  bordered: false,
};

export default Tabs;
