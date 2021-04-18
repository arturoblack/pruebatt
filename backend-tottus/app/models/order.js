'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    date: DataTypes.DATE,
    // INITIAL, ASSIGNED, FINALIZED
    state: DataTypes.STRING(12),
    quantity: DataTypes.INTEGER,
    assignedTo: {type: DataTypes.INTEGER, allowNull: true},
  }, {schema: 'public'});
  return Order;
};
