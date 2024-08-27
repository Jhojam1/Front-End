import {Menu} from "antd";
import {SettingOutlined} from '@ant-design/icons'
import { RxExit } from "react-icons/rx";
import { MdCreate } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import './MenuList.css'


const MenuList = ({darkTheme}) =>{
    return(
        <Menu theme = {darkTheme ? 'dark' : 'light'}
              mode = "inline"
              className='menu-bar'>
            <Menu.Item key ="crear" icon={<MdCreate />}>
                Crear PQRS
            </Menu.Item>
                <Menu.Item key ="consultar" icon={<FaSearch />
                }>
                Consultar PQRS
            </Menu.Item>
            <Menu.Item key ="setting" icon={<SettingOutlined/>}>
                Configuracion
            </Menu.Item>
            <Menu.Item key ="exit" icon={<RxExit/>}>
                Salir
            </Menu.Item>
        </Menu>

    )
}
export default MenuList