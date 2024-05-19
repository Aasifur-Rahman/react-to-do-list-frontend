import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";
import MyTasks from "../components/layout/MyTasks/MyTasks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <MyTasks></MyTasks>,
      },
    ],
  },
]);

export default router;
