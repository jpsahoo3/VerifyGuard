/*
URL Scanner - Backend

Jyotiprakash Sahoo: jpsahoo3@gmail.com

Main File for backend execution starts
*/

import dotenv from "dotenv";
import axios from "axios";
import { GET_ERROR_MESSAGE_ON_EXCEPTION } from "../utils/utils.js";
import UrlModel from "../models/urlModel.js";

//For using Dot env files
dotenv.config();

const scanUrl = async (req, res) => {
    const { url } = req.body;

    try {
        // Call VirusTotal API
        const response = await axios.get(`https://www.virustotal.com/api/v3/urls/${Buffer.from(url).toString('base64')}`, {
            headers: {
                'x-apikey': process.env.VIRUSTOTAL_API_KEY,
            },
        });

        // Save URL and result in database
        const newUrl = new UrlModel({
            url,
            scanResult: response.data,
        });
        await newUrl.save();

        // Respond with the scan result
        return res.json(response.data);

    } catch (error) {
        return GET_ERROR_MESSAGE_ON_EXCEPTION(error.message)
    }
};

export {
    scanUrl
}