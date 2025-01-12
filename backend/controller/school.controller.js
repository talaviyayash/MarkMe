import School from "../modal/school.modal.js";
import User from "../modal/user.modal.js";

const createSchool = async (req, res) => {
  const { principalEmail, name, address } = req.body;

  let userInfo = await User.findOne({ email: principalEmail });

  if (userInfo?.school) {
    console.log("called");
    return res.status(409).send({
      success: false,
      message: "User already associated with another school.",
    });
  }

  if (!userInfo) {
    userInfo = await User.create({
      email: principalEmail,
      password: "Admin@123",
      role: "principal",
    });
  }

  const createdSchool = await School.create({
    name: name,
    principalId: userInfo?._id,
    address,
  });

  await User.findByIdAndUpdate(userInfo?._id, {
    $set: { role: "principal", school: createdSchool?._id },
  });

  return res.status(201).send({
    success: true,
    message: "School created successfully.",
    school: createdSchool,
  });
};

export { createSchool };
