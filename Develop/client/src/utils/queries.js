import { gql } from '@apollo/client';

export const GET_ME = gql`
    {
        me {
            _id
            username
            email
            password
            savedBooks {
                _id
                authors {
                    author
                }
                description
                bookId
                image
                link
                title
            }
        }
    }
`;