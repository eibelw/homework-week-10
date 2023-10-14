const errorHandler = (err, req, res, next) => {
  console.log(err);

  if (err.name == "paramsError") {
    res.status(400).json({ message: "Bad request" });
  } else {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = errorHandler;
