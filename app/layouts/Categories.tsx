/**
 * Title: Categories
 * Description:
 * Filename: Categories.tsx
 * Path: /app/layouts/Categories.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 08, 2023
 * Last Updated Date: Nov 08, 2023
 *
 */

import { getCategory } from "@/app/utils/serverReq";
import CategoryCard from "../components/CategoryCard";

export type CategroyType = {
  id: number;
  cat_id: number;
  cat_name_bn: string;
  cat_name_en: string;
  no_of_subcat: number;
  no_of_dua: number;
  cat_icon: string;
};

const Categories = async ({ cat }: { cat: string }) => {
  const categories = await getCategory();

  return (
    <div className="bg-white flex flex-col rounded-lg pb-5 gap-y-6 drop-shadow-md h-[87vh]">
      <div className="bg-primary-900 rounded-tr-lg rounded-tl-lg w-full">
        <p className="text-white p-3 text-center">Categories</p>
      </div>
      <div className="px-3">
        <input
          type="text"
          name="categories"
          id="categories"
          className="bg-white text-gray-900 w-full py-3 px-6 placeholder:text-gray-400  focus:ring-1 focus:ring-inset focus:ring-primary-900 focus-visible:outline-none rounded-md drop-shadow"
          placeholder="Search by Categories..."
        />
      </div>

      <div className="flex flex-col gap-y-3 overflow-y-auto">
        {categories.map((item: CategroyType) => (
          <CategoryCard item={item} key={item.cat_id} cat={cat} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
