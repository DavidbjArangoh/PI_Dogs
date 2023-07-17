require("dotenv").config;
const {Dog} = require("../db");
const axios = require("axios");
const {APIKEY} = process.env;
const apiBreeds = `https://api.thedogapi.com/v1/breeds?${APIKEY}`


const getDogsHandler = async (req,res) => {

    try {
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getRaceHandler = async (req,res) => {

}

const getNameHandler = async (req,res) => {

}

const postDogsHandler = async (req,res) => {
    const {name, img, height, weight, longevity} = req.body;
    try {
        const response = await Dog.create(
            {name, img, height, weight, longevity}
        );
        res.status(200).json(response);
    } catch (error) {
        console.log("something");
        res.status(400).json({message:"wrong"});
    }
}

module.exports = {
    getDogsHandler,
    getNameHandler,
    getRaceHandler,
    postDogsHandler
}
