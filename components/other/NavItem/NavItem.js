import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Block from './NavItem.style.js';

class NavItem extends Component {
  static propTypes = {
    submenu: PropTypes.array,
    servicesData: PropTypes.array
  };

  static defaultProps = {
    submenu: [],
    servicesData: []
  };

  onSubmenuClick(e) {
    e.stopPropagation();
  }

  render() {
    const { submenu, submenuDinamic, isActive, isPrimaryReception } = this.props;

    const providerProps = {
      isActive,
      submenuDinamic
    };

    return (
      <ThemeProvider theme={{ props: providerProps }}>
        <Block onClick={this.onSubmenuClick}>
          {!submenuDinamic && submenu}
          {submenuDinamic}
          {submenuDinamic && isPrimaryReception}
        </Block>
      </ThemeProvider>
    );
  }
}

export default NavItem;
