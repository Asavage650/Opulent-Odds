import { gql } from "@apollo/client";

export const GET_USER = gql`
{
    user {
        username
        postedItems {
            itemId
            name
            category {
                categoryId
                name
            }
            description
            image
            price
        }
        cart {
            itemId
            name
            category {
                categoryId
                name
            }
            seller
            description
            image
            price
        }
    }
}
`;
export const GET_USERS = gql`
{
    users {
        username
    }
}
`;
export const GET_CATEGORY = gql`
{
    category {
        name
        categoryId
        items {
            itemId
            name
            seller
            description
            image
            price
        }
    }
}
`;
export const GET_CATEGORIES = gql`
{
    categories {
        name
        categoryId
    }
}
`;
export const GET_ITEM = gql`
{
    item {
        itemId
        name
        seller
        description
        image
        price
        category {
            categoryId
            name
        }
    }
}
`;
export const GET_ITEMS = gql`
{
    items {
        itemId
        name
        seller
        description
        image
        price
        category {
            categoryId
            name
        }
    }
}
`;