const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const userRoute = require("./src/modules/users/user.route");

const app = express();

// regular middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cooke middleware
app.use(cookieParser());

// routes
app.use("/api/v1/", userRoute);

app.get("/", (req, res) => {
  res.send("Welcome to prisma testing server!");
});

// app.get("/api/users", async (req, res) => {
//   const users = await prisma.user.findMany();
//   res.send(users);
// });

app.listen(5000, () => {
  console.log(`Server on running port 5000`);
});
