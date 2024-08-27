const { DataTypes } = require("sequelize");
const sequelize = require("./db");
const User = require("./User");

const Entry = sequelize.define(
  "Entry",
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
    title: {
      type: DataTypes.STRING(100),
    },
    content: {
      type: DataTypes.TEXT,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "Entries",
    timestamps: false, // Verhindert automatische timestamps
  }
);

Entry.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Entry, { foreignKey: "user_id" });

module.exports = Entry;
