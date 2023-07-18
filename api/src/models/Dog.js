const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'dog', 
    {
      ID: {
      type: DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      img: {
        type: DataTypes.STRING,
        allowNull :false
      },
      height_min:{
        type: DataTypes.JSON,
        allowNull :false
      },
      height_max:{
        type: DataTypes.JSON,
        allowNull :false
      },
      weight_min: {
        type: DataTypes.JSON,
        allowNull :false
      },
      weight_max: {
        type: DataTypes.JSON,
        allowNull :false
      },
      longevity:{
        type: DataTypes.STRING,
        allowNull :false
      }
    },
    {
      timestamps:false,
    });
};
