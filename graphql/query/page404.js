import gql from 'graphql-tag';

export const GET_PAGE404_DATA = gql`
  query {
    NotFoundStatic {
      title
      text
      button
    }
  }
`;
