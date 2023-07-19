require("dotenv").config;
const {Dog, Temperament} = require("../db");
const axios = require("axios");
const {APIKEY} = process.env;
const apiBreeds = `https://api.thedogapi.com/v1/breeds?=${APIKEY}`
const URL = "https://api.thedogapi.com/v1/breeds/search?q="

// Revisar y programar apropiadamente los handlers, 
// las conexiones estan bien ejecutadas y pueden traerse apropiadamente los datos de la API

const getDogsHandler = async (req,res) => {
    const getDBDogs = async () => {
        try{
            var dogsDB = await Dog.findAll({
                include: {
                    model: Temperament,
                    attributes: ['name'],
                    through: {
                        attributes: [],
                    }
                }
            })
            return dogsDB;
        }
        catch (err) {
            console.log("Error fetching DB dogs:", err);
            throw err;
        }
    }
    const getApiDogs = async () => {
        try{
            const resp = await axios.get(apiBreeds)
            return resp.data.map(dog => ({
                        id: dog.id,
                        name: dog.name,
                        image: dog.image.url,
                        breed_group: dog.breed_group,
                        temperament: dog.temperament,
                        life_span: dog.life_span,
                        weight_min: parseInt(dog.weight.metric.slice(0, 2).trim()),
                        weight_max: parseInt(dog.weight.metric.slice(4).trim()),
                        height_min: parseInt(dog.height.metric.slice(0, 2).trim()),
                        height_max: parseInt(dog.height.metric.slice(4).trim()),
                    }
                )
            )
        } catch (err) {
            console.log("Error fetching API dogs", err);
        }
    };
    try {
        const apiDogs = await getApiDogs();
        const DBDogs = await getDBDogs();
        const totalDogs = apiDogs.concat(DBDogs);
        res.status(200).send(totalDogs);
    } catch (error) {
        res.status(400).json({"error":error});
    };
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
