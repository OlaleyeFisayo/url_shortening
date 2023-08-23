const getUrl = (req, res) => {
  res.send("Get Url");
};

const postUrl = (req, res) => {
  res.send("Post Url");
};

module.exports = { getUrl, postUrl };
