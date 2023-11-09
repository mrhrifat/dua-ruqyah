/**
 * Title: SubCategories
 * Description:
 * Filename: SubCategories.tsx
 * Path: /app/components/SubCategories.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 08, 2023
 * Last Updated Date: Nov 08, 2023
 *
 */

import { getSubCategory } from "../utils/serverReq";
import { SubCategoryType } from "../utils/type";

const SubCategories = async ({ cat_id }: { cat_id: number }) => {
  const subCategories = await getSubCategory(cat_id);

  return subCategories?.map((item: SubCategoryType) => (
    <div
      className="ml-3 mt-1 border-l-2 border-dotted border-l-primary-900"
      key={item.id}
    >
      <div className="flex flex-col gap-x-3 p-1">
        <div className="flex flex-row items-center">
          <span className="bg-primary-900 block h-[7px] w-[7px] rounded-full -translate-x-2"></span>
          <small className={`text-slate-800`}>{item.subcat_name_en}</small>
        </div>
      </div>
    </div>
  ));
};

export default SubCategories;
