import React from 'react';
import { Tree } from 'components';

// Sample Tree dataSource
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

const TreeExample = () => {
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

export default TreeExample;
