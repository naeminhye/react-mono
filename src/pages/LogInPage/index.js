import React, { useState } from "react";
import { Input, Button, Card, Select, Form } from "components";

const LogInPage = props => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Card width={400}>
      <Form>
        <Form.Item label="Username">
          <Input type="text" style={{ marginBottom: 8 }} />
        </Form.Item>
        <Form.Item label="Password">
          <Input type="password" style={{ marginBottom: 8 }} />
        </Form.Item>
      </Form>
      <Button>Log In</Button>
    </Card>
  );
};

export default LogInPage;
