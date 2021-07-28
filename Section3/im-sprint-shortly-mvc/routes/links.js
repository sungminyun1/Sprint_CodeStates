const express = require('express');
const controller = require('../controllers/links/index');
const router = express.Router();

/* GET links listing. */
router.get('/', controller.get);

router.get('/:id', controller.getById);

router.post('/', controller.post)

module.exports = router;
