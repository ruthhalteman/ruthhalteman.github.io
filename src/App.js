import * as React from "react";
import "./App.css";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  CalculatorOutlined,
  CodeOutlined,
  FileTextOutlined,
  HomeFilled,
  LinkOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import { Layout, Menu, ConfigProvider } from "antd";
const { Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { label: "Home", key: "/", icon: <HomeFilled /> },

    // { label: "Projects", key: "/projects", icon: <CodeOutlined /> },
    { label: "Resume", key: "resume", icon: <FileTextOutlined /> },
    {
      label: "Tutorials",
      icon: <ProductOutlined />,
      children: [
        { key: "/tutorials/bee-block", label: "Diagonal String Quilt" },
        { key: "/tutorials/duvet", label: "Duvet Cover" },
      ],
    },
    { label: "Calculators", key: "/calculators", icon: <CalculatorOutlined /> },
    { label: "Links", key: "/links", icon: <LinkOutlined /> },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3bbab8",
          colorTextBase: "#09262a",
          colorBgBase: "#f1fcfa",
          colorLink: "#26a6a6",
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
            selectedKeys={[location.pathname]}
            mode="vertical"
            items={items}
            onSelect={(item) => {
              if (item.key === "resume") {
                const a = document.createElement("a");
                a.href = "/RuthHaltemanResume.pdf";
                a.download = "Ruth Halteman Resume";
                a.click();
              } else navigate(item.key);
            }}
          />
        </Sider>
        <Content
          style={{
            padding: "0 48px",
            maxWidth: 750,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
