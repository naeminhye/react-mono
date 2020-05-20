import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import CheckBox from '../CheckBox';
import Pagination from '../Pagination';
import Icons from '../Icons';
import LoadingRows from '../LoadingRows';
import NoData from '../NoData';

const renderDefaultNoData = () => <NoData />;

const Table = (props) => {
  const {
    className,
    rowSelection,
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
    loading,
    renderNoData,
    ...others
  } = props;

  const [selectedRows, setSelectedRows] = useState([]);
  const [sortingRule, setSortingRule] = useState(null);
  const tableRef = useRef(null);

  const classes = classNames({
    [styles['mono__table']]: true,
    [className]: className,
    [styles.bordered]: bordered,
    [styles.striped]: striped,
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
        x = rows[i].getElementsByTagName('TD')[colIndex];
        y = rows[i + 1].getElementsByTagName('TD')[colIndex];
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
        if (switchcount === 0 && isAsc) {
          isAsc = false;
          switching = true;
        }
      }
    }
  };

  const handleSort = (colIndex) => {
    // ascending === true
    // descending === false
    let sortDirection = true;
    if (sortingRule) {
      sortDirection = !sortingRule.sortDirection;
    }
    setSortingRule({
      colIndex: colIndex,
      sortDirection: sortDirection,
    });
    sortTable(sortDirection, colIndex);
  };

  return (
    <>
      <div className={styles['mono__table--container']}>
        <table className={classes} {...others} ref={tableRef}>
          <thead className={styles['mono__table--head']}>
            <tr>
              {rowSelection && (
                <th className={styles['checkbox']}>
                  {/* Select/Deselect All Checkbox */}
                  <CheckBox
                    halfCheck={
                      dataSource.length > selectedRows.length &&
                      selectedRows.length > 0
                    }
                    checked={dataSource.length === selectedRows.length}
                    onChange={(event) => {
                      let checkedAll = event.target.checked;
                      let selectedRowKeys = [];
                      if (checkedAll) {
                        dataSource.map((data, rowIndex) => {
                          let key = data.key || rowIndex;
                          if (selectedRowKeys.indexOf(key) === -1) {
                            selectedRowKeys.push(key);
                          }
                          return null;
                        });
                      }
                      setSelectedRows(selectedRowKeys);
                      if (rowSelection) {
                        // Callback executed when select/deselect all rows
                        if (rowSelection.onSelectAll) {
                          rowSelection.onSelectAll(checkedAll, selectedRowKeys);
                        }
                      }
                    }}
                  />
                </th>
              )}
              {columns.map((col, colIndex) => {
                let sortIcon = null;
                if (col.sortable) {
                  sortIcon = <Icons.Sort size={16} fill="gray" />;
                  if (sortingRule && sortingRule.colIndex === colIndex) {
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
                        onClick={() => handleSort(colIndex)}
                        className={styles['mono__table--sort-icon']}
                      >
                        {sortIcon}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          {/* Check Loading Status */}
          <tbody className={styles['mono__table--body']}>
            {loading ? (
              <tr>
                <td
                  colSpan={rowSelection ? columns.length + 1 : columns.length}
                  className={styles['table-cell-loader']}
                >
                  <LoadingRows rows={5} loading={loading} />
                </td>
              </tr>
            ) : dataSource.length > 0 ? (
              dataSource.map((data, rowIndex) => {
                let keys = Object.keys(data);
                let row = [];
                columns.map((col) => {
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
                    if (!col.render) {
                      row.push(<td key={col.key}></td>);
                    } else {
                      row.push(<td key={col.key}>{col.render(null, data)}</td>);
                    }
                  }
                  return null;
                });

                return (
                  <tr key={`row--${data.key || rowIndex}`}>
                    {rowSelection && (
                      <td
                        key={`row--${data.key || rowIndex}--checkbox`}
                        className={styles['checkbox']}
                      >
                        <CheckBox
                          checked={
                            data.key
                              ? selectedRows.indexOf(data.key) !== -1
                              : selectedRows.indexOf(rowIndex) !== -1
                          }
                          onChange={(event) => {
                            let checked = event.target.checked;
                            let key = data.key || rowIndex;
                            let selectedRowKeys = [...selectedRows];

                            if (
                              checked &&
                              selectedRowKeys.indexOf(key) === -1
                            ) {
                              selectedRowKeys.push(key);
                            } else if (
                              !checked &&
                              selectedRowKeys.indexOf(key) !== -1
                            ) {
                              selectedRowKeys.splice(
                                selectedRowKeys.indexOf(key),
                                1
                              );
                            }

                            setSelectedRows(selectedRowKeys);

                            if (rowSelection) {
                              // Callback executed when select/deselect one row
                              if (rowSelection.onSelect) {
                                rowSelection.onSelect(
                                  data, // record of row data
                                  checked, // true or false
                                  selectedRowKeys,
                                  event // nativeEvent
                                );
                              }
                              // Callback executed when selected rows change
                              if (rowSelection.onChange) {
                                rowSelection.onChange(selectedRowKeys);
                              }
                            }
                          }}
                        />
                      </td>
                    )}
                    {row}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan={rowSelection ? columns.length + 1 : columns.length}
                  className={styles['table-cell-loader']}
                >
                  {renderNoData()}
                </td>
              </tr>
            )}
          </tbody>
          <tfoot className={styles['mono__table--foot']}></tfoot>
        </table>
      </div>
      {pagination && <Pagination {...pagination} total={dataSource.length} />}
    </>
  );
};

Table.defaultProps = {
  separated: false,
  bordered: false,
  striped: false,
  hover: false,
  rowSelection: null,
  pagination: null,
  loading: false,
  renderNoData: renderDefaultNoData,
};

Table.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataIndex: PropTypes.string,
      title: PropTypes.string.isRequired,
      key: PropTypes.string,
      render: PropTypes.func,
      sortable: PropTypes.bool,
    })
  ).isRequired,
  dataSource: PropTypes.array.isRequired,
  rowSelection: PropTypes.object,
  /**
   * columnWidth
   * columnTitle
   * fixed
   * getCheckboxProps
   * hideDefaultSelections
   * renderCell
   * selectedRowKeys
   * selections
   * type: checkbox | radio
   * onChange
   * onSelect: Callback executed when select/deselect one row
   * onSelectAll
   * onSelectInvert
   */
  bordered: PropTypes.bool,
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  separated: PropTypes.bool,
  title: PropTypes.string,
  sorting: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      sortDirection: PropTypes.oneOf(['ascending', 'descending']),
    })
  ),
  pagination: PropTypes.objectOf({
    current: PropTypes.number,
    pageSize: PropTypes.number,
    pageSizeOptions: PropTypes.array,
    total: PropTypes.number,
    onChange: PropTypes.func,
    onShowSizeChange: PropTypes.func,
  }),
  loading: PropTypes.bool,
  renderNoData: PropTypes.func,
};

export default Table;
