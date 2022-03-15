const express = require('express');
const { getAndWriteNames } = require('../../controllers/controller');

const router = express.Router();

router.get('/', getAndWriteNames);

module.exports = router;
