const {Router} = require("express");
const {
    getDogsHandler,
    getRaceHandler,
    postDogsHandler
} = require("../handlers/dogHandlers.js");

const routes = Router();

routes.post("/dogs", postDogsHandler);
routes.get("/dogs", getDogsHandler);
routes.get("/dogs/:idRaza", getRaceHandler);

module.exports = routes;