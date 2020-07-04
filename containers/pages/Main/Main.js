import React from 'react';
import { graphql, compose, withApollo } from 'react-apollo';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { imageSourceGenerate } from 'utils';

import Block from './Main.style';
import {
  Info,
  Links,
  TextWithBG,
  AboutBlock,
  InfoConsultation,
  WrapperContent,
  AboutTitle,
  OffersList,
  ToggleContent,
  SliderMulty,
  Prefooter,
  Typography
} from 'components';

import {
  GET_INFO_DATA,
  GET_SLIDER_DATA,
  GET_LINKS_DATA,
  GET_MAP_STATIC_DATA,
  GET_LINKS_STATIC_DATA,
  GET_ABOUT_DATA,
  GET_CONSULTATION_DATA,
  GET_BANNERS_DATA,
  GET_SLIDERS_DATA,
  GET_METHOD_DATA,
  GET_FOOTER_DATA
} from 'graphql/query';

const mapStateToProps = state => {
  return {
    city: state.city
  };
};

@withApollo
@withRouter
@connect(
  mapStateToProps,
  null
)
@compose(
  graphql(GET_INFO_DATA, { name: 'infoData' }),
  graphql(GET_SLIDER_DATA, { name: 'sliderData' }),
  graphql(GET_LINKS_DATA, { name: 'linksData' }),
  graphql(GET_LINKS_STATIC_DATA, { name: 'linksStaticData' }),
  graphql(GET_MAP_STATIC_DATA, { name: 'mapStaticData' }),
  graphql(GET_ABOUT_DATA, { name: 'aboutData' }),
  graphql(GET_CONSULTATION_DATA, { name: 'consultationData' }),
  graphql(GET_BANNERS_DATA, { name: 'bannersData' }),
  graphql(GET_SLIDERS_DATA, { name: 'slidersData' }),
  graphql(GET_METHOD_DATA, { name: 'methodData' }),
  graphql(GET_FOOTER_DATA, { name: 'footerData' })
)
export default class Main extends React.Component {
  render() {
    const {
      linksData,
      infoData,
      sliderData,
      linksStaticData,
      mapStaticData,
      aboutData,
      consultationData,
      bannersData,
      slidersData,
      methodData
    } = this.props;

    const { HomeWorryDynamic: linksList } = linksData || {};
    const isLinks = Boolean(linksList);

    const { HomeWorryStatic: linksStatic } = linksStaticData || {};
    const { title: linksTitle } = linksStatic || {};

    const { HomeSliderStatic } = infoData || {};
    const { title: topSliderTitle, subtitle: topSliderDescription } = HomeSliderStatic || {};

    const { HomeSliderDynamic: topSliderList } = sliderData || {};

    const isSlider = Boolean(topSliderTitle || topSliderDescription || topSliderList);

    const { HomeMapStatic } = mapStaticData || {};
    const { title: mapStaticTitle, subtitle: mapStaticSubtitle } = HomeMapStatic || {};

    const isMapStatic = Boolean(mapStaticTitle || mapStaticSubtitle);

    const { HomeAboutDynamic, HomeAboutStatic } = aboutData || {};
    const { text_left: aboutMain, text_right: aboutText, video: aboutVideo } =
      HomeAboutDynamic || {};
    const { url: aboutVideoUrl } = aboutVideo || {};
    const { title: aboutTitle, subtitle: aboutSubtitle } = HomeAboutStatic || {};

    const isAbout = Boolean(aboutTitle || aboutMain || aboutText);

    const { HomeConsultStatic, HomeConsultDynamic } = consultationData || {};
    const { title: consultTitle } = HomeConsultStatic || {};
    const {
      image: consultImageRaw,
      header1: consultTitle1,
      header2: consultTitle2,
      header3: consultTitle3,
      text1: consultText1,
      text2: consultText2,
      text3: consultText3
    } = HomeConsultDynamic || {};

    const isConsultation = Boolean(consultText1 || consultText2 || consultText3);

    const { sizes: consultImageSizes } = consultImageRaw || {};
    const consultImageParams = [['sm', 400], ['md', 1024], ['lg', 3200]];
    const consultSourceData = imageSourceGenerate(consultImageSizes, consultImageParams);

    const { CommonBannerDynamic: offersList } = bannersData || [];

    const { HomeGalleryStatic, CommonGalleryDynamic: galleryList } = slidersData || {};
    const { title: galleryTitle } = HomeGalleryStatic || {};

    const { HomeMethodsStatic, HomeMethodDynamic: methodDinamic } = methodData || {};
    const { title: methodTitle } = HomeMethodsStatic || {};

    const { text_right: methodTextRight, text_left: methodTextLeft, services: methodServices } =
      methodDinamic || {};

    let methodCounter = 0;
    let methodLeftCol = [];
    let methodRightCol = [];

    Array.isArray(methodServices) &&
      methodServices.length > 0 &&
      methodServices.forEach(item => {
        const id = item.id;
        const name = item.name;
        const text = item['preview_text'];

        const elem = (
          <Block.MethodsItem key={id}>
            <ToggleContent title={name} content={text} />
          </Block.MethodsItem>
        );

        if (methodCounter % 2 === 0) {
          methodRightCol.push(elem);
        } else {
          methodLeftCol.push(elem);
        }

        methodCounter++;
      });

    return (
      <Block.Root as={'section'}>
        {isSlider && (
          <Block.Info>
            <Info title={topSliderTitle} description={topSliderDescription} list={topSliderList} />
          </Block.Info>
        )}

        {isLinks && (
          <Block.Links>
            <Links title={linksTitle} links={linksList} />
          </Block.Links>
        )}

        {isMapStatic && (
          <Block.TextWithBG>
            <TextWithBG main={mapStaticTitle} text={mapStaticSubtitle} />
          </Block.TextWithBG>
        )}

        {isAbout && (
          <Block.About>
            <AboutBlock
              title={aboutTitle}
              description={aboutSubtitle}
              leftCol={aboutMain}
              centerCol={aboutText}
              videoId={aboutVideoUrl}
            />
          </Block.About>
        )}

        {isConsultation && (
          <Block.InfoConsultation>
            <WrapperContent>
              <Block.InfoConsultationHeader>
                <Block.InfoConsultationTitle>
                  <AboutTitle title={consultTitle} />
                </Block.InfoConsultationTitle>
                <Block.InfoConsultationVoid></Block.InfoConsultationVoid>
              </Block.InfoConsultationHeader>
              <Block.InfoConsultationInner>
                <Block.InfoConsultationService>
                  <InfoConsultation
                    serviceTitle={consultTitle1}
                    text={consultText1}
                    photoSrc={consultSourceData.lazy}
                    photoParams={consultSourceData.source}
                    link='/flebologiya-lechenie-varikoza/konsultatsiya-i-diagnostika'
                  />
                </Block.InfoConsultationService>

                <Block.InfoConsultationLists>
                  {(consultTitle2 || consultText2) && (
                    <Block.List>
                      {consultTitle2 && (
                        <Block.InfoConsultationListTitle>
                          {consultTitle2}
                        </Block.InfoConsultationListTitle>
                      )}
                      {consultText2 && (
                        <Typography listStyle={'leafBlue'}>{consultText2}</Typography>
                      )}
                    </Block.List>
                  )}

                  <Block.List>
                    {consultTitle3 && (
                      <Block.InfoConsultationListTitle>
                        {consultTitle3}
                      </Block.InfoConsultationListTitle>
                    )}
                    {consultText3 && <Typography listStyle={'leafPink'}>{consultText3}</Typography>}
                  </Block.List>
                </Block.InfoConsultationLists>
              </Block.InfoConsultationInner>
            </WrapperContent>
          </Block.InfoConsultation>
        )}

        {offersList && Array.isArray(offersList) && offersList.length > 0 && (
          <Block.Offers>
            <WrapperContent>
              <OffersList route='service' items={offersList} />
            </WrapperContent>
          </Block.Offers>
        )}

        {methodTitle && Array.isArray(methodServices) && methodServices.length > 0 && (
          <Block.Methods>
            <WrapperContent>
              <AboutTitle title={methodTitle} />
              {(methodTextRight || methodTextLeft) && (
                <Block.MethodsText>
                  {methodTextRight && (
                    <Block.MethodsTextMain>{methodTextRight}</Block.MethodsTextMain>
                  )}
                  {methodTextLeft && (
                    <Block.MethodsTextSecondary>{methodTextLeft}</Block.MethodsTextSecondary>
                  )}
                </Block.MethodsText>
              )}

              <Block.MethodsList>
                <Block.MethodsCol>{methodLeftCol}</Block.MethodsCol>

                <Block.MethodsCol>{methodRightCol}</Block.MethodsCol>
              </Block.MethodsList>
            </WrapperContent>
          </Block.Methods>
        )}

        {galleryList && Array.isArray(galleryList) && (
          <Block.Slider>
            <WrapperContent>
              <SliderMulty title={galleryTitle} list={galleryList} />
            </WrapperContent>
          </Block.Slider>
        )}

        <Block.Prefooter>
          <Prefooter mapZoom={11} />
        </Block.Prefooter>
      </Block.Root>
    );
  }
}
