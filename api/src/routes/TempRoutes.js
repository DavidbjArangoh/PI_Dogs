const {Router} = require("express");
const getTempHandler = require("../handlers/tempHandlers");

const router = Router()

router.get("/temperaments", getTempHandler);

module.exports = router;


