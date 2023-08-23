require("dotenv").config();
const express = require("express");
const notFoundMiddleware = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");
const route = require("./routes/url.route");
const connectDB = require("./db/connect");

const app = express();

//Middleware
app.use(errorHandlerMiddleware);
app.use(express.json());

//routes
app.use(route);
app.use(notFoundMiddleware);

const port = 3000 || process.env.PORT;

(async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, () =>
      console.log(`Server running on http://localhost:${port}`)
    );
  } catch (error) {
    console.error(error);
  }
})();
