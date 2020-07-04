import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCookie, setCookie } from 'utils';
import { withApollo } from 'react-apollo';
import { bindActionCreators } from 'redux';
import actions from 'store/actions';
import { connect } from 'react-redux';

import Block from './CitySwitchList.style.js';

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      changeCity: bindActionCreators(actions.setCity, dispatch)
    }
  };
};

const mapStateToProps = (state) => {
  return {
    city: state.city
  };
};

@connect(mapStateToProps, mapDispatchToProps)
@withApollo
export default class CitySwitchList extends Component {
  static propTypes = {
    title: PropTypes.string,
    list: PropTypes.array
  };

  onClick = (e) => {
    e.preventDefault();
    const slug = e.target.value;
    const { client, list, actions } = this.props;
    const cityCurrent = getCookie('LOCATION_SELECTED');

    if (cityCurrent !== slug) {
      let cityObj = {};
      list &&
        list.map((item) => {
          if (item.slug === slug) {
            cityObj.value = item.slug;
            cityObj.label = item.name;
          }
        });
      actions.changeCity(cityObj);
      setCookie('LOCATION_SELECTED', slug);
      client.clearStore();
      client.resetStore();
    }
  };

  render() {
    const { title, list, children } = this.props;

    const listLinks = list
      ? list.map((item) => {
          const anchor = item.name;
          const link = item.slug;
          return (
            <Block.Item key={item.id}>
              <Block.Button type='button' value={link} onClick={(e) => this.onClick(e)}>
                {anchor}
              </Block.Button>
            </Block.Item>
          );
        })
      : null;

    return (
      <Block>
        {title && <Block.Title>{title}</Block.Title>}

        {list && <Block.List>{listLinks}</Block.List>}

        {children && <Block.Addition>{children}</Block.Addition>}
      </Block>
    );
  }
}
