
const routes = require("express").Router();

const { spongeModel } = require ("./db");

routes.post("/createCharacter", (req, res) => spongeModel.create(req.body)
    .then(result => res.status(201).send(result)).catch(err => next(err)));

routes.get("/getall", (req, res) => spongeModel.find({}).then(results => res.send(results)).catch(err => next(err)));

routes.put("/replace/:id", async (req, res) => {
    console.log("BODY:", req.body);
    await spongeModel.findByIdAndUpdate(req.params.id);
    res.send();
});

routes.delete("/delete/:id", async (req, res, next) => {
    try {
        await spongeModel.findByIdAndDelete(req.params.id);
        return res.send();
    } catch(err) {
        return next(err);
    }
});

module.exports = routes;