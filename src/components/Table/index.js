import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { CheckBox } from 'components'

const Table = props => {
  const {
    className,
    selectable,
    hover,
    title,
    columns,
    dataSource,
    bordered,
    separated,
    striped,
    width,
    ...others
  } = props;

  const [selectedRows, setSelectedRows] = useState([]);

  const classes = classNames({
    mono__table: true,
    [className]: className,
    bordered: bordered,
    striped: striped
  });

  return (
    <div>
      {title && <div>{title}</div>}
      <table className={classes} {...others}>
        <thead className="mono__table--head">
          <tr>
            {selectable && (
              <th className="checkbox">
                <CheckBox type="checkbox" 
                  checked={dataSource.length === selectedRows.length}
                    onChange={event => {
                        let checkedAll = event.target.checked;
                        let _selectedRows = [];
                        if(checkedAll) {
                            dataSource.map((data, rowIndex) => {
                                let key = data.key || rowIndex;
                                if(_selectedRows.indexOf(key) === -1) {
                                    _selectedRows.push(key);
                                }
                            })
                        }
                        setSelectedRows(_selectedRows);
                    }}
                />
              </th>
            )}
            {columns.map(col => (
              <th key={col.key}>{col.title}</th>
            ))}
          </tr>
        </thead>
        <tbody className="mono__table--body">
          {dataSource.map((data, rowIndex) => {
            let keys = Object.keys(data);
            let row = [];
            columns.map(col => {
              if (keys.indexOf(col.dataIndex) !== -1) {
                if (!col.render) {
                  row.push(<td key={col.dataIndex}>{data[col.dataIndex]}</td>);
                } else {
                  row.push(<td>{col.render(data[col.dataIndex], data)}</td>);
                }
              } else {
                row.push(<td></td>);
              }
            });

            return (
              <tr key={`row--${data.key || rowIndex}`}>
                {selectable && (
                  <td
                    key={`row--${data.key || rowIndex}--checkbox`}
                    className="checkbox"
                  >
                    <CheckBox
                      type="checkbox"
                      checked={data.key ? (selectedRows.indexOf(data.key) !== -1) : (selectedRows.indexOf(rowIndex) !== -1)}
                      onChange={event => {
                        let checked = event.target.checked;
                        let key = data.key || rowIndex;
                        let _selectedRows = [...selectedRows];

                        if (checked && _selectedRows.indexOf(key) === -1) {
                          _selectedRows.push(key);
                        } 
                        else if (!checked && _selectedRows.indexOf(key) !== -1) {
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
        <tfoot className="mono__table--foot"></tfoot>
      </table>
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
      render: PropTypes.func
    })
  ).isRequired,
  dataSource: PropTypes.array.isRequired,
  selectable: PropTypes.bool,
  bordered: PropTypes.bool,
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  separated: PropTypes.bool,
  title: PropTypes.string
};

export default Table;
