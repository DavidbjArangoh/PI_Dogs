const {Router} = require("express");
const {
    getDogsHandler,
    getRaceHandler,
    getNameHandler,
    postDogsHandler
} = require("../handlers/dogHandlers.js");

const routes = Router();
// console.log("llegue");
// routes.get("/dogs", getDogsHandler);
routes.post("/dogs", postDogsHandler);
routes.get("/dogs", getDogsHandler);
routes.get("/dogs/:id", getRaceHandler)
routes.get("/dogs/name?=", getNameHandler)

module.exports = routes;