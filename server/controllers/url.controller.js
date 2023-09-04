const Url = require("../models/url.model");
const CustomAPIError = require("../errors/custom-error");

const postUrl = async (req, res) => {
  const url = await Url.create(req.body);
  res.status(201).json({
    successful: true,
    data: url,
  });
};

const getUrl = async (req, res) => {
  const { url: shortenedUrl } = req.params;
  const url = await Url.findOne({ shortenedUrl: shortenedUrl });
  if (!url) {
    throw new CustomAPIError("Url not Found", 404);
  }
  res.status(200).json({ data: url });
};

const getAllUrl = async (req, res) => {
  const url = await Url.find({});
  res.status(200).json({
    data: url,
  });
};

module.exports = { getUrl, postUrl, getAllUrl };
