import * as React from "react";
import { Typography, Layout } from "antd";
const { Title } = Typography;
const { Content } = Layout;

export const Home = () => {
  return (
    <Content
      style={{
        padding: "0 48px",
      }}
    >
      <Title>Hi it's Ruth</Title>
    </Content>
  );
};
