import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { WrapperContent, Icon } from 'components';
import PropTypes from 'prop-types';

import Block from './Modal.style.js';

export default class Modal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    label: PropTypes.string,
    title: PropTypes.string,
    widthContent: PropTypes.number
  };

  static defaultProps = {
    isOpen: false,
    widthContent: 400
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { isOpen, modalClose, title, children, label, widthContent } = this.props;
    ReactModal.setAppElement('#__next');

    const customStyles = {
      overlay: {
        zIndex: '10'
      },
      content: {
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        marginLeft: '0',
        zIndex: '10',
        padding: '0',
        backgroundColor: '#F7F7F9'
      }
    };

    return (
      <Block>
        <ReactModal
          isOpen={isOpen}
          style={customStyles}
          contentLabel='Example Modal'
          shouldCloseOnEsc={true}
          role='dialog'
        >
          <Block.Header>
            <WrapperContent>
              <Block.Inner>
                {label && <Block.Label>{label}</Block.Label>}

                <Block.BtnCancel
                  onClick={e => {
                    modalClose(e);
                  }}
                >
                  <Block.CancelIcon>
                    <Icon name={'cancel'} fit={true} />
                  </Block.CancelIcon>
                </Block.BtnCancel>
              </Block.Inner>
            </WrapperContent>
          </Block.Header>

          <Block.Body>
            <WrapperContent width={widthContent}>
              {title && <Block.Title>{title}</Block.Title>}
              {children}
            </WrapperContent>
          </Block.Body>
        </ReactModal>
      </Block>
    );
  }
}
