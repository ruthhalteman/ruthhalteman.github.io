import * as React from "react";
import { Typography, Layout } from "antd";
const { Title, Text } = Typography;

export const Home = () => {
  return (
    <Layout>
      <Title>Ruth Halteman</Title>
      <Text>
        Hi I'm a Frontend Software Developer. <br />
        <br />
        Currently this site is mostly for containing fun things that I use
        and/or want to share like tutorials I've written and caculators I've coded.
      </Text>
    </Layout>
  );
};
