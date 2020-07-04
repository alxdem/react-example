import React from 'react';
import { connect } from 'react-redux';
import actions from 'store/actions';
import { bindActionCreators } from 'redux';
import { imageSourceGenerate } from 'utils';

import Block from './Services.style';
import {
  Prefooter,
  PageHeader,
  WrapperContent,
  ContentWithAddition,
  SignButton,
  Grid,
  CardService
} from 'components';

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
export default class Services extends React.Component {
  modalOpen(e) {
    e.preventDefault();

    const { actions } = this.props;
    actions.openAppointModal(true);
  }

  render() {
    const { router = {}, currentData } = this.props;
    const currentCategory = router.query.category;

    const { name: headerTitle, text: headerText, start_service: startData, services } =
      (currentData &&
        currentData.ServicesCategoryDynamic &&
        currentData.ServicesCategoryDynamic[0]) ||
      {};

    const {
      start_title: consultationTitle,
      preview_text: consultationText,
      video: consultationVideo,
      priceItem
    } = startData || {};
    const { url: consultationVideoUrl, description: consultationVideoText } =
      consultationVideo || {};
    const { procedures: consultationProcedures } = priceItem || {};

    const { price_description: consultationPriceTitle, price: consultationPrice } =
      (consultationProcedures && consultationProcedures[0]) || {};

    const cardImageParams = [['sm', 400], ['md', 1024], ['lg', 3200]];

    const cards =
      Array.isArray(services) &&
      services.map((item, index) => {
        if (index < 4) {
          const { sizes: cardImageSizes } = item.image || {};
          const consultSourceData = imageSourceGenerate(cardImageSizes, cardImageParams);

          return (
            <CardService
              title={item.name}
              text={item['preview_text']}
              route='service'
              routeParams={{ category: currentCategory, slug: item.slug }}
              linkAnchor={'Подробнее'}
              photo={consultSourceData.lazy}
              photoParams={consultSourceData.source}
            />
          );
        }
      });

    return (
      <Block.Root as={'section'}>
        {(headerTitle || headerText) && (
          <Block.PageHeader>
            <WrapperContent width={'800'}>
              <PageHeader title={headerTitle} content={headerText} />
            </WrapperContent>
          </Block.PageHeader>
        )}

        {(consultationTitle || consultationVideoUrl) && (
          <Block.Consultation>
            {consultationTitle && (
              <ContentWithAddition
                type={'text'}
                title={consultationTitle}
                additionTitle={consultationPrice}
                additionText={consultationPriceTitle}
                content={consultationText}
              >
                <Block.ConsultationSign>
                  <SignButton title={'Записаться на прием'} onClick={e => this.modalOpen(e)} />
                </Block.ConsultationSign>
              </ContentWithAddition>
            )}

            {consultationVideoUrl && (
              <Block.Media>
                <ContentWithAddition
                  type={'media'}
                  media={consultationVideoUrl}
                  descriptionText={consultationVideoText}
                />
              </Block.Media>
            )}
          </Block.Consultation>
        )}

        <Block.ServicesList>
          <WrapperContent>
            <Grid items={cards} cols={2} />
          </WrapperContent>
        </Block.ServicesList>

        <Block.Prefooter>
          <Prefooter mapZoom={11} />
        </Block.Prefooter>
      </Block.Root>
    );
  }
}
