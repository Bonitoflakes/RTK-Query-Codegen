import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API = createApi({
  reducerPath: "API",
  baseQuery: fetchBaseQuery(),
  endpoints: () => ({}),
});
