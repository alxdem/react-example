import gql from 'graphql-tag';
import { fragments } from 'graphql/fragments';

export const GET_INFO_DATA = gql`
  query {
    HomeSliderStatic {
      title
      subtitle
    }
  }
`;

export const GET_SLIDER_DATA = gql`
  query {
    HomeSliderDynamic {
      id
      name
    }
  }
`;

export const GET_LINKS_STATIC_DATA = gql`
  query {
    HomeWorryStatic {
      title
    }
  }
`;

export const GET_LINKS_DATA = gql`
  query {
    HomeWorryDynamic {
      name
      id
      link
    }
  }
`;

export const GET_MAP_STATIC_DATA = gql`
  query {
    HomeMapStatic {
      title
      subtitle
      image
    }
  }
`;

export const GET_METHOD_DATA = gql`
  query {
    HomeMethodsStatic {
      title
    }
    HomeMethodDynamic {
      id
      text_left
      text_right
      services {
        id
        name
        preview_text
      }
    }
  }
`;

export const GET_ABOUT_DATA = gql`
  query {
    HomeAboutDynamic {
      id
      name
      city {
        id
      }
      text_left
      text_right
      video {
        url
      }
    }
    HomeAboutStatic {
      title
      subtitle
    }
  }
`;

export const GET_CONSULTATION_DATA = gql`
  query {
    HomeConsultStatic {
      title
    }

    HomeConsultDynamic {
      id
      name
      image(
        imageParameters: {
          resizeParameters: [
            { key: "lazy", size: { width: 30, height: 30 } }
            { key: "sm", size: { width: 400, height: 400 } }
            { key: "md", size: { width: 730, height: 730 } }
            { key: "lg", size: { width: 480, height: 480 } }
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
      city {
        id
      }
      header1
      header2
      header3
      text1
      text2
      text3
    }
  }
`;

export const GET_BANNERS_DATA = gql`
  query {
    CommonBannerDynamic(queryBuilder: { filter: { show_on_main: true } }) {
      id
      title
      link
      subtitle
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
        description
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
      services {
        id
        name
        slug
        category {
          slug
        }
      }
    }
  }
`;

export const GET_SLIDERS_DATA = gql`
  query {
    HomeGalleryStatic {
      title
    }
    CommonGalleryDynamic(queryBuilder: { filter: { show_on_page: home } }) {
      id
      image(
        imageParameters: {
          resizeParameters: [
            {
              key: "lazy"
              size: { width: 64, height: 64 }
              resize_type: exact
              convertToWebP: false
            }
            { key: "sm", size: { width: 500, height: 500 }, resize_type: exact }
            { key: "md", size: { width: 290, height: 290 }, resize_type: exact }
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
    }
  }
`;

export const GET_DOCTORS_DATA = gql`
  query {
    DoctorsDoctorDynamic {
      id
      name
      position
      photo_preview(
        imageParameters: {
          resizeParameters: [
            {
              key: "lazy"
              size: { width: 64, height: 64 }
              resize_type: exact
              convertToWebP: false
            }
            { key: "sm", size: { width: 130, height: 130 }, resize_type: proportional }
            {
              key: "md"
              size: { width: 260, height: 260 }
              resize_type: exact
              convertToWebP: false
            }
          ]
        }
      ) {
        id
        name
        sizes {
          key
          src
        }
      }
    }
  }
`;

export const GET_DOCTORS_LANDING_DATA = gql`
  query {
    DoctorsDoctorDynamic(queryBuilder: { filter: { show_on_landing: true } }) {
      id
      name
      position
      photo_preview(
        imageParameters: {
          resizeParameters: [
            {
              key: "lazy"
              size: { width: 64, height: 64 }
              resize_type: exact
              convertToWebP: false
            }
            { key: "sm", size: { width: 130, height: 130 }, resize_type: proportional }
            {
              key: "md"
              size: { width: 260, height: 260 }
              resize_type: exact
              convertToWebP: false
            }
          ]
        }
      ) {
        id
        name
        sizes {
          key
          src
        }
      }
    }
  }
`;

export const GET_FOOTER_DATA = gql`
  query {
    CommonFooterStatic {
      rights
      contraindications
    }
  }
`;

export const GET_REVIEWS_LANDING_DATA = gql`
  query {
    LandingReviewDynamic {
      id
      name
      text
    }
  }
`;
