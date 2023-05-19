import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation } from "react-router-dom";
import Loader from "../pages/Loader/Loader";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loader />;
  }
  return <div></div>;
};

export default PrivateRoutes;
