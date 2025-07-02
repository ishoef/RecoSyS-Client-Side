import { createBrowserRouter, Navigate } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Log/Login";
import Register from "../Log/Register";
import Queries from "../Pages/Queries/Queries";
import RecForme from "../Pages/RecForMe/RecForme";
import MyQueries from "../Pages/MyQueries/MyQueries";
import MyRecos from "../Pages/MyRecos/MyRecos";
import MyProfile from "../Pages/MyProfile/MyProfile";
import QueryDetails from "../Pages/QueryDetails/QueryDetails";
import AddQueryForm from "../Components/AddQueryForm/AddQueryForm";
import Error from "../Pages/Err/Error";
import PrivateRoute from "./PrivateRoute";
import UpdateQuery from "../Components/UpdateQuery/UpdateQuery";
import Profile from "../Pages/MyProfile/Profile/Profile";
import Activity from "../Pages/MyProfile/Activity/Activity";
import Settings from "../Pages/MyProfile/Settings/Settings";
import Privacy from "../Pages/MyProfile/Privacy/Privacy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "/queries",
        Component: Queries,
      },
      {
        path: "/recforme",
        element: (
          <PrivateRoute>
            <RecForme></RecForme>
          </PrivateRoute>
        ),
      },
      {
        path: "/myqueries",
        element: (
          <PrivateRoute>
            <MyQueries></MyQueries>
          </PrivateRoute>
        ),
      },
      {
        path: "/myrecos",
        element: (
          <PrivateRoute>
            <MyRecos></MyRecos>
          </PrivateRoute>
        ),
      },
      {
        path: "/myprofile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: <Navigate to="/myprofile/profile" />,
          },
          {
            path: "/myprofile/profile",
            Component: Profile,
          },
          {
            path: "/myprofile/activity",
            Component: Activity,
          },
          {
            path: "/myprofile/settings",
            Component: Settings,
          },
          {
            path: "/myprofile/privacy",
            Component: Privacy,
          },
        ],
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <QueryDetails></QueryDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/addquery",
        Component: AddQueryForm,
      },
      {
        path: "/myqueries/update/:id",
        Component: UpdateQuery,
        loader: () => {
          return fetch(`https://reco-sys-server-side.vercel.app/queries`);
        },
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);
