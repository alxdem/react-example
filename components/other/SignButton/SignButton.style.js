import styled, { css } from 'styled-components';
import { provider } from 'styles';

const SignButton = styled.button`
  color: ${provider.color.pink__500};
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 890px) {
    font-size: 12px;
  }

  ${({ theme: { props } }) => {
    return css`
      ${props.direction === 'standart' &&
        css`
          margin: 4px 0;
        `}

      ${props.direction === 'reverse' &&
        css`
          flex-direction: row-reverse;
        `}
    `;
  }}

  .sign-link-anchor {
    color: ${provider.color.pink__500};
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }
`;

SignButton.IconPen = styled.div`
  width: 12px;
  height: 12px;
  position: relative;

  ${({ theme: { props } }) => {
    return css`
      ${props.direction === 'standart' &&
        css`
          margin-left: 7px;
        `}

      ${props.direction === 'reverse' &&
        css`
          margin-right: 7px;
        `}
    `;
  }}
`;

export default SignButton;
