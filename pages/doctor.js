import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { withRouter } from 'next/router';
import { Helmet, Loader } from 'components';
import { Doctor, Page404 } from 'containers';

import { GET_DOCTOR_DETAIL_DATA } from 'graphql/query';

@withRouter
@compose(
  graphql(GET_DOCTOR_DETAIL_DATA, {
    name: 'pageData',
    options: props => {
      const { router } = props;

      return {
        variables: {
          slug: router.query.doctor
        }
      };
    }
  })
)
export default class DoctorPage extends Component {
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
        <Helmet title={'Детальная доктора'} />
        <Doctor currentData={pageData} />
      </React.Fragment>
    );
  }
}
