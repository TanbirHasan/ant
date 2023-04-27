import { Avatar, Space } from "antd";
import React from "react";
import UserOutlined from "@ant-design/icons";

const AntAvatar = () => {
  return (
    <div>
      <Space size={12} direction="vertical">
        <Avatar style={{ backgroundColor: "red", color: "black" }} />
        <Avatar style={{ backgroundColor: "green", color: "orange" }}>
          Aamir
        </Avatar>
        <Avatar shape="square" />
        <Avatar src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" />
        <Avatar icon={<UserOutlined />} />
        <Avatar.Group>
          <Avatar shape="square" style={{ backgroundColor: "purple", color: "orange" }}/>
          <Avatar src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" />
          <Avatar icon={<UserOutlined />} />
        </Avatar.Group>

        <Avatar.Group maxCount={2} maxPopoverTrigger="hover">
          <Avatar shape="square" style={{ backgroundColor: "purple", color: "orange" }}/>
          <Avatar src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" />
          <Avatar icon={<UserOutlined />} />
        </Avatar.Group>
      </Space>
    </div>
  );
};

export default AntAvatar;
