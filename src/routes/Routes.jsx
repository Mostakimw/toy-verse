import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import Homepage from "../pages/Home/Homepage/Homepage";
import AllToys from "../pages/AllToys/AllToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "add-toy",
        element: <AddToy />,
      },
      {
        path: "my-toys",
        element: <MyToys />,
      },
      {
        path: "all-toys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/toys"),
      },
    ],
  },
]);

export default router;
