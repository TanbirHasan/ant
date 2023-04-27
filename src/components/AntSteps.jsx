import { Divider, Steps } from "antd";
import React, { useState } from "react";

const AntSteps = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div>
      <Steps current={0}>
        <Steps.Step title="Finished"></Steps.Step>
        <Steps.Step title="In Progress"></Steps.Step>
        <Steps.Step title="Waiting"></Steps.Step>
      </Steps>
      <Divider />

      <div>
        <Steps
          current={current}
          labelPlacement="vertical"
          onChange={(c) => setCurrent(c)}
        >
          <Steps.Step title="Finished"></Steps.Step>
          <Steps.Step title="In Progress"></Steps.Step>
          <Steps.Step title="Waiting"></Steps.Step>
        </Steps>
      </div>
      <Divider />

      <div>
        <Steps current={1} progressDot={true}>
          <Steps.Step title="Finished"></Steps.Step>
          <Steps.Step title="In Progress"></Steps.Step>
          <Steps.Step title="Waiting"></Steps.Step>
        </Steps>
      </div>

      <Divider />

      <div>
        <Steps current={1} percent={30} status="error">
          <Steps.Step title="Finished"></Steps.Step>
          <Steps.Step title="In Progress" subTitle="2 minites "></Steps.Step>
          <Steps.Step title="Waiting" ></Steps.Step>
        </Steps>
      </div>

      <Divider />

<div>
  <Steps current={1} direction="vertical">
    <Steps.Step title="Finished"></Steps.Step>
    <Steps.Step title="In Progress" subTitle="2 minites "></Steps.Step>
    <Steps.Step title="Waiting"></Steps.Step>
  </Steps>
</div>
    </div>
  );
};

export default AntSteps;
