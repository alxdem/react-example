import styled, { css } from 'styled-components';
import { provider } from 'styles';

const Link = styled.a`
  display: ${props => (props.displayBlock ? `flex` : `inline-flex`)};
  color: ${provider.color.blue__500};
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  transition: all ease-out 0.15s;

  &:hover {
    color: ${provider.color.blue__700};
  }

  ${({ theme: { props } }) => {
    return css`
      ${props.type === 'button' &&
        css`
          background-color: ${provider.color.blue__500};
          display: inline-flex;
          padding: 5px 32px;
          color: ${provider.color.white};
          min-height: 48px;
          border-radius: 3px;
          font-size: 12px;
          line-height: 16px;
          font-weight: 600;

          &:hover {
            background-color: ${provider.color.blue__700};
            color: ${provider.color.white};
          }
        `}
    `;
  }}
`;

Link.Icon = styled.div`
  width: 16px;
  margin-right: 4px;
`;

export default Link;
