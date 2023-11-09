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
import Header from "../layouts/Header";
import Menu from "../layouts/Menu";
import Settings from "../layouts/Settings";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mx-auto 2xl  max-sm:px-5">
      <div className="grid grid-cols-12 gap-x-8 gap-y-4 pt-6">
        <div className="col-span-1 hidden xl:block">
          <Menu />
        </div>
        <div className="col-span-12 xl:col-span-11">
          <header className="max-sm:hidden">
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
  );
};

export default layout;
