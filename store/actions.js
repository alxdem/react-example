import ACTIONS from './types';

const actions = {};

actions.changeDimensions = (width, height) => ({
  type: ACTIONS.CHANGE_DIMENSIONS,
  width,
  height
});

actions.setCity = city => ({
  type: ACTIONS.SET_CITY,
  city
});

actions.setIsNavShow = isNavShow => ({
  type: ACTIONS.IS_NAV_SHOW,
  isNavShow
});

actions.setNavHeight = height => ({
  type: ACTIONS.SET_NAV_HEIGHT,
  navHeight: height
});

actions.openAppointmentModal = isOpen => ({
  type: ACTIONS.MODAL_APPOINTMENT_OPEN,
  isOpen: isOpen
});

actions.openNonresidentModal = isOpen => ({
  type: ACTIONS.MODAL_NONRESIDENT_OPEN,
  isOpen: isOpen
});

actions.openQuestionModal = (isOpen, id) => ({
  type: ACTIONS.MODAL_QUESTION_OPEN,
  isOpen: isOpen,
  id: id
});

actions.openReviewModal = (isOpen, id) => ({
  type: ACTIONS.MODAL_REVIEW_OPEN,
  isOpen: isOpen,
  id: id
});

actions.setIsMobNavShow = isMobNavShow => ({
  type: ACTIONS.IS_MOB_NAV_SHOW,
  isMobNavShow
});

export default actions;
