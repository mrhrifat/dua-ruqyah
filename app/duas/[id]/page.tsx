/**
 * Title: page
 * Description:
 * Filename: page.tsx
 * Path: /app/duas/[id]/page.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 09, 2023
 * Last Updated Date: Nov 09, 2023
 *
 */

import Categories from "../../layouts/Categories";
import DuaContainer from "../../layouts/DuaContainer";

const page = ({ searchParams }: { searchParams: { cat: string } }) => {
  console.log(searchParams);
  return (
    <>
      <div className="hidden lg:block col-span-4 lg:col-span-4 2xl:col-span-3">
        <Categories cat={searchParams.cat} />
      </div>
      <div className="col-span-12 lg:col-span-8 2xl:col-span-6">
        <DuaContainer cat={searchParams.cat} />
      </div>
    </>
  );
};

export default page;
