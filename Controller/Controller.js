let express = require("express");
let router = express.Router();
let Friends = require("../Model/model");

// res.send({
//             id : data._id,
//             name : data.name,
//             location : data.location,
//             field : data.field,
//             available : data.available
//         })

// GET Request
router.get("/friends/api" , (req, res) => {
    Friends.find({}).then(data => {
        res.render("api" , {
            info : data
        })
    }).catch((err) => {
        res.send(" Could Not Find Data. " + err)
    })
})
router.get("/rakib/:location" , (req, res) => {
    Friends.find({ location : req.params.location}).then((data) => {
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