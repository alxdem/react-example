import React, { Component } from 'react';

import Block from './Loader.style.js';
import { Icon } from 'components';

export default class Loader extends Component {
  render() {
    return (
      <Block>
        <Block.Icon>
          <Icon name={'loader'} fit={true} />
        </Block.Icon>
      </Block>
    );
  }
}
