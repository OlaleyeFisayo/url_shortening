const { Schema, model, default: mongoose } = require("mongoose");
const randomString = require("randomstring");

const UrlSchema = new Schema({
  originalUrl: {
    type: String,
    required: [true, "You need to put a url in"],
    trim: true,
  },
  shortenedUrl: {
    type: String,
    default: randomString.generate({
      length: 7,
      charset: "alphanumeric",
    }),
  },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Url", UrlSchema);
