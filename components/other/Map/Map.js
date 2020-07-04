import React, { Component } from 'react';

import { YMaps, Map as MapY, Placemark } from 'react-yandex-maps';
import { provider } from 'styles';

import Block from './Map.style.js';

export default class Map extends Component {
  state = {};

  mapInit() {}

  componentDidMount() {
    this.mapInit();
  }

  render() {
    const { placemarks, center, zoom } = this.props;

    const mapOptions = {
      preset: 'islands#violetMedicalIcon',
      iconColor: `${provider.color.violet__500}`
    };

    const mapPlacemarks = placemarks.map(item => {
      return (
        <Placemark
          key={item.id}
          geometry={item.mapGeometry}
          properties={item.mapProperties}
          options={mapOptions}
        />
      );
    });

    return (
      <Block>
        <YMaps query={{ load: 'package.full' }}>
          <MapY
            defaultState={{
              center: center,
              zoom: zoom,
              controls: ['zoomControl']
            }}
            width={'100%'}
            height={'100%'}
          >
            {mapPlacemarks}
          </MapY>
        </YMaps>
      </Block>
    );
  }
}
