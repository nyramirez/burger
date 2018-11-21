let express = require("express");
let app = express();

let PORT = process.env.DB_PORT || 8080;

app.get("/", function (req, res) {
    res.send("eat the burger page server running");
});

app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
});