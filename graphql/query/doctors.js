import gql from 'graphql-tag';
import { DoctorsDoctorDynamicFragment } from 'graphql/fragments';

export const GET_DOCTORS_PAGE_DATA = gql`
  query {
    DoctorsHeaderStatic {
      title
    }
    DoctorsStartDynamic {
      id
      service {
        id
        start_title
        slug
        category {
          id
          name
          slug
        }
        priceItem {
          id
          text
          price_description
          procedures {
            id
            name
            price
            price_description
          }
        }
      }
    }
    DoctorsDoctorDynamic {
      id
      slug
      photo_preview(
        imageParameters: {
          resizeParameters: [
            { key: "lazy", size: { width: 30, height: 30 }, resize_type: exact }
            { key: "lg", size: { width: 260, height: 260 }, resize_type: exact }
            { key: "md", size: { width: 200, height: 200 }, resize_type: exact }
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
      ...DoctorsDoctorDynamic
    }
  }
  ${DoctorsDoctorDynamicFragment}
`;

export const GET_DOCTOR_DETAIL_DATA = gql`
  query($slug: [String]) {
    DoctorsDoctorDynamic(queryBuilder: { filter: { slug: $slug } }) {
      name
      position
      id
      slug
      photo_detail(
        imageParameters: {
          resizeParameters: [
            { key: "lazy", size: { width: 30, height: 30 }, resize_type: exact }
            { key: "lg", size: { width: 420, height: 420 }, resize_type: exact }
            { key: "md", size: { width: 730, height: 730 }, resize_type: exact }
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
      detail_text
      procedures
      chronicle {
        id
        name
        description
      }
      start_service {
        id
        name
        detail_text
        priceItem {
          id
          name
          text
          procedures {
            id
            name
            price
          }
        }
      }
      certificates {
        id
        name
        image(
          imageParameters: {
            resizeParameters: [
              { key: "lazy", size: { width: 30, height: 30 }, resize_type: exact }
              { key: "lg", size: { width: 230, height: 230 }, resize_type: exact }
            ]
          }
        ) {
          sizes {
            src
            key
          }
        }
      }
      reviews {
        id
        name
        date
        text
      }
      ...DoctorsDoctorDynamic
    }
    DoctorReviewsStatic {
      title
    }
    DoctorChronicleStatic {
      title
    }
    DoctorCertificatesStatic {
      title
    }
  }
  ${DoctorsDoctorDynamicFragment}
`;
