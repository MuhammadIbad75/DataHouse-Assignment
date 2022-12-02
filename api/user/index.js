'use strict';

const router = require('express').Router();
const controller = require('./user.controller');

router.post('/calculateCompatibility', controller.calculateCompatibility);

module.exports = router;
