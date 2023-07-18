require("dotenv").config;
const { query } = require("express");
const {Dog} = require("../db");
const axios = require("axios");
const {APIKEY} = process.env;
const apiBreeds = `https://api.thedogapi.com/v1/breeds?=${APIKEY}`
const URL = "https://api.thedogapi.com/v1/breeds/search?q="

// Revisar y programar apropiadamente los handlers, 
// las conexiones estan bien ejecutadas y pueden traerse apropiadamente los datos de la API

const getDogsHandler = async (req,res) => {
    axios.get(apiBreeds)
        .then(resp => {
            const data = resp.data;
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({error:err.message})
        }) 
    
}

const getRaceHandler = async (req,res) => {
    const raceid = req.params.idRaza;
    const razaPerro = req.query.q;
    if (raceid === "name") {
        ApiUrl = `${URL}${razaPerro}` 
        axios.get(ApiUrl)
        .then(resp => {
            res.status(200).json(resp.data);
        })
        .catch(err => {
            res.status(400).json({error:err.message})
        });
    }
    else {
        axios.get(apiBreeds)
        .then(resp => {
            const detail = resp.data.find(dog => dog.id == raceid);
            res.status(200).json(detail)
        })
        .catch(err => {
            res.status(400).json({message:"aqui esta el error"})
        });
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
    getRaceHandler,
    postDogsHandler
}
