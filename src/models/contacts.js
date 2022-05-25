'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contacts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Message, {sourceKey: 'id'})
    }
  }
  contacts.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Contact',
    tableName: 'contacts'
  });
  return contacts;
};