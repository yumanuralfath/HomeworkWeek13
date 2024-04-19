import Book from "../pages/Books";
import Home from "../pages/Home/main";
import Login from "../pages/Login";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export const privateRoutes = [
  {
    path: "/books",
    element: <Book />,
  },
];
