const { Router } = require("express");
const router = Router();
const User = require("./users");

router.use("/usuario", User);

module.exports = router;
