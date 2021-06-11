import React, { useCallback, useMemo, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import Icons from "../Icons";

import styles from "./styles.module.scss";

const SingleTree = ({ value, title, children, ...others }) => {
  const {
    itemClassName,
    treeViewClassName,
    childrenClassName,
    switcherClassName,
    onExpand,
    collapsedIcon,
    expandedIcon,
    selectable = false,
    selectedList = [],
    setSelectedList = () => {},
    expandedList = [],
    setExpandedList = () => {},
  } = others;

  const collapsed = useMemo(
    () => expandedList.indexOf(value) === -1,
    [expandedList, value]
  );

  const selected = useMemo(
    () => selectedList.indexOf(value) !== -1,
    [selectedList, value]
  );

  const handleExpand = useCallback(() => {
    const isExpanding = collapsed;
    // Expanding
    if (isExpanding) {
      // Add this key to expandedList
      setExpandedList([...expandedList, value]);
    }
    // Collapsing
    else {
      // Remove this key from expandedList
      setExpandedList(expandedList.filter((key) => key !== value));
    }
    onExpand && onExpand(value, isExpanding);
  }, [collapsed, expandedList, onExpand, setExpandedList, value]);

  const handleSelect = useCallback(
    (e) => {
      const isSelecting = !selected;
      const isMulti = e.metaKey || e.ctrlKey;

      // Selecting
      if (isSelecting) {
        // Add this key to selectedList
        setSelectedList(isMulti ? [...selectedList, value] : [value]);
      }
      // Deselecting
      else {
        // Remove this key from selectedList
        setSelectedList(
          isMulti ? selectedList.filter((key) => key !== value) : []
        );
      }
    },
    [selected, selectedList, setSelectedList, value]
  );

  return (
    <div
      className={classNames({
        [styles[`mono__tree`]]: true,
        [treeViewClassName]: treeViewClassName,
      })}
    >
      <div
        className={classNames({
          [styles[`mono__tree--item`]]: true,
          [itemClassName]: itemClassName,
        })}
      >
        <span
          className={classNames({
            [styles[`mono__tree--switcher`]]: true,
            [switcherClassName]: switcherClassName,
          })}
          onClick={handleExpand}
        >
          {children
            ? collapsed
              ? collapsedIcon || <Icons.ArrowRight size={8} />
              : expandedIcon || <Icons.ArrowDown size={8} />
            : null}
        </span>
        <span
          className={classNames({
            [styles[`mono__tree--item-title`]]: true,
            [styles[`mono__tree--item-title-selected`]]: selectable && selected,
          })}
          onClick={selectable ? handleSelect : children && handleExpand}
        >
          {title}
        </span>
      </div>
      {children && (
        <div
          className={classNames({
            [styles[`mono__tree--children`]]: true,
            [styles[`mono__tree--children-collapsed`]]: collapsed,
            [childrenClassName]: childrenClassName,
          })}
        >
          {collapsed
            ? null
            : children.map((node) => (
                <div key={`${node.value}--${uuidv4()}`}>
                  <SingleTree {...node} {...others} />
                </div>
              ))}
        </div>
      )}
    </div>
  );
};

const Tree = ({
  className,
  dataSource,
  defaultSelectedKeys = [],
  defaultExpandedKeys = [],
  ...others
}) => {
  const classes = classNames({
    [styles[`mono__tree`]]: true,
    [className]: className,
  });

  const [expandedList, setExpandedList] = useState(defaultExpandedKeys);
  const [selectedList, setSelectedList] = useState(defaultSelectedKeys);

  return (
    <div className={classes}>
      {dataSource.map((node) => {
        return (
          <div key={`${node.value}--${uuidv4()}`}>
            <SingleTree
              {...node}
              {...others}
              setExpandedList={setExpandedList}
              expandedList={expandedList}
              selectedList={selectedList}
              setSelectedList={setSelectedList}
            />
          </div>
        );
      })}
    </div>
  );
};
Tree.propTypes = {
  className: PropTypes.string,
};

export default Tree;
