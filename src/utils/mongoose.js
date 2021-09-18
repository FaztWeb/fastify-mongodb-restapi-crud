const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/fastifycrud")
  .then(() => console.log("Mongodb conencted"))
  .catch((err) => console.log(err));
