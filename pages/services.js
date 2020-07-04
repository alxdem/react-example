import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { withRouter } from 'next/router';

import { Helmet, Loader } from 'components';
import { Services, Page404 } from 'containers';
import { GET_SERVICES_HEADER_DATA } from 'graphql/query';

@withRouter
@compose(
  graphql(GET_SERVICES_HEADER_DATA, {
    name: 'headerData',
    options: props => {
      const { router } = props;

      return {
        fetchPolicy: 'no-cache',
        variables: {
          slug: router.query.category
        }
      };
    }
  })
)
export default class ServicesPage extends Component {
  render() {
    const { headerData, router } = this.props;

    if (headerData.loading) {
      return <Loader />;
    }

    if (!headerData.loading && (headerData.error || headerData.length === 0)) {
      return <Page404 />;
    }

    return (
      <React.Fragment>
        <Helmet title={'Услуги. Разводящая'} />
        <Services currentData={headerData} router={router} />
      </React.Fragment>
    );
  }
}
