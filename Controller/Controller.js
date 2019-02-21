let express = require("express");
let router = express.Router();



// GET Request
router.get("/rakib" , (req, res) => {
    res.send({
        type : "GET"
    })
})

// POST Request
router.post("/rakib" , (req, res) => {
    console.log(req.body)
    res.send({
        type : "POST",
        name : req.body.name,
        id : req.body.id
    })
})

// PUT Request
router.put("/rakib/:id" , (req, res) => {
    res.send({
        type : "PUT",
        id : req.params.id
    })
})

// DELETE Request
router.delete("/rakib/:id" , (req, res) => {
    res.send({
        type : "DELETE",
        id : req.params.id
    })
})


module.exports = router