import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import PropTypes from 'prop-types';

import Block from './SignButton.style.js';
import { Icon } from 'components';
import { ThemeProvider } from 'styled-components';

export default class SignButton extends Component {
  static propTypes = {
    direction: PropTypes.oneOf(['reverse', 'standart']),
    onClick: PropTypes.func
  };

  static defaultProps = {
    direction: 'standart',
    onClick: () => {}
  };

  render() {
    const { title = 'Записаться на прием', direction, link, onClick } = this.props;
    const providerProps = {
      direction
    };

    return (
      <ThemeProvider theme={{ props: providerProps }}>
        <>
          {!link && (
            <Block onClick={e => onClick(e)}>
              {title}
              <Block.IconPen>
                <Icon name={'pen'} size={'fit'} />
              </Block.IconPen>
            </Block>
          )}

          {link && (
            <Block as='div'>
              <AnchorLink href={link} className='sign-link-anchor'>
                {title}
                <Block.IconPen>
                  <Icon name={'pen'} size={'fit'} />
                </Block.IconPen>
              </AnchorLink>
            </Block>
          )}
        </>
      </ThemeProvider>
    );
  }
}
