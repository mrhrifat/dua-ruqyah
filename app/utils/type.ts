/**
 * Title: type
 * Description:
 * Filename: type.ts
 * Path: /app/utils/type.ts
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 09, 2023
 * Last Updated Date: Nov 09, 2023
 *
 */

// Categroy Type
export type CategroyType = {
  id: number;
  cat_id: number;
  cat_name_bn: string;
  cat_name_en: string;
  no_of_subcat: number;
  no_of_dua: number;
  cat_icon: string;
};

// Dua Type
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

// Sub Category Type
export type SubCategoryType = {
  id: number;
  cat_id: number;
  subcat_id: number;
  subcat_name_bn: string;
  subcat_name_en: string;
  no_of_dua: number;
};
