import { Table } from "antd";
import React, { useEffect, useState } from "react";

export default function AntTablePa() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page,setPage] = useState(1)
  const [pageSize,setPageSize] = useState(13)

  useEffect(() => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false)
      })
  }, []);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "User ID",
      dataIndex: "userId",
      sorter : (a,b) => {
        return a.userId - b.userId
      }
    },
    {
      key: "3",
      title: "status",
      dataIndex: "completed",
      render: (completed) => {
        return <p>{completed ? "Complete" : "In Progress"}</p>;
      },
      filters : [
        {text : 'Complete', value:true},
        {text: 'In Progress',value:false}
      ],
      onFilter : (value,record) => {
       return  record.completed === value
      }
    },
  ];
  return <div>

    {/* 
        we can also set pageSize , current page  pagination={{
        current : page,
        pageSize : pageSize,
        total : 50
        onChange : (page,pageSize) => {
        setPage(page);
        setPageSize(pageSize)
        // Make the Api call here for fetching data according to page

     },
        

     }},
   
    */}
    <Table loading={loading} columns={columns} dataSource={data} pagination={true}
   
    >

    </Table>
  </div>;
}
