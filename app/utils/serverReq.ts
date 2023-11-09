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

// Get Category
export const getCategory = async () => {
  const { categories } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URI}/category`,
    {
      cache: "no-store",
    }
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));

  return categories;
};

// Get Sub Category
export const getSubCategory = async (id: number | 1) => {
  const { subcategories } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URI}/subCategory/${id}`,
    {
      cache: "no-store",
    }
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));

  return subcategories;
};

// Get Dua
export const getDuas = async (id: number | 1) => {
  const { duas } = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URI}/dua/${id}`,
    {
      cache: "no-store",
    }
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));

  return duas;
};
