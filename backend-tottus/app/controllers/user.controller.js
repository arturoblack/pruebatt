const db = require('../models');

exports.listRL = async function(req, res) {
  try {
    const users = await db.User.findAll({
      where: {rol: 'RL'},
      attributes: ['id', 'name'], 
    });

    res.status(200).json(users);
  } catch(err) {
    res.status(500).json({error: err});
  }
}