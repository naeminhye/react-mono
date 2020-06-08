import React, { useState, useEffect } from 'react';
import { Table, Tag, Button, Tabs } from 'components';

// import data from './mock/userData';

const columns = [
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name',
    sortable: true,
  },
  {
    title: 'Gender',
    key: 'gender',
    dataIndex: 'gender',
    render: (value) => (value ? <Tag>Male</Tag> : <Tag>Female</Tag>),
  },
  {
    title: 'Phone',
    key: 'phone',
    dataIndex: 'phone',
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

const tabs = [
  {
    label: 'Tab 1',
    content: (
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
        <br />
        <br />
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </div>
    ),
    disabled: false,
  },
  {
    label: 'Tab 2',
    content: (
      <div>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
        <br />
        <br />
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      </div>
    ),
    disabled: false,
  },
];

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://5ebf941f00eabe0016fa3bfc.mockapi.io/api/v1/users')
      .then(function (response) {
        if (response.status !== 200) {
          console.log(
            'Looks like there was a problem. Status Code: ' + response.status
          );
          return;
        }

        // Examine the text in the response
        response.json().then(function (data) {
          setDataSource(data);
          setLoading(false);
        });
      })
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  }, []);

  return (
    <div>
      {/* <Button
        shape="round"
        size="xs"
        onClick={() => {
          setVisible(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        roundCornered
        title="Modal Example"
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      >
        Hello
      </Modal>
      <Breadcrumb></Breadcrumb>
      <Editor placeholder="Edit" textAlignment="center" />*/}
      <Tabs
        // direction="vertical"
        roundCornered
        bordered
        activeIndex={activeIndex}
        onChange={(activeIndex) => {
          setActiveIndex(activeIndex);
        }}
        tabs={tabs}
      />
      <Table
        columns={columns}
        dataSource={dataSource}
        bordered
        loading={loading}
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

export default App;
