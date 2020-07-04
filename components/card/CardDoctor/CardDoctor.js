import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'config/routes';
import { ThemeProvider } from 'styled-components';

import { Picture } from 'components';

import Block from './CardDoctor.style.js';

export default class CardDoctor extends Component {
  static propTypes = {
    name: PropTypes.string,
    position: PropTypes.string,
    photo: PropTypes.string,
    link: PropTypes.string,
    view: PropTypes.oneOf(['ask', 'card']),
    background: PropTypes.oneOf(['white', 'gray'])
  };

  static defaultProps = {
    view: 'card',
    background: 'white'
  };

  render() {
    const { title, position, link, photo, view, background, sourceData } = this.props;
    const providerProps = {
      view,
      background
    };

    return (
      <ThemeProvider theme={{ props: providerProps }}>
        {typeof link === 'string' && (
          <Link route='doctor' params={{ doctor: link }} passHref>
            <Block>
              <Block.Photo>
                <Picture src={photo} alt={title} source={sourceData} />
              </Block.Photo>

              <Block.Body>
                {title && <Block.Title>{title}</Block.Title>}

                {position && (
                  <Block.Position dangerouslySetInnerHTML={{ __html: position }}></Block.Position>
                )}
              </Block.Body>
            </Block>
          </Link>
        )}
      </ThemeProvider>
    );
  }
}
