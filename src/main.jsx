import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import AddEquipments from './pages/AddEquipments';
import AllEquipments from './pages/AllEquipments';
import MyEquipments from './pages/MyEquipments';
import Home from './pages/Home';
import AuthProvider from './provider/AuthProvider';
import AuthLayout from './layout/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import EquipmentDetails from './pages/EquipmentDetails';
import UpdateEquipment from './pages/UpdateEquipment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch("http://localhost:5000/equipments")
      },
      {
        path: "/myequipments/:useremail",
        element: <MyEquipments></MyEquipments>,
        loader: ({params})=>fetch(`http://localhost:5000/myequipments/${params.useremail}`)

      },
      {
        path: "/allequipments",
        element: <AllEquipments></AllEquipments>,
        loader: ()=> fetch("http://localhost:5000/equipments")
      },
      {
        path: "/addequipments",
        element: <AddEquipments></AddEquipments>
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path:"/auth/login",
        element:<Login></Login>
      },
      {
        path:"/auth/register",
        element:<Register></Register>
      },
    ]
  },
  {
        path: "/equipmentdetails/:id",
        element: <EquipmentDetails></EquipmentDetails>,
        loader: ({params})=>fetch(`http://localhost:5000/equipmentdetails/${params.id}`)
  },
  {
      path: "/equipmentupdate/:id",
      element: <UpdateEquipment></UpdateEquipment>,
      loader: ({params})=>fetch(`http://localhost:5000/equipmentupdate/${params.id}`)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
