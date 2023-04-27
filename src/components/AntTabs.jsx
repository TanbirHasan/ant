import { Tabs } from "antd";
import React, { useRef, useState } from "react";
import {
  DownCircleOutlined,
  RightCircleOutlined,
  LeftCircleOutlined,
} from "@ant-design/icons";
const AntTabs = () => {
  const nextTabIndex = useRef(3);

  const [tabsList, setTabsList] = useState([
    {
      tab: "Tab 1",
      key: "tab1",
    },
    {
      tab: "Tab 2",
      key: "tab2",
    },
  ]);

  const onEdit = (tabKey, action) => {
    if (action === "add") {
      setTabsList((pre) => [
        ...pre,
        {
          tab: `Tab ${nextTabIndex.current}`,
          key: `tab ${nextTabIndex.current}`,
        },
      ]);
      nextTabIndex.current += 1
    }
    else if(action === "remove"){
        setTabsList(pre => [...pre.filter(tab => tab.key !== tabKey)])


    }
  };
  return (
    <div>
      <div>
        <Tabs defaultActiveKey="tab1">
          <Tabs.TabPane tab="Tab 1" key="tab1">
            <div>This is content of Tab 1</div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 2" key="tab2">
            <div>This is content of Tab 2</div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 3" key="tab3">
            <div>This is content of Tab 3</div>
          </Tabs.TabPane>
        </Tabs>
      </div>

      {/* Tab on left */}

      <div>
        <Tabs defaultActiveKey="tab1" tabPosition="left">
          <Tabs.TabPane tab="Tab 1" key="tab1">
            <div>This is content of Tab 1</div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 2" key="tab2">
            <div>This is content of Tab 2</div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 3" key="tab3">
            <div>This is content of Tab 3</div>
          </Tabs.TabPane>
        </Tabs>
      </div>

      {/* Tab with icon */}

      <div className="m-5">
        <Tabs defaultActiveKey="tab1" tabPosition="top">
          <Tabs.TabPane
            tab={
              <span>
                <DownCircleOutlined />
                Tab 1
              </span>
            }
            key="tab1"
          >
            <div>This is content of Tab 1</div>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <span>
                <LeftCircleOutlined />
                Tab 2
              </span>
            }
            key="tab2"
          >
            <div>This is content of Tab 2</div>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <span>
                <RightCircleOutlined />
                Tab 3
              </span>
            }
            key="tab3"
            disabled
          >
            <div>This is content of Tab 3</div>
          </Tabs.TabPane>
        </Tabs>
      </div>

      {/* Tabs with add and delete opition */}

      <div>
        <Tabs defaultActiveKey="tab1" type="editable-card" onEdit={onEdit} >
          {tabsList.map((tabinfo, index) => {
            return (
              <Tabs.TabPane closable={index > 1} tab={`Tab ${tabinfo.tab}`} key={index}>
                <div>This is a content of ${tabinfo.key}</div>
              </Tabs.TabPane>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default AntTabs;
