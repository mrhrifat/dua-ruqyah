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

import { donate, logo } from "@/app/utils/data";
import Image from "next/image";
import Link from "next/link";
import { MenuItem } from "../components";

const Menu = () => {
  return (
    <div className="bg-white rounded-3xl drop-shadow-md flex flex-col justify-between h-[95vh]">
      <Link href="/">
        <Image src={logo} alt="Logo" className="w-28 h-28" />
      </Link>
      <div className="flex flex-col gap-y-4 p-5 2xl:p-7">
        <MenuItem />
      </div>
      <Image src={donate} alt="Logo" className="w-28 h-28" />
    </div>
  );
};

export default Menu;
