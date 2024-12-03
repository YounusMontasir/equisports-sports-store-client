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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/myequipments",
        element: <MyEquipments></MyEquipments>
      },
      {
        path: "/allequipments",
        element: <AllEquipments></AllEquipments>
      },
      {
        path: "/addequipments",
        element: <AddEquipments></AddEquipments>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
