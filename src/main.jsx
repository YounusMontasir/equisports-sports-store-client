import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
import PrivateRoute from './routes/PrivateRoute';
import ErrorPage from './pages/ErrorPage';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setDarkMode(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);


  const toggleDarkMode = () => {
    if (darkMode) {
      setDarkMode(false);
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: () => fetch("https://equisports-server-gules.vercel.app/equipments"),
        },
        {
          path: "/myequipments/:useremail",
          element: (
            <PrivateRoute>
              <MyEquipments />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(`https://equisports-server-gules.vercel.app/myequipments/${params.useremail}`),
        },
        {
          path: "/allequipments",
          element: <AllEquipments />,
          loader: () => fetch("https://equisports-server-gules.vercel.app/allequipments"),
        },
        {
          path: "/addequipments",
          element: (
            <PrivateRoute>
              <AddEquipments />
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "/auth/login",
          element: <Login />,
        },
        {
          path: "/auth/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/equipmentdetails/:id",
      element: (
        <PrivateRoute>
          <EquipmentDetails />
        </PrivateRoute>
      ),
      loader: ({ params }) =>
        fetch(`https://equisports-server-gules.vercel.app/equipmentdetails/${params.id}`),
    },
    {
      path: "/equipmentupdate/:id",
      element: (
        <PrivateRoute>
          <UpdateEquipment />
        </PrivateRoute>
      ),
      loader: ({ params }) =>
        fetch(`https://equisports-server-gules.vercel.app/equipmentupdate/${params.id}`),
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage>
    }
  ]);

  return (
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<App />);
