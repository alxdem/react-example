import styled from 'styled-components';
import { provider } from 'styles';

const Modal = styled.div``;

Modal.Inner = styled.div``;

Modal.Header = styled.div`
  background-image: ${provider.gradient.main};
  color: ${provider.color.white};
  padding: 15px 0;
`;

Modal.Label = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: ${provider.color.white};
  opacity: 0.5;
`;

Modal.Title = styled.div`
  font-size: 20px;
  line-height: 30px;
  font-weight: 600;
  color: ${provider.color.blue__700};
  margin-bottom: 32px;
`;

Modal.Body = styled.div`
  padding-top: 48px;
  padding-bottom: 98px;
`;

Modal.Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Modal.BtnCancel = styled.button`
  margin-left: auto;
  display: block;
`;

Modal.CancelIcon = styled.div`
  width: 18px;
  height: 18px;
  color: ${provider.color.white};
`;

export default Modal;
