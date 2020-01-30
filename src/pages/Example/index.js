import React, { useState } from "react";
import {
  Form,
  Button,
  Carousel,
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
  FlipCard,
  Tag
} from "components";

const itemRender = data => {
  return (
    <div
      style={{
        backgroundImage: `url('${data.src}')`,
        backgroundSize: "cover",
        width: "100%",
        height: "100%"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          WebkitTextFillColor: "white",
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "black",
          fontFamily: "Montserrat, Arial",
          fontSize: "24px",
          fontWeight: 900
        }}
      >
        {data.headline}
      </div>
    </div>
  );
};

const slideData = [
  {
    headline: "Focus On The Writing",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg"
  },
  {
    headline: "New Fashion Apparel",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg"
  },
  {
    headline: "In The Wilderness",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg"
  },
  {
    headline: "For Your Current Mood",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg"
  },
  {
    headline: "Focus On The Writing",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg"
  }
];

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

const Example = props => {
  return (
    <div>
      <Form title="Form Title" border>
        <Form.Item label="Carousel">
          <Carousel
            heading="Example Slider"
            slides={slideData}
            itemWidth={320}
            itemMargin={10}
            itemRender={itemRender}
            activeSlideAlignment="center"
          />
        </Form.Item>
        {/* <Form.Item label="Table">
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
          <Uploader multiple={true} />
        </Form.Item>
        <Form.Item label="Flip Card">
          <FlipCard
            clickable={true}
            front={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  WebkitTextFillColor: "white",
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "black",
                  fontFamily: "Montserrat, Arial",
                  fontSize: "64px",
                  fontWeight: 900
                }}
              >
                Front
              </div>
            }
            back={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  WebkitTextFillColor: "white",
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "black",
                  fontFamily: "Montserrat, Arial",
                  fontSize: "64px",
                  fontWeight: 900
                }}
              >
                Back
              </div>
            }
          />
        </Form.Item> */}
      </Form>
    </div>
  );
};
export default Example;
