import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../firebase/database";

export const ecApi = createApi({
  reducerPath: "ecApi",
  baseQuery: fetchBaseQuery({
    baseUrl: base_url,
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories.json",
    }),

    getProducts: builder.query({
      query: () => "products.json",
    }),
  }),
});

export const { useGetCategoriesQuery, useGetProductsQuery } = ecApi;
