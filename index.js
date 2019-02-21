let express = require("express");
let Controller = require("./Controller/Controller");

let app = express();
app.use(express.urlencoded({ extended : false}))
app.use(express.json())


// Routing The Data Flow
app.use("/api",Controller)


app.listen(process.env.port || 4000 , () => {
    console.log("Connected To The Post 4000")
})