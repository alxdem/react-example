import gql from 'graphql-tag';

export const GET_NAV_DATA = gql`
  query {
    ServicesCategoryDynamic {
      id
      name
      slug
      services {
        id
        name
        slug
      }
    }
  }
`;
