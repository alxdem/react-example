import styled, { css } from 'styled-components';
import { provider } from 'styles';

const Checkbox = styled.div``;

Checkbox.Input = styled.input`
  opacity: 0;
  position: absolute;
  pointer-events: none;
`;

Checkbox.Checkbox = styled.label`
  display: flex;
  padding-left: 29px;
  position: relative;
  font-size: 14px;
  line-height: 16px;
  height: 18px;
  align-items: center;
  cursor: pointer;
  color: ${provider.color.blue__500};
  font-weight: 600;

  ${({ theme: { props } }) => {
    return css`
      ${props.isChecked === true &&
        css`
          color: ${provider.color.blue__700};
        `}
    `;
  }}

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    z-index: 1;
    box-sizing: border-box;
    border-radius: 50%;
    border: 2px solid ${provider.color.blue__500};

    ${({ theme: { props } }) => {
      return css`
        ${props.isChecked === true &&
          css`
            border-color: ${provider.color.blue__700};
          `}
      `;
    }}
  }

  &:after {
    content: '';
    position: absolute;
    left: 5px;
    top: 5px;
    width: 8px;
    height: 8px;
    z-index: 4;
    border-radius: 50%;
    background-color: ${provider.color.blue__700};
    opacity: 0;
    transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);

    ${({ theme: { props } }) => {
      return css`
        ${props.isChecked === true &&
          css`
            opacity: 1;
          `}
      `;
    }}
  }
`;

Checkbox.LabelText = styled.div``;

export default Checkbox;
