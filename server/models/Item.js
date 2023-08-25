const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    description: {
      type: String
    },
    image: {
      type: String
    },
    price: {
      type: Number,
      required: true
    }
  }
);

const Item = model('Item', itemSchema);

module.exports = Item;
