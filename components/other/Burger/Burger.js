import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import Block from './Burger.style.js';

export default class Burger extends Component {
  render() {
    const { onClick, isOpen, isActive } = this.props;
    const providerProps = {
      isOpen,
      isActive
    };

    return (
      <ThemeProvider theme={{ props: providerProps }}>
        <Block type={'button'} onClick={onClick}>
          <Block.Inner>
            <Block.LineTop />
            <Block.LineMiddle />
            <Block.LineBottom />
          </Block.Inner>
        </Block>
      </ThemeProvider>
    );
  }
}
