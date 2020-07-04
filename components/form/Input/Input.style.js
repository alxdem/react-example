import styled, { css } from 'styled-components';
import { provider } from 'styles';

const Input = styled.div`
  overflow: hidden;
`;

Input.Input = styled.input`
  width: 100%;
  height: 100%;
  line-height: 56px;
  font-size: 14px;
  font-weight: 600;
  color: ${provider.color.blue__700};
  background-color: ${provider.color.white};
  padding: 0 16px;
  transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);

  ::placeholder {
    color: ${provider.color.blue__300};
  }

  :hover {
    background-color: ${provider.color.blue__100};
  }

  ${({ theme: { props } }) => {
    return css`
      ${props.type === 'textarea' &&
        css`
          border: 0;
          height: 120px;
          resize: none;
          line-height: 24px;
          padding-top: 20px;
        `}
    `;
  }}
`;

Input.Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 56px;

  ${({ theme: { props } }) => {
    return css`
      ${props.type === 'textarea' &&
        css`
          height: 120px;
        `}
    `;
  }}

  &:after {
    content: '';
    position: absolute;
    height: 2px;
    width: 0;
    background-color: ${provider.color.blue__700};
    left: 50%;
    bottom: 0;
    transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);

    ${({ theme: { props } }) => {
      return css`
        ${props.isActive === true &&
          css`
            width: 100%;
            left: 0;
          `}
      `;
    }}

    ${({ theme: { props } }) => {
      return css`
        ${props.isValid === false &&
          css`
            width: 100%;
            left: 0;
            background-color: ${provider.color.pink__500};
          `}
      `;
    }}
  }
`;

Input.Hint = styled.div`
  color: ${provider.color.pink__500};
  font-size: 10px;
  line-height: 12px;
  font-weight: 600;
  padding-top: 4px;
  padding-left: 16px;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);

  ${({ theme: { props } }) => {
    return css`
      ${props.isValid === false &&
        css`
          opacity: 1;
        `}
    `;
  }}
`;

Input.InputLabel = styled.div`
  color: ${provider.color.blue__500};
  pointer-events: none;
  height: 54px;
  font-size: 14px;
  line-height: 56px;
  font-weight: 600;
  position: absolute;
  z-index: 2;
  padding: 0 16px;
  top: 0;
  //background-color: ${provider.color.white};
  width: 100%;
  transform: translate(0) scale(1);
  transition: all 200ms cubic-bezier(0, 0, 0.2, 1);

  ${Input}:hover & {
    //background-color: ${provider.color.blue__100};
  }

  ${({ theme: { props } }) => {
    return css`
      ${props.isActive === true &&
        css`
          font-size: 10px;
          line-height: 12px;
          top: 4px;
          height: 20px;
        `}

      ${props.isActive === true &&
        props.type === 'textarea' &&
        css`
          opacity: 0;
        `}
    `;
  }}
`;

Input.Required = styled.span``;

export default Input;
