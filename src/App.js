import React from "react";
import { Tree } from "components";

// Sample Tree dataSource
const dataSource = [
  {
    value: "1",
    title: "Tree Item 1",
    children: [
      {
        value: "1-1",
        title: "Tree Item 1-1",
      },
      {
        value: "1-2",
        title: "Tree Item 1-2",
        children: [
          {
            value: "1-2-1",
            title: "Tree Item 1-2-1",
          },
        ],
      },
    ],
  },
  {
    value: "2",
    title: "Tree Item 2",
    children: [
      {
        value: "2-1",
        title: "Tree Item 2-1",
      },
      {
        value: "2-2",
        title: "Tree Item 2-2",
      },
    ],
  },
  {
    value: "3",
    title: "Tree Item 3",
  },
  {
    value: "4",
    title: "Tree Item 4",
  },
  {
    value: "5",
    title: "Tree Item 5",
  },
];

const App = () => {
  return (
    <div>
      <Tree
        dataSource={dataSource}
        defaultExpandedKeys={["1"]}
        defaultSelectedKeys={["1"]}
        selectable
        multiple
      />
    </div>
  );
};

export default App;
