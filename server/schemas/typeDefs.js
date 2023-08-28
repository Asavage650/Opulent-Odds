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
    category: [Category]
    seller: User
    description: String
    image: String
    price: Int!
}
type Category{
    categoryId: String!
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
    category: Category
    categories: Category
    item: Item
    items: Item
}

type Mutation{
    addUser(username:String, email:String, password:String): Auth
    login(email:String, password:String): Auth
    addCategory(name:String, categoryId:String): Category
    deleteCategory(categoryId:String): Category
    postItem(name:String, price:Int, image:String, description:String): User
    updateItem(itemId:String, name:String, price:Int, image:String, description:String): User
    deleteItem(itemId:String): User
    addToCart(itemId:String): User
    removeFromCart(itemId:String): User
}`;

module.exports = typeDefs;

