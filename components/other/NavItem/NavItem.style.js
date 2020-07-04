import styled, { css } from 'styled-components';
import { provider } from 'styles';

const NavItem = styled.ul`
  position: absolute;
  background-color: ${provider.color.white};
  left: 16px;
  transform: translateY(100%);
  bottom: 0;
  width: 750px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 350px;
  align-content: flex-start;
  align-items: flex-start;
  opacity: 0;
  pointer-events: none;

  @media (max-width: 1280px) {
    left: 12px;
  }

  ${({ theme: { props } }) => {
    return css`
      ${props.isActive &&
        css`
          opacity: 1;
          pointer-events: auto;
          transition: all 0.3s ease-out 0.4s;
        `}

      ${props.submenuDinamic &&
        css`
          margin-bottom: -20px;
          padding-top: 10px;
        `}
    `;
  }}
`;

export default NavItem;
