import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { Helmet, Loader } from 'components';
import { Doctors, Page404 } from 'containers';

import { GET_DOCTORS_PAGE_DATA } from 'graphql/query';

@compose(graphql(GET_DOCTORS_PAGE_DATA, { name: 'pageData' }))
export default class DoctorsPage extends Component {
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
        <Helmet title={'Врачи'} />
        <Doctors currentData={pageData} />
      </React.Fragment>
    );
  }
}
