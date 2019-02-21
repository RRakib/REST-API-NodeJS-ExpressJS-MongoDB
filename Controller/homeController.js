let express = require("express");
let router = express.Router();


// GET Request
router.get("/" , (req, res) => {
    res.render("home")
})


module.exports = router;