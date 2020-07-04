import styled, { css } from 'styled-components';
import { provider } from 'styles';

const Picture = styled.picture`
  max-width: 100%;
  display: block;

  ${({ theme: { props } }) => {
    return css`
      ${props.view === 'standart' && css``}

      ${props.view === 'fit' &&
        css`
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        `}
    `;
  }}
`;

Picture.Img = styled.img`
  display: block;
  max-width: 100%;
  width: 100%;

  ${({ theme: { props } }) => {
    return css`
      ${props.view === 'fit' &&
        css`
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
        `}
    `;
  }}
`;

export default Picture;
