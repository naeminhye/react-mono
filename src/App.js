import React from "react";
import { Table } from "components";

import data from "./mock/userData";

const columns = [
  {
    title: "Name",
    key: "name",
    dataIndex: "name",
  },
  {
    title: "Gender",
    key: "gender",
    dataIndex: "gender",
  },
  {
    title: "Phone",
    key: "phone",
    dataIndex: "phone",
  },
  {
    title: "Address",
    key: "add",
    dataIndex: "add",
    sortable: true,
  },
  {
    title: "Email",
    key: "email",
    dataIndex: "email",
    sortable: true,
  },
];

const App = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data.user} bordered />
    </div>
  );
};

export default App;
