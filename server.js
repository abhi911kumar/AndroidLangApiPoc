var express = require("express");
var app = express();
var fs = require("fs");

var port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
    res.send(
        "Android Language Test POC API '/api/lang/&lt;language&gt;'<br/><br/>Supported Language (en,hi,ma)"
    );
});

app.get("/api/lang/en", (req, res) => {
    var rawdata = fs.readFileSync("lang_en.json");
    var jsonData = JSON.parse(rawdata);
    res.send(jsonData);
});

app.get("/api/lang/hi", (req, res) => {
    var rawdata = fs.readFileSync("lang_hi.json");
    var jsonData = JSON.parse(rawdata);
    res.send(jsonData);
});

app.get("/api/lang/ma", (req, res) => {
    var rawdata = fs.readFileSync("lang_ma.json");
    var jsonData = JSON.parse(rawdata);
    res.send(jsonData);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});