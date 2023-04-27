import { DatePicker, TimePicker } from 'antd'
import React from 'react'

export default function AndDatePicker() {
  return (
    <div>
        <DatePicker picker='month' />
        {/* if need to pick data range */}
        <DatePicker.RangePicker picker='year'/>
        <TimePicker />
    </div>
  )
}
