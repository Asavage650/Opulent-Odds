const typeDefs = `
type User{
    _id: ID!
    username: String!
    email: String!
    postedItems: [Item]
    cart: [Item]
}
type Category{
    _id: ID 
    name: String!
    items: [Item]
}

type Item{
    _id: ID
    name: String!
    category: Category
    seller: User
    description: String
    image: String
    price: Int!
}

type Auth{
    token: ID!
    user: User
}

type Query{
    user: User
    users: [User]
    category: Category
    categories: [Category]
    item: Item
    items: [Item]
}

type Mutation{
    addUser(username:String, email:String, password:String): Auth
    login(email:String, password:String): Auth
    addCategory(name:String): Category
    deleteCategory(categoryId:String): String
    postItem(name:String, price:Int, image:String, description:String, categoryId: String): String
    updateItem(itemId:String, name:String, price:Int, image:String, description:String): String
    deleteItem(itemId:String): User
    addToCart(itemId:String): User
    removeFromCart(itemId:String): User
}`;

module.exports = typeDefs;

