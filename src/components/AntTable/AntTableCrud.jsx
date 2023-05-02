import { Button, Table, Modal, Input } from "antd";
import React, { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export default function AntTableCrud() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState();
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "John",
      email: "john@gmail.com",
      address: "USA",
    },
    {
      id: 2,
      name: "Mark",
      email: "mark@gmail.com",
      address: "Canada",
    },
    {
      id: 3,
      name: "Sherik",
      email: "sherik@gmail.com",
      address: "Polan",
    },
    {
      id: 4,
      name: "Marcelo",
      email: "marcelo@gmail.com",
      address: "Brazil",
    },
    {
      id: 5,
      name: "Wick",
      email: "wick@gmail.com",
      address: "Montana",
    },
    {
      id: 6,
      name: "Cruise",
      email: "cruise@gmail.com",
      address: "Germany",
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Address",
      dataIndex: "address",
    },
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined onClick={() => editStudentInfo(record)} />
            <DeleteOutlined
              style={{ color: "red" }}
              onClick={() => onDelete(record)}
            />
          </>
        );
      },
    },
  ];

  const onDelete = (record) => {
    Modal.confirm({
      title: "Are you sure?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id != record.id);
        });
      },
    });
  };

  const onAddStudent = () => {
    const randomNumber = parseInt(Math.random() * 100);
    const newStudent = {
      id: randomNumber,
      name: "Name" + randomNumber,
      email: "email" + randomNumber,
      address: "address" + randomNumber,
    };
    setDataSource((pre) => {
      return [...pre, newStudent];
    });
  };

  const editStudentInfo = (record) => {
    setIsEditing(true);
    setEditingStudent({
      ...record,
    });
  };

  const resetEditing = () => {
    setIsEditing(false)
    setEditingStudent(null)
  }

  return (
    <div>
      <Button onClick={onAddStudent}>Add a new Student</Button>
      <Table columns={columns} dataSource={dataSource}></Table>
      <Modal
        title="Edit Student"
        visible={isEditing}
        onCancel={() => {
            resetEditing();
        }}
        onOk={() => {
            setDataSource(pre => {
                return pre.map(student => {
                    if(student.id === editingStudent.id){
                        return editingStudent
                    }
                    else{
                        return student
                    }
                })
            })
            resetEditing();
        }}
        okText="Save"
      >
        <Input
          value={editingStudent?.name}
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, name: e.target.value };
            });
          }}
        />
        <Input
          value={editingStudent?.email}
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, email: e.target.value };
            });
          }}
        />
        <Input
          value={editingStudent?.address}
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, address: e.target.value };
            });
          }}
        />
      </Modal>
    </div>
  );
}
