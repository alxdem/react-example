import styled, { css } from 'styled-components';
import { provider } from 'styles';

const CardDoctor = styled.a`
  width: 100%;
  height: 100%;
  display: block;
  cursor: pointer;
  background-color: ${provider.color.white};

  ${({ theme: { props } }) => {
    return css`
      ${props.view === 'ask' &&
        css`
          display: flex;

          @media (max-width: 560px) {
            display: block;
          }
        `}

      ${props.background === 'gray' &&
        css`
          background-color: ${provider.color.gray__200};
        `}
    `;
  }}
`;

CardDoctor.Photo = styled.div`
  flex-shrink: 0;
  overflow: hidden;

  ${({ theme: { props } }) => {
    return css`
      ${props.view === 'card' &&
        css`
          display: flex;
          flex-direction: column;

          @media (max-width: 560px) {
          }
        `}

      ${props.view === 'ask' &&
        css`
          width: 120px;

          @media (max-width: 560px) {
            margin: 0 auto;
          }
        `}
    `;
  }}
`;

CardDoctor.Body = styled.div`
  flex-grow: 1;
  width: 100%;

  ${({ theme: { props } }) => {
    return css`
      ${props.view === 'card' &&
        css`
          padding: 24px 0 0;

          @media (max-width: 560px) {
            padding: 16px 0;
          }
        `}

      ${props.view === 'ask' &&
        css`
          display: flex;
          padding: 15px 40px;
          justify-content: center;
          flex-direction: column;

          @media (max-width: 560px) {
            padding: 15px 20px;
          }
        `}
    `;
  }}
`;

CardDoctor.Title = styled.div`
  color: ${provider.color.blue__700};

  ${({ theme: { props } }) => {
    return css`
      ${props.view === 'card' &&
        css`
          font-size: 16px;
          line-height: 24px;
          font-weight: 700;

          @media (max-width: 768px) {
            font-size: 14px;
            line-height: 22px;
          }

          @media (max-width: 560px) {
            font-size: 12px;
            line-height: 20px;
          }
        `}

      ${props.view === 'ask' &&
        css`
          font-size: 20px;
          line-height: 30px;
          font-weight: 600;

          @media (max-width: 560px) {
            font-size: 16px;
            line-height: 26px;
          }
        `}
    `;
  }}
`;

CardDoctor.Position = styled.div`
  color: ${provider.color.blue__700};
  font-size: 14px;
  line-height: 20px;
  margin-top: 8px;

  ${({ theme: { props } }) => {
    return css`
      ${props.view === 'card' &&
        css`
          font-weight: 600;
          opacity: 0.8;

          @media (max-width: 768px) {
            font-size: 12px;
            line-height: 18px;
          }

          @media (max-width: 560px) {
            font-size: 10px;
            margin-top: 4px;
          }
        `}
    `;
  }}
`;

export default CardDoctor;
