const Url = require("../models/url.model");
const CustomAPIError = require("../errors/custom-error");

const postUrl = async (req, res) => {
  const data = req.body;
  if (!data.originalUrl) {
    throw new CustomAPIError("Please add a link", 400);
  }
  const urlRegex = /(http:|https:)+[^\s]+[\w]/;
  if (!data.originalUrl.match(urlRegex)) {
    throw new CustomAPIError(
      "Invalid URL format (Must start with http or https)",
      400
    );
  }
  const url = await Url.create(data);
  res.status(201).json({
    successful: true,
    data: url,
  });
};

const getAllUrl = async (req, res) => {
  const url = await Url.find({});
  res.status(200).json({
    data: url,
  });
};

const getUrl = async (req, res) => {
  const { url: shortenedUrl } = req.params;
  const url = await Url.findOne({ shortenedUrl: shortenedUrl });
  if (!url) {
    throw new CustomAPIError("Url not Found", 404);
  }
  res.redirect(url.originalUrl);
};

module.exports = { getAllUrl, postUrl, getUrl };
