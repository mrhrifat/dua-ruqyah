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

import { Categories, DuaContainer } from "@/app/layouts";

const page = ({ searchParams }: { searchParams: { cat: string } }) => {
  return (
    <>
      <div className="block lg:hidden">
        <button>Show</button>
        <p></p>
      </div>
      <div className="hidden lg:block col-span-4 lg:col-span-4 2xl:col-span-3">
        <Categories cat={searchParams.cat} />
      </div>
      <div className="col-span-12 lg:col-span-8 2xl:col-span-6 h-[89vh] overflow-y-auto">
        <DuaContainer cat={searchParams.cat} />
      </div>
    </>
  );
};

export default page;
