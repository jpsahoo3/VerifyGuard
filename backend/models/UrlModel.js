/*
URL Scanner - Backend

Jyotiprakash Sahoo: jpsahoo3@gmail.com

Contains Url Schema and implemented Model using this Schema

*/
import mongoose from 'mongoose';

// Define a schema for storing URLs
const urlSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    scanResult: {
        type: Object,
        required: true,
    },
});

// Create and export the model
const UrlModel = mongoose.model('Url', urlSchema);
export default UrlModel;