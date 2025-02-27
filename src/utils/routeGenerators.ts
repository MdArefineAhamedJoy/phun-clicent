import { TRoute, TUsersPath } from "../types";

export const routeGenerators = (item: TUsersPath[] ) => {
  const adminRoute = item.reduce((acc: TRoute[], item) => {
    if (item.element && item.path) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }

    return acc;
  }, []);
  return adminRoute;
};
