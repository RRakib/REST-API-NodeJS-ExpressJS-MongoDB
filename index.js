let express = require("express");
let Controller = require("./Controller/Controller");

let app = express();

// Routing The Data Flow
app.use("/api",Controller)


app.listen(process.env.port || 4000 , () => {
    console.log("Connected To The Post 4000")
})