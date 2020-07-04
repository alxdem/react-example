import styled, { css } from 'styled-components';
import { provider } from 'styles';

const AboutTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  flex-grow: 1;

  @media (max-width: 560px) {
    padding-bottom: 12px;
  }
`;

AboutTitle.Title = styled.div`
  color: ${provider.color.blue__700};
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  flex-grow: 1;

  ${({ theme: { props } }) => {
    return css`
      ${props.type === 'short' &&
        css`
          padding-bottom: 47px;
          position: relative;

          &:after {
            content: '';
            position: absolute;
            width: 100px;
            height: 2px;
            background-color: ${provider.color.pink__500};
            left: 0;
            bottom: 0;
          }
        `}

      ${props.type === 'mainTitle' &&
        css`
          padding-bottom: 60px;
          position: relative;

          &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: ${provider.color.blue__700};
            left: 0;
            bottom: 0;
          }
        `}
    `;
  }}

  @media (max-width: 890px) {
    font-size: 28px;
    line-height: 42px;
  }

  @media (max-width: 560px) {
    font-size: 22px;
    line-height: 30px;
  }
`;

AboutTitle.Description = styled.div`
  font-size: 14px;
  line-height: 34px;
  text-align: right;
  color: ${provider.color.blue__400};

  @media (max-width: 768px) {
    display: none;
  }
`;

export default AboutTitle;
