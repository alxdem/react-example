import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import Block from './ToggleContent.style.js';
import { Icon, Typography } from 'components';

export default class ToggleContent extends Component {
  static propTypes = {
    view: PropTypes.oneOf(['standart', 'nav', 'standartNoBorder'])
  };

  static defaultProps = {
    view: 'standart'
  };

  constructor(props) {
    super(props);

    this.inner = React.createRef();

    this.children = props.children;
  }
  state = {
    isOpen: false,
    height: 0
  };

  onToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });

    this.contentHeightSet(this.state.isOpen);
  };

  contentHeightSet = isOpen => {
    const innerHeight = !isOpen ? this.inner.current.offsetHeight : 0;

    this.setState({
      height: innerHeight
    });
  };

  render() {
    const { isOpen, height } = this.state;
    const { title, content, view } = this.props;
    const providerProps = {
      view
    };

    return (
      <ThemeProvider theme={{ props: providerProps }}>
        <Block>
          {title && (
            <>
              <Block.Button onClick={this.onToggle}>
                <Block.ButtonInner>
                  <Block.Title>{title}</Block.Title>
                  <Block.Status isRotate={isOpen}>
                    <Icon name={'arrow'} />
                  </Block.Status>
                </Block.ButtonInner>
              </Block.Button>

              <Block.Content height={height}>
                <Block.Inner ref={this.inner}>
                  {content && (
                    <Block.Description>
                      <Typography>{content}</Typography>
                    </Block.Description>
                  )}

                  {this.children && <Block.Children>{this.children}</Block.Children>}
                </Block.Inner>
              </Block.Content>
            </>
          )}
        </Block>
      </ThemeProvider>
    );
  }
}
