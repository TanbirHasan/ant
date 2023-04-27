import { Table, Tag } from "antd";
import React, { useState } from "react";

export default function AntRowsCustomSelection() {
  const [alreadySelected,setAlreadySelected] = useState(['1','4'])
  const columns = [
    {
      title: "Students ID",
      dataIndex: "id",
    },
    {
      title: "Students Name",
      dataIndex: "name",
    },
    {
      title: "Students GRADE",
      dataIndex: "grade",
      render : (tag) => {
        const color = tag.includes('A') ? 'Green' : tag.includes('B')? "blue" : "red"
        return <Tag color={color} key={tag}>{tag}</Tag>
      }
    },
  ];

  const dataSource = [
    {
      key: "1",
      id: 1,
      name: "Student Name 1",
      grade: "A+",
    },
    {
      key: "2",
      id: 2,
      name: "Student Name 2",
      grade: "A",
    },
    {
      key: "3",
      id: 3,
      name: "Student Name 3",
      grade: "A-",
    },
    {
      key: "4",
      id: 4,
      name: "Student Name 4",
      grade: "B",
    },
    {
      key: "5",
      id: 5,
      name: "Student Name 5",
      grade: "C",
    },
  ];
  return (

    // rowSelection = {{type : 'radio'}}, onSelect : (record) => {console.log(record)}

    <div>
      <Table columns={columns} dataSource={dataSource} 
      rowSelection={{type : 'checkbox',
      onSelect:(record) =>{ console.log(record)},
      selectedRowKeys : alreadySelected,
      onChange : (keys) => {
        setAlreadySelected(keys)
      },
      getCheckboxProps: (record) => ({
        disabled:record.grade === 'C'
      }),
      //hideSelectAll:true,
      selections : [
        Table.SELECTION_NONE,
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        {
          key : 'even',
          text : 'Select Even Rows',
          onSelect : (allKyes) => {
            const selectedRows = allKyes.filter(key => {
              return key % 2 == 0
            })
            setAlreadySelected(selectedRows)
          }
        },
        {
          key : 'excellent',
          text : 'Select Students with Good Marks',
          onSelect : (allKeys) => {
            const selectedKeys = allKeys.filter(key => {
              const isExcellent = dataSource.find(student => {
                return key == student.key && student.grade.includes('A')
              })
              return isExcellent
            })
            setAlreadySelected(selectedKeys)
           
          }
        },
      ]
    }
    
    }
      
      >

      </Table>
    </div>
  );
}
