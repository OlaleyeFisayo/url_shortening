require("dotenv").config()
const express = require("express");
const notFoundMiddleware = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");

const app = express();

//Middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World");
});

const port = 3000 || process.env.PORT;
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
