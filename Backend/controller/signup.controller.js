import User from "../model/user.model.js";

export const signupUser = async (req, res) => {
  try {
    const { fullName, emailId, password, phoneNumber } = req.body;
    const user = await User.findOne({ emailId }); //searching emailId if there's existing user already
    if (user) {
      return res.status(400).json({ message: "Email already exists." }); //return
    }
    const createUser = new User({
      fullName,
      emailId,
      password,
      phoneNumber,
    });
    await createUser.save();
    return res.status(201).json({ message: "Sign up successfull." }); //return the response status to fix errors on multiple request
  } catch (error) {
    console.log("Error on signing up user: ", error.message);
    return res.status(500).json({ message: "Internal Server Error." }); //return
  }
};
