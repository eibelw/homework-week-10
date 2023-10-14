const errorHandler = (err, req, res, next) => {
  console.log(err);

  if (err.name == "paramsmovieError") {
    res.status(400).json({ message: "Movie list not complete" });
  } else if (err.name == "paramsuserError") {
    res.status(400).json({ message: "User list not complete" });
  } else if (err.name == "Movie not found") {
    res.status(404).json({ message: "Movie not found" });
  } else if (err.name == "User not found") {
    res.status(404).json({ message: "User not found" });
  } else {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = errorHandler;
