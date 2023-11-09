/**
 * Title: route
 * Description:
 * Filename: route.ts
 * Path: /app/api/dua/route.ts
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 08, 2023
 * Last Updated Date: Nov 08, 2023
 *
 */

import connectMongoDB from "@/app/utils/mongodb";
import Dua from "@/models/dua";
import { NextResponse } from "next/server";

// 1st POST Method
export async function POST(request: any) {
  const {
    id,
    cat_id,
    subcat_id,
    dua_id,
    dua_name_bn,
    dua_name_en,
    top_bn,
    top_en,
    dua_arabic,
    dua_indopak,
    clean_arabic,
    transliteration_bn,
    transliteration_en,
    translation_bn,
    translation_en,
    bottom_bn,
    bottom_en,
    refference_bn,
    refference_en,
    audio,
  } = await request.body;

  if (id) {
    await connectMongoDB();
    await Dua.create({
      id,
      cat_id,
      subcat_id,
      dua_id,
      dua_name_bn,
      dua_name_en,
      top_bn,
      top_en,
      dua_arabic,
      dua_indopak,
      clean_arabic,
      transliteration_bn,
      transliteration_en,
      translation_bn,
      translation_en,
      bottom_bn,
      bottom_en,
      refference_bn,
      refference_en,
      audio,
    });

    return NextResponse.json({
      message: "Created Successfully",
      status: "201",
    });
  }
  return NextResponse.json({ message: "Insert Value", status: "200" });
}

// 2nd POST Method

// export async function POST(request: any) {
//   await connectMongoDB();
//   await Dua.insertMany();

//   return NextResponse.json({
//     message: "Created Successfully",
//     status: "201",
//   });
// }

export async function GET() {
  await connectMongoDB();
  const duas = await Dua.find();
  return NextResponse.json({ duas });
}
