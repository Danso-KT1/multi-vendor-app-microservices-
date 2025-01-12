// File: src/services/productService.js
import { mockProducts } from "../mockData";

export const fetchProducts = async () => {
  // Simulating an API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 1000); // 1-second delay
  });
};
