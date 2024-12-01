const { Signup ,Login} = require("../Controllers/AuthControllers");
const { Holding } = require("../Controllers/Holding");
const router = require("express").Router();
const {userVerification}= require("../Middlewares/AuthMiddleware")

router.post("/signup", Signup);
router.post("/login", Login);
//router router.get("/Holding",Holding)
router.post("/", userVerification, (req, res) => {
    res.json({
        status: true,
        user: req.username, // or username, depending on middleware
    });
});


module.exports = router;