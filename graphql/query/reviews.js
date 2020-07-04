import gql from 'graphql-tag';

export const GET_REVIEWS_DATA = gql`
  query($page: Int!, $path: String) {
    AboutReviewsHeaderStatic {
      title
      description
    }
    AboutReviewsServiceStatic {
      text
    }
    AboutReviewsStartDynamic {
      start_title
      preview_text
      priceItem {
        procedures {
          price
          price_description
        }
      }
    }
    AboutReviewPaginatedDynamic(paginate: { perPage: 8, pageNumber: $page, path: $path }) {
      pagination {
        path
        per_page
        total
        from
        to
        current_page
        last_page
        first_page_url
        prev_page_url
        next_page_url
        last_page_url
        data {
          id
          name
          date
          text
          city {
            id
          }
          doctor {
            id
          }
        }
      }
    }
  }
`;
