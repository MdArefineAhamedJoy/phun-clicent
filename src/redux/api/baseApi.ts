/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut, setUsers } from "../features/auth/authSlice";
import { RootState } from "../store";

const fetchBaseApi = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("Authorization", `${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken : BaseQueryFn<FetchArgs,BaseQueryApi, DefinitionType> = async  (args, api, extraOptions) : Promise<any> => {
  let result = await fetchBaseApi(args, api, extraOptions);
  console.log(result?.error?.status);
  if (result?.error?.status === 401) {
    const response = await fetch("http://localhost:5000/auth/refresh-token");
    const data = await response.json();
    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.token;
      api.dispatch(
        setUsers({
          user,
          token: data.data.accessToken,
        })
      );
      result = await fetchBaseApi(args, api, extraOptions);
    }
    api.dispatch(logOut())
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
