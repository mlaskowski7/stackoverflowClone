"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetTopInteractedTagsParams } from "./shared.types";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();

    const { userId, limit = 3 } = params;

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");

    // TODO: Find interactions for the user and group by tags
    return [
      { _id: "1", name: "C#" },
      { _id: "2", name: "RUST" },
      { _id: "3", name: "GO" },
    ];
  } catch (error) {
    console.log(error);
    throw error;
  }
}
