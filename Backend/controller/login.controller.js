import bcryptjs from "bcryptjs";
import User from "../model/user.model.js";

export const logIn = async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const existingUser = await User.findOne({ emailId });
    const checkPassword = await bcryptjs.compare(
      //comparing the password provided and the password fetched from db after decoding
      password,
      existingUser.password
    );
    if (!existingUser || !checkPassword) {
      return res.status(400).json({ message: "Invalid email Id or password." });
    } else {
      // req.session.user = emailId;
      return res.status(200).json({
        message: "Login Successful",
        user: {
          id: existingUser._id, //to provide user data in response
          emailId: existingUser.emailId,
          fullName: existingUser.fullName,
        },
      });
    }

    /************ Updated Code *************/

    // if (!existingUser) {
    //   return res.status(400).json({ message: "User does not exist!" });
    // }
    // const checkPassword = bcryptjs.compare(password, existingUser.password);
    // if (!checkPassword) {
    //   return res.status(400).json({ message: "Invalid credentials!" });
    // }
    // return res
    //   .status(200)
    //   .json({
    //     data: {
    //       id: existingUser._id,
    //       emailId: existingUser.emailId,
    //       fullName: existingUser.fullName,
    //     },
    //     message: "Login Successful",
    //   });
  } catch (error) {
    console.log("Error in logging in: ", error.message);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};
