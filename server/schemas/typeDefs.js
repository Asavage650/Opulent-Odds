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
    seller: User
    description: String
    image: String
    price: Int!
}
type Category{
    name: String!
    items: [Item]
}

type Auth{
    token: ID!
    user: User
}

type Query{
    user: User
    users: User
    item: Item
    items: Item
}

type Mutation{
    addUser(username:String, email:String, password:String): Auth
    login(email:String, password:String): Auth
    postItem(name:String, price:Int, image:String, description:String): User
    updateItem(itemId:String, name:String, price:Int, image:String, description:String): User
    deleteItem(itemId:String): User
    addToCart(itemId:String): User
    removeFromCart(itemId:String): User
}`;

module.exports = typeDefs;

