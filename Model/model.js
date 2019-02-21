let mongoose = require("mongoose");



// Schema
const rakibSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , "Name field is Required"]
    },
    field : {
        type : String
    },
    available : {
        type : Boolean,
        default : false
    },
    location : {
        type : String,
        default : "Bangladesh"
    }
})

// Model OR Collection
const Friends = new mongoose.model("Frined" , rakibSchema);





module.exports = Friends;