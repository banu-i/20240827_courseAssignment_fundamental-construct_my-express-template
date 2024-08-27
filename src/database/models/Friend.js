const { DataTypes } = require("sequelize");
const sequelize = require("./db");
const User = require("./User");

const Friend = sequelize.define(
  "Friend",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    friend_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "Friends",
    timestamps: false, // Verhindert automatische timestamps
  }
);

module.exports = Friend;
