import { jwtDecode } from "jwt-decode";

export const verifiedToken = (token: string) => {
  const decodeToken = jwtDecode(token);
  return decodeToken;
};
