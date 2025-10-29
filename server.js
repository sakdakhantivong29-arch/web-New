const express = require("express");
const apiRouter = require("./routes/apiRoutes");

const app = express();
const port = 3000;


app.get("/", (req, res) => {
  res.send("Hello, How are you? I'm find, thank ");
});

app.use("/", apiRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});