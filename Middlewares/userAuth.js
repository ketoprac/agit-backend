const db = require("../Models");
const User = db.users;

const saveUserMiddleware = async (req, res, next) => {
  try {
    const existingUsername = await User.findOne({
      where: { userName: req.body.userName },
    });

    if (existingUsername) {
      return res.status(409).send({ message: "Username already taken" });
    }

    const existingEmail = await User.findOne({
      where: { email: req.body.email },
    });

    if (existingEmail) {
      return res.status(409).send({ message: "Email already taken" });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = {
  saveUser: saveUserMiddleware,
};
