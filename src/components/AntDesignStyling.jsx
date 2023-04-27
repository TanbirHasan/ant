import { Input, Space, Typography } from "antd";
import React from "react";

const AntDesignStyling = () => {
  return (
    <div>
         <Space size={26} direction="vertical">

      <Typography.Text className="text-2xl text-[red]">
        Tutorial Ant Desing
      </Typography.Text>
     
      <Input placeholder='Type here' type="text"/>
      <Input placeholder='Type here' type="password"/>
      </Space>
    


      <div></div>
    </div>
  );
};

export default AntDesignStyling;
