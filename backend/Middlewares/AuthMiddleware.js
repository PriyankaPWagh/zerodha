const User = require("../models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");


// module.exports.userVerification = (req, res,next) => {
//   const token = req.cookies.token
//  console.log(token);
//   if (!token) {
//     return res.json({ status: false })
//   }
//   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
//     console.log("Decoded data:", data);
//     if (err) {
//      return res.json({ status: false, message:"user is not looggin"})
//     } else {
//       const user = await User.findById(data.id)
//       req.userId=user._id;
    
//       if (user) return res.json({ status: true, user:user.username,})
        
//       else return res.json({ status: false ,message:"not saved your order"})
  
//     }

//   })
// }



module.exports.userVerification = async (req, res, next) => {
  const token = req.cookies.token;
  console.log("Token received:", token);

  if (!token) {
      return res.status(401).json({ status: false, message: "No token provided" });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, decoded) => {
      if (err) {
          console.error("JWT verification failed:", err);
          return res.status(403).json({ status: false, message: "Invalid or expired token" });
          
      }
      

      console.log("Decoded token:", decoded);
      const user = await User.findById(decoded.id);
      console.log ("currentUser",user);
      if (!user) {
          return res.status(404).json({ status: false, message: "User not found" });
      }

      req.userId = user._id;
      req.username=user.username;
      next();
  });
};



 