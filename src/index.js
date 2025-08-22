const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
     return res.status(200).send({message: "Welcome to the E-commerce API"});
})

const authRouters = require("./routes/auth.route");
app.use("/auth", authRouters);

const userRouters = require("./routes/user.route");
app.use("/api/users", userRouters);

const orderRouters = require("./routes/order.route");
app.use("/api/orders", orderRouters);

const productRouters = require("./routes/product.route");
app.use("/api/products", productRouters);

// Add men's kurta specific route
app.use("/api/men", productRouters);

module.exports = app;
