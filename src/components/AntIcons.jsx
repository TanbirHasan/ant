import React from "react";
import Icon,{
  AndroidOutlined,
  AppleOutlined,
  LoadingOutlined,
  PieChartOutlined,
  TwitterOutlined 
} from "@ant-design/icons";
import { Button } from "antd";

export default function AntIcons() {
  const HeartIcon = (props) => {
    return (
      <Icon
        component={() => {
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          );
        }}
        {...props}
      />
    );
  };
  return (
    <div>
      <AndroidOutlined style={{ color: "green", fontSize: 100 }} />
      <AppleOutlined style={{ color: "blue", fontSize: 100 }} />
      <LoadingOutlined spin style={{ color: "red", fontSize: 100 }} />
      <PieChartOutlined rotate={45} style={{ color: "teal",fontSize: 100  }} />
      <HeartIcon style={{ color: "red", fontSize: 100 }}/>

      <Button icon={<TwitterOutlined style={{color:'skyblue',fontSize:20}}/>} >Twitter Here</Button>
    </div>
  );
}
