const jwt = require('jsonwebtoken');
const { GraphQLError } = require('graphql')
const secret = 'iliketurtles';
const expiration = '6h';

module.exports = {
  AuthenticationError: new GraphQLError('Wrong email or password!', {
    extensions: { code: 'UNAUTHENTICATED' }
  }),
  authMiddleware: function ({ req, res }) {
    let token = req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }
    return req
  },

  signToken: function ({ username, password, email, _id }) {
    const payload = { username, password, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};