const { Schema, model } = require("mongoose");

const UrlSchema = new Schema({
  originalUrl: {
    type: String,
    required: [true, "You need to put a url in"],
    trim: true,
  },
  shortenedUrl: String,
  createdAt: { type: Date, default: Date.now() },
});

module.exports = model("Url", UrlSchema);
