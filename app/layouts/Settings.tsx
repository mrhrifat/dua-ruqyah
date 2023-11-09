/**
 * Title: Settings
 * Description:
 * Filename: Settings.tsx
 * Path: /app/layouts/Settings.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 08, 2023
 * Last Updated Date: Nov 08, 2023
 *
 */

import { settings } from "@/app/utils/data";
import Image from "next/image";

const Settings = () => {
  return (
    <div className="flex flex-col bg-white rounded-3xl p-4 h-[87vh]">
      <div>
        <p className="text-lg text-center py-3">Settings</p>
      </div>
      <div className="grow">
        <div className="flex flex-col gap-y-5 justify-between ">
          {settings.map((item) => (
            <div
              key={item.id}
              className={`bg-slate-50 py-3 p-2 rounded-lg ${
                item.id === 3 && "border border-primary-900"
              }`}
            >
              <button className="flex flex-row items-center">
                <div key={item.id} className="bg-slate-200 rounded-full">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="w-10 h-10 mx-auto p-2"
                  />
                </div>
                <p className="ml-2 text-slate-500">{item.title}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
