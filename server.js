const express = require("express");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const { sequelize } = require("./Models");
const userRoutes = require("./Routes/userRoutes");
const positionRoutes = require("./Routes/positionRoutes");
const cors = require("cors");

const port = process.env.PORT || 8080;

const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
    process.exit(1);
  });

app.use("/api/users", userRoutes);
app.use("/api/positions", positionRoutes);
app.listen(port, () => console.log(`Server is connected on port ${port}`));
