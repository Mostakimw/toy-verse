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
import EditToy from "../pages/EditToy/EditToy";
import Error from "../pages/ErrorPage/Error";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
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
        path: "blogs",
        element: <Blogs />,
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
        path: "my-toys/:id",
        element: <EditToy></EditToy>,
        loader: ({ params }) =>
          fetch(
            `https://toy-verse-server-mostakimw.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "all-toys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch("https://toy-verse-server-mostakimw.vercel.app/toys?limit=20"),
      },
      {
        path: "toys/:id",
        element: (
          <PrivateRoutes>
            <ToyDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-verse-server-mostakimw.vercel.app/toys/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
