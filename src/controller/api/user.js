const bcrypt = require("bcrypt");
const { User } = require("../../models");
const { signToken } = require("../../util/auth");

const signUp = async (req, res) => {
  try {
    const { fullName, username, email, password } = req.body;

    if (!fullName && !username && !email && !password) {
      console.log(`[ERROR]: Failed to sign up | All the fields are required`);
      return res
        .status(400)
        .json({ success: false, error: "Failed to sign up" });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      await bcrypt.genSalt(10)
    );

    const user = await User.create({
      fullName,
      username,
      email,
      password: hashedPassword,
    });

    return res.json({ success: true, user });
  } catch (error) {
    console.log(`[ERROR]: Failed to sign up | ${error.message}`);
    return res.status({ success: failed, error: "Failed to sign up" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      console.log(`[ERROR]: Failed to Login | Account does'nt exist`);
      return res.status(400).json({ success: false, error: "Failed to login" });
    }

    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword) {
      console.log(`[ERROR]: Failed to Login | Password is incorrect`);
      return res.status(400).json({ success: false, error: "Failed to login" });
    }

    const accessToken = signToken(user);

    return res.json({ success: true, user, accessToken });
  } catch (error) {
    console.log(`[ERROR]: Failed to login | ${error.message}`);
    return res.status({ success: false, error: "Failed to login" });
  }
};

module.exports = { signUp, login };
