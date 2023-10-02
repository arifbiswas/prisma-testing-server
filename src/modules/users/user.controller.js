// bring in to prisma and cookie
const prisma = require("../../../prisma/index");
const { cookieToken } = require("../../../utils/cookieToken");

// user sign up

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // const hashedPassword = await bcrypt.hash(password, 10);
    console.log(name, email, password);
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    console.log(user);
    // res.status(200).json({ message: "User created successfully", user: user });
    cookieToken(user, res);
  } catch (error) {
    console.log(error.message);
  }
};
