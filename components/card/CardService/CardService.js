import React, { Component } from 'react';
import { Link } from 'config/routes';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Block from './CardService.style.js';
import { Picture } from 'components';

export default class CardService extends Component {
  static propTypes = {
    title: PropTypes.string,
    photo: PropTypes.string,
    linkAnchor: PropTypes.string,
    text: PropTypes.string,
    photoParams: PropTypes.array,
    routeParams: PropTypes.object,
    view: PropTypes.oneOf(['big'])
  };

  static defaultProps = {
    photoParams: [],
    routeParams: {}
  };

  render() {
    const { title, photo, linkAnchor, text, view, photoParams, route, routeParams } = this.props;
    const providerProps = {
      view
    };

    return (
      <ThemeProvider theme={{ props: providerProps }}>
        <Block>
          {photo && (
            <Block.Photo>
              <Picture src={photo} alt={''} source={photoParams} />
            </Block.Photo>
          )}

          <Block.Content>
            {title && <Block.Title dangerouslySetInnerHTML={{ __html: title }} />}
            {text && <Block.Text dangerouslySetInnerHTML={{ __html: text }} />}
            {route && linkAnchor && (
              <Link route={route} params={routeParams} passHref>
                <Block.More>{linkAnchor}</Block.More>
              </Link>
            )}
          </Block.Content>
        </Block>
      </ThemeProvider>
    );
  }
}
