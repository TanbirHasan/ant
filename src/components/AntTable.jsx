import { Table } from 'antd'
import React from 'react'

export default function AntTable() {
  const data = [
    {
      name : 'Karim',
      age:32,
      address : 'France',
      key:1
    },
     {
      name : 'Modric',
      age:36,
      address : 'Croatia',
      key:2
    },
     {
      name : 'Casemiro',
      age:31,
      address : 'Brazil',
      key:3
    }
  ]

  const columns = [
    {
      title : 'Name',
      dataIndex : 'name',
      key : 'key',
      render : name => {
        return <a>{name}</a>
      }
    },
    {
      title : 'Age',
      dataIndex : 'age',
      key : 'key',
      sorter : (a,b) => a.age - b.age
    },
    {
      title : 'Address',
      dataIndex : 'address',
      key : 'key'
    },
    {
      title : 'Future Playing Status',
      
      key : 'key',
      render : payload => {
        return <p>{payload.age > 30 ? 'True' : 'False'}</p>
      }
    }

  ]
  return (
    <div>
       <Table dataSource={data} columns={columns}>

       </Table>
    </div>
  )
}
