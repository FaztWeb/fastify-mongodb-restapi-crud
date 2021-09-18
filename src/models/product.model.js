const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    title: String,
    price: Number,
    image: String,
    description: String,
    quantity: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Product", productSchema);
