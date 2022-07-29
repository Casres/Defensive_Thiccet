import { gql } from '@apollo/client';

// export const QUERY_THOUGHTS = gql`
//   query thoughts($username: String) {
//     thoughts(username: $username) {
//       _id
//       thoughtText
//       createdAt
//       username
//       reactionCount
//       reactions {
//         _id
//         createdAt
//         username
//         reactionBody
//       }
//     }
//   }
// `;

export const QUERY_ITEM = gql`
  query item($id: ID!) {
    item(_id: $id) {
      _id
      itemText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_Product = gql`
query Get_product {
    product {
      _id
      generalCategory
      productCategory
      productName
      brandName
      productSize
      productPrice
      productStock
    }
  }
`;
