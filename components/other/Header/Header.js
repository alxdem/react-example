import React, { Component } from 'react';
import NextLink from 'next/link';
import { ThemeProvider } from 'styled-components';

import { graphql, compose, withApollo } from 'react-apollo';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import actions from 'store/actions';
import { bindActionCreators } from 'redux';

import {
  WrapperContent,
  Nav,
  HeaderCity,
  HeaderAddress,
  HeaderContacts,
  Burger,
  Icon,
  NavMob
} from 'components';

import Block from './Header.style.js';

import { data } from './mock';
import { dataLanding } from './mockLanding';

import {
  GET_CITY_DATA,
  GET_ADDRESS_DATA,
  GET_CURRENT_CITY_DATA,
  GET_NAV_DATA
} from 'graphql/query';

const mapStateToProps = state => {
  return {
    isNavShow: state.isNavShow,
    navHeight: state.navHeight,
    isMobNavShow: state.isMobNavShow
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      openAppointModal: bindActionCreators(actions.openAppointmentModal, dispatch),
      openMobNav: bindActionCreators(actions.setIsMobNavShow, dispatch)
    }
  };
};

@withRouter
@connect(
  mapStateToProps,
  mapDispatchToProps
)
@compose(
  graphql(GET_CITY_DATA, { name: 'cityData' }),
  graphql(GET_ADDRESS_DATA, { name: 'addressData' }),
  graphql(GET_NAV_DATA, { name: 'navData' }),
  graphql(GET_CURRENT_CITY_DATA, {
    name: 'cityCurrentData',
    options: () => {
      return {
        variables: {
          ids: 100
        }
      };
    }
  })
)
@withApollo
export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  modalOpen(e) {
    e.preventDefault();
    const { actions } = this.props;
    actions.openAppointModal(true);
  }

  switchData(param) {
    switch (param) {
      case 'ln':
        return dataLanding;
      default:
        return data;
    }
  }

  onNavBGClick(e) {
    e.stopPropagation();
  }

  onBurgerClick = e => {
    e.preventDefault();
    e.stopPropagation();
    const { actions, isMobNavShow } = this.props;

    actions.openMobNav(!isMobNavShow);
  };

  render() {
    const {
      cityData,
      addressData,
      cityCurrentData,
      navData,
      page,
      cityTMP,
      isNavShow,
      navHeight,
      isMobNavShow
    } = this.props;
    let data = this.switchData(page);

    const providerProps = {
      navHeight,
      isNavShow,
      isMobNavShow
    };

    const isLanding = page === 'ln' ? true : false;

    switch (cityTMP) {
      case 'spb':
        data = data.spb;
        break;

      case 'msk':
        data = data.msk;
        break;

      default:
        break;
    }

    const dataNav = data.nav;

    const { LocationCityDynamic } = cityCurrentData || {};
    const currentCity = Array.isArray(LocationCityDynamic)
      ? LocationCityDynamic[0]
      : 'Город не выбран';
    const { clinics: currentCityClinics } = currentCity || {};
    const { phone: currentCityPhone } = currentCity || {};

    const currentCityClinicsAddress = currentCityClinics.map(item => {
      return item;
    });

    return (
      <ThemeProvider theme={{ props: providerProps }}>
        <Block>
          <WrapperContent>
            <Block.Inner>
              <NextLink href='/' passHref>
                <Block.Logo>
                  <Icon name={'logobig'} fit={true} />
                </Block.Logo>
              </NextLink>

              <Block.Content>
                <Block.Top>
                  {cityData && cityData.LocationCityDynamic && (
                    <Block.City>
                      <HeaderCity list={cityData.LocationCityDynamic} />
                    </Block.City>
                  )}

                  {addressData && addressData.LocationClinicDynamic && (
                    <Block.Address>
                      <HeaderAddress list={currentCityClinicsAddress} />
                    </Block.Address>
                  )}
                </Block.Top>

                <Block.Bottom>
                  {dataNav && (
                    <Block.Nav>
                      <Nav list={dataNav} servicesData={navData} />
                    </Block.Nav>
                  )}

                  <Block.Contacts>
                    <HeaderContacts
                      phone={currentCityPhone}
                      modalOpen={e => this.modalOpen(e)}
                      isLanding={isLanding}
                    />
                  </Block.Contacts>

                  {page !== 'ln' && (
                    <Block.Burger>
                      <Burger
                        onClick={this.onBurgerClick}
                        isOpen={isMobNavShow}
                        isActive={!isMobNavShow}
                      />
                    </Block.Burger>
                  )}

                  <Block.LogoMob>
                    <Icon name={'logo'} fit={true} />
                  </Block.LogoMob>
                </Block.Bottom>
              </Block.Content>
            </Block.Inner>
          </WrapperContent>

          <Block.NavMob>
            <WrapperContent>
              <Block.MobInner>
                <Block.MobAddress>
                  <HeaderAddress list={currentCityClinicsAddress} type={'mob'} />
                </Block.MobAddress>

                <Block.MobContacts>
                  <HeaderContacts
                    phone={currentCityPhone}
                    modalOpen={e => this.modalOpen(e)}
                    type={'mob'}
                    btnDirection={'reverse'}
                  />
                </Block.MobContacts>

                <Block.MobNav>
                  <NavMob list={dataNav} servicesData={navData} />
                </Block.MobNav>
              </Block.MobInner>
            </WrapperContent>
          </Block.NavMob>

          <Block.NavBG onClick={this.onNavBGClick} />
        </Block>
      </ThemeProvider>
    );
  }
}
