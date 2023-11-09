import { Poppins } from "next/font/google";

/**
 * Title: font
 * Description:
 * Filename: font.ts
 * Path: /app/utils/font.ts
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 09, 2023
 * Last Updated Date: Nov 09, 2023
 *
 */
export const poppins = Poppins({
  subsets: ["latin"],
  display: "auto",
  weight: ["100", "300"],
});
