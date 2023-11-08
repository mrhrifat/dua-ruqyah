/**
 * Title: subCategory
 * Description:
 * Filename: subCategory.ts
 * Path: /models/subCategory.ts
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 08, 2023
 * Last Updated Date: Nov 08, 2023
 *
 */

import mongoose, { Schema } from "mongoose";

const subCategorySchema = new Schema({
  id: Number,
  cat_id: Number,
  subcat_id: Number,
  subcat_name_bn: String,
  subcat_name_en: String,
  no_of_dua: Number,
});

const SubCategory =
  mongoose.models.SubCategory ||
  mongoose.model("SubCategory", subCategorySchema);

export default SubCategory;
