import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru);

import Block from './AppDatePicker.style.js';

export default class AppDatePicker extends Component {
  static propTypes = {
    name: PropTypes.string
  };

  static defaultProps = {
    type: 'text'
  };

  handleChange = (e) => {
    if (this.props.onValueChange) {
      this.props.onValueChange(e);
    }
  };

  render() {
    const { selected, name, placeholderText, appErrorText, isValid } = this.props;
    const providerProps = {
      isValid
    };

    return (
      <ThemeProvider theme={{ props: providerProps }}>
        <Block>
          <DatePicker
            name={name}
            selected={selected}
            onChange={this.handleChange}
            locale='ru'
            dateFormat='dd.MM.yyyy'
            placeholderText={placeholderText}
          />
          <Block.Hint>{appErrorText}</Block.Hint>
        </Block>
      </ThemeProvider>
    );
  }
}
