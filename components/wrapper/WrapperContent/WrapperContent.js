import React, { Component } from 'react';
import Block from './WrapperContent.style.js';

export default class WrapperContent extends Component {
  render() {
    const { width = '1190' } = this.props;

    return <Block width={width}>{this.props.children}</Block>;
  }
}
