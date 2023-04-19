import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Inicio from './pages/Inicio'
import Medicamentos from './pages/Medicamentos'
import Farmacias from './pages/Farmacias'
import FormularioFarm from './pages/FormularioFarm'
import FormularioMed from './pages/FormularioMed'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'




const rotas = createBrowserRouter(

  [
    { 
      path: '/', 
      element: <App /> ,
      children:[
      {
        path: '/',
        element: <Inicio />
      },
      {
        path: '/medicamentos',
        element: <Medicamentos />
      },
      {
        path: '/farmacias',
        element: <Farmacias />
      },
      {
        path: '/formulario',
        element: <FormularioFarm />
      },
      {
        path: '/formulario_med',
        element: <FormularioMed />
      }
  ]
    },
   
  ]
)

    


ReactDOM.createRoot(document.getElementById('root')).render( 

  <React.StrictMode>
   
    <RouterProvider router={rotas}>
    
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
