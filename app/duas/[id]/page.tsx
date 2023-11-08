/**
 * Title: page
 * Description:
 * Filename: page.tsx
 * Path: /app/duas/[id]/page.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 08, 2023
 * Last Updated Date: Nov 08, 2023
 *
 */

import Categories from "@/app/layouts/Categories";
import Header from "@/app/layouts/Header";
import Menu from "@/app/layouts/Menu";
import Settings from "@/app/layouts/Settings";

const page = ({ searchParams }: { searchParams: { cat: string } }) => {
  console.log(searchParams);
  return (
    <div className="container mx-auto xl:px-4 2xl 2xl:px-4">
      <div className="grid grid-cols-12 gap-x-8 gap-y-4 pt-6">
        <div className="col-span-1 hidden xl:block">
          <Menu />
        </div>
        <div className="col-span-12 xl:col-span-11">
          <Header />
          <div className="grid grid-cols-12 justify-between gap-4 pt-4">
            <div className="col-span-5 xl:col-span-3">
              <Categories cat={searchParams.cat} />
            </div>
            <div className="col-span-7 xl:col-span-6">{/* <Dua /> */}</div>
            <div className="col-span-3 2xl:block hidden">
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
