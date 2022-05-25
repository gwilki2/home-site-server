'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Contact, {foreignKey: 'contactId'})
    }
  }
  messages.init({
    message: {
      type: DataTypes.STRING,
      allowNull:false
    },
    contactId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Message',
    tableName: 'messages'
  });
  return messages;
}; 