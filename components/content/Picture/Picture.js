import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Block from './Picture.style.js';

export default class Picture extends Component {
  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    description: PropTypes.string,
    params: PropTypes.array,
    view: PropTypes.oneOf(['standart', 'fit'])
  };

  static defaultProps = {
    view: 'standart'
  };

  render() {
    const { src, alt, params, view, source } = this.props;

    const providerProps = {
      view
    };

    const paramList =
      params &&
      params.map((item) => {
        const width = item.width ? `(max-width: ${item.width}px)` : null;
        return <source srcSet={item.srcset} media={width} />;
      });

    return (
      <ThemeProvider theme={{ props: providerProps }}>
        <Block>
          {source ? source : paramList}
          <Block.Img src={src} alt={alt} loading='lazy' />
        </Block>
      </ThemeProvider>
    );
  }
}
