/**
 * Title: Header
 * Description:
 * Filename: Header.tsx
 * Path: /app/layouts/Header.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 08, 2023
 * Last Updated Date: Nov 08, 2023
 *
 */

import { bottomarrow, profile, search, setting } from "@/app/utils/data";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="grow">
        <p className="text-2xl">Dua Pages</p>
      </div>
      <div className="flex items-center gap-x-28">
        <div className="relative flex">
          <input
            type="text"
            name="dua"
            id="dua"
            className="bg-white text-gray-900 py-3 px-6 placeholder:text-gray-400  focus:ring-1 focus:ring-inset focus:ring-primary-900 focus-visible:outline-none rounded-md drop-shadow"
            placeholder="Search by Dua Name..."
          />
          <button className="absolute right-0 bottom-0 top-0 bg-slate-200 rounded-md w-10 h-10 m-1">
            <Image src={search} alt="Search" className="w-6 h-6 mx-auto" />
          </button>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Image
            src={profile}
            alt="Profile"
            width={36}
            height={36}
            className="w-9 h-9"
          />
          <Image
            src={bottomarrow}
            alt="bottomarrow"
            width={12}
            height={12}
            className="w-3 h-3"
          />

          <div className="hidden max-2xl:block">
            <Image
              src={setting}
              alt="Setting"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
