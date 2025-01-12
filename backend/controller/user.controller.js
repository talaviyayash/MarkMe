import mongoose from "mongoose";
import User from "../modal/user.modal.js";

const userInfo = async (req, res) => {
  const userId = new mongoose.Types.ObjectId(req?.user?._id);

  const result = await User.aggregate([
    { $match: { _id: userId } },
    {
      $lookup: {
        from: "schools",
        localField: "school",
        foreignField: "_id",
        as: "schoolInfo",
      },
    },
    { $unwind: { path: "$schoolInfo", preserveNullAndEmptyArrays: true } },
    {
      $project: {
        _id: 1,
        name: 1,
        email: 1,
        role: 1,
        school: {
          id: "$schoolInfo._id",
          name: "$schoolInfo.name",
          address: "$schoolInfo.address",
        },
      },
    },
  ]);

  return res.status(200).send({
    success: true,
    message: "User information retrieved successfully",
    data: result?.[0],
  });
};

export { userInfo };
