/**
 * Title: Dua
 * Description:
 * Filename: Dua.tsx
 * Path: /app/layouts/Dua.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 08, 2023
 * Last Updated Date: Nov 08, 2023
 *
 */

import Image from "next/image";
import { Section } from "../components";
import { allah, cardIcons, play } from "../utils/data";
import { getDuas } from "../utils/serverReq";
import { DuaType } from "../utils/type";

const DuaContainer = async ({ cat }: { cat: string }) => {
  const duas = await getDuas(+cat | 1);

  return duas.map((item: DuaType) => (
    <>
      <Section subcat={item.subcat_id} cat={item.cat_id} key={item.cat_id} />

      <div
        className="drop-shadow-md bg-white py-3 px-5 rounded-lg flex flex-col gap-y-6 mb-5"
        key={item.id}
      >
        <div className="flex flex-row gap-3">
          <Image
            src={allah}
            alt="Allah"
            width={28}
            height={28}
            className="w-7 h-7"
          />
          <p className="text-primary-600">
            <span>{item.dua_id}. </span>
            {item.dua_name_en}
          </p>
        </div>
        <div>
          <p className="text-black">{item.top_en}</p>
        </div>
        <div>
          <p className="font-bold text-primary-600">Reference:</p>
          <p>{item.refference_en}</p>
        </div>
        <div
          className={`flex flex-row ${
            item.audio !== null ? "justify-between" : "justify-end"
          }`}
        >
          {item.audio !== null ? (
            <Image
              src={play}
              alt="Audio"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          ) : (
            <></>
          )}
          <div className="flex flex-row justify-end">
            {cardIcons.map((item) => (
              <div key={item.title} className="ml-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  ));
};

export default DuaContainer;
