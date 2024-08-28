import './HomePage.css'
import { Button, Layout } from "antd";
import Logo from "./Logo.jsx";
import MenuList from "./MenuList.jsx";
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { useState } from "react";

const { Sider } = Layout;

function HomePage() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className='Contenedor'>
            <Layout>
                <Sider theme='light'
                    collapsed={collapsed}
                    collapsible
                    trigger={null}
                    className='sidebar'
                >

                    <Button
                        type='text'
                        className='toggle'
                        onClick={() => setCollapsed(!collapsed)}
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    />
                    <Logo/>
                    <MenuList />
                </Sider>
            </Layout>
        </div>
    )
}

export default HomePage;