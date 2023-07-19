require("dotenv").config;
const {Temperament} = require("../db");
const axios = require("axios");
const {APIKEY} = process.env;
const apiBreeds = `https://api.thedogapi.com/v1/breeds?api_key=${APIKEY}`


const getTempHandler = async (req,res) =>{
    await axios.get(apiBreeds)
    .then(async resp => {
        let everyTemperament = resp.data.map(dog => dog.temperament ? dog.temperament : "").map(temp => temp.split(', '))
        let eachTemperament = [...new Set(everyTemperament.flat())];
        eachTemperament.forEach(el => {
            Temperament.findOrCreate({
                where: {name: el}
            })
        });
        eachTemperament = await Temperament.findAll()
        res.status(200).json(eachTemperament);
    })
    .catch (error => {
        res.status(404).send(error)
    });
};

module.exports = getTempHandler;