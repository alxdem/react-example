import styled, { css } from 'styled-components';
import { provider } from 'styles';

const Button = styled.button`
  background-color: ${provider.color.blue__500};
  padding: 10px 30px;
  color: white;
  border-radius: 3px;
  transition: all 0.2s ease-out;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  min-height: 48px;
  min-width: 184px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }

  :hover {
    background-color: ${provider.color.blue__700};
  }
`;

export default Button;
