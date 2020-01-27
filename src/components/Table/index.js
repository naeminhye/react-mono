import React, { useState, useRef } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Table.module.scss";
import { CheckBox, Pagination, Icons } from "components";

const Table = props => {
  const {
    className,
    selectable,
    pagination,
    hover,
    title,
    columns,
    dataSource,
    bordered,
    separated,
    striped,
    width,
    sorting,
    ...others
  } = props;

  const [selectedRows, setSelectedRows] = useState([]);
  const [sortingRule, setSortingRule] = useState(null);
  const tableRef = useRef(null);

  const classes = classNames({
    [styles["mono__table"]]: true,
    [className]: className,
    [styles.bordered]: bordered,
    [styles.striped]: striped
  });

  const sortTable = (isAsc, colIndex) => {
    let table,
      rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      switchcount = 0;
    table = tableRef.current;
    switching = true;
    //Set the sorting direction to ascending:
    /*Make a loop that will continue until
      no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
        first, which contains table headers):*/
      for (i = 1; i < rows.length - 1; i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
          one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[colIndex];
        y = rows[i + 1].getElementsByTagName("TD")[colIndex];
        /*check if the two rows should switch place,
          based on the direction, asc or desc:*/
        if (isAsc) {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }

        // numerical sorting
        // if (Number(x.innerHTML) > Number(y.innerHTML)) {
        //   //if so, mark as a switch and break the loop:
        //   shouldSwitch = true;
        //   break;
        // }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
          and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount++;
      } else {
        /*If no switching has been done AND the direction is "asc",
          set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && isAsc) {
          isAsc = false;
          switching = true;
        }
      }
    }
  };

  const handleSort = colIndex => {
    // ascending === true
    // descending === false
    let sortDirection = true;
    if (sortingRule) {
      sortDirection = !sortingRule.sortDirection;
    }
    setSortingRule({
      colIndex: colIndex,
      sortDirection: sortDirection
    });
    sortTable(sortDirection, colIndex);
  };

  return (
    <div>
      <div className={styles["mono__table--container"]}>
        <table className={classes} {...others} ref={tableRef}>
          <thead className={styles["mono__table--head"]}>
            <tr>
              {selectable && (
                <th className={styles["checkbox"]}>
                  <CheckBox
                    type="checkbox"
                    halfCheck={
                      dataSource.length > selectedRows.length &&
                      selectedRows.length > 0
                    }
                    checked={dataSource.length === selectedRows.length}
                    onChange={event => {
                      let checkedAll = event.target.checked;
                      let _selectedRows = [];
                      if (checkedAll) {
                        dataSource.map((data, rowIndex) => {
                          let key = data.key || rowIndex;
                          if (_selectedRows.indexOf(key) === -1) {
                            _selectedRows.push(key);
                          }
                        });
                      }
                      setSelectedRows(_selectedRows);
                    }}
                  />
                </th>
              )}
              {columns.map((col, colIndex) => {
                let sortIcon = null;
                if (col.sortable) {
                  sortIcon = <Icons.Sort size={16} fill="gray" />;
                  if (sortingRule && sortingRule.colIndex === colIndex + 1) {
                    if (sortingRule.sortDirection) {
                      //=== "ascending"
                      sortIcon = <Icons.SortDown size={16} fill="gray" />;
                    } else {
                      // === "descending"
                      sortIcon = <Icons.SortUp size={16} fill="gray" />;
                    }
                  }
                }
                return (
                  <th key={col.key}>
                    {col.title}
                    {sortIcon && (
                      <div
                        onClick={() => handleSort(colIndex + 1)}
                        className={styles["mono__table--sort-icon"]}
                      >
                        {sortIcon}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className={styles["mono__table--body"]}>
            {dataSource.map((data, rowIndex) => {
              let keys = Object.keys(data);
              let row = [];
              columns.map(col => {
                if (keys.indexOf(col.dataIndex) !== -1) {
                  if (!col.render) {
                    row.push(
                      <td key={col.dataIndex}>{data[col.dataIndex]}</td>
                    );
                  } else {
                    row.push(
                      <td key={col.dataIndex}>
                        {col.render(data[col.dataIndex], data)}
                      </td>
                    );
                  }
                } else {
                  row.push(<td key={col.dataIndex}></td>);
                }
              });

              return (
                <tr key={`row--${data.key || rowIndex}`}>
                  {selectable && (
                    <td
                      key={`row--${data.key || rowIndex}--checkbox`}
                      className={styles["checkbox"]}
                    >
                      <CheckBox
                        type="checkbox"
                        checked={
                          data.key
                            ? selectedRows.indexOf(data.key) !== -1
                            : selectedRows.indexOf(rowIndex) !== -1
                        }
                        onChange={event => {
                          let checked = event.target.checked;
                          let key = data.key || rowIndex;
                          let _selectedRows = [...selectedRows];

                          if (checked && _selectedRows.indexOf(key) === -1) {
                            _selectedRows.push(key);
                          } else if (
                            !checked &&
                            _selectedRows.indexOf(key) !== -1
                          ) {
                            _selectedRows.splice(_selectedRows.indexOf(key), 1);
                          }

                          setSelectedRows(_selectedRows);
                        }}
                      />
                    </td>
                  )}
                  {row}
                </tr>
              );
            })}
          </tbody>
          <tfoot className={styles["mono__table--foot"]}></tfoot>
        </table>
      </div>
      <Pagination {...pagination} total={dataSource.length} />
    </div>
  );
};

Table.defaultProps = {
  separated: false,
  bordered: false,
  striped: false,
  hover: false,
  separated: false
};

Table.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataIndex: PropTypes.string,
      title: PropTypes.string.isRequired,
      key: PropTypes.string,
      render: PropTypes.func,
      sortable: PropTypes.bool
    })
  ).isRequired,
  dataSource: PropTypes.array.isRequired,
  selectable: PropTypes.bool,
  bordered: PropTypes.bool,
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  separated: PropTypes.bool,
  title: PropTypes.string,
  sorting: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      sortDirection: PropTypes.oneOf(["ascending", "descending"])
    })
  ),
  pagination: PropTypes.objectOf({
    current: PropTypes.number,
    pageSize: PropTypes.number,
    pageSizeOptions: PropTypes.array,
    total: PropTypes.number,
    onChange: PropTypes.func,
    onShowSizeChange: PropTypes.func
  })
};

export default Table;
