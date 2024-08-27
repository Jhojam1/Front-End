import './HomePage.css'
import {Layout} from "antd";
import Logo from "./Logo.jsx";
import MenuList from "./MenuList.jsx";
import {useState} from "react";
import ToggleThemeButton from "./ToggleThemeButton.jsx";


    const{Header, Sider} = Layout
function HomePage(){
    const[darkTheme, setDarkTheme] = useState(true)
    const toggleTheme =() =>{
        setDarkTheme(!darkTheme);
    }

    return (
        <div className='Contenedor'>
        <Layout>
            <Sider theme= {darkTheme ? 'dark'  : 'light'}  className = 'sidebar'>
                <Logo/>
                <MenuList darkTheme={darkTheme}/>
                <ToggleThemeButton darkTheme ={darkTheme}
                toggleTheme = {toggleTheme}/>
            </Sider>
        </Layout>
        </div>
    )
}

export default HomePage