/**
 * Title: Menu
 * Description:
 * Filename: Menu.tsx
 * Path: /app/layouts/Menu.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 08, 2023
 * Last Updated Date: Nov 08, 2023
 *
 */

import { donate, logo, menus } from "@/app/utils/data";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="bg-white rounded-3xl drop-shadow-md flex flex-col justify-between">
      <Link href="/">
        <Image src={logo} alt="Logo" className="w-28 h-28" />
      </Link>
      <div className="flex flex-col gap-y-4 p-5 2xl:p-7">
        {menus.map((item) => (
          <div key={item.id} className="bg-slate-200 rounded-full">
            <Image
              src={item.icon}
              alt={item.title}
              className="w-10 h-10 mx-auto p-2"
            />
          </div>
        ))}
      </div>
      <Image src={donate} alt="Logo" className="w-28 h-28" />
    </div>
  );
};

export default Menu;
