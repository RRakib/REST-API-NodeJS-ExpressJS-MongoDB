let express = require("express");
let router = express.Router();

// GET Request
router.get("/get" , (req, res) => {
    res.send({
        type : "GET"
    })
})

// POST Request
router.post("/post" , (req, res) => {
    res.send({
        type : "GET"
    })
})

// PUT Request
router.put("/put" , (req, res) => {
    res.send({
        type : "GET"
    })
})

// DELETE Request
router.delete("/delete" , (req, res) => {
    res.send({
        type : "GET"
    })
})


module.exports = router