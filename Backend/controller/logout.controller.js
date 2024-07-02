export const logOut = async (req, res) => {
  req.session.destroy();
  res.status(205).send("Logout successful");
};
