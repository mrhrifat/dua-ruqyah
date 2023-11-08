/**
 * Title: category
 * Description:
 * Filename: category.ts
 * Path: /app/api/category.ts
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 08, 2023
 * Last Updated Date: Nov 08, 2023
 *
 */

import Category from "@/models/category";
import { NextResponse } from "next/server";
import connectMongoDB from "../../utils/mongodb";

export async function POST(request: any) {
  const {
    id,
    cat_id,
    cat_name_bn,
    cat_name_en,
    no_of_subcat,
    no_of_dua,
    cat_icon,
  } = await request.body;
  if (id) {
    await connectMongoDB();
    await Category.create({
      id,
      cat_id,
      cat_name_bn,
      cat_name_en,
      no_of_subcat,
      no_of_dua,
      cat_icon,
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
  const categories = await Category.find();
  return NextResponse.json({ categories });
}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Category.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted Successfully", status: "200" });
}
