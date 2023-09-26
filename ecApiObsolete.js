// import { base_url } from "../firebase/database";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const ecApi = createApi({
//   reducerPath: "ecApi",
//   baseQuery: fetchBaseQuery({ baseUrl: base_url }),
//   endpoints: (builder) => ({
//     getCategories: builder.query({
//       query: () => "categories.json",
//     }),

//     getProducts: builder.query({
//       query: () => "products.json",
//     }),

//     getProductsByCategory: builder.query({
//       query: (category) =>
//         `products.json?orderBy="category"&equalTo="${category}"`,
//       transformResponse: (response, meta, arg) => {
//         return Object.values(response);
//       },
//     }),
//   }),
// });

// export const {
//   useGetCategoriesQuery,
//   useGetProductsByCategoryQuery,
//   useGetProductsQuery,
// } = ecApi;
