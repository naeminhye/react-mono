import React, { useState } from "react";
import {
  Form,
  Avatar,
  Button,
  Card,
  Carousel,
  DatePicker,
  Icons,
  Input,
  CheckList,
  CheckBox,
  RadioBox,
  Progress,
  RadioList,
  Uploader,
  Table,
  DropDown,
  FlipCard,
  Tooltip,
  Tag,
  Steps
} from "components";

const itemRender = data => {
  return (
    <div
      style={{
        // backgroundImage: `url('${data.src}')`,
        // backgroundSize: "cover",
        width: "100%",
        height: "fit-content",
        color: "black"
      }}
    >
      <img src={data.src} style={{ width: "100%" }} />
      <span>{data.headline}</span>
    </div>
  );
};

const slideData = [
  {
    headline: "Nike Air Force 1 '07 Essential Icon Clash",
    src:
      "https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/jrmc5yzbdqrloaat4prz/air-force-1-07-essential-icon-clash-shoe-B4HXPf.jpg"
  },
  {
    headline: "Nike Air Zoom Pegasus 36",
    src:
      "https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/rcvjuoidxcq9irtbp5rk/air-zoom-pegasus-36-running-shoe-tBZsLn.jpg"
  },
  {
    headline: "Nike P-6000 Icon Clash",
    src:
      "https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/rijdurhjtaopdca3qofp/p-6000-icon-clash-shoe-Cf06tP.jpg"
  },
  {
    headline: "Air Jordan 7 Retro",
    src:
      "https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/t4ege635ov8rjpccsrj7/air-jordan-7-retro-shoe-2XK2cz.jpg"
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
        <Avatar bordered borderStyle={{ border: '2px solid black' }} size={100} src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/57154265_371498816791175_502490940041068544_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_oc=AQkRqCuCLvlGN5IYJYCjq1iSRlnXNLGnoF99IrAKUOMnkrT5LNJs67uuzwdO8FTnkhE&_nc_ht=scontent.fsgn2-4.fna&oh=5e7186fe4a013f2075109dbf3d441d1e&oe=5EC0B145" />
        <Form.Item label="Steps">
          <Steps>
            <Steps.Step
              status="finish"
              index={1}
              title="Step 1"
              description="Description for Step 1"
            />
            <Steps.Step
              status="process"
              index={2}
              title="Step 2"
              description="Description for Step 2"
            />
            <Steps.Step
              status="error"
              index={3}
              title="Step 3"
              description="Description for Step 3"
            />
            <Steps.Step status="wait" index={4} title="GHI" description="ghi" />
          </Steps>
        </Form.Item>
        {/* <div style={{display: "flex"}}>
          <Card
            sourceImg={"https://storage.googleapis.com/proudcity/alpha/uploads/2016/10/techcrunch.jpg"}
            width={300}
            bordered={true}
            footer={<div>Footer</div>}
            bannerType="image"
            banner={{
              src:
                "https://techcrunch.com/wp-content/uploads/2020/01/GettyImages-1155946045.jpg?w=450"
            }}
          >
            <div>
              <strong>TechCrunch</strong>
              <div>‘A city where you can pilot almost anything and figure out if it’s going to work’</div>
            </div>
          </Card>
          <Card
            width={300}
            bordered={true}
            footer={<div>Footer</div>}
            bannerType="video"
            banner={{
              src:
                "https://js.freefrontend.com/img/framers-logo-animation-javascript-0196.mp4"
            }}
          >
            Hello
          </Card>
        </div> */}

        <Form.Item label="Linear Progress">
          <Progress percent={100} width={500} strokeWidth={12} />
        </Form.Item>
        <Form.Item label="Circle Progress">
          <Progress type="circle" percent={80} width={100} strokeWidth={12} />
        </Form.Item>
        <Form.Item label="Carousel">
          <Carousel
            heading="Example Slider"
            slides={slideData}
            itemWidth={320}
            itemHeight={400}
            itemMargin={10}
            itemRender={itemRender}
            activeSlideAlignment="center"
          />
        </Form.Item>
        <Form.Item label="Table">
          <Table
            selectable={true}
            dataSource={dataSource}
            columns={columns}
            bordered={false}
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
          <DatePicker value="1/22/20" format="M/D/YY" bordered={true} />
        </Form.Item>
        <Form.Item label="Input" isRequired>
          <Input placeholder="Input" bordered={true} />
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
        </Form.Item>

        <Form.Item label="Tooltip">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Tooltip title="This is Top Tooltip">
              <Tag>Top</Tag>
            </Tooltip>
            <Tooltip placement="left" title="This is Left Tooltip">
              <Tag>Left</Tag>
            </Tooltip>
            <Tooltip placement="right" title="This is Right Tooltip">
              <Tag>Right</Tag>
            </Tooltip>
            <Tooltip placement="bottom" title="This is Bottom Tooltip">
              <Tag>Bottom</Tag>
            </Tooltip>
          </div>
        </Form.Item>

        <Form.Item label="Buttons">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button>Default</Button>
            <Button type="primary">Primary</Button>
            <Button type="success">Success</Button>
            <Button type="info">Info</Button>
            <Button type="warning">Warning</Button>
            <Button type="danger">Danger</Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Example;
