/**
 * Title: page
 * Description:
 * Filename: page.tsx
 * Path: /app/page.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 07, 2023
 * Last Updated Date: Nov 07, 2023
 *
 */

import Image from "next/image";
import Link from "next/link";
import { stringReform } from "./components/CategoryCard";
import { CategroyType } from "./layouts/Categories";
import Header from "./layouts/Header";
import { men } from "./utils/data";
import { getCategory } from "./utils/serverReq";

const Home = async () => {
  const categories = await getCategory();
  return (
    <div className="container mx-auto pt-10 max-sm:px-5">
      <header className="max-sm:hidden">
        <Header />
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-10">
        {categories.map((item: CategroyType) => (
          <Link
            key={item.cat_id}
            href={{
              pathname: `/duas/${stringReform(item.cat_name_en)}`,
              query: {
                cat: item.cat_id,
              },
            }}
          >
            <div className="flex flex-row gap-x-3 bg-slate-300 items-center p-2 rounded-md">
              <div className="bg-slate-200 rounded-md">
                <Image src={men} alt="" className="w-14 h-14 mx-auto p-2" />
              </div>
              <div className="flex flex-row w-full justify-between">
                <div>
                  <p className="text-primary-900 font-bold">
                    {item.cat_name_en}
                  </p>
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
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Home;
