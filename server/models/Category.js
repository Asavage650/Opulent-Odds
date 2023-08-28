const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    categoryId: {
      type: String,
      required: true,
      unique: true
    },
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Item'
      }
    ]
  }
);

const Category = model('Category', categorySchema);

module.exports = Category