import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";
import MyTasks from "../components/Pages/MyTasks/MyTasks";
import Register from "../components/Pages/Register/Register";
import Login from "../components/Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../components/Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Register></Register>,
      },
      {
        path: "/mytasks",
        element: (
          <PrivateRoute>
            <MyTasks></MyTasks>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
