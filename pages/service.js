import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { withRouter } from 'next/router';
import { Helmet, Loader } from 'components';
import { Page404, Service } from 'containers';

import { GET_SERVICE_PAGE_DATA } from 'graphql/query';

@withRouter
@compose(
  graphql(GET_SERVICE_PAGE_DATA, {
    name: 'pageData',
    options: props => {
      const { router } = props;

      return {
        variables: {
          slug: router.query.slug
        }
      };
    }
  })
)
export default class ServicePage extends Component {
  render() {
    const { pageData } = this.props;

    if (pageData.loading) {
      return <Loader />;
    }

    if (!pageData.loading && (pageData.error || pageData.length === 0)) {
      return <Page404 />;
    }

    return (
      <React.Fragment>
        <Helmet title={'Услуги. Детальная'} />
        <Service currentData={pageData} />
      </React.Fragment>
    );
  }
}
