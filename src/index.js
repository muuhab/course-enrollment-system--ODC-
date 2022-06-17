const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("./routes/index");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.use(routes);

app.listen(PORT, function () {
  console.log(`starting app on: http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
