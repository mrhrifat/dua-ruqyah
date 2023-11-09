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
import { allah, cardIcons } from "../utils/data";
import { getDuas } from "../utils/serverReq";

export type DuaType = {
  id: number;
  cat_id: number;
  subcat_id: number;
  dua_id: number;
  dua_name_bn: string;
  dua_name_en: string;
  top_bn: string;
  top_en: string;
  dua_arabic: string | null;
  dua_indopak: string | null;
  clean_arabic: string | null;
  transliteration_bn: string | null;
  transliteration_en: string | null;
  translation_bn: string | null;
  translation_en: string | null;
  bottom_bn: string | null;
  bottom_en: string | null;
  refference_bn: string;
  refference_en: string;
  audio: string | null;
};

const DuaContainer = async ({ cat }: { cat: string }) => {
  const duas = await getDuas(+cat);

  return duas.map((item: DuaType) => (
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
        <p className="text-primary-900">
          <span>{item.dua_id}. </span>
          {item.dua_name_en}
        </p>
      </div>
      <div>
        <p className="text-black">{item.top_en}</p>
      </div>
      <div>
        <p className="font-bold text-primary-900">Reference:</p>
        <p>{item.refference_en}</p>
      </div>
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
  ));
};

export default DuaContainer;
