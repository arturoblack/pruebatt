const { request } = require('express');
const express = require('express');
const authCtrl = require('../controllers/auth.controller');
const orderCtrl = require('../controllers/order.controller');
const productCtrl = require('../controllers/product.controller');
const userCtrl = require('../controllers/user.controller');
const {isLogin, isBoss} = require('../interceptors/auth.interceptor');


const router = express.Router();
/* GET users listing. */
router.post('/auth/login', authCtrl.login );

router.get('/product', isLogin, productCtrl.list );
router.get('/user/rl', isLogin, userCtrl.listRL );

router.get('/order/list', isLogin, orderCtrl.list );
router.post('/order/register', isLogin,  orderCtrl.register );
router.put('/order/change-state', isLogin, isBoss,  orderCtrl.changeState );


module.exports = router;
