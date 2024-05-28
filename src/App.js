import logo from "./logo.svg";
import * as React from "react";
import "./App.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  CodeOutlined,
  FileTextOutlined,
  HomeFilled,
  LinkOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import { Button, ConfigProvider, Space } from "antd";

import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = React.useState(false);
  const navigate = useNavigate();

  const items = [
    { label: "Home", key: "/", icon: <HomeFilled /> },

    { label: "Resume", key: "resume", icon: <FileTextOutlined /> },
    { label: "Projects", key: "/projects", icon: <CodeOutlined /> },
    {
      label: "Tutorials",
      icon: <ProductOutlined />,
      children: [
        { key: "/tutorials/duvet", label: "Duvet cover" },
        { key: "/tutorials/bee-block", label: "Quilt Block" },
      ],
    },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3bbab8",
          colorTextBase: "#09262a",
          colorBgBase: "#f1fcfa",
        },
      }}
    >
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          theme="light"
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="light"
            defaultSelectedKeys={["/"]}
            mode="inline"
            items={items}
            onSelect={(item) => {
              if (item.key === "resume") {
                const a = document.createElement("a");
                a.href = "/resume-quick.pdf";
                a.download = "Ruth Halteman Resume";
                a.click();
              } else navigate(item.key);
            }}
          />
        </Sider>
        <Layout>
          <Outlet />
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
