import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  // If you are sending header:  token: <jwt>
  const token = req.header("token");  // or: const { token } = req.headers;

  if (!token) {
    return res.json({ success: false, message: "Not Authorized Login Again" });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET); // JWT_SECRET must match signing secret
    req.body.userId = token_decode._id;  // _id because you signed { _id: user._id }
    next();
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

export default authMiddleware;

