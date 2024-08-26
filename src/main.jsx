import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Wallpaper from './componentes/Wallpaper.jsx';
import Login from "./Menus/Login.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Wallpaper />
      <div className="content">
          <Login />
      </div>
  </StrictMode>,
)
