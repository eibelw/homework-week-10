const errorHandler = (err, req, res, next) => {
  console.log(err);

  if (err.name == "paramsError") {
    res.status(400).json({ message: "Bad request" });
  } else if (err.name == "Not found") {
    res.status(404).json({ message: "Movie not found" });
  } else {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = errorHandler;
