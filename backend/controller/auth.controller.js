import User from "../modal/user.modal.js";

const generateToken = async (_id) => {
  const userFind = await User.findById(_id);
  const token = await userFind.generateToken();
  return token;
};

const signUser = async (req, res) => {
  const { email, name, password, role } = req?.body || {};
  const exists = await User.findOne({
    email,
  });

  if (exists) {
    return res.status(409).send({
      success: false,
      message: "Email already in use. Please try another or log in.",
    });
  }

  const create = await User.create({
    name,
    email,
    password,
    role,
  });

  const token = await generateToken(create._id);

  const userInfo = {
    role: create.role,
    name: create.name,
    email: create.email,
    _id: create._id,
    token,
  };

  return res.status(201).send({
    success: true,
    message: "Your account has been successfully created. Welcome!",
    data: userInfo,
  });
};

const logInUser = async (req, res) => {
  const { email, password } = req?.body || {};
  const userInfo = await User.findOne({
    email,
  });

  if (!userInfo) {
    return res.status(404).send({
      success: false,
      message: "No account found with this email.",
    });
  }

  const isPasswordCorrect = await userInfo.isPasswordCorrect(password);
  if (!isPasswordCorrect) {
    return res.status(401).send({
      success: false,
      message: "Incorrect password. Please try again.",
    });
  }
  const token = await userInfo.generateToken();

  const userInformation = {
    role: userInfo.role,
    name: userInfo.name,
    email: userInfo.email,
    _id: userInfo._id,
    token,
  };

  return res.status(200).send({
    success: true,
    message: "Welcome back! You have successfully logged in.",
    data: userInformation,
  });
};

export { signUser, logInUser };
