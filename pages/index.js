import React, { Component } from 'react';
import { Helmet } from 'components';
import { Main } from 'containers';

export default class IndexPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet title={'Центр'} />
        <Main />
      </React.Fragment>
    );
  }
}
