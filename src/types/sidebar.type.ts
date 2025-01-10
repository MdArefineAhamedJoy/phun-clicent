import { ReactNode } from "react";

export type TRoute = {
    path: string;
    element: ReactNode;
  };
  

export type TSidebar = {
    key: string;
    label: ReactNode;
    children?: TSidebar[];
  };
export type TUsersPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUsersPath[];
};