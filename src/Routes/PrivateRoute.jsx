import React, { use } from "react";
import { AuthContext } from "../Context/AuthProvider";
import NormalLoader from "../Components/Loader/NormalLoader";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <NormalLoader/>
    }

    if (user && user?.email) {
        return children;
    }
  return <Navigate state={location.pathname} to="/auth/login" />
};

export default PrivateRoute;
