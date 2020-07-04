import React from 'react';
import { graphql, compose } from 'react-apollo';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import actions from 'store/actions';
import { bindActionCreators } from 'redux';
import { imageSourceGenerate } from 'utils';

import Block from './Service.style';
import {
  Prefooter,
  ServiceHeader,
  SignButton,
  Steps,
  ContentWithAddition,
  CardOffer,
  WrapperContent
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

import { GET_SERVICE_PAGE_DATA } from 'graphql/query';

@withRouter
@connect(
  mapStateToProps,
  mapDispatchToProps
)
@compose(
  graphql(GET_SERVICE_PAGE_DATA, {
    name: 'pageData',
    options: props => {
      const { router } = props;

      return {
        variables: {
          slug: router.query.slug
        }
      };
    }
  })
)
export default class Service extends React.Component {
  modalOpen(e) {
    e.preventDefault();

    const { actions } = this.props;
    actions.openAppointModal(true);
  }

  render() {
    const { pageData } = this.props;

    const { ServicesServiceDynamic } = pageData || {};
    const {
      name: title,
      detail_text: description,
      prepare: preparationText,
      prepare_title: preparationTitle,
      video: preparationVideo,
      duration: preparationDuration,
      duration_description: preparationDescription,
      performing_title: performingTitle,
      performing: performingText,
      after_procedure: afterText,
      after_procedure_sidebar_value: afterValue,
      after_procedure_sidebar_description: afterDescription,
      after_procedure_title: afterTitle,
      image,
      steps,
      banner,
      consult_title: consultationTitle,
      consult_description: consultationDescription
    } = (ServicesServiceDynamic && ServicesServiceDynamic[0]) || {};

    const { url: videoUrl, description: videoDescription } = preparationVideo || {};

    const { sizes: headerSizes } = image || {};
    const headerImageParams = [['lg', 3200]];
    const headerSourceData = imageSourceGenerate(headerSizes, headerImageParams);

    return (
      <Block.Root as={'section'}>
        {(title || description) && (
          <Block.PageHeader>
            <ServiceHeader
              title={title}
              text={description}
              photoSrc={headerSourceData.lazy}
              photoSource={headerSourceData.source}
            />
          </Block.PageHeader>
        )}

        <Block.Content>
          {preparationText && (
            <Block.Preparation>
              <ContentWithAddition
                type={'text'}
                title={preparationTitle}
                content={preparationText}
              />
            </Block.Preparation>
          )}

          {videoUrl && (
            <Block.Media>
              <ContentWithAddition
                type={'media'}
                descriptionText={videoDescription}
                media={videoUrl}
              />
            </Block.Media>
          )}

          {preparationText && (
            <Block.Process>
              <ContentWithAddition
                type={'text'}
                title={performingTitle}
                additionTitle={preparationDuration}
                additionText={preparationDescription}
                content={performingText}
              />
            </Block.Process>
          )}
        </Block.Content>

        {steps && (
          <Block.Steps>
            <Steps items={steps} />
          </Block.Steps>
        )}

        {afterText && (
          <Block.After>
            <ContentWithAddition
              type={'text'}
              title={afterTitle}
              additionTitle={afterValue}
              additionText={afterDescription}
              content={afterText}
            />
          </Block.After>
        )}

        <Block.Action>
          <WrapperContent width={'800'}>
            {Array.isArray(banner) &&
              banner.map(item => {
                const cardLogoImage =
                  item.logo && item.logo.sizes && item.logo.sizes[0] && item.logo.sizes[0].src;

                const itemImageParams = [['md', 560], ['lg', 3200]];
                const cardSourceData = imageSourceGenerate(item.image.sizes, itemImageParams);

                return (
                  <CardOffer
                    key={item.id}
                    title={item.title}
                    photoSrc={cardSourceData.lazy}
                    link={item.link}
                    text={item.subtitle}
                    headerImage={cardLogoImage}
                    colorType={'gray'}
                    photoParams={cardSourceData.source}
                  />
                );
              })}
          </WrapperContent>
        </Block.Action>

        {(consultationDescription || consultationTitle) && (
          <Block.Consultation>
            <ContentWithAddition
              type={'text'}
              title={consultationTitle}
              content={consultationDescription}
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
      </Block.Root>
    );
  }
}
