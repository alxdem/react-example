import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import Block from './Checkbox.style.js';

export default class Checkbox extends Component {
  static propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    isChecked: PropTypes.bool
  };

  static defaultProps = {
    name: '',
    isChecked: false
  };

  state = {
    isChecked: false
  };

  handleInputChange = e => {
    if (this.props.onValueChange) {
      this.props.onValueChange(e);
    }
  };

  validate = e => {};

  render() {
    const { name, label, value, isChecked } = this.props;
    const providerProps = {
      isChecked
    };

    return (
      <ThemeProvider theme={{ props: providerProps }}>
        <Block>
          <Block.Checkbox>
            <Block.Input
              type='checkbox'
              name={name}
              value={value}
              isChecked={isChecked}
              onChange={this.handleInputChange}
            />
            {label && <Block.LabelText>{label}</Block.LabelText>}
          </Block.Checkbox>
        </Block>
      </ThemeProvider>
    );
  }
}
