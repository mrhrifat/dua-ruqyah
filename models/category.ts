/**
 * Title: category
 * Description:
 * Filename: category.ts
 * Path: /models/category.ts
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 07, 2023
 * Last Updated Date: Nov 07, 2023
 *
 */

import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  id: Number,
  cat_id: Number,
  cat_name_bn: String,
  cat_name_en: String,
  no_of_subcat: Number,
  no_of_dua: Number,
  cat_icon: String,
});

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
