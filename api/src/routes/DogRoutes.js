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

module.exports = routes;