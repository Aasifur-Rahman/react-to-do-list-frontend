import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";
import MyTasks from "../components/layout/MyTasks/MyTasks";
import Register from "../components/Pages/Regsiter/Register";
import Login from "../components/Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <MyTasks></MyTasks>,
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
