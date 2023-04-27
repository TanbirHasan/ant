import React from "react";
import {Form,Input,Button} from 'antd'

export default function AntForm() {
    const handleFinish = (e) => {
        console.log(e)
    }
  return (
    <div className="w-2/4">
      <Form onFinish={handleFinish}>
        <Form.Item label="User Name" name="username" >
          <Input placeholder="User Name"></Input>
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password placeholder="Password" type="password"></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button type="primary" className="bg-orange-400" block>Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
