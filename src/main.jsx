import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Wallpaper from './componentes/Wallpaper.jsx';
import Login from "./Menus/Login.jsx";
import HomePage from "./componentes/Menu/HomePage.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Wallpaper />
      <div className="Contenedor">
          <HomePage />
      </div>
  </StrictMode>,
)
