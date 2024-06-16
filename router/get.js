const { Router } = require("express");
const router = Router();
const getApi  = require('../controller/get');

router.get('/api/data', getApi());

module.exports = router;