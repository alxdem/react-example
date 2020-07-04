import gql from 'graphql-tag';

export const DISPLAY_NAME = gql`
  mutation($hidden: Boolean!) {
    displayName(hidden: $hidden) {
      status
      error
    }
  }
`;
