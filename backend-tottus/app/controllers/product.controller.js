const db = require('../models');

exports.list = async function(req, res) {
  try {
    const products = await db.Product.findAll();

    res.status(200).json(products);
  } catch(err) {
    res.status(500).json({error: err});
  }
}