import User from "../models/user.model.js";
const generateAccessAndRefreshToken = async (_id) => {
    const userFind = (await User.findById(_id));
    const accessToken = await userFind?.generateAccessToken();
    const refreshToken = await userFind?.generateRefreshToken();
    userFind.refreshToken = refreshToken;
    userFind.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
};
