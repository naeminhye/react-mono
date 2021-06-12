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
const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const value = `${preKey}-${i}`;
    tns.push({ title: value, value });
    if (i < y) {
      children.push(value);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);


const App = () => {
  return (
    <div>
      <Tree
        dataSource={gData}
        defaultExpandedKeys={[]}
        defaultSelectedKeys={[]}
        // selectable
        // multiple
        // checkable
      />
    </div>
  );
};

export default App;
