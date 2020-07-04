import React from 'react';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import actions from 'store/actions';
import { bindActionCreators } from 'redux';

import {
  Prefooter,
  ServiceHeader,
  DoctorsList,
  WrapperContent,
  ContentWithAddition,
  SignButton
} from 'components';

import Block from './Doctors.style';

import { GET_DOCTORS_PAGE_DATA } from 'graphql/query';

const mapStateToProps = state => {
  return {
    modalAppointmentIsOpen: state.modalAppointmentIsOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      openAppointModal: bindActionCreators(actions.openAppointmentModal, dispatch)
    }
  };
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
@compose(graphql(GET_DOCTORS_PAGE_DATA, { name: 'pageData' }))
export default class Doctors extends React.Component {
  modalOpen(e) {
    e.preventDefault();

    const { actions } = this.props;
    actions.openAppointModal(true);
  }

  render() {
    const { pageData } = this.props;
    const {
      DoctorsHeaderStatic,
      DoctorsDoctorDynamic: doctorsList,
      DoctorsStartDynamic: doctorsConsult
    } = pageData || {};
    const { title: pageTitle } = DoctorsHeaderStatic || {};
    const consultRaw =
      (Array.isArray(doctorsConsult) && doctorsConsult.length > 0 && doctorsConsult[0]) || {};
    const { service } = consultRaw || {};
    const { priceItem, start_title: consultationTitle } = service || {};
    const { price_description: consultationText, procedures } = priceItem || {};
    const consultationAddition =
      (Array.isArray(procedures) && procedures.length > 0 && procedures[0]) || {};
    const { price_description: consultationPriceText, price: consultationPrice } =
      consultationAddition || {};

    return (
      <Block as={'section'}>
        {pageTitle && (
          <Block.PageHeader>
            <ServiceHeader title={pageTitle} colorType={'white'} width={'800'} />
          </Block.PageHeader>
        )}

        {Array.isArray(doctorsList) && (
          <Block.Doctors>
            <WrapperContent>
              <DoctorsList items={doctorsList} />
            </WrapperContent>
          </Block.Doctors>
        )}

        {(consultationTitle || consultationText) && (
          <Block.Consultation>
            <ContentWithAddition
              type='text'
              title={consultationTitle}
              additionTitle={consultationPrice}
              additionText={consultationPriceText}
              content={consultationText}
            >
              <Block.ConsultationSign>
                <SignButton title={'Записаться на прием'} onClick={e => this.modalOpen(e)} />
              </Block.ConsultationSign>
            </ContentWithAddition>
          </Block.Consultation>
        )}

        <Block.Prefooter>
          <Prefooter mapZoom={11} />
        </Block.Prefooter>
      </Block>
    );
  }
}
