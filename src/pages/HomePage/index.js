import React, { useState } from "react";
import {
  Form,
  Button,
  DatePicker,
  Icons,
  Input,
  CheckList,
  CheckBox,
  RadioBox,
  RadioList,
  Uploader,
  Table,
  DropDown,
  Tag
} from "components";

const transportationOptions = [
  {
    label: "Ship",
    value: "ship",
    icon: <Icons.Ship size={64} />
  },
  {
    label: "Plane",
    value: "plane",
    icon: <Icons.Plane size={64} />
  },
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
    id: 1,
    first_name: "Gorden",
    last_name: "Sackes",
    email: "gsackes0@google.it",
    gender: "Male",
    city: "Muhur"
  },
  {
    id: 2,
    first_name: "Lacy",
    last_name: "Ochterlony",
    email: "lochterlony1@hostgator.com",
    gender: "Female",
    city: "Dieppe"
  },
  {
    id: 3,
    first_name: "Inga",
    last_name: "Atto",
    email: "iatto2@nature.com",
    gender: "Female",
    city: "Huangshan"
  },
  {
    id: 4,
    first_name: "Marlie",
    last_name: "Domesday",
    email: "mdomesday3@diigo.com",
    gender: "Female",
    city: "Kaduy"
  },
  {
    id: 5,
    first_name: "Fanechka",
    last_name: "Benbrick",
    email: "fbenbrick4@ning.com",
    gender: "Female",
    city: "Zhvanets"
  },
  {
    id: 6,
    first_name: "Wallache",
    last_name: "Killingback",
    email: "wkillingback5@cnbc.com",
    gender: "Male",
    city: "Ramat Yishay"
  },
  {
    id: 7,
    first_name: "Robinson",
    last_name: "Meynell",
    email: "rmeynell6@g.co",
    gender: "Male",
    city: "Bihoro"
  },
  {
    id: 8,
    first_name: "Merla",
    last_name: "Driver",
    email: "mdriver7@lulu.com",
    gender: "Female",
    city: "Mingora"
  },
  {
    id: 9,
    first_name: "Carlen",
    last_name: "Lougheed",
    email: "clougheed8@bizjournals.com",
    gender: "Female",
    city: "Xishaqiao"
  },
  {
    id: 10,
    first_name: "Arliene",
    last_name: "Oats",
    email: "aoats9@edublogs.org",
    gender: "Female",
    city: "Bajiazi"
  }
];

const columns = [
  {
    dataIndex: "first_name",
    title: "First Name",
    key: "first_name",
    render: (text, record) => <strong>{text}</strong>,
    sortable: true
  },
  {
    dataIndex: "last_name",
    title: "Last Name",
    key: "last_name",
    sortable: true
  },
  {
    dataIndex: "email",
    title: "Email",
    key: "email",
    sortable: true
  },
  {
    dataIndex: "gender",
    title: "Gender",
    key: "gender",
    render: text => <Tag>{text}</Tag>
  },
  {
    dataIndex: "city",
    title: "City",
    key: "city",
    sortable: true
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
          <CheckList options={transportationOptions} />
        </Form.Item>
        <Form.Item label="Transportation">
          <CheckList options={transportationOptions} type="grid" />
        </Form.Item>
        <Form.Item label="Gender">
          <RadioList options={genderOptions} />
        </Form.Item>
        <Form.Item label="Gender">
          <RadioList options={genderOptions} type="grid" />
        </Form.Item>
        <Form.Item label="Upload File">
          <Uploader />
        </Form.Item>
      </Form>
    </div>
  );
};
export default HomePage;
