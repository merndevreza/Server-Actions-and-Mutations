"use server";

import connectMongo from "@/dbConnect/connectMongo";
import User from "@/models/User";
import wait from "@/utils/wait";
import { revalidatePath } from "next/cache";

export const addUser = async (flag, formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const type = formData.get("type");
  const userData = {
    name,
    email,
  };
  console.log(flag);
  console.log(type);
  try {
    await connectMongo();
    //Add delay
    await wait(3000)
    //insert into the database
    await new User(userData).save();
    //revalidate users
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    await connectMongo();

    //insert into the database
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
  }
};
