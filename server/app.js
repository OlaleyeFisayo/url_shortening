require("dotenv").config();
require("express-async-errors");
const express = require("express");
const notFoundMiddleware = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");
const route = require("./routes/url.route");
const connectDB = require("./db/connect");
const corsMiddleware = require("./middleware/cors");

const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(corsMiddleware);

//routes
app.use("/", route);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

(async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, () =>
      console.log(`Server running on http://localhost:${port}`)
    );
  } catch (error) {
    console.error(error);
  }
})();
