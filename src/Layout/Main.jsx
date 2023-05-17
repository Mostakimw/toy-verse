import { Outlet } from "react-router-dom";
import Footer from "../component/shared/Footer";
import Navbar from "../component/shared/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-288px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
