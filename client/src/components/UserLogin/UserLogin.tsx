import { Avatar, Button, Card, Form, Input } from "antd";
import "./UserLogin.css";
import { UserLoginProps } from "./UserLogin.types";

export const UserLogin = (props: UserLoginProps) => {
  const { onSubmit } = props;

  const onFormSubmit = (email: string, password: string) => {
    onSubmit(email, password);
  };

  return (
    <div>
      <Card className="userlogin-card">
        <Form
          layout="vertical"
          onFinish={(values) => {
            onFormSubmit(values.email, values.password);
          }}
        >
          <div>
            <Avatar
              className="userlogin-avatar"
              size={"large"}
              src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
            />
          </div>
          <Form.Item label="Email" name={"email"}>
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item label="Password" name={"password"}>
            <Input placeholder="Enter your password" type="password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
