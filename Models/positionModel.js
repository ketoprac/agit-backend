module.exports = (sequelize, DataTypes) => {
  const Position = sequelize.define(
    "position",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false
      },
      company_url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      how_to_apply: {
        type: DataTypes.STRING,
        allowNull: false
      },
      company_logo: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { timestamps: false }
  );
  return Position;
};
