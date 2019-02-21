let express = require("express");
let router = express.Router();
let Friends = require("../Model/model");



// GET Request
router.get("/rakib" , (req, res) => {
    Friends.find({}).then((data) => {
        res.send(data)
    })
})

// POST Request
router.post("/rakib" , (req, res) => {
    let Frineds = new Friends(req.body).save((err ,data) => 
    {
        if(err) 
        {
            res.status(422).send("name : " + err.errors.name.message);
        }

        res.send(data)
    });

})

// PUT Request
router.put("/rakib/:id" , (req, res) => {
    Friends.findOneAndUpdate({ _id : req.params.id } , req.body).then((data) => {
        res.send( data + " is Updated")
    })
})

// DELETE Request
router.delete("/rakib/:id" , (req, res) => {
    Friends.findOneAndDelete({ _id : req.params.id}).then((data) => {
        res.send( data + " is Deleted")
    })
})


module.exports = router