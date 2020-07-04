import styled, { css } from 'styled-components';
import { provider } from 'styles';

const ToggleContent = styled.div`
  width: 100%;
`;

ToggleContent.Title = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;

  text-align: left;

  ${({ theme: { props } }) => {
    return css`
      ${props.view === 'standart' &&
        css`
          padding: 5px 40px;
          font-size: 16px;
          line-height: 26px;
          min-height: 88px;
          font-weight: 600;

          @media (max-width: 1280px) {
            font-size: 15px;
            line-height: 24px;
          }

          @media (max-width: 890px) {
            padding: 5px 20px;
          }

          @media (max-width: 768px) {
            font-size: 14px;
          }
        `}
        
      ${props.view === 'standartNoBorder' &&
        css`
          padding: 5px 40px;
          font-size: 16px;
          line-height: 26px;
          min-height: 88px;
          font-weight: 600;

          @media (max-width: 1280px) {
            font-size: 15px;
            line-height: 24px;
          }

          @media (max-width: 890px) {
            padding: 5px 20px;
          }

          @media (max-width: 768px) {
            font-size: 14px;
          }
        `}

      ${props.view === 'nav' &&
        css`
          padding: 14px 0;
          font-size: 14px;
          line-height: 16px;
          font-weight: 700;
        `}
    `;
  }}
`;

ToggleContent.Button = styled.button`
  color: ${provider.color.blue__700};
  overflow: hidden;
  width: 100%;

  ${({ theme: { props } }) => {
    return css`
      ${props.view === 'standart' &&
        css`
          background-color: ${provider.color.gray__200};
        `}

      ${props.view === 'standartNoBorder' &&
        css`
          background-color: ${provider.color.gray__200};
        `}
    `;
  }}
`;

ToggleContent.ButtonInner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

ToggleContent.Status = styled.div`
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-left: 2px solid ${provider.color.white};

  svg {
    width: 10px;
    height: 6px;
    color: ${provider.color.blue__700};
    transition: transform ease-out 0.15s;
    transform: rotate(${props => (props.isRotate ? `180deg` : `0deg`)});
  }
`;

ToggleContent.Content = styled.div`
  transition: height ease-out 0.15s;
  height: ${props => props.height + `px`};
  overflow: hidden;
  position: relative;
  color: ${provider.color.blue__700};

  ${({ theme: { props } }) => {
    return css`
      ${props.view === 'standart' &&
        css`
          font-size: 14px;
          line-height: 24px;
        `}

      ${props.view === 'standartNoBorder' &&
        css`
          font-size: 14px;
          line-height: 24px;
        `}
    `;
  }}
`;

ToggleContent.Inner = styled.div`
  position: absolute;
  width: 100%;

  ${({ theme: { props } }) => {
    return css`
      ${props.view === 'standart' &&
        css`
          font-size: 14px;
          line-height: 24px;
          padding: 24px 40px;

          @media (max-width: 890px) {
            padding: 20px 20px;
          }

          @media (max-width: 560px) {
            padding: 20px 0;
          }
        `}
        
      ${props.view === 'standartNoBorder' &&
        css`
          font-size: 14px;
          line-height: 24px;
          padding: 40px 0;

          @media (max-width: 890px) {
            padding: 20px 20px;
          }

          @media (max-width: 560px) {
            padding: 20px 0;
          }
        `}

      ${props.view === 'nav' &&
        css`
          width: 100%;
        `}
    `;
  }}
`;

ToggleContent.Description = styled.div``;

ToggleContent.Children = styled.div`
  ${({ theme: { props } }) => {
    return css`
      ${props.view === 'standart' &&
        css`
          margin-top: 40px;
          padding-top: 32px;
          border-top: 2px solid ${provider.color.gray__200};

          @media (max-width: 560px) {
            padding-top: 22px;
            margin-top: 24px;
          }
        `}

      ${props.view === 'standartNoBorder' && css``}
      
      ${props.view === 'nav' && css``}
    `;
  }}
`;

export default ToggleContent;
