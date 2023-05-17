import { createBrowserRouter } from "react-router-dom";
import Navbar from "../component/shared/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
  },
]);

export default router;
