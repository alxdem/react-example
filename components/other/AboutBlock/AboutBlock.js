import React, { Component } from 'react';

import Block from './AboutBlock.style.js';
import { WrapperContent, AboutTitle, YoutubeVideo, Typography, Picture } from 'components';

export default class AboutBlock extends Component {
  render() {
    const {
      title,
      description,
      leftCol,
      centerCol,
      rightCol,
      videoId,
      photoSrc,
      photoSource
    } = this.props;

    return (
      <Block>
        <WrapperContent>
          <AboutTitle title={title} description={description} />
          <Block.Inner>
            <Block.TextContent>
              {leftCol ? (
                <Block.MainColl>
                  <Typography>{leftCol}</Typography>
                </Block.MainColl>
              ) : null}
              {centerCol ? (
                <Block.CenterColl>
                  <Typography>{centerCol}</Typography>
                </Block.CenterColl>
              ) : null}
            </Block.TextContent>
            {videoId && (
              <Block.LastColl>
                <YoutubeVideo url={videoId} opts={this.videoOpt} onReady={this._onReady} />
              </Block.LastColl>
            )}

            {(rightCol || photoSrc) && (
              <Block.LastColl>
                <Picture src={photoSrc} alt={''} source={photoSource} />
              </Block.LastColl>
            )}
          </Block.Inner>
        </WrapperContent>
      </Block>
    );
  }
}
