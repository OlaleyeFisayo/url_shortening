const errorHandler = (err, req, res, next) => {
  return res.status(404).json({ msg: "Something went wrong" });
};

module.exports = errorHandler;
