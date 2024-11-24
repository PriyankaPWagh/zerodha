const { Signup ,Login} = require("../Controllers/AuthControllers");
const { Holding } = require("../Controllers/Holding");
const router = require("express").Router();
const {userVerification}= require("../Middlewares/AuthMiddleware")

router.post("https://zerodha-backend-wn62.onrender.com/signup", Signup);
router.post("https://zerodha-backend-wn62.onrender.com/login", Login);
//router router.get("/Holding",Holding)
router.post("https://zerodha-backend-wn62.onrender.com", userVerification, (req, res) => {
    res.json({
        status: true,
        user: req.username, // or username, depending on your middleware
    });
});

;
module.exports = router;