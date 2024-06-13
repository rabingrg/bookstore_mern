import { RouteObject, Navigate } from "react-router-dom";
import { ABOUT, APP, CONTACT, COURSE, HOME } from "./path";
import AppLayout from "../layout/AppLayout";
import Home from "../components/pages/Home";
import NotFound from "../components/pages/NotFound";
import Courses from "../components/pages/Courses";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";

const appRoutes: RouteObject = {
  path: APP,
  element: <AppLayout />,
  children: [
    {
      path: HOME,
      index: true,
      element: <Home />,
    },
    {
      path: COURSE,
      element: <Courses />,
    },
    {
      path: ABOUT,
      element: <About />,
    },
    {
      path: CONTACT,
      element: <Contact />,
    },
  ],
};

const notFoundRoute: RouteObject = {
  path: "*",
  element: <NotFound />,
};

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={`${APP}/${HOME}`} />,
  },
  appRoutes,
  notFoundRoute,
];

export default routes;
