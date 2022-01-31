const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/views/works.html");
});

app.get("/photo-gallery", (req, res) => {
    res.sendFile(__dirname + "/views/photoGallery.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/views/contact.html");
});

app.listen(3000, function() {
    console.log("We are now listening on port 3000");
});