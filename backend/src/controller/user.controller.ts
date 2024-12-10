import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshToken = async (_id: string) => {
  const userFind = (await User.findById(_id)) as IUser | null;
  const accessToken = await userFind?.generateAccessToken();
  const refreshToken = await userFind?.generateRefreshToken();
  userFind.refreshToken = refreshToken;
  userFind.save({ validateBeforeSave: false });
  return { accessToken, refreshToken };
};
