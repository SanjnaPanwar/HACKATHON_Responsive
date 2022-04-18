const express = require("express");
const router = express.Router();

// const c = require("../Controller/config");
const { PostData, GetData }=require("../Controller/config")
router.get("/api/get",GetData)
router.post("/api/post",PostData)
// router.post("/api/post", (req,res)=>{
//     c.PostData
// })

module.exports = { router }