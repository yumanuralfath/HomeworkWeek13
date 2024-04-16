import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Page404 from "../pages/404/main";

import { routes } from "./routes";

const Routings = () => {
  return (
    <Suspense>
      <Routes>
        {routes.map((routeProps) => (
          <Route {...routeProps} key={routeProps.path} />
        ))}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  );
};

export default Routings;
