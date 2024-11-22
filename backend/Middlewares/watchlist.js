const User = require("../models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");




module.exports.WatchlistUser = (req, res, next) => {
       const token = req.cookies.token;
    
      if (!token) {
        return res.json({ status: false });
      }
    
      jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
          return res.json({ status: false });
        } else {
          const user = await User.findById(data.id);
          if (user) {
            req.user = user._id; // Attach user ID to the request object
            // Optionally attach username if needed
             // Proceed to the next middleware/route handler
          } else {
            return res.json({ status: false });
          }
        }
      });
    };