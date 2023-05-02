import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
import React from "react";

export default function AntFormwithValidation() {
  return (
    <>
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 14 }}
        autoComplete="off"
        onFinish={(values) => {console.log(values)}}
      >
        <Form.Item
          name="fullName"
          label="Full Name"
          rules={[
            {
              required: true,
              message: "Please Enter your name",
            },
            {
              whitespace: true,
            },
            {
              min: 3,
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Type your Fullname" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please Enter your email",
            },
            {
              type: "email",
              message: "Please enter a valid email",
            },
          ]}
        >
          <Input placeholder="Type your Email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
            },
            {
                min : 6
            },
            {
                validator : (_,value) => value && value.includes('A') ? Promise.resolve : Promise.reject('Password does not match the criteria')
            }
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Type your Password" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={['password']}
          rules={[
            {
              required: true,
            },
            ({getFieldValue}) => ({
                validator(_,value){
                    if(!value || getFieldValue('password') === value){
                        return Promise.resolve()
                    }
                    return Promise.reject('The two password didnt matched')

                }
            })
            
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>
        <Form.Item name="gender" label="Gender" requiredMark="optional">
          <Select placeholder="Select your gender">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="dob" label="Date of Birth" rules={[
            {required : true}
        ]}>
          <DatePicker
            style={{ width: "100%" }}
            picker="date"
            placeholder="Choose Date of Birth"
          />
        </Form.Item>
        <Form.Item name="website" label="Website" rules={[
            {
                required : true
            },
            {
                type : "url",message:"Please enter a valid url"
            }
        ]}>
          <Input placeholder="Type your Website" />
        </Form.Item>
        <Form.Item name="agreement" wrapperCol={{ span: 14 }} valuePropName="checked" rules={[
             {
                validator : (_,value) => value  ? Promise.resolve : Promise.reject('To proceed, you need to accept the Terms and Conditions')
            }
        ]}>
          <Checkbox>
            Agree to our <a href="#">Terms and Conditions</a>
          </Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 14 }}>
          <Button type="primary" color="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
