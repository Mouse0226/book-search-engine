const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type: User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type: Book {
        bookID: ID
        authors: [Author]
    }

    type: Auth {
        token: ID!
        user: User
    }

    type: Query {
        me: User
    }

    type: Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookId: ID!): User
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;