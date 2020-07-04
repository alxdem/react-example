import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import Select from 'react-select';

import Block from './AppSelect.style.js';

export default class AppSelect extends Component {
  static propTypes = {
    options: PropTypes.array
  };

  static defaultProps = {
    options: []
  };

  render() {
    const {
      options,
      styles,
      defaultValue,
      defaultMenuIsOpen,
      className,
      classNamePrefix,
      isSearchable,
      onChange,
      hideSelectedOptions,
      placeholder,
      appErrorText,
      isValid
    } = this.props;
    const providerProps = {
      isValid
    };

    return (
      <ThemeProvider theme={{ props: providerProps }}>
        <Block>
          <Select
            inputId='app-select'
            defaultValue={defaultValue}
            defaultMenuIsOpen={defaultMenuIsOpen}
            className={className}
            classNamePrefix={classNamePrefix}
            isSearchable={isSearchable}
            onChange={onChange}
            options={options}
            styles={styles}
            hideSelectedOptions={hideSelectedOptions}
            placeholder={placeholder}
          />
          <Block.Hint>{appErrorText}</Block.Hint>
        </Block>
      </ThemeProvider>
    );
  }
}
