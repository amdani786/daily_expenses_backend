const express = require('express');
const router = express.Router();

const authentication = require('../controllers/authentication/authentication_routes');

router.use('/authentication',authentication);

module.exports = router;