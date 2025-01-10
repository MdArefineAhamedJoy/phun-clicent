import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPath } from "./admin.routes";
import { routeGenerators } from "../utils/routeGenerators";
import { facultyPath } from "./faculty.routes";
import { studentPaths } from "./student.routes";



export const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerators(adminPath),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routeGenerators(facultyPath),
  },
  {
    path: "/student",
    element: <App />,
    children: routeGenerators(studentPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
