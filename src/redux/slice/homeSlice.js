import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/categories";
import { products } from "../../data/products";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    allCategories: categories,
    allProducts: products,
    categorySelected: "",
    productsFilterByCategory: [],
    productSelected: {},
  },
  reducers: {
    setCategory: (state, action) => {
      state.categorySelected = action.payload;

      state.productsFilterByCategory = state.allProducts.filter(
        (el) => el.category === state.categorySelected
      );
    },
  },
});

export const { setCategory } = homeSlice.actions;

export default homeSlice.reducer;
