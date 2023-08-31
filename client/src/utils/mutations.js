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
mutation addCategory($name: String) {
    addCategory(name: $name) {
        category {
            _id
            name
            items {
                _id
                name
            }
        }
    }
}
`;
export const REMOVE_CATEGORY = gql`
mutation deleteCategory($categoryId: String) {
    deleteCategory(categoryId: $categoryId) {
        "Category Deleted"
    }
}
`;
export const ADD_ITEM = gql`
mutation postItem($name: String, $price: Int, $image: String, $description: String, $categoryId) {
    postItem(name: $name, price: $price, image: $image, description: $description, categoryId: $categoryId) {
        "Item Created"
    }
}
`;
export const UPDATE_ITEM = gql`
mutation updateItem($itemId: String, $name: String, $price: Int, $image: String, $description; String) {
    updateItem(itemId: $itemId, name: $name, price: $price, image: $image, description: $description) {
        "Item Updated"
    }
}
`;
export const REMOVE_ITEM = gql`
mutation deleteItem($itemId: String) {
    deleteItem(itemId: $itemId) {
        "Item Deleted"
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
            }
        }
    }
}
`;
export const CLEAR_CART = gql`
mutation clearCart {
    clearCart {
        "Cart Cleared
    }
}`