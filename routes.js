const { Router } = require("express");

const routes = require("express").Router();

Router.post("/createCharacter", (req, res) => spongeModel.create(req.body)
    .then(newCharacter => res.status(201).send(newCharacter)).catch(err => next(err)));



module.exports = routes;