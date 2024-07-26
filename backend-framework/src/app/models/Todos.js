const { Model, DataTypes } = require("sequelize");

class Todos extends Model {
  static init(sequelize) {
    super.init(
      {
        task: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM("pending", "completed"),
          allowNull: false,
          defaultValue: "pending",
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        sequelize,
        modelName: "todos",
        timestamps: true,
        underscored: false,
      }
    );
  }
}

module.exports = Todos;
