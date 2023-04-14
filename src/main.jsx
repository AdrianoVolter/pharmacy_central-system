import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'


const rotas = createBrowserRouter([
  {
    path: '/',
    component: App,
  },

])




ReactDOM.createRoot(document.getElementById('root')).render( 

  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
