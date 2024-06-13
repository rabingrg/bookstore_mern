import { useRoutes } from "react-router-dom";
import routes from "../config/routes";
import { Suspense } from "react";

const AppRouter = () => {
  const Routes = useRoutes(routes);
  return <Suspense fallback={<div>Loading...</div>}>{Routes}</Suspense>;
};

export default AppRouter;
