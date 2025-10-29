const express = require("express");
// const movieControllers = require("../controllers/StudentController");
const movieControllers = require("../controllers/moviesControllers");

const apiRouter = express.Router();

// Root path: /
apiRouter.get("/", movieControllers.handleGreeting);

// Students path: /students
apiRouter.get("/mmm", movieControllers.handleGetmovies);

module.exports = apiRouter;


