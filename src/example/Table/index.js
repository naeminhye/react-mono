import React from 'react';
import { Table, Tag, Button } from 'components';

import dataSource from './mock';

const columns = [
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name',
    sortable: true,
    align: 'center',
  },
  {
    title: 'Gender',
    key: 'gender',
    dataIndex: 'gender',
    render: (value) => (value ? <Tag>Male</Tag> : <Tag>Female</Tag>),
    align: 'center',
  },
  {
    title: 'Phone',
    key: 'phone',
    dataIndex: 'phone',
    align: 'right',
  },
  {
    title: 'Address',
    key: 'address',
    dataIndex: 'address',
  },
  {
    title: 'Email',
    key: 'email',
    dataIndex: 'email',
  },
  {
    title: 'Actions',
    key: 'actions',
    render: () => {
      return (
        <div>
          <Button
            size="xs"
            style={{ minWidth: 80, marginRight: 16 }}
            type="primary"
          >
            Edit
          </Button>
          <Button size="xs" style={{ minWidth: 80 }} type="danger">
            Delete
          </Button>
        </div>
      );
    },
  },
];

const TableExample = () => {
  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        bordered
        loading={false}
        striped
        rowSelection={{
          onChange: (selectedRowKeys) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`);
          },
          onSelect: (record, selected, selectedRows) => {
            console.log('onSelect', record, selected, selectedRows);
          },
          onSelectAll: (selected, selectedRows) => {
            console.log('onSelectAll', selected, selectedRows);
          },
        }}
        pagination={{
          current: 1,
          pageSize: 5,
          total: dataSource.length,
          onChange: (page) => {
            // console.log('onChange to', page);
          },
          onShowSizeChange: () => {},
        }}
      />
    </div>
  );
};

export default TableExample;
