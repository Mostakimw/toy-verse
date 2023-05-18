import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../component/shared/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
