import * as React from "react";
import { Card, Layout, Typography } from "antd";
const { Title } = Typography;

export const Projects = () => {
  return (
    <Layout style={{paddingBottom: 20}}>
      <Title level={2}>Personal</Title>
      <Card
        title="Fabric Shopping Helper"
        bordered="true"
        extra={
          <a
            href="https://chromewebstore.google.com/detail/fabric-shopping-helper/lngkgaoceolbopcjbbnedbfongaldodc"
            target="_blank"
            rel="noreferrer"
          >
            Chrome Web Store Page
          </a>
        }
      >
        <p>
          A fun little project inspired by difficulties deciding on fabric to
          buy online
        </p>
      </Card>
      <Title level={2}>Collaborative</Title>
      <Title level={3}>Open Source</Title>
      <Card
        title="InboxSDK"
        bordered="true"
        extra={
          <a href="https://www.inboxsdk.com/" target="_blank" rel="noreferrer">
            Website
          </a>
        }
      >
        <p>
          A high level Javascript library used to easily build browser
          extensions that interact with Gmail. Some features I've added:
        </p>
        <ul>
          <li>
            Add a second popover next to gmail's on link focus while composing
          </li>
          <li>
            Add your own button to the button group on the right side of the
            thread view subject line
          </li>
          <li>
            Add your own button to the row of buttons at the bottom of a thread
            view
          </li>
        </ul>
      </Card>
      <Title level={3}>Products</Title>
      <Card
        title="Streak"
        bordered="true"
        extra={
          <a href="https://www.streak.com/" target="_blank" rel="noreferrer">
            Website
          </a>
        }
      >
        <p>
          A CRM built directly into Gmail. Includes lots of power tools like
          super powerful integrations and AI features. Some notable features I
          worked on:
        </p>
        <ul>
          <li>AI based contact suggester for setting up pipelines</li>
          <li>Expanded reporting capabilities</li>
          <li>Email link tracking</li>
        </ul>
      </Card>
      <br />
      <Card
        title="Venngage"
        bordered="true"
        extra={
          <a href="https://venngage.com/" target="_blank" rel="noreferrer">
            Website
          </a>
        }
      >
        <p>
          Web-based design tool aimed at non-designers focused on infographics
          and communicating data
        </p>
      </Card>
    </Layout>
  );
};
