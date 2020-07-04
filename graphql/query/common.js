import gql from 'graphql-tag';

export const GET_CITY_DATA = gql`
  query {
    LocationCityDynamic {
      id
      name
      slug
      is_selected
      phone
    }
  }
`;

export const GET_CURRENT_CITY_DATA = gql`
  query {
    LocationCityDynamic(queryBuilder: { filter: { is_selected: true } }) {
      id
      phone
      is_selected
      slug
      name
      clinics {
        id
        name
        metro
        address
        geo_coord {
          lat
          lng
        }
      }
    }
  }
`;

export const GET_ADDRESS_DATA = gql`
  query {
    LocationClinicDynamic {
      id
      metro
      address
    }
  }
`;

export const GET_SOCIAL_DATA = gql`
  query {
    CommonSocialDynamic {
      id
      name
      slug
      link
    }
  }
`;

export const GET_FORM_NONRESIDENT_DATA = gql`
  query {
    WorryTypeDynamic {
      id
      name
      slug
    }
  }
`;
