const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/spongebob", {
    useNewUrlParser: true
});

const spongeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    species: {
        type: String,
        require: true
    },
    colour: {
        type: String,
        require: true
    },
    occupation: {
        type: String,
        require: true
    },
    hobby: {
        type: String,
        require: true
    }
});

const spongeModel = mongoose.model("characters", spongeSchema);


module.exports = {
    spongeModel
}