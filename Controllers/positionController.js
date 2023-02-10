const db = require("../Models");
const Position = db.positions;
const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");

const findAll = async (req, res) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.secretKey);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { description, location, full_time, page = 1, limit = 0 } = req.query;

    const where = {};

    if (description) {
      where.description = {
        [Sequelize.Op.like]: `%${description}%`,
      };
    }

    if (location) {
      where.location = {
        [Sequelize.Op.like]: `%${location}%`,
      };
    }

    if (full_time === "true") {
      where.type = "Full Time";
    }

    const positions = await Position.findAll({
      where,
      limit: limit ? parseInt(limit) : undefined,
      offset: limit ? (parseInt(page) - 1) * parseInt(limit) : undefined,
    });

    return res.json(positions);
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    return res.status(500).json({ error: err.message });
  }
};


const findOne = async (req, res) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.secretKey);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const position = await Position.findByPk(req.params.id);
    if (!position) {
      return res.status(404).json({ error: "Position not found" });
    }
    return res.json(position);
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  findAll,
  findOne,
};
