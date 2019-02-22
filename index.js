let express = require("express");
let Controller = require("./Controller/Controller");
let homeController = require("./Controller/homeController");
let mongoose = require("mongoose");



// Connecting To MongoDB Atlas
mongoose.connect("mongodb://Rakib:12345@todo-shard-00-00-ptl6e.mongodb.net:27017,todo-shard-00-01-ptl6e.mongodb.net:27017,todo-shard-00-02-ptl6e.mongodb.net:27017/REST-API?ssl=true&replicaSet=todo-shard-0&authSource=admin&retryWrites=true" , {useNewUrlParser : true})
mongoose.connection.once("open", () => {
    console.log("Connected To MongoDB Atlas");
})
mongoose.connection.on("error" , (err) => {
    console.log("Error Occoured: " + err)
})







let app = express();
app.use(express.urlencoded({ extended : false}))
app.use(express.json())
app.set("view engine" , "ejs");
app.use(express.static("./Public"))



// Routing The Data Flow
app.use("/api",Controller)
app.use("/",homeController)


app.listen(process.env.port || 4000 , () => {
    console.log("Connected To The Post 4000")
})