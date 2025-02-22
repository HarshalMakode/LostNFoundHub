const mongoose = require('mongoose');

const uri = process.env.MONGO_CONN;

mongoose.connect(uri)
  .then(() => console.log("Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));
