import User from "../model/user.model.js";

export const getUser = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    console.log("Error in fetching users: ", error);
    return res.status(500).json({ message: "Error in fetching users" });
  }
};
