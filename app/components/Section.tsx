/**
 * Title: Section
 * Description:
 * Filename: Section.tsx
 * Path: /app/components/Section.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 09, 2023
 * Last Updated Date: Nov 09, 2023
 *
 */

import { getSubCategory } from "../utils/serverReq";
import { SubCategoryType } from "../utils/type";

const Section = async ({ cat, subcat }: { cat: number; subcat: number }) => {
  const subcategories = await getSubCategory(cat);
  return subcategories.map(
    (item: SubCategoryType) =>
      subcat === item.subcat_id && (
        <div
          className="drop-shadow-md bg-white py-3 px-5 rounded-lg mb-5 flex flex-row gap-x-3"
          key={item.subcat_id}
        >
          <p className="text-primary-600">Section: </p>
          <p className="text-slate-800">{item.subcat_name_en}</p>
        </div>
      )
  );
};

export default Section;
