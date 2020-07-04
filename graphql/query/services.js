import gql from 'graphql-tag';

export const GET_SERVICES_HEADER_DATA = gql`
  query($slug: [String]) {
    ServicesCategoryDynamic(queryBuilder: { limit: 4, filter: { slug: $slug } }) {
      id
      name
      slug
      text
      start_service {
        id
        start_title
        image {
          sizes {
            src
          }
        }
        preview_text
        detail_text
        video {
          url
          description
        }
        priceItem {
          id
          name
          text
          procedures {
            id
            price_description
            price
          }
        }
      }
      services {
        id
        name
        slug
        image(
          imageParameters: {
            resizeParameters: [
              { key: "lazy", size: { width: 30, height: 30 } }
              { key: "sm", size: { width: 520, height: 520 } }
              { key: "md", size: { width: 480, height: 480 } }
              { key: "lg", size: { width: 240, height: 240 } }
            ]
          }
        ) {
          id
          name
          description
          sizes {
            key
            src
            resize_type
          }
        }
        preview_text
        detail_text
      }
    }
  }
`;
