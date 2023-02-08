const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  `postgres://postgres:admin@localhost:5432/TestAgit`,
  {
    dialect: "postgres",
  }
);

const connectToDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
};

connectToDb();

const db = {
  Sequelize,
  sequelize,
  users: require("./userModel")(sequelize, DataTypes),
  positions: require("./positionModel")(sequelize, DataTypes),
};

module.exports = db;
