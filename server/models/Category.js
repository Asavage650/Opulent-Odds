const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Items'
      }
    ]
  }
);

const Category = model('Category', categorySchema);

module.exports = Category