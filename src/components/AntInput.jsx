import React from 'react'
import {Input} from 'antd'
import {UserOutlined} from '@ant-design/icons'

export default function AntInput() {
  return (
    <>
      <div className='w-1/4 my-5'>
        <Input placeholder='Name' maxLength={10} prefix={<UserOutlined />} allowClear >
        
        </Input>
    </div>
    <div className='w-1/4 my-5'>
        <Input.Search placeholder='Name' maxLength={10} prefix={<UserOutlined />} allowClear >
        
        </Input.Search>
    </div>
    </>
  
  )
}
