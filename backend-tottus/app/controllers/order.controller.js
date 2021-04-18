const db = require('../models');
const {_INITIAL, _ASSIGNED, _FINALIZED,} = require('../constant');

exports.register = async function(req, res) {
  try {
    const {productId, quantity} = req.body;
    // search for existinf order
    let order = await db.Order.findOne({where: {
      state: _INITIAL,
      productId: productId
    }});
    if (order) {
      order.quantity = quantity;
      await order.save();
    } else {
      const newOrder = {
        date: new Date(),
        state: _INITIAL,
        quantity,
        assignedTo: null,
        productId,
        createBy: req.user.id, 
      }
      order = await db.Order.create(newOrder);
    }
    res.status(200).json(order);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

exports.list = async function(req, res) {
  try {
    const orders = await db.Order.findAll({
      where: {
        state: {
          [db.Sequelize.Op.not]: _FINALIZED
        }
      }
    });

    res.status(200).json(orders);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

exports.changeState = async function(req, res) {
  try {
    const {orderId, assignedTo} = req.body;
    let order = await db.Order.findOne({where:{id: orderId}});
    order.state = _ASSIGNED;
    order.assignedTo = assignedTo;
    await order.save();

    res.status(200).json(order);
  } catch(err) {
    res.status(500).json({error: err});
  }
}