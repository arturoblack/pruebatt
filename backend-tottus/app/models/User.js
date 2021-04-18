'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING(50),
    email: { type: DataTypes.STRING(50), unique: true },
    password: DataTypes.STRING,
    rol:  DataTypes.STRING(50),
  }, {schema: 'public'});
  User.associate = function(models) {
    User.hasMany(models.Order, {
      foreignKey: 'createBy',
    });
  };
  return User;
};
