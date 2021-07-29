'use strict';
const {
  Model
} = require('sequelize');
const db = require('.');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.hasMany(models.url);  // 관계 설정 방법 (2)
    }
  };
  user.init({
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};