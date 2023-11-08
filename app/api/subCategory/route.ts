/**
 * Title: route
 * Description:
 * Filename: route.ts
 * Path: /app/api/subCategory/route.ts
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 08, 2023
 * Last Updated Date: Nov 08, 2023
 *
 */

import connectMongoDB from "@/app/utils/mongodb";
import SubCategory from "@/models/subCategory";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { id, cat_id, subcat_id, subcat_name_bn, subcat_name_en, no_of_dua } =
    await request.body;
  if (id) {
    await connectMongoDB();
    await SubCategory.create({
      id,
      cat_id,
      subcat_id,
      subcat_name_bn,
      subcat_name_en,
      no_of_dua,
    });
    return NextResponse.json({
      message: "Created Successfully",
      status: "201",
    });
  }
  return NextResponse.json({ message: "Insert Value", status: "200" });
}

export async function GET() {
  await connectMongoDB();
  const subCategories = await SubCategory.find();
  return NextResponse.json({ subCategories });
}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await SubCategory.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted Successfully", status: "200" });
}
