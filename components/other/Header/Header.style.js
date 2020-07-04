import styled, { css } from 'styled-components';
import { provider } from 'styles';

const Header = styled.header`
  position: relative;
  z-index: 10;

  @media (max-width: 1024px) {
    background-color: ${provider.color.green__300};
  }

  ::after {
    content: '';
    height: 2px;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: ${provider.color.gray__200};

    @media (max-width: 1024px) {
      display: none;
    }
  }

  ::before {
    content: '';
    height: 48px;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    background-image: ${provider.gradient.main};

    @media (max-width: 1024px) {
      height: 40px;
    }
  }
`;

Header.Logo = styled.a`
  width: auto;
  max-width: 120px;
  height: 128px;
  display: block;
  flex-shrink: 0;
  cursor: pointer;

  @media (max-width: 1280px) {
    height: 106px;
  }

  @media (max-width: 1024px) {
    display: none;
  }

  svg {
    pointer-events: none;
  }
`;

Header.LogoImage = styled.img`
  display: block;
  max-height: 100%;
`;

Header.CityText = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: ${provider.color.white};
  height: 100%;
  display: flex;
  align-items: center;
`;

Header.Inner = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
`;

Header.Content = styled.div`
  flex-grow: 1;
  padding-left: 24px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    padding-left: 0;
  }
`;

Header.Top = styled.div`
  display: flex;
  justify-content: space-between;
  height: 48px;

  @media (max-width: 1024px) {
    height: 40px;
  }
`;

Header.Bottom = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  position: relative;
  height: 48px;

  @media (max-width: 1024px) {
    flex-direction: row-reverse;
    align-items: center;
  }
`;

Header.City = styled.div`
  width: 200px;
`;

Header.Address = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

Header.Nav = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

Header.Contacts = styled.div`
  margin-left: auto;

  @media (max-width: 1024px) {
    display: none;
  }
`;

Header.MTitle = styled.div``;

Header.Burger = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    min-width: 43px;
    height: 100%;
    position: relative;
    margin-left: auto;
    z-index: 2;
    margin-right: -10px;
  }
`;

Header.LogoMob = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 187px;
    height: 39px;
    position: relative;
    margin-right: auto;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

Header.NavMob = styled.div`
  display: none;
  background-color: ${provider.color.white};
  padding: 16px 0;

  @media (max-width: 1024px) {
    display: block;
    ${({ theme: { props } }) => {
      return css`
        ${!props.isMobNavShow &&
          css`
            opacity: 0;
            position: absolute;
            pointer-events: none;
            transform: translateY(-15px);
          `}

        ${props.isMobNavShow &&
          css`
            z-index: 10;
            opacity: 1;
            position: relative;
            transition: all ease-out 0.2s;
            pointer-events: auto;
            transform: translateY(0%);
          `}
      `;
    }}
  }
`;

Header.MobInner = styled.div`
  display: block;
`;

Header.MobAddress = styled.div`
  display: block;
`;

Header.MobContacts = styled.div`
  margin-top: 30px;
`;

Header.MobNav = styled.div`
  margin-top: 30px;
`;

Header.NavBG = styled.div`
  position: absolute;
  background-color: ${provider.color.white};
  width: 100%;
  left: 0;
  bottom: 0;
  height: ${props => props.theme.props.navHeight + 'px'};
  z-index: 1;
  transition: all ease-out 0.3s;

  ${({ theme: { props } }) => {
    return css`
      ${!props.isNavShow &&
        css`
          transform: translateY(0%);
        `}

      ${props.isNavShow &&
        css`
          box-shadow: 0 4px 8px -3px rgba(0,0,0,0.05);
          transform: translateY(100%);
        `}
    `;
  }}
`;

export default Header;
