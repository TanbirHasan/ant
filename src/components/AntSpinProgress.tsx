import { Button, Progress, Spin } from 'antd'
import React, { useState } from 'react'

export default function AntSpinProgress() {
    const [loading,setLoading] = useState(false)
    const handleClick = () => {
          setLoading(p => !p)
    }
  return (
    <div>
        <Spin spinning={loading}></Spin>
        <Progress percent={33}/>
        <Progress percent={33} type='circle' status='success'/>
        <Progress percent={33} type='line' strokeColor='red' status='active'/>
        <Progress percent={33} type='line' strokeColor='red' strokeWidth={50} steps={3}/>
        <Progress percent={33} type='circle'  status='exception'/>
        <Button type='primary' onClick={handleClick}>Toggle</Button>
    </div>
  )
}
