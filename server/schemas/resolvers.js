const { AuthenticationError } = require('apollo-server-express');
const { Auth, Items, User, Category } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (_, args, context) => {
      return await User.findById(context.user._id).populate(['postedItems']);
    },
    users: async () => {
      return await User.find({}).populate(['postedItems']);
    },
    category: async (_, args) => {
      return await Category.findById(args._id).populate(['items'])
    },
    categories: async () => {
      return await Category.find({}).populate(['items'])
    },
    item: async (_, args) => {
      return await Items.findById(args.id);
    },
    items: async () => {
      return await Items.find({});
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
    addCategory: async (_, { name }) => {
      return await Category.create({ name })
    },
    postItem: async (_, { name, price, image, description, categoryId }, context) => {
      const sellerId = context.user._id
      const item = await Items.create({ name, description, price, image, categoryId, sellerId });
      await Category.findOneAndUpdate(
        { _id: categoryId },
        { $push: { items: item._id } },
      )
      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $push: { postedItems: item._id } },
      )
      return "Item Created"
    },
    updateItem: async (_, { itemId, name, price, image, description, categoryId }, context) => {
      if (context.user) {
        const oldcategoryId = await Items.findById(itemId).populate('categoryId')

        const item = await Items.findOneAndUpdate(
          { _id: itemId },
          { name, description, price, image, categoryId }
        )
        if (oldcategoryId !== categoryId) {
          await Category.findOneAndUpdate(
            { _id: oldcategoryId },
            { $pull: { items: item._id } }
          )
          await Category.findOneAndUpdate(
            { _id: categoryId },
            { $push: { items: item._id } }
          )
        }
        return "Item Updated"
      }
      throw new AuthenticationError('You need to be logged in!');

    },
    deleteItem: async (_, { itemId }, context) => {
      if (context.user) {
        const categoryId = await Items.findById(itemId).populate('categoryId')
        await Category.findOneAndUpdate(
          { _id: categoryId },
          { $pull: { items: itemId } }
        )
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { postedItems: itemId } }
        )
        await Items.findOneAndDelete({
          _id: itemId,
        });

        return "Item Deleted";
      }
    },
    deleteCategory: async (_, { categoryId }) => {
      await Category.findOneAndDelete({
        _id: categoryId,
      });
      return "Category Deleted";
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
    },
    clearCart: async (parent, args, context) => {
      if (context.user) {
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $set: { cart: [] } },
        );
        return "Cart Cleared"
      }
      throw new AuthenticationError('You need to be logged in!');

    }
  }
};

module.exports = resolvers;