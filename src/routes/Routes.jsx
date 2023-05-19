import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import Homepage from "../pages/Home/Homepage/Homepage";
import AllToys from "../pages/AllToys/AllToys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import PrivateRoutes from "./PrivateRoutes";

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
        element: (
          <PrivateRoutes>
            <AddToy />
          </PrivateRoutes>
        ),
      },
      {
        path: "my-toys",
        element: (
          <PrivateRoutes>
            {" "}
            <MyToys />
          </PrivateRoutes>
        ),
      },
      {
        path: "all-toys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/toys"),
      },
      {
        path: "toys/:id",
        element: (
          <PrivateRoutes>
            <ToyDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },
    ],
  },
]);

export default router;
