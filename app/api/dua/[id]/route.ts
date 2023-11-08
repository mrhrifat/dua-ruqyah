/**
 * Title: route
 * Description:
 * Filename: route.ts
 * Path: /app/api/dua/[id]/route.ts
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 08, 2023
 * Last Updated Date: Nov 08, 2023
 *
 */

import connectMongoDB from "@/app/utils/mongodb";
import Dua from "@/models/dua";
import { NextResponse } from "next/server";

export async function GET(
  request: any,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  if (id) {
    await connectMongoDB();
    const duas = Dua.find({ cat_id: id });
    return NextResponse.json({ duas }, { status: 200 });
  }
  return NextResponse.json({ message: "Server Error" }, { status: 500 });
}
