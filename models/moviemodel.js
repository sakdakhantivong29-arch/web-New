const datamovies = [
  { name: "Sith", age: 20, class: "Web" },
  { name: "Maly", age: 22, class: "App" },
  { name: "Phet", age: 19, class: "Biz" },
  { name: "Dao", age: 21, class: "Eng" },
];

const moviesModel = {
  getAllmovies: () => datamovies,
};


module.exports = moviesModel;