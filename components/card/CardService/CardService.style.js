import styled, { css } from 'styled-components';
import { provider } from 'styles';

const CardService = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${provider.color.gray__200};

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  ${({ theme: { props } }) => {
    return css`
      ${props.view === 'big' &&
        css`
          @media (max-width: 1024px) {
            flex-direction: row;
          }

          @media (max-width: 560px) {
            flex-direction: column;
          }
        `}
    `;
  }}
`;

CardService.Photo = styled.div`
  max-width: 220px;
  width: 100%;
  flex-shrink: 0;

  @media (max-width: 1280px) {
    max-width: 200px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: none;
  }

  @media (max-width: 560px) {
    max-width: none;
  }

  ${({ theme: { props } }) => {
    return css`
      ${props.view === 'big' &&
        css`
          @media (max-width: 1024px) {
            max-width: 240px;
          }

          @media (max-width: 560px) {
            max-width: none;
          }
        `}
    `;
  }}
`;

CardService.Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

CardService.Content = styled.div`
  background-color: ${provider.color.gray__200};
  padding: 32px 25px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 25px;
  }
`;

CardService.Title = styled.div`
  font-size: 16px;
  line-height: 26px;
  color: ${provider.color.blue__700};
  font-weight: 600;
  margin-bottom: 8px;

  @media (max-width: 1280px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 26px;
  }

  @media (max-width: 560px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

CardService.Text = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: ${provider.color.blue__700};
`;

CardService.More = styled.a`
  color: ${provider.color.pink__500};
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  margin-top: 24px;
`;

export default CardService;
