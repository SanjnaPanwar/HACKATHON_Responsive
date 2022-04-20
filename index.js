const express = require("express");
const cors = require('cors');
const { router } = require("./Routes/router");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", router);
app.get("/", (req, res) => {
    res.send("hello from sanjna..")
})
app.listen(4005, () => {
    console.log("server is running");
});