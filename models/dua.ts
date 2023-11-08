/**
 * Title: dua
 * Description:
 * Filename: dua.ts
 * Path: /models/dua.ts
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 08, 2023
 * Last Updated Date: Nov 08, 2023
 *
 */

import mongoose, { Schema } from "mongoose";

const duaSchema = new Schema({
  id: Number,
  cat_id: Number,
  subcat_id: Number,
  dua_id: Number,
  dua_name_bn: String,
  dua_name_en: String,
  top_bn: String,
  top_en: String,
  dua_arabic: String || null,
  dua_indopak: String || null,
  clean_arabic: String || null,
  transliteration_bn: String || null,
  transliteration_en: String || null,
  translation_bn: String || null,
  translation_en: String || null,
  bottom_bn: String || null,
  bottom_en: String || null,
  refference_bn: String,
  refference_en: String,
  audio: String || null,
});

const Dua = mongoose.models.Dua || mongoose.model("Dua", duaSchema);

export default Dua;
