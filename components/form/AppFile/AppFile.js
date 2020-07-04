import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from 'components';
import Filesize from 'filesize';

import Block from './AppFile.style.js';

export default class AppFile extends Component {
  static propTypes = {
    files: PropTypes.array,
    isMultiple: PropTypes.bool
  };

  static defaultProps = {
    files: [],
    isMultiple: false
  };

  handleChange = e => {
    if (this.props.onValueChange) {
      this.props.onValueChange(e);
    }
  };

  btnRemoveClick = e => {
    if (this.props.fileRemove) {
      this.props.fileRemove(e);
    }
  };

  render() {
    const { appErrorText, isValid, isMultiple, files } = this.props;
    const providerProps = {
      isValid
    };

    let counter = 0;

    const filesList = files.map(item => {
      const size = Filesize(item.size, {
        round: 0,
        separator: ' ',
        locale: 'ru'
      });

      const name = item.name.length > 24 ? item.name.slice(0, 24) + '...' : item.name;

      return (
        <Block.Item key={counter}>
          <Block.Name>{name}</Block.Name>
          <Block.Size>{`(${size})`}</Block.Size>
          <Block.BtnRemove type='button' onClick={this.btnRemoveClick} data-id={counter++}>
            <Icon name={'cancel'} />
          </Block.BtnRemove>
        </Block.Item>
      );
    });

    return (
      <ThemeProvider theme={{ props: providerProps }}>
        <Block>
          {filesList && Array.isArray(filesList) && filesList.length > 0 && (
            <Block.Files>{filesList}</Block.Files>
          )}
          <Block.Label>
            <Block.Icon>
              <Icon name={'upload'} />
            </Block.Icon>
            <Block.Text>Прикрепить файл</Block.Text>
            <Block.Input onChange={this.handleChange} type='file' multiple={isMultiple} />
          </Block.Label>
          <Block.Hint>{appErrorText}</Block.Hint>
        </Block>
      </ThemeProvider>
    );
  }
}
