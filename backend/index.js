const { HoldingModels } = require("./models/HoldingModels");
const {PositionModels} =require("./models/PositionModels")
const {OrdersModel} =require("./models/OrderModels");
const User = require("./models/UserModel");
const {Login} = require("./Controllers/AuthControllers");
const passport = require("passport");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const { userVerification } = require("./Middlewares/AuthMiddleware");
const { WatchlistUser } = require("./Middlewares/watchlist");
const { MONGOdb_URL} = process.env;
const session = require('express-session');
const flash = require('connect-flash');


mongoose
   .connect(MONGOdb_URL)
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));


  //used after session as passport uses session data so user does not have to login again if opened website
//on different tabs.
app.use(passport.initialize());


//all the users should be authenticated with local strategy(username, password) by using authenticate method.
// passport.use(new LocalStrategy(User.authenticate()));


//saving and unsaving user into the session.
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

 const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(
  cors({
    origin: ["https://zerodha-di09.onrender.com","https://zerodha-dashboard-12z0.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);



// Session middleware
app.use(
  session({
    secret: process.env.TOKEN_KEY, // Replace with a secure key
    resave: false,
    saveUninitialized: true,
  })
);


// Flash middleware
app.use(flash());


app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);

app.get("/allHoldings", async(req,res) =>{
     let allHoldings = await HoldingModels.find({});
    //  console.log(allHoldings);
     res.json(allHoldings);
});

app.get("/allPositions", async(req,res) =>{
  let allPositions = await PositionModels.find({});
  res.json(allPositions);
  });


 app.post('/newOrder', userVerification, async (req, res) => {
    console.log("User ID from middleware:", req.userId); // Debugging
    const { name, qty, price, mode } = req.body;

  
    try {
        const newOrder = new OrdersModel({
          
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode,
            userId: req.userId,  // Should be set by the middleware
        });
      // Simulate order processing logic
   if (!name || qty <= 0 || price <= 0) {
  req.flash('error', 'Invalid order details!');
  return res.status(400).json({ error: req.flash('error') });
}
if(mode=="BUY"){
  req.flash('success', `Order Buy successfully for ${qty} units of ${name} at ₹${price}`);
}else{
  req.flash('success', `Order placed successfully for ${qty} units of ${name} at ₹${price}`);
}

res.status(200).json({ success: req.flash('success') });
        const savedOrder = await newOrder.save();

        // res.status(201).json({ success: true, Order: savedOrder });
    } catch (err) {
        console.error("Order save error:", err);
        res.status(500).json({ success: false, message: 'Failed to create order', error: err });
    }
});
  // app.post("/newOrder",userVerification,
  //   async (req, res) => {
  //  console.log(req.body);
  //  console.log(req.user);
  //   let newOrder = new OrdersModel({
      
  //    name: req.body.name,
  //    qty: req.body.qty,
  //    price: req.body.price,
  //    mode: req.body.mode,
  //    user:req.user,
  // //  owner:req.user._id,
  //   });
    
  //   newOrder.save();
  //   console.log(newOrder);
  //   res.send("Order saved!");
  //   });


    app.get("/allOrders",userVerification, async(req,res) =>{
      try {
        const allOrders = await OrdersModel.find({ userId: req.userId }).sort({ createdAt: -1 }); // Fetch user's orders, most recent first
        res.json({ success: true, allOrders: allOrders || [] }); 
      } catch (err) {
        console.error('Error fetching orders:', err);
        res.status(500).json({ success: false, message: 'Failed to fetch orders' });
      }
    });
    // Delete endpoint
app.delete('/allorders/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedOrder = await OrdersModel.findByIdAndDelete(id);
    if (!deletedOrder) {
      req.flash("your order is not found")
      return res.status(404).json({ message: 'Order not found' });
   
    }
    res.status(200).json({ message: 'Order deleted successfully', deletedOrder });
    req.flash("your order deleted successfully");
  } catch (error) {
    req.flash("your order is not delete");
    res.status(500).json({ message: 'Error deleting order', error });
  }
});

// const express = require("express");
// const app= express();







// // mongo db url


// // app.get("/addHoldings",(req,res)=>{
// //     const tempHolding = [
// //         {
// //             name: "BHARTIARTL",
// //             qty: 2,
// //             avg: 538.05,
// //             price: 541.15,
// //             net: "+0.58%",
// //             day: "+2.99%",
// //           },
// //           {
// //             name: "HDFCBANK",
// //             qty: 2,
// //             avg: 1383.4,
// //             price: 1522.35,
// //             net: "+10.04%",
// //             day: "+0.11%",
// //           },
// //           {
// //             name: "HINDUNILVR",
// //             qty: 1,
// //             avg: 2335.85,
// //             price: 2417.4,
// //             net: "+3.49%",
// //             day: "+0.21%",
// //           },
// //           {
// //             name: "INFY",
// //             qty: 1,
// //             avg: 1350.5,
// //             price: 1555.45,
// //             net: "+15.18%",
// //             day: "-1.60%",
// //             isLoss: true,
// //           },
// //           {
// //             name: "ITC",
// //             qty: 5,
// //             avg: 202.0,
// //             price: 207.9,
// //             net: "+2.92%",
// //             day: "+0.80%",
// //           },
// //           {
// //             name: "KPITTECH",
// //             qty: 5,
// //             avg: 250.3,
// //             price: 266.45,
// //             net: "+6.45%",
// //             day: "+3.54%",
// //           },
// //           {
// //             name: "M&M",
// //             qty: 2,
// //             avg: 809.9,
// //             price: 779.8,
// //             net: "-3.72%",
// //             day: "-0.01%",
// //             isLoss: true,
// //           },
// //           {
// //             name: "RELIANCE",
// //             qty: 1,
// //             avg: 2193.7,
// //             price: 2112.4,
// //             net: "-3.71%",
// //             day: "+1.44%",
// //           },
// //           {
// //             name: "SBIN",
// //             qty: 4,
// //             avg: 324.35,
// //             price: 430.2,
// //             net: "+32.63%",
// //             day: "-0.34%",
// //             isLoss: true,
// //           },
// //           {
// //             name: "SGBMAY29",
// //             qty: 2,
// //             avg: 4727.0,
// //             price: 4719.0,
// //             net: "-0.17%",
// //             day: "+0.15%",
// //           },
// //           {
// //             name: "TATAPOWER",
// //             qty: 5,
// //             avg: 104.2,
// //             price: 124.15,
// //             net: "+19.15%",
// //             day: "-0.24%",
// //             isLoss: true,
// //           },
// //           {
// //             name: "TCS",
// //             qty: 1,
// //             avg: 3041.7,
// //             price: 3194.8,
// //             net: "+5.03%",
// //             day: "-0.25%",
// //             isLoss: true,
// //           },
// //           {
// //             name: "WIPRO",
// //             qty: 4,
// //             avg: 489.3,
// //             price: 577.75,
// //             net: "+18.08%",
// //             day: "+0.32%",
// //           },
// //     ];


// //     tempHolding.forEach((item)=>{
// //         let newHolding = HoldingModels({
// //             name: item.name,
// //             qty:item.qty,
// //             avg: item.avg,
// //             price:item.price,
// //             net:item.net,
// //             day: item.day,
// //         });
           
// //      newHolding.save();
       
// //     });
// //     res.send("done")
// // });

// // app.get("/addpositions", (req,res)=>{
// //      let tempPositions =[
        
// //             {
// //               product: "CNC",
// //               name: "EVEREADY",
// //               qty: 2,
// //               avg: 316.27,
// //               price: 312.35,
// //               net: "+0.58%",
// //               day: "-1.24%",
// //               isLoss: true,
// //             },
// //             {
// //               product: "CNC",
// //               name: "JUBLFOOD",
// //               qty: 1,
// //               avg: 3124.75,
// //               price: 3082.65,
// //               net: "+10.04%",
// //               day: "-1.35%",
// //               isLoss: true,
// //             },
          
// //      ];

// //     tempPositions.forEach((item) => {
// //         let newPositions = PositionModels({
// //             product:item.product,
// //             name:item.name,
// //             qty: item.qty,
// //             avg:item.avg,
// //             price: item.price,
// //             net: item.net,
// //             day: item.day,
// //             isLoss:item.isLoss,
// //         });
// //        newPositions.save();
        
// //      });
// //      res.send("done positions");
// // });




// // just testing

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const app = express();
// require("dotenv").config();
// const cookieParser = require("cookie-parser");
// const authRoute = require("./Routes/AuthRoute");
// const { MONGOdb_URL, PORT } = process.env;
// const {PositionModels } = require("./models/positionModels");
// const {HoldingModels } = require("./models/HoldingModels");
// const {OrdersModel} = require("./models/OrderModels");
// const bodyParser = require("body-parser");



// mongoose
//   .connect(MONGOdb_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB is  connected successfully"))
//   .catch((err) => console.error(err));

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

// app.use("/", authRoute);

// app.use(cookieParser());

// app.use(express.json());

// app.use (cors());
// app.use (bodyParser.json());

// app.get("/allHoldings", async(req,res) =>{
//   let allHoldings = await HoldingModels.find({});
//   console.log(allHoldings);
//   res.json(allHoldings);
// });

// app.get("/allPositions", async(req,res) =>{
// let allPositions = await PositionModels.find({});
// res.json(allPositions);
// });
// app.post("/newOrder", async (req, res) => {
// let newOrder = new OrdersModel({
//  name: req.body.name,
//  qty: req.body.qty,
//  price: req.body.price,
//  mode: req.body.mode,
// });

// newOrder.save();

// res.send("Order saved!");
// });
// app.get("/allOrders", async(req,res) =>{
// let allOrders = await OrdersModel.find({});
// console.log(allOrders);
// res.json(allOrders);
// });

// app.use(
//   cors({
//     origin: ["http://localhost:3000","http://localhost:3001"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

