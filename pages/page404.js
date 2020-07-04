import React, { Component } from 'react';

import { Helmet } from 'components';
import { Page404 } from 'containers';

export default class Page404Page extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet title={'Страница 404'} />
        <Page404 />
      </React.Fragment>
    );
  }
}
