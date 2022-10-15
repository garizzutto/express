'use-strict';
const express = require('express');
const router = express.Router();

const controller = require('./controller/index');

router.get('/route', controller.controller.get);
router.post('/route', controller.controller.post);

module.exports = router;