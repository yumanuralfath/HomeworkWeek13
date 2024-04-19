import { Suspense } from "react";
import { Routes, Route} from "react-router-dom";
import Page404 from "../pages/404/main";

import { routes, privateRoutes } from "./routes";

import RequireAuth from "../components/Auth/RequireAuth";

const Routings = () => {
  return (
    <Suspense>
      <Routes>
        {routes.map((routeProps) => (
          <Route {...routeProps} key={routeProps.path} />
        ))}
        {privateRoutes.map(({ element, ...privateRouteProps }) => (
          <Route
            element={
              <RequireAuth
                redirectTo={`/login?redirectTo=${privateRouteProps.path}`}
              >
                {element}
              </RequireAuth>
            }
            {...privateRouteProps}
            key={`privateRoute-${privateRouteProps.path}`}
          />
        ))}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  );
};

export default Routings;
