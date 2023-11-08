import connectMongoDB from "@/app/utils/mongodb";
import SubCategory from "@/models/subCategory";
import { NextResponse } from "next/server";

/**
 * Title: route
 * Description:
 * Filename: route.ts
 * Path: /app/api/subCategory/[id]/route.ts
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 08, 2023
 * Last Updated Date: Nov 08, 2023
 *
 */
export async function GET(
  request: any,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  if (id) {
    await connectMongoDB();
    const subcategories = await SubCategory.find({ cat_id: id });
    return NextResponse.json({ subcategories }, { status: 200 });
  }
  return NextResponse.json({ message: "Server Error" }, { status: 500 });
}
