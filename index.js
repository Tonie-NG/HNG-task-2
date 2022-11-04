const express = require("express");
const cors = require("cors");
const taskRoute = require("./taskRoute");
const taskRoute2 = require("./taskRoute2");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/task", taskRoute);
app.use("/enum", taskRoute2);

// port = process.env.PORT || 5001;

app.listen(5000, () => {
  console.log(`Server is running`);
});
