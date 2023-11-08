/**
 * Title: mongodb
 * Description:
 * Filename: mongodb.ts
 * Path: /app/utils/mongodb.ts
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 07, 2023
 * Last Updated Date: Nov 07, 2023
 *
 */

import mongoose from "mongoose";
import { databaseName } from "./data";

const connectMongoDB = async () => {
  try {
    if (process.env.MONGODB_URI)
      await mongoose.connect(`${process.env.MONGODB_URI}/${databaseName}`);
    console.log("Connected Successfully");
  } catch (err) {
    console.log(err);
  }
};
export default connectMongoDB;
