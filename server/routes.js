const express = require("express");
const routes = express.Router();
const qrcode = require("qrcode");
const {Client} = require("whatsapp-web.js");

let qrTetxe = "";

const clien = new Client();

routes.get("/home",(req,res) =>{
    res.render("pages/home");
})

routes.get("/qrcode",(req,res) =>{
    qrcode.toDataURL(qrTetxe, (err,src) =>{
        console.log("depuis toDataUrl\n",qrTetxe);
        if(err){
            console.log("redirection");
         res.redirect("/");
         return;
        }
        // qrTetxe = '';
        // console.log("link qrcode ",src);
        res.render("pages/qrcode", {qrcode : src}); 
        res.redirect("/home");

     })
})

routes.get("/",(req,res) =>{
    clien.on("qr",qr =>{
        console.log("clien\n",qr);
        qrTetxe = qrTetxe === "" ? qr : "";
        console.log("data :\n",qrTetxe);
        console.log("redirections");
        res.redirect('/qrcode');
    })
})

clien.initialize();

module.exports = routes;