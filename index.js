let express = require("express");
let Controller = require("./Controller/Controller");

let app = express();
Controller(app)


app.listen(process.env.port || 4000 , () => {
    console.log("Connected To The Post 4000")
})