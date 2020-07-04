import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Block from './CardReview.style.js';
import { Typography } from 'components';

export default class CardReview extends Component {
  static propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    text: PropTypes.string
  };

  state = {};

  render() {
    const { title, date, text } = this.props;

    return (
      <Block>
        {(title || date) && (
          <Block.Header>
            {title && <Block.Title>{title}</Block.Title>}

            {date && <Block.Date>{date}</Block.Date>}
          </Block.Header>
        )}

        {text && (
          <Block.Body>
            <Typography>{text}</Typography>
          </Block.Body>
        )}
      </Block>
    );
  }
}
