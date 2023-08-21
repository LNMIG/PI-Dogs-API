const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('breed', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      //set (value) { this.setDataValue('id', value*1000)}
    },
    flag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    height: {
        type: DataTypes.STRING,
        allowNull: false
      },
    weight: {
      type: DataTypes.STRING,
      allowNull: false
    },
    life_span: {
        type: DataTypes.STRING,
      },
    image: {
      type: DataTypes.STRING,
    },
  });
}