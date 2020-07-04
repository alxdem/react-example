import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import PropTypes from 'prop-types';

import Block from './Button.style.js';

export default class Button extends Component {
  static propTypes = {
    as: PropTypes.oneOf(['button', 'a']),
    type: PropTypes.string,
    view: PropTypes.oneOf(['common']),
    isActive: PropTypes.bool,
    disabled: PropTypes.bool,
    fit: PropTypes.bool,
    uppercase: PropTypes.bool
  };

  static defaultProps = {
    type: 'button',
    as: 'button'
  };

  getProps = e => {
    const { view, disabled, fit, isActive, uppercase } = this.props;

    return {
      view,
      disabled,
      fit,
      isActive,
      uppercase
    };
  };

  render() {
    const { children, as, href, type, ...restProps } = this.props;
    const props = this.getProps();

    const isAnchor = href && href[0] === '#' ? true : false;

    return (
      <ThemeProvider theme={{ props }}>
        <>
          {!isAnchor && (
            <Block as={as} href={href} type={type} {...restProps}>
              <span dangerouslySetInnerHTML={{ __html: children }} />
            </Block>
          )}

          {isAnchor && (
            <AnchorLink href={href} type={type} className='link-anchor' {...restProps}>
              <span dangerouslySetInnerHTML={{ __html: children }} />
            </AnchorLink>
          )}
        </>
      </ThemeProvider>
    );
  }
}
