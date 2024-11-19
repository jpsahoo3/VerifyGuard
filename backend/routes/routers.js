/*
URL Scanner - Backend

Jyotiprakash Sahoo: jpsahoo3@gmail.com

Router file from where endpoints are being routed to apis
*/
import express from "express";
import dotenv from 'dotenv'
import { scanUrl } from "../apis/scanUrl.js";

dotenv.config();
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello from Psylinks Security")
})

router.get("/scan-url", scanUrl)


export default router;