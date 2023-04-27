import React from 'react'
import {Select} from 'antd'

export default function AntSelect() {
    const fruits = ['Banana','Mango','Orange']
  return (
    <div>
        <Select mode='multiple' className='w-1/4' placeholder="Select Fruits" maxTagCount={2} allowClear>
            {
                fruits.map(f => {
                    return <Select.Option value={f} key={f}>{f}</Select.Option>
                })
            }

        </Select>
    
    </div>
  )
}
