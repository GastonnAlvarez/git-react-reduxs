import Header from "./components/Header"
import Productos from "./components/Productos"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NuevoProducto from "./components/NuevoProducto"
import EditarProducto from "./components/EditarProducto"

// redux
import { Provider } from "react-redux"
import store from "./store"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        index: true,
        element: <Productos />
      },
      {
        path: '/productos/nuevo',
        element: <NuevoProducto />
      },
      {
        path: '/productos/editar/:id',
        element: <EditarProducto />
      }
    ]
  }
])

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
