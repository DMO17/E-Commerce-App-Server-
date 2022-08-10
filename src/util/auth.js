const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;
const expiration = "24h";

const signToken = ({ email, _id, username, fullName, isAdmin }) => {
  const payload = { email, _id, username, fullName, isAdmin };

  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

const authMiddleware = (req, res, next) => {
  let token = req.headers.authorization || req.headers.token;

  if (!token) {
    console.log("[ERROR]: Invalid Token");
    return res.status(401).json({ success: false });
  }

  try {
    token = token.split(" ").pop().trim();
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch (error) {
    console.log(`[ERROR]: Invalid Token | ${error.message}`);
    return res.status(500).json({ success: false });
  }

  next();
};

module.exports = {
  signToken,
  authMiddleware,
};
