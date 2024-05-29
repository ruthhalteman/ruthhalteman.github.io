import * as React from "react";
import "./App.css";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  CodeOutlined,
  FileTextOutlined,
  HomeFilled,
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

    { label: "Projects", key: "/projects", icon: <CodeOutlined /> },
    { label: "Resume", key: "resume", icon: <FileTextOutlined /> },
    // {
    //   label: "Tutorials",
    //   icon: <ProductOutlined />,
    //   children: [
    //     { key: "/tutorials/duvet", label: "Duvet cover" },
    //     { key: "/tutorials/bee-block", label: "Quilt Block" },
    //   ],
    // },
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
        <Content
          style={{
            padding: "0 48px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
