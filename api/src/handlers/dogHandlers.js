require("dotenv").config;
const {Dog} = require("../db");
const axios = require("axios");
const {APIKEY} = process.env;
const apiBreeds = `https://api.thedogapi.com/v1/breeds?${APIKEY}`

// Revisar y programar apropiadamente los handlers, 
// las conexiones estan bien ejecutadas y pueden traerse apropiadamente los datos de la API

const getDogsHandler = async (req,res) => {
    axios.get(apiBreeds)
        .then(resp => {
            const data = resp.data;
            console.log(data);
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({error:err.message})
        }) 
    
}

const getRaceHandler = async (req,res) => {
    try {
        const raceid = req.params;
        console.log(req.params);
        axios.get(apiBreeds)
        .then(resp => {
            const data = resp.data;
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({error:err.message})
        })
    } catch (error) {
        res.status(400).json({message:error})
    }
}

const getNameHandler = async (req,res) => {
    try {
        const raza_perro = req.params;
        axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${raza_perro}${APIKEY}`)
        .then(resp => {
            const data = resp.data;
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({error:err.message})
        })
        res.status(200).json({message:"se hizo la request"})
    } catch (error) {
        res.status(400).json({message:error})
    }
}

const postDogsHandler = async (req,res) => {
    const {name, img, height, weight, longevity} = req.body;
    try {
        const response = await Dog.create(
            {name, img, height, weight, longevity}
        );
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({message:error});
    }
}

module.exports = {
    getDogsHandler,
    getNameHandler,
    getRaceHandler,
    postDogsHandler
}
