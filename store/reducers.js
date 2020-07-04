import initialState from './initialState';

import ACTIONS from './types';

const reducers = {};

reducers[ACTIONS.CHANGE_DIMENSIONS] = (state, { width, height }) => {
  return {
    ...state,
    width,
    height
  };
};

reducers[ACTIONS.IS_NAV_SHOW] = (state, action) => {
  return {
    ...state,
    isNavShow: action.isNavShow
  };
};

reducers[ACTIONS.SET_NAV_HEIGHT] = (state, action) => {
  return {
    ...state,
    navHeight: action.navHeight
  };
};

reducers[ACTIONS.MODAL_APPOINTMENT_OPEN] = (state, action) => {
  return {
    ...state,
    modalAppointmentIsOpen: action.isOpen
  };
};

reducers[ACTIONS.MODAL_NONRESIDENT_OPEN] = (state, action) => {
  return {
    ...state,
    modalNonresidentIsOpen: action.isOpen
  };
};

reducers[ACTIONS.MODAL_QUESTION_OPEN] = (state, action) => {
  return {
    ...state,
    modalQuestionIsOpen: action.isOpen,
    modalQuestionId: action.id
  };
};

reducers[ACTIONS.MODAL_REVIEW_OPEN] = (state, action) => {
  return {
    ...state,
    modalReviewIsOpen: action.isOpen
  };
};

reducers[ACTIONS.IS_MOB_NAV_SHOW] = (state, action) => {
  return {
    ...state,
    isMobNavShow: action.isMobNavShow
  };
};

export default function(state = initialState, action) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}
