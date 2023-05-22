const express = require("express");
const ejs = require("ejs");
const routes = require("./routes");
const app = express();

app.set("views","public");
app.set("view engine","ejs");
app.use(express.static("public"));


app.use("/",routes);

app.listen(3002,() =>{
    console.log("port 3002 ouvert :)");
})