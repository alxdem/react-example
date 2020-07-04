import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Block from './Link.style.js';
import { Icon } from 'components';

export default class Link extends Component {
  static propTypes = {
    anchor: PropTypes.string,
    link: PropTypes.string,
    target: PropTypes.bool,
    displayBlock: PropTypes.bool,
    icon: PropTypes.string,
    type: PropTypes.oneOf(['button'])
  };

  static defaultProps = {
    anchor: '',
    link: '',
    target: false,
    displayBlock: false,
    icon: null,
    type: ''
  };

  render() {
    const { anchor, link, target, displayBlock, icon, type } = this.props;
    const providerProps = {
      type
    };

    return (
      <ThemeProvider theme={{ props: providerProps }}>
        <Block href={link} target={target ? `_blank` : null} displayBlock={displayBlock}>
          {icon && (
            <Block.Icon>
              <Icon name={icon} />
            </Block.Icon>
          )}
          {anchor}
        </Block>
      </ThemeProvider>
    );
  }
}
