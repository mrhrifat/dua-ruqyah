/**
 * Title: CategoryCard
 * Description:
 * Filename: CategoryCard.tsx
 * Path: /app/components/CategoryCard.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 08, 2023
 * Last Updated Date: Nov 08, 2023
 *
 */

import Image from "next/image";
import Link from "next/link";
import { SubCategories } from ".";
import { men } from "../utils/data";
import { CategroyType } from "../utils/type";

export const stringReform = (str: string) =>
  str.replace(/\s+/g, "-").toLowerCase();

const CategoryCard = ({ item, cat }: { item: CategroyType; cat: string }) => {
  return (
    <Link
      key={item.cat_id}
      href={{
        pathname: `/duas/${stringReform(item.cat_name_en)}`,
        query: {
          cat: item.cat_id,
        },
      }}
    >
      <div className="px-3">
        <div className="flex flex-row gap-x-3 bg-slate-300 items-center p-2 rounded-md">
          <div className="bg-slate-200 rounded-md">
            <Image src={men} alt="" className="w-14 h-14 mx-auto p-2" />
          </div>
          <div className="flex flex-row w-full justify-between">
            <div>
              <p className="text-primary-900 font-bold">{item.cat_name_en}</p>
              <small className="text-slate-600 ">
                Subcategory: <span>{item.no_of_subcat}</span>
              </small>
            </div>
            <div>
              <p className="text-slate-900 font-bold">{item.no_of_dua}</p>
              <small className="text-slate-600">Duas</small>
            </div>
          </div>
        </div>
        {cat === item.cat_id.toString() ? (
          <SubCategories cat_id={item.cat_id} />
        ) : (
          <></>
        )}
      </div>
    </Link>
  );
};

export default CategoryCard;
