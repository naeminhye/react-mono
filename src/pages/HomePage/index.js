import React, { useState } from "react";
import {
  Form,
  Button,
  DatePicker,
  Icons,
  Input,
  CheckCard,
  RadioBox,
  Uploader,
  Table,
  DropDown
} from "components";

const transportationOptions = [
  // {
  //   label: "Ship",
  //   value: "ship",
  //   icon: <Icons.Ship size={64} />
  // },
  // {
  //   label: "Plane",
  //   value: "plane",
  //   icon: <Icons.Plane size={64} />
  // },
  {
    label: "Taxi",
    value: "taxi",
    icon: <Icons.Taxi size={64} />
  },
  {
    label: "Bus",
    value: "bus",
    icon: <Icons.Bus size={64} />
  },
  {
    label: "Train",
    value: "train",
    icon: <Icons.Train size={64} />
  }
];

const genderOptions = [
  {
    label: "Male",
    value: "male",
    icon: <Icons.Male size={64} />
  },
  {
    label: "Female",
    value: "female",
    icon: <Icons.Female size={64} />
  }
];
const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street"
  },
  {
    key: "2",
    name: "John",
    age: 42
    // address: "10 Downing Street"
  },
  {
    key: "3",
    name: "John",
    // age: 42,
    address: "10 Downing Street"
  }
];
const columns = [
  {
    dataIndex: "name",
    title: "Name",
    key: "name"
  },
  {
    dataIndex: "age",
    title: "Age",
    key: "age",
    render: (text, record) => (
      <span>
        Hello {record.name} {text}
      </span>
    )
  },
  {
    dataIndex: "address",
    title: "Address",
    key: "address"
  }
];

const dropdownOptions = [
  {
    value: "option-1",
    label: "Option 1"
  },
  {
    value: "option-2",
    label: "Option 2"
  },
  {
    value: "option-3",
    label: "Option 3"
  },
  {
    value: "option-4",
    label: "Option 4"
  },
  {
    value: "option-5",
    label: "Option 5"
  },
  {
    value: "option-6",
    label: "Option 6"
  },
  {
    value: "option-7",
    label: "Option 7"
  },
  {
    value: "option-8",
    label: "Option 8"
  },
  {
    value: "option-9",
    label: "Option 9"
  },
  {
    value: "option-10",
    label: "Option 11"
  }
];

const HomePage = props => {
  return (
    <div>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
      <Form title="Form Title" border>
        <Form.Item label="Table">
          <Table
            selectable={true}
            dataSource={dataSource}
            columns={columns}
            bordered={true}
            striped={true}
            hover={true}
          />
        </Form.Item>
        <Form.Item label="Dropdown">
          <DropDown
            options={dropdownOptions}
            value="option-2"
            onChange={value => {
              console.log("select", value);
            }}
          />
        </Form.Item>
        <Form.Item label="Date">
          <DatePicker value="1/22/20" format="M/D/YY" />
        </Form.Item>
        <Form.Item label="Input" isRequired>
          <Input placeholder="Input" />
        </Form.Item>
        <Form.Item label="Transportation">
          <CheckCard options={transportationOptions} />
        </Form.Item>
        <Form.Item label="Gender">
          <RadioBox options={genderOptions} />
        </Form.Item>
        <Form.Item label="Upload File">
          <Uploader />
        </Form.Item>
      </Form>
    </div>
  );
};
export default HomePage;
