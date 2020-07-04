import React from 'react';
import { graphql, compose } from 'react-apollo';
import { withRouter } from 'next/router';
import { imageSourceGenerate } from 'utils';

import {
  Prefooter,
  WrapperContent,
  ContentWithAddition,
  SignButton,
  ServiceHeader,
  Typography,
  RelationList,
  ContentTitle,
  ToggleContent,
  ReviewsList,
  LicensesList
} from 'components';

import Block from './Doctor.style';

import { GET_DOCTOR_DETAIL_DATA } from 'graphql/query';

@withRouter
@compose(
  graphql(GET_DOCTOR_DETAIL_DATA, {
    name: 'pageData',
    options: props => {
      const { router } = props;

      return {
        variables: {
          slug: router.query.doctor
        }
      };
    }
  })
)
export default class Doctor extends React.Component {
  render() {
    const { pageData } = this.props;

    const {
      DoctorsDoctorDynamic,
      DoctorReviewsStatic,
      DoctorChronicleStatic,
      DoctorCertificatesStatic
    } = pageData || {};

    const {
      name,
      position,
      detail_text: text,
      photo_detail: photoRaw,
      procedures,
      chronicle,
      certificates,
      reviews,
      start_service: consultation
    } =
      (DoctorsDoctorDynamic &&
        Array.isArray(DoctorsDoctorDynamic) &&
        DoctorsDoctorDynamic.length > 0 &&
        DoctorsDoctorDynamic[0]) ||
      {};

    const { sizes: doctorImageSizes } = photoRaw || {};
    const doctorImageParams = [['md', 768], ['lg', 3200]];
    const consultSourceData = imageSourceGenerate(doctorImageSizes, doctorImageParams);
    const { title: chronicleTitle } = DoctorChronicleStatic || {};
    const { title: reviewsTitle } = DoctorReviewsStatic || {};
    const { title: certificatesTitle } = DoctorCertificatesStatic || {};
    const { name: consultationTitle = '', detail_text: consultationText, priceItem } =
      consultation || {};
    const { procedures: consultationProcedures } = priceItem || {};
    const { name: consultationPriceText, price: consultationPrice } =
      (consultationProcedures &&
        Array.isArray(consultationProcedures) &&
        consultationProcedures.length > 0 &&
        consultationProcedures[0]) ||
      {};

    return (
      <Block as={'section'}>
        {name && (
          <Block.PageHeader>
            <ServiceHeader
              title={name}
              description={position}
              text={text}
              photoSrc={consultSourceData.lazy}
              photoSource={consultSourceData.source}
            />
          </Block.PageHeader>
        )}

        {(procedures || chronicle || certificates) && (
          <WrapperContent width={'800'}>
            {procedures && (
              <Block.Content>
                <Typography>{procedures}</Typography>
              </Block.Content>
            )}

            {chronicle && chronicle.length > 0 && (
              <Block.Education>
                {chronicleTitle && <ContentTitle title={chronicleTitle} />}
                <RelationList list={chronicle} />
              </Block.Education>
            )}

            {certificates && certificates.length > 0 && (
              <Block.Sertification>
                <ToggleContent title={certificatesTitle} view={'standartNoBorder'}>
                  <Block.SertificationList>
                    <LicensesList list={certificates} isBorderTop={false} linksType={false} />
                  </Block.SertificationList>
                </ToggleContent>
              </Block.Sertification>
            )}
          </WrapperContent>
        )}

        {Array.isArray(reviews) && reviews.length > 0 && (
          <Block.Reviews>
            <WrapperContent width={'800'}>
              {reviewsTitle && <Block.ReviewsTitle>{reviewsTitle}</Block.ReviewsTitle>}
              <ReviewsList list={reviews} />
            </WrapperContent>
          </Block.Reviews>
        )}

        {(consultationTitle || consultationText) && (
          <Block.Consultation>
            <ContentWithAddition
              type={'text'}
              title={consultationTitle}
              additionTitle={consultationPrice}
              additionText={consultationPriceText}
              content={consultationText}
            >
              <Block.ConsultationSign>
                <SignButton title={'Записаться на прием'} />
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
