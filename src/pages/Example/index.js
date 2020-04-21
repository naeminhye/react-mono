import React, { useState } from "react";
import {
  Form,
  Avatar,
  Button,
  Card,
  DatePicker,
  Icons,
  Input,
  CheckList,
  Progress,
  RadioList,
  Uploader,
  Overlay,
} from "components";

const transportationOptions = [
  {
    label: "Ship",
    value: "ship",
    icon: <Icons.Ship size={64} />,
  },
  {
    label: "Plane",
    value: "plane",
    icon: <Icons.Plane size={64} />,
  },
  {
    label: "Taxi",
    value: "taxi",
    icon: <Icons.Taxi size={64} />,
  },
  {
    label: "Bus",
    value: "bus",
    icon: <Icons.Bus size={64} />,
  },
  {
    label: "Train",
    value: "train",
    icon: <Icons.Train size={64} />,
  },
];

const genderOptions = [
  {
    label: "Male",
    value: "male",
    icon: <Icons.Male size={64} />,
  },
  {
    label: "Female",
    value: "female",
    icon: <Icons.Female size={64} />,
  },
];

const Example = (props) => {
  return (
    <div>
      <Form title="Form Title" border>
      <Overlay
        dim={0.5}
        content={<div>Hello</div>}
        placement="right"
        visible={true}
      >
        <img
          src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg"
          width="300"
          height="200"
          alt=""
        />
      </Overlay>
      <Button>Disabled</Button>
        <Form.Item label="Input" isRequired>
          <Input disabled placeholder="Input" bordered={true} />
        </Form.Item>
        <Form.Item label="Upload File">
          <Uploader multiple={true} />
        </Form.Item>
      </Form>
    </div>
  );
};
export default Example;
