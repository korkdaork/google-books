const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

//Server up static assets - Heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

//Send requests to React App - all API routes must be defined prior to this code
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
    console.log(`API Server now on Port ${PORT}!`);
});