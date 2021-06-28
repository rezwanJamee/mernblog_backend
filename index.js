const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//Routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");


dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
    })
    .then(console.log("MongoDB Connected."))
    .catch((err) => console.log(err));

mongoose.set('useFindAndModify', false);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen("5000", () => {
    console.log("Backend is running...");
});