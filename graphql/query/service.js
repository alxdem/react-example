import gql from 'graphql-tag';

export const GET_SERVICE_PAGE_DATA = gql`
  query($slug: [String]) {
    ServicesServiceDynamic(queryBuilder: { filter: { slug: $slug } }) {
      id
      name
      slug
      preview_text
      detail_text
      prepare_title
      detail_image(
        imageParameters: {
          resizeParameters: [
            { key: "lazy", size: { width: 30, height: 30 }, resize_type: exact }
            { key: "lg", size: { width: 440, height: 440 }, resize_type: exact }
          ]
        }
      ) {
        id
        name
        sizes {
          key
          src
          resize_type
        }
      }
      prepare
      video {
        url
        description
      }
      performing
      performing_title
      duration
      duration_description
      steps
      after_procedure
      after_procedure_sidebar_value
      after_procedure_sidebar_description
      after_procedure_title
      banner {
        id
        title
        subtitle
        show_on_price
        image(
          imageParameters: {
            resizeParameters: [
              { key: "lazy", size: { width: 30, height: 30 }, resize_type: exact }
              { key: "lg", size: { width: 240, height: 240 }, resize_type: exact }
              { key: "md", size: { width: 520, height: 520 }, resize_type: exact }
            ]
          }
        ) {
          id
          name
          sizes {
            key
            src
            resize_type
          }
        }
        logo(
          imageParameters: { resizeParameters: [{ key: "lg", size: { width: 40, height: 40 } }] }
        ) {
          sizes {
            key
            src
          }
        }
      }
      consult_title
      consult_description
    }
  }
`;
