import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signupUser = async (req, res) => {
  try {
    const { fullName, emailId, password, phoneNumber } = req.body;
    const user = await User.findOne({ emailId }); //searching emailId if there's existing user already
    if (user) {
      return res.status(400).json({ message: "Email already exists." }); //return
    }
    const hashPassword = await bcryptjs.hash(password, 10); //hashing password, more the value, more stronger
    const createUser = new User({
      //make object to create data
      fullName: fullName,
      emailId: emailId,
      password: hashPassword,
      phoneNumber: phoneNumber,
    });
    await createUser.save();
    return res
      .status(201)
      .json({
        user: {
          id: createUser._id,
          emailId: createUser.emailId,
          fullName: createUser.fullName,
        },
        message: "Sign up successfull.",
      }); //return the response status to fix errors on multiple request
  } catch (error) {
    console.log("Error on signing up user: ", error.message);
    return res.status(500).json({ message: "Internal Server Error." }); //return
  }
};
