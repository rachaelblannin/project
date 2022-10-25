
const routes = require("express").Router();

const { spongeModel } = require ("./db");

routes.post("/createCharacter", (req, res) => spongeModel.create(req.body)
    .then(result => res.status(201).send(result)).catch(err => next(err)));

routes.get("/getall", (req, res) => spongeModel.find({}).then(results => res.send(results)).catch(err => next(err)));

routes.put("/replace/:id", (req, res) => {
    console.log("QUERY:", req.query);
    const newName = req.query.name;
    const oldName = names[req.params.id];
    names [req.params.id] = newName;
    res.send(`Replaced ${oldName} with ${names[req.params.id]}`);
});

routes.delete("/delete/:id", (req, res) => {
    res.send(names.splice(req.params.id, 1))
});

module.exports = routes;