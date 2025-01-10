
import { NavLink } from "react-router-dom";
import { TSidebar, TUsersPath } from "../types";



export const sidebarItemGenerators = (item: TUsersPath[] ,role : string): TSidebar[] => {
  const sidebarPath = item.reduce((acc: TSidebar[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name!,
        label: item.name!,
        children: item.children.map((child) => ({
          key: child.name!,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }

    return acc;
  }, []);

  return sidebarPath;
};
