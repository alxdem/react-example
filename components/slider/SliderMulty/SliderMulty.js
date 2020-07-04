import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import PropTypes from 'prop-types';

import Block from './SliderMulty.style.js';
import { Icon, Picture } from 'components';

export default class SliderMulty extends Component {
  static propTypes = {
    list: PropTypes.array
  };

  static defaultProps = {
    list: []
  };

  componentDidMount() {
    if (process.browser) {
      window.addEventListener('resize', this.resize);
    }
  }

  render() {
    const { list, title } = this.props;

    const goPrev = () => {
      if (this.swiper !== null) {
        this.swiper.slidePrev();
      }
    };

    const goNext = () => {
      if (this.swiper !== null) {
        this.swiper.slideNext();
      }
    };

    const params = {
      slidesPerView: 4,
      spaceBetween: 0,
      getSwiper: swiper => {
        this.swiper = swiper;
      },
      breakpoints: {
        891: {
          slidesPerView: 4
        },
        561: {
          slidesPerView: 3
        },
        320: {
          slidesPerView: 3,
          spaceBetween: 20,
          loop: true
        }
      }
    };

    return (
      <Block>
        <Block.Header>
          {title && <Block.Title>{title}</Block.Title>}
          <Block.Nav>
            <Block.Button onClick={goPrev} prev>
              <Icon name={'arrow2'} size={'fit'} />
            </Block.Button>
            <Block.Button onClick={goNext}>
              <Icon name={'arrow2'} size={'fit'} />
            </Block.Button>
          </Block.Nav>
        </Block.Header>
        {list && (
          <Block.Slider>
            <Swiper {...params}>
              {list.map(item => {
                const { image } = item || {};
                const { id, name, sizes } = image || {};
                let counter = 0;

                const sourceData =
                  Array.isArray(sizes) &&
                  sizes.map(img => {
                    counter++;
                    switch (img.key) {
                      case 'lazy':
                        srcUrl = img.src;
                        break;

                      case 'md':
                        return (
                          <source key={counter} srcSet={img.src} media={`(max-width: 3200px)`} />
                        );
                        break;

                      case 'sm':
                        return (
                          <source key={counter} srcSet={img.src} media={`(max-width: 560px)`} />
                        );
                        break;
                    }
                  });

                return (
                  <Block.Slide key={id}>
                    <Picture alt={name} view={'standart'} source={sourceData} />
                  </Block.Slide>
                );
              })}
            </Swiper>
          </Block.Slider>
        )}
      </Block>
    );
  }
}
