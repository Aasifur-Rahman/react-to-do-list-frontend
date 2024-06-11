import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import "./index.css";
import AuthProvider from "./AuthProvider/AuthProvider";
import TodoProvider from "./providers/TodoProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <TodoProvider>
        <RouterProvider router={router}></RouterProvider>
      </TodoProvider>
    </AuthProvider>
  </React.StrictMode>
);
