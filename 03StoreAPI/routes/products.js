const express = require("express");
const router = express.Router();
const {productRoute} = require('../controllers/products')
const {productStaticRoute} = require('../controllers/products')


router.route('/').get(productRoute)
router.route('/static').get(productStaticRoute);

module.exports = router;