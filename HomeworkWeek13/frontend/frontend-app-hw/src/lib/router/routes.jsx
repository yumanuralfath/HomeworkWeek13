import Book from "../pages/Books";
import Home from "../pages/Home/main";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

export const privateRoutes = [
  {
    path: "/books",
    element: <Book />,
  },
];
