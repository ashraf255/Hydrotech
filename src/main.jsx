import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Route.jsx";
import Provider from "./components/Authentication/Provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <Provider>

      <RouterProvider router={router}></RouterProvider>
   </Provider>
   
  </React.StrictMode>
);
