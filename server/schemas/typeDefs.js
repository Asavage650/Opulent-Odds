const typeDefs = `
type User{
    _id: ID!
    username: String!
    email: String!
    postedItems: [Item]
    cart: [Item]
}
type Item{
    itemId: String!
    name: String!
    category: String!
    seller: user
    description: String
    image: String
    price: Int!
}

type Auth{
    token: ID!
    user: user
}

type Query{
    me: User
    cart:
}

type Mutation{
    login(email:String, password:String): Auth
    postItem(name:String, price:Int, image:String, description:String): User
    updateItem(itemId:String, name:String, price:Int, image:String, description:String)
    deleteItem(itemId:String): User
    addToCart(itemId:String): User
    removeFromCart(itemId:String): User
}`;

module.exports = typeDefs;

