import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Block from './AboutTitle.style.js';
import PropTypes from 'prop-types';
import { data } from '../../../containers/pages/Interview/mock';

export default class AboutTitle extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.oneOf(['', 'short', 'mainTitle'])
  };

  static defaultProps = {
    title: null,
    description: null,
    type: ''
  };

  render() {
    const { title, description, type } = this.props;

    const providerProps = {
      type
    };

    return (
      <ThemeProvider theme={{ props: providerProps }}>
        <Block>
          <Block.Title dangerouslySetInnerHTML={{ __html: title }} />
          <Block.Description dangerouslySetInnerHTML={{ __html: description }} />
        </Block>
      </ThemeProvider>
    );
  }
}
