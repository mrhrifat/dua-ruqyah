/**
 * Title: getDua
 * Description:
 * Filename: getDua.ts
 * Path: /app/server/getDua.ts
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 08, 2023
 * Last Updated Date: Nov 08, 2023
 *
 */

import { baseUri } from "./data";

// Get Category
export const getCategory = async () => {
  const { categories } = await fetch(`${baseUri}/category`, {
    cache: "no-store",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));

  return categories;
};

// Get Sub Category
export const getSubCategory = async (id: number) => {
  const { subcategories } = await fetch(`${baseUri}/subCategory/${id}`, {
    cache: "no-store",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));

  return subcategories;
};

// Get Dua
export const getDuas = async (id: number) => {
  const { duas } = await fetch(`${baseUri}/dua/${id}`, { cache: "no-store" })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));

  return duas;
};
