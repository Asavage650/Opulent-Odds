import { gql } from "@apollo/client";

export const ADD_USER = gql`
mutation addUser($username: String, $email: String, $password: String) {
    addUser(username: $username, email: $email, password: $password) {
        user {
            _id
            username
        }
        token
    }
}
`;
export const LOGIN_USER = gql`
mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
        user {
            _id
            username
        }
        token
    }
}
`;
export const ADD_CATEGORY = gql`
mutation addCategory($name: String, $categoryId: String) {
    addCategory(name: $name, categoryId: $categoryId) {
        category {
            categoryId
            name
            items {
                itemId
                name
            }
        }
    }
}
`;
export const REMOVE_CATEGORY = gql`
mutation deleteCategory($categoryId: String) {
    deleteCategory(categoryId: $categoryId) {
       category {
        categoryId
        name
       } 
    }
}
`;
export const ADD_ITEM = gql`
mutation postItem($name: String, $price: Int, $image: String, $description: String) {
    postItem(name: $name, price: $price, image: $image, description: $description) {
        user {
            username
            postedItems {
                itemId
                name
                category
                seller
                description
                image
                price
            }
        }
    }
}
`;
export const UPDATE_ITEM = gql`
mutation updateItem($itemId: String, $name: String, $price: Int, $image: String, $description; String) {
    updateItem(itemId: $itemId, name: $name, price: $price, image: $image, description: $description) {
        user {
            username
            postedItems {
                itemId
                name
                category
                seller
                description
                image
                price
            }
        }
    }
}
`;
export const REMOVE_ITEM = gql`
mutation deleteItem($itemId: String) {
    deleteItem(itemId: $itemId) {
        user {
            username
            postedItems {
                itemId
                name
                category
                seller
                description
                image
                price
            }
        }
    }
}
`;
export const ADD_TO_CART = gql`
mutation addToCart($itemId: String) {
    addToCart(itemId: $itemId) {
        user {
            username
            cart {
                itemId
                name
                category
                seller
                description
                image
                price
            }
        }
    }
}
`;
export const REMOVE_FROM_CART = gql`
mutation removeFromCart($itemId: String) {
    removeFromCart(itemId: $itemId) {
        user {
            username
            cart {
                itemId
                name
                category
                seller
                description
                image
                price
            }
        }
    }
}
`