/*
URL Scanner - Backend

Jyotiprakash Sahoo: jpsahoo3@gmail.com

Router file from where endpoints are being routed to apis
*/
import express from "express";
import dotenv from 'dotenv'
import { scanUrl } from "../apis/scanUrl.js";
import { createUser, getUser, loginUser } from "../apis/authApi.js";
import fetchUser from "../middleware/fetchUser.js";

dotenv.config();
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello from Psylinks Security")
})

router.post("/createuser", createUser)
router.post("/loginuser", loginUser)
router.use("/getuser", fetchUser)
router.post("/getuser",getUser)

router.use("/scan-url", fetchUser)
router.get("/scan-url", scanUrl)


export default router;