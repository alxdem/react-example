import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Router from 'next/router';
import actions from 'store/actions';
import { bindActionCreators } from 'redux';

import Block from './Typography.style';

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
export default class Typography extends Component {
  pageClick = e => {
    const target = e.nativeEvent.target;

    if (target.tagName === 'A' && !target.target) {
      const url = target.href;
      const isPhone = url.slice(0, 4) === 'tel:';
      const isEmail = url.slice(0, 7) === 'mailto:';

      if (!isPhone && !isEmail) {
        e.preventDefault();
        Router.pushRoute(url);
      }
    }

    if (target.tagName === 'BUTTON' && target.classList.contains('btn__sign')) {
      const { actions } = this.props;
      actions.openAppointModal(true);
    }
  };

  render() {
    const { fontSize, children, listStyle } = this.props;
    const providerProps = {
      fontSize,
      listStyle
    };

    const type = typeof children;

    return (
      <ThemeProvider theme={{ props: providerProps }}>
        <React.Fragment>
          {type === 'string' ? (
            <Block
              onClick={this.pageClick}
              fontSize={fontSize}
              dangerouslySetInnerHTML={{ __html: children }}
            />
          ) : (
            <Block onClick={this.pageClick}>{children}</Block>
          )}
        </React.Fragment>
      </ThemeProvider>
    );
  }
}
