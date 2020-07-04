import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export default class Helmet extends Component {
  static propTypes = {
    title: PropTypes.string,
    postfix: PropTypes.string
  };

  static defaultProps = {
    title: 'Заголовок'
  };

  render() {
    const { title, postfix } = this.props;

    return (
      <Head>
        <title>{title + postfix}</title>
      </Head>
    );
  }
}
