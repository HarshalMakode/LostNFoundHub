const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneno: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);
module.exports = { Item };