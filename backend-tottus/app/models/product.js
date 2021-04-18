'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING(100),
    category: DataTypes.STRING(50),
  }, {schema: 'public'});
  Product.associate = function(models) {
    Product.hasMany(models.Order, {
      foreignKey: 'productId',
    });
  };
  return Product;
};
