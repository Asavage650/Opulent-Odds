const { Schema, model } = require('mongoose');

const authSchema = new Schema(
  {
    token: {
      type: String,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true
    }
  }
);

const Auth = model('Auth', authSchema);

module.exports = Auth;
