import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();
  res.status(200).json({ message: "Database Connected!" });
}
