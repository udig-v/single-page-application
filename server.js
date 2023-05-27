const express = require("express");
const path = require("path");

const app = express();

//when path has /static in it, the directory will be served as usual 
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

//any path that is sent to the webserver is going to go to the index.html (important for spa)
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));