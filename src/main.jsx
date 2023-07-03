import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DatosEvento from './ListarDatosEvento.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    {/*<App />*/}
    <h1>Usuarios</h1>
    <DatosEvento />
  </React.StrictMode>,
)
