/**
 * Title: MenuItem
 * Description:
 * Filename: MenuItem.tsx
 * Path: /app/components/MenuItem.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 09, 2023
 * Last Updated Date: Nov 09, 2023
 *
 */

import Image from "next/image";
import { menus } from "../utils/data";

const MenuItem = () => {
  return (
    <>
      {menus.map((item) => (
        <div key={item.id} className="bg-slate-200 rounded-full">
          <Image
            src={item.icon}
            alt={item.title}
            className="w-10 h-10 mx-auto p-2"
          />
        </div>
      ))}
    </>
  );
};

export default MenuItem;
