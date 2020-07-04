import React from 'react';
import { graphql, compose } from 'react-apollo';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import actions from 'store/actions';
import { bindActionCreators } from 'redux';

import {
  Prefooter,
  WrapperContent,
  Button,
  PageHeader,
  ReviewsList,
  ContentWithAddition,
  SignButton,
  Pagination,
  Typography
} from 'components';

import Block from './Reviews.style';

import { GET_REVIEWS_DATA } from 'graphql/query';

const mapStateToProps = state => {
  return {
    modalAppointmentIsOpen: state.modalAppointmentIsOpen,
    modalReviewIsOpen: state.modalReviewIsOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      openAppointModal: bindActionCreators(actions.openAppointmentModal, dispatch),
      openReviewModal: bindActionCreators(actions.openReviewModal, dispatch)
    }
  };
};

@withRouter
@connect(
  mapStateToProps,
  mapDispatchToProps
)
@compose(
  graphql(GET_REVIEWS_DATA, {
    name: 'pageData',
    options: props => {
      const { router } = props;

      return {
        fetchPolicy: 'no-cache',
        variables: {
          page: router.query.page ? router.query.page : 1
        }
      };
    }
  })
)
export default class Reviews extends React.Component {
  modalOpen(e) {
    e.preventDefault();

    const { actions } = this.props;
    actions.openAppointModal(true);
  }

  askBtnClick(e) {
    e.preventDefault();

    const { actions } = this.props;
    actions.openReviewModal(true);
  }

  render() {
    const { pageData, router } = this.props;
    const {
      AboutReviewsHeaderStatic,
      AboutReviewPaginatedDynamic,
      AboutReviewsServiceStatic,
      AboutReviewsStartDynamic
    } = pageData || {};
    const { title, description } = AboutReviewsHeaderStatic || {};
    const { pagination: paginationData } = AboutReviewPaginatedDynamic || {};
    const { data: reviewsArray, current_page: currentPage, last_page: lastPage } =
      paginationData || {};

    const paginationPath = router.pathname;

    const { text: messageText } = AboutReviewsServiceStatic || {};

    const consultRaw =
      (Array.isArray(AboutReviewsStartDynamic) &&
        AboutReviewsStartDynamic.length > 0 &&
        AboutReviewsStartDynamic[0]) ||
      [];
    const { priceItem: consultRawItem, preview_text: consultText, start_title: consultTitle } =
      consultRaw || {};
    const { procedures: consultRawProcedures } = consultRawItem || [];
    const consultRawProceduresItem =
      (Array.isArray(consultRawProcedures) &&
        consultRawProcedures.length > 0 &&
        consultRawProcedures[0]) ||
      {};
    const { price: consultPrice, price_description: consultDescription } =
      consultRawProceduresItem || {};

    return (
      <Block as={'section'}>
        {title && (
          <Block.PageHeader>
            <WrapperContent width={'800'}>
              <PageHeader title={title} content={description}>
                <Button view={'common'} onClick={e => this.askBtnClick(e)} fit={true}>
                  Оставить отзыв
                </Button>
              </PageHeader>
            </WrapperContent>
          </Block.PageHeader>
        )}

        {Array.isArray(reviewsArray) && reviewsArray && (
          <Block.Reviews>
            <WrapperContent width={'800'}>
              <ReviewsList list={reviewsArray} />
              <Pagination currentPage={currentPage} lastPage={lastPage} path={paginationPath} />
            </WrapperContent>
          </Block.Reviews>
        )}

        {(messageText || consultTitle || consultText) && (
          <Block.Feedback>
            {messageText && (
              <WrapperContent width={'800'}>
                <Block.Contacts>
                  <Typography>{messageText}</Typography>
                </Block.Contacts>
              </WrapperContent>
            )}

            {(consultTitle || consultText) && (
              <ContentWithAddition
                type={'text'}
                title={consultTitle}
                additionTitle={consultPrice}
                additionText={consultDescription}
                content={consultText}
              >
                <Block.ConsultationSign>
                  <SignButton title={'Записаться на прием'} onClick={e => this.modalOpen(e)} />
                </Block.ConsultationSign>
              </ContentWithAddition>
            )}
          </Block.Feedback>
        )}

        <Block.Prefooter>
          <Prefooter mapZoom={11} />
        </Block.Prefooter>
      </Block>
    );
  }
}
