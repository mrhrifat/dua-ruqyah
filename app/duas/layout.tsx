/**
 * Title: layout
 * Description:
 * Filename: layout.tsx
 * Path: /app/duas/layout.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 09, 2023
 * Last Updated Date: Nov 09, 2023
 *
 */

import { ReactNode } from "react";
import { MenuItem } from "../components";
import { Header, Menu, Settings } from "../layouts";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="container mx-auto 2xl  max-sm:px-5">
        <div className="grid grid-cols-12 gap-x-8 gap-y-4 pt-6">
          <div className="col-span-1 hidden xl:block">
            <Menu />
          </div>
          <div className="col-span-12 xl:col-span-11">
            <header className="">
              <Header />
            </header>
            <div className="grid grid-cols-12 justify-between gap-4 pt-4 ">
              {children}
              <div className="col-span-3 2xl:block hidden">
                <Settings />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed max-lg:block xl:hidden bottom-0 w-full drop-shadow-md">
        <div className="flex flex-row gap-x-2 sm:gap-x-6 md:gap-x-14 bg-white py-6 justify-center rounded-tl-[3rem] rounded-tr-[3rem]">
          <MenuItem />
        </div>
      </div>
    </>
  );
};

export default layout;
