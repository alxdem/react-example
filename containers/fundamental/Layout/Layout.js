import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import { bindActionCreators } from 'redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { graphql, compose, withApollo } from 'react-apollo';
import { withRouter } from 'next/router';
import actions from 'store/actions';
import global from 'styles/global';

import { cssVariable } from 'utils';
import {
  FormNonresident,
  FormAppointmentLanding,
  Modal,
  Header
} from 'components';

import 'styles/reset.css';
import 'styles/fonts.css';

const GlobalStyle = createGlobalStyle`
    ${global}
`;

import {
  GET_CURRENT_CITY_DATA,
  GET_FORM_NONRESIDENT_DATA,
  GET_QA_DATA
} from 'graphql/query';

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      navHide: bindActionCreators(actions.setIsNavShow, dispatch),
      navMobHide: bindActionCreators(actions.setIsMobNavShow, dispatch),
      setModalAppointmentState: bindActionCreators(actions.openAppointmentModal, dispatch),
      setModalNonresidentState: bindActionCreators(actions.openNonresidentModal, dispatch),
      setModalQuestionState: bindActionCreators(actions.openQuestionModal, dispatch),
      setModalReviewState: bindActionCreators(actions.openReviewModal, dispatch)
    }
  };
};

const mapStateToProps = state => {
  return {
    isNavShow: state.isNavShow,
    modalAppointmentIsOpen: state.modalAppointmentIsOpen,
    modalNonresidentIsOpen: state.modalNonresidentIsOpen,
    modalQuestionIsOpen: state.modalQuestionIsOpen,
    modalQuestionId: state.modalQuestionId,
    modalReviewIsOpen: state.modalReviewIsOpen,
    isMobNavShow: state.isMobNavShow
  };
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
@withApollo
@withRouter
@compose(
  graphql(GET_CURRENT_CITY_DATA, { name: 'cityCurrentData' }),
  graphql(GET_FORM_NONRESIDENT_DATA, { name: 'formWorryData' }),
  graphql(GET_QA_DATA, { name: 'qaData' })
)
export default class Layout extends Component {
  onClick = e => {
    this.navHide();
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
    this.onResize(null, true);
    this.apolloRefresh();
  }

  componentDidUpdate() {
    const { router } = this.props;

    if (router) {
      router.events.on('routeChangeStart', () => {
        this.navHide();
        this.navMobHide();
      });
    }
  }

  apolloRefresh = () => {
    const { client } = this.props;
    client.clearStore();
    client.resetStore();
  };

  navHide = () => {
    const { actions } = this.props;
    actions.navHide(false);
  };

  navMobHide = () => {
    const { actions } = this.props;
    actions.navMobHide(false);
  };

  modalAppointmentClose() {
    const { actions } = this.props;
    actions.setModalAppointmentState(false);
  }

  modalNonresidentClose() {
    const { actions } = this.props;
    actions.setModalNonresidentState(false);
  }

  render() {
    const {
      children: page,
      modalAppointmentIsOpen,
      modalNonresidentIsOpen,
      isMobNavShow,
      formWorryData,
      cityCurrentData
    } = this.props;

    const { LocationCityDynamic: cityRaw } = cityCurrentData || {};
    const currentCityData =
      (cityRaw && Array.isArray(cityRaw) && cityRaw.length === 1 && cityRaw[0]) || {};

    const { clinics: currentCityClinics } = currentCityData || [];

    const currentCityClinicsAddress = currentCityClinics.map(item => {
      return {
        label: item.address,
        value: item.id
      };
    });

    const { WorryTypeDynamic } = formWorryData || [];
    const worryList =
      Array.isArray(WorryTypeDynamic) &&
      WorryTypeDynamic.length > 0 &&
      WorryTypeDynamic.map(item => {
        return {
          label: item.name,
          value: item.slug
        };
      });

    return (
      <ThemeProvider theme={cssVariable}>
        <main onClick={this.onClick}>
          <Head>
            <title>Центр</title>
            <meta name='viewport' content='width=device-width, initial-scale=1' />

            <link
              href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap&subset=cyrillic'
              rel='stylesheet'
            />
          </Head>
          <GlobalStyle />
          <Header />
          {!isMobNavShow && page}

          <Modal
            isOpen={modalAppointmentIsOpen}
            label='Записаться на прием'
            modalClose={e => this.modalAppointmentClose(e)}
          >
            <FormAppointmentLanding
              type='site'
              title='Приём у&nbsp;врача'
              address={currentCityClinicsAddress}
            />
          </Modal>
          <Modal
            isOpen={modalNonresidentIsOpen}
            label='Для иногородних пациентов'
            modalClose={e => this.modalNonresidentClose(e)}
          >
            <FormNonresident
              type='site'
              title='Организация лечения в&nbsp;клинике для иногороднего пациента'
              worry={worryList}
            />
          </Modal>
        </main>
      </ThemeProvider>
    );
  }
}
