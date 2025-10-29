const moviesModel = require("../models/movieModel");
const handleGreeting = (req, res) => {
res.send("Hello, Lao-Top API");
};
const handleGetmovies = (req, res) => {
const moviesData = moviesModel.getAllmovies();

console.log(moviesData)

res.json(moviesData);
};
const moviesController = {
handleGreeting,
handleGetmovies,
};
module.exports = moviesController;