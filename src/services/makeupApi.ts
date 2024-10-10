import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export interface Product {
  id: number;
  brand: string;
  name: string;
  price: string;
  price_sign: string;
  currency: string;
  image_link: string;
  product_link: string;
  website_link: string;
  description: string;
  rating: number | null;
  category: string;
  product_type: string;
  tag_list: string[];
  created_at: string;
  updated_at: string;
  product_api_url: string;
  api_featured_image: string;
  product_colors: { hex_value: string; colour_name: string }[];
  selectedOption: string;
  quantity: number;
}

export const makeupApi = createApi({
  reducerPath: "makeupApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://makeup-api.herokuapp.com/api/v1/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "products.json",
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `products/${id}.json`,
    }),
    getProductsByCategory: builder.query<Product[], string>({
      query: (category) => `products.json?product_type=${category}`,
    }),
    searchProducts: builder.query<Product[], string>({
      query: (term) => `products.json?brand=${term}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
  useSearchProductsQuery,
} = makeupApi;
