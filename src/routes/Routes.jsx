import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../component/shared/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
