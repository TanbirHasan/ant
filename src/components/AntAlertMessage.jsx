import React from "react";
import {Form,Input,Button,message, Alert} from 'antd'

export default function AntAlertMessage() {
    const [loginSuccess,setLoginSuccess] = useState(false)
    const handleFinish = (e) => {
        console.log(e)
        setTimeout(() => {
            setLoginSuccess(true)
            message.success('Form submitted successfully')
          //  message.error('Form submission failed') message.warning
        },2000)
    }
  return (
    <div className="w-2/4">
        {
            loginSuccess && <Alert type='success' description='form submitted successfully' closable/>
        }
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
