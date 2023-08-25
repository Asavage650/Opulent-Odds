const { AuthenticationError } = require('apollo-server-express');
const { Auth, Item, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (_, args) => {
      return await User.findById(args.id).populate(['items']);
    },
    users: async () => {
      return await User.find({}).populate(['items']);
    },
    item: async (_, args) => {
      return await Item.findById(args.id);
    },
    items: async () => {
      return await Item.find({});
    }
  },
  Mutation: {
    addUser: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    postItem: async (_, { name, price, image, description }) => {
      return await Item.create({ name, description, price, image });
    },
    updateItem: async (_, { _id, name, price, image, description }) => {
      return await Item.findOneAndUpdate(
        { _id },
        { name, description, price, image },
        { new: true }
      )
    },
    deleteItem: async (_, { itemId }) => {
      const item = await Item.findOneAndDelete({
        _id: itemId,
      });
      return item;
    },
    addToCart: async (_, { itemId }, context) => {
      if (context.user) {

        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { cart: itemId } },
          { new: true }
        );

      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeFromCart: async (_, { itemId }, context) => {
      if (context.user) {
        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { cart: itemId } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;