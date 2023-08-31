import { gql } from "@apollo/client";

export const GET_USER = gql`
query user {
    _id
    username
    email
    postedItems {
        _id
        name
        price
        description
        image
        categoryId
    }
    cart {
        _id
        name
        price
        sellerId
        description
        image
        categoryId
    }
}
`;
export const GET_USERS = gql`
query users {
    _id
    username
    email
}
`;
export const GET_CATEGORY = gql`
query category ($_id: String){
    category(name: $name) {
        _id
        name
        items {
            _id
            name
            price
            sellerId
            description
            image
        }
    }
}
`;
export const GET_CATEGORIES = gql`
query categories {
    _id
    name
    items {
        _id
        name
        price
        sellerId
        description
        price
    }
}
`;
export const GET_ITEM = gql`
query item ($itemId: String) {
    item (itemId: $itemId) {
      _id
      name
      price
      sellerId
      categoryId
      description
      image  
    }
}
`;
export const GET_ITEMS = gql`
query items {
    _id
    name
    price
    sellerId
    categoryId
    description
    image
}
`;