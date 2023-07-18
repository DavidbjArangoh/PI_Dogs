require("dotenv").config;
const {Temperaments} = require("../db");
const axios = require("axios");
const {APIKEY} = process.env;
const apiBreeds = `https://api.thedogapi.com/v1/breeds?${APIKEY}`


const getTempHandler = async (req,res) =>{
    
}

module.exports = getTempHandler;