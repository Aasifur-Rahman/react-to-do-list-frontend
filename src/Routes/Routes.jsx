import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";
import MyTasks from "../components/layout/MyTasks/MyTasks";
import Register from "../components/Pages/Regsiter/Register";
import Login from "../components/Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <MyTasks></MyTasks>
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
