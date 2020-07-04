import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { imageSourceGenerate } from 'utils';

import Block from './DoctorsList.style.js';
import { CardDoctor } from 'components';

export default class DoctorsList extends Component {
  static propTypes = {
    items: PropTypes.array
  };

  static defaultProps = {
    items: []
  };

  render() {
    const { items } = this.props;

    const elems =
      items &&
      Array.isArray(items) &&
      items.map(item => {
        const { sizes } = item.photo_preview || {};
        const imageParams = [['md', 460], ['lg', 3200]];
        const headerSourceData = imageSourceGenerate(sizes, imageParams);

        return (
          <>
            {typeof item.slug === 'string' && (
              <Block.Item key={item.id}>
                <CardDoctor
                  title={item.name}
                  position={item.position}
                  photo={headerSourceData.lazy}
                  sourceData={headerSourceData.source}
                  link={item.slug}
                  view={'card'}
                  background={'white'}
                ></CardDoctor>
              </Block.Item>
            )}
          </>
        );
      });

    return (
      <Block>
        <Block.Inner>
          <Block.List>{elems}</Block.List>
        </Block.Inner>
      </Block>
    );
  }
}
