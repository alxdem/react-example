import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ContentTitle, WrapperContent, Typography, YoutubeVideo } from 'components';

import Block from './ContentWithAddition.style.js';

export default class ContentWithAddition extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['text', 'media']),
    title: PropTypes.string,
    content: PropTypes.string,
    additionTitle: PropTypes.string,
    additionText: PropTypes.string,
    descriptionText: PropTypes.string,
    media: PropTypes.string,
    titleContent: PropTypes.string
  };

  static defaultProps = {
    type: 'text'
  };

  render() {
    const {
      type,
      title,
      content,
      additionTitle,
      additionText,
      descriptionText,
      media,
      children,
      titleContent
    } = this.props;

    return (
      <Block>
        <WrapperContent>
          {title && (
            <Block.Title>
              <ContentTitle title={title} />
            </Block.Title>
          )}

          {(titleContent || content || media || children) && (
            <Block.Inner>
              <Block.Addition isActive={additionTitle || additionText}>
                {additionTitle && (
                  <Block.AdditionAccent dangerouslySetInnerHTML={{ __html: additionTitle }} />
                )}

                {additionText && (
                  <Block.AdditionText dangerouslySetInnerHTML={{ __html: additionText }} />
                )}
              </Block.Addition>

              <Block.Content>
                {titleContent && (
                  <Block.TitleContent dangerouslySetInnerHTML={{ __html: titleContent }} />
                )}

                {content && type === 'text' && <Typography>{content}</Typography>}

                {media && type === 'media' && (
                  <YoutubeVideo url={media} opts={this.videoOpt} onReady={this._onReady} />
                )}

                {children}
              </Block.Content>

              <Block.Addition isActive={descriptionText}>
                {descriptionText && (
                  <Block.DescriptionText dangerouslySetInnerHTML={{ __html: descriptionText }} />
                )}
              </Block.Addition>
            </Block.Inner>
          )}
        </WrapperContent>
      </Block>
    );
  }
}
