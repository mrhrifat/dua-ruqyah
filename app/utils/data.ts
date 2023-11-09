/**
 * Title: data
 * Description:
 * Filename: data.ts
 * Path: /app/utils/data.ts
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 07, 2023
 * Last Updated Date: Nov 07, 2023
 *
 */
import allah from "public/images/allah.svg";
import book from "public/images/book.svg";
import bottomarrow from "public/images/bottomarrow.svg";
import copy from "public/images/copy.svg";
import donate from "public/images/donate.svg";
import files from "public/images/files.svg";
import home from "public/images/home.svg";
import info from "public/images/info.svg";
import keep1 from "public/images/keep1.svg";
import keep2 from "public/images/keep2.svg";
import memorize from "public/images/memorize.svg";
import men from "public/images/men.svg";
import menu from "public/images/menu.svg";
import menulight from "public/images/menulight.svg";
import play from "public/images/play.svg";
import profile from "public/images/profile.svg";
import report from "public/images/report.svg";
import ruqyah from "public/images/ruqyah.svg";
import search from "public/images/search.svg";
import setting from "public/images/setting.svg";
import share from "public/images/share.svg";
import toggle from "public/images/toggle.svg";
import translate from "public/images/translate.svg";
import logo from "public/logo.svg";

// Images or Logo
export {
  allah,
  book,
  bottomarrow,
  copy,
  donate,
  files,
  home,
  info,
  keep1,
  keep2,
  logo,
  memorize,
  men,
  menu,
  menulight,
  play,
  profile,
  report,
  ruqyah,
  search,
  setting,
  share,
  toggle,
  translate,
};

// Database
export const databaseName = "dua_ruqyah";

// Menu
export const menus = [
  { id: 0, title: "Home", icon: home },
  { id: 1, title: "Menu", icon: menulight },
  { id: 2, title: "Memorize", icon: memorize },
  { id: 3, title: "Bookmark", icon: keep1 },
  { id: 4, title: "Ruqyah", icon: ruqyah },
  { id: 5, title: "Info", icon: info },
  { id: 6, title: "Book", icon: book },
];

// Settings
export const settings = [
  { id: 0, title: "Language Settings", icon: translate },
  { id: 1, title: "General Settings", icon: files },
  { id: 2, title: "Font Settings", icon: menulight },
  { id: 3, title: "Appearence Settings", icon: menulight },
];

// Card Container Icons
export const cardIcons = [
  { id: 0, title: "Copy", icon: copy },
  { id: 1, title: "Bookmark", icon: keep2 },
  { id: 2, title: "Memorize", icon: memorize },
  { id: 3, title: "Share", icon: share },
  { id: 4, title: "Report", icon: report },
];
