import { Button } from 'antd'
import React, { useState } from 'react'
import {PoweroffOutlined} from '@ant-design/icons'

export default function AntButton() {
    const [loading,setLoading] = useState(false)

    const handleClick = () => {
        console.log('click')
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },3000)
    }
  return (
    <div>
        <Button type='primary' icon={<PoweroffOutlined />}  loading={loading} onClick={handleClick} className='flex items-center bg-orange-400'>My First Button</Button>
    </div>
  )
}
