import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { withRouter } from 'next/router';
import { Helmet, Loader } from 'components';
import { Page404, Reviews } from 'containers';

import { GET_REVIEWS_DATA } from 'graphql/query';

@withRouter
@compose(
  graphql(GET_REVIEWS_DATA, {
    name: 'pageData',
    options: props => {
      const { router } = props;

      return {
        fetchPolicy: 'no-cache',
        variables: {
          page: router.query.page ? router.query.page : 1
        }
      };
    }
  })
)
export default class ReviewsPage extends Component {
  render() {
    const { pageData, router } = this.props;

    if (pageData.loading) {
      return <Loader />;
    }

    if (!pageData.loading && (pageData.error || pageData.length === 0)) {
      return <Page404 />;
    }

    return (
      <React.Fragment>
        <Helmet title={'Отзывы'} />
        <Reviews currentData={pageData} router={router} />
      </React.Fragment>
    );
  }
}
