const { DataTypes } = require("sequelize");
const sequelize = require("./db");
const Entry = require("./Entry");

const Image = sequelize.define(
  "Image",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    entry_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Entry,
        key: "id",
      },
    },
    url: {
      type: DataTypes.STRING(255),
    },
    description: {
      type: DataTypes.STRING(255),
    },
    uploaded_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "Images",
    timestamps: false, // Verhindert automatische timestamps
  }
);

Image.belongsTo(Entry, { foreignKey: "entry_id" });
Entry.hasMany(Image, { foreignKey: "entry_id" });

module.exports = Image;
