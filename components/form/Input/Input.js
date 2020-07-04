import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

import Block from './Input.style.js';

export default class Input extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'phone', 'date', 'number', 'textarea']),
    placeholder: PropTypes.string,
    isRequired: PropTypes.bool,
    labelText: PropTypes.string,
    name: PropTypes.string
  };

  static defaultProps = {
    type: 'text',
    placeholder: '',
    isRequired: false,
    value: ''
  };

  state = {
    value: '',
    isActive: false,
    errorText: ''
  };

  handleChange = e => {
    if (this.props.onValueChange) {
      this.props.onValueChange(e);
    }
  };

  render() {
    const {
      type,
      placeholder,
      isRequired,
      labelText,
      value,
      name,
      pattern,
      isActive,
      isValid,
      onFocus,
      onBlur,
      errorText,
      mask,
      maskChar
    } = this.props;
    const providerProps = {
      isActive,
      isValid,
      type
    };

    const as = type === 'textarea' ? 'textarea' : 'input';

    const inputProps = {
      as,
      name,
      value,
      mask,
      maskChar,
      type,
      placeholder,
      onFocus: onFocus,
      onBlur: onBlur,
      onChange: e => this.handleChange(e),
      pattern
    };

    return (
      <ThemeProvider theme={{ props: providerProps }}>
        <Block>
          <Block.Wrapper>
            {labelText && (
              <Block.InputLabel>
                {labelText}
                {isRequired && <Block.Required>*</Block.Required>}
              </Block.InputLabel>
            )}
            {mask ? (
              <InputMask {...inputProps}>{() => <Block.Input {...inputProps} />}</InputMask>
            ) : (
              <Block.Input {...inputProps} />
            )}
          </Block.Wrapper>
          <Block.Hint>{errorText}</Block.Hint>
        </Block>
      </ThemeProvider>
    );
  }
}
