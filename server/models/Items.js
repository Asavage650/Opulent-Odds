const { Schema, model } = require("mongoose");

const ItemsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Items = model("Items", ItemsSchema);

module.exports = Items;
