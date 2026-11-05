import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import jwt from "jsonwebtoken"
export const login = async (req, res, next) => {
  try {
    const { name, password } = req.body;
console.log(name,password);
    const user = await User.findOne({ name }).select("+password");
    if (!user) return next(console.log("Invalid Email or Password"));

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return next(console.log("Invalid Email or Password"));

    sendCookie(user, res, `Welcome back, ${user.name,user._id}`, 200);
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res,next) => {
  try {
    const { name, email, password } = req.body;
console.log(name,email,password)
    let user = await User.findOne({ name });

    if (user) return next(res.send(user));

    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({ name, email, password: hashedPassword });

    sendCookie(user, res, "Registered Successfully", 201);
  } catch (error) {
    next(error);
  }
};


export const getMyProfile = async(req, res) => {
  const id="myid";
  const {token}=req.cookies;
  console.log(token)
if(!token)
  return res.status(404).json({
success:"fail",
message:"Log in first"
  })
  const decoded=jwt.verify(token,"hackked")
  
  const user=await User.findById(decoded._id)
  res.status(200).json({
    success: true,
    user,
  });
};

export const logout = (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      sameSite: process.env.NODE_ENV === "Develpoment" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Develpoment" ? false : true,
    })
    .json({
      success: true,
      user: req.user,
    });
};
