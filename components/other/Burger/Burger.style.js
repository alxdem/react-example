import styled, { css, keyframes } from 'styled-components';
import { provider } from 'styles';

const animationTime = 0.5;

const rotateLineTop = keyframes`
  0% {
    top: 0;
    margin-top: 0;
    transform: rotate(0deg);
  }
  
  20% {
    top: 50%;
    margin-top: -1px;
    transform: rotate(0deg);
  }
  
  70% {
    transform: rotate(-90deg);
  }

  100% {
    transform: rotate(-135deg);
  }
`;

const rotateLineMiddle = keyframes`
  0% {
    opacity: 1;
  }
  
  20% {
    opacity: 1;
  }
  
  21% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
`;

const rotateLineBottom = keyframes`
  0% {
    bottom: 0;
    margin-bottom: 0;
    transform: rotate(0deg);
  }
  
  20% {
    bottom: 50%;
    margin-bottom: -1px;
  }
  
  70% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-45deg);
  }
`;

const rotateLineTopRevert = keyframes`
  0% {
    transform: rotate(-135deg);
    top: 50%;
    margin-top: -1px;
  }
  
  30% {
    top: 50%;
    margin-top: -1px;
    transform: rotate(-90deg);
  }
  
  80% {
    top: 50%;
    margin-top: -1px;
    transform: rotate(0deg);
  }

  100% {
    top: 0;
    margin-top: 0;
    transform: rotate(0deg);
  }
`;

const rotateLineMiddleRevert = keyframes`
  0% {
    opacity: 0;
  }
  
  80% {
    opacity: 0;
  }
  
  81% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
`;

const rotateLineBottomRevert = keyframes`
  0% {
    transform: rotate(-45deg);
    bottom: 50%;
    margin-bottom: -1px;
  }
  
  30% {
    transform: rotate(0deg);
  }
  
  80% {
    bottom: 50%;
    margin-bottom: -1px;
  }

  100% {
    bottom: 0;
    margin-bottom: 0;
    transform: rotate(0deg);
  }
`;

const Burger = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  color: ${provider.color.blue__700};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

Burger.Inner = styled.div`
  position: relative;
  width: 24px;
  height: 18px;
`;

Burger.LineTop = styled.div`
  position: absolute;
  width: 24px;
  height: 2px;
  background-color: ${provider.color.blue__700};
  top: 0;
  left: 0;
  transform: rotate(0deg);

  ${({ theme: { props } }) => {
    return css`
      ${props.isOpen === true &&
        css`
          animation-name: ${rotateLineTop};
          animation-duration: ${animationTime}s;
          animation-timing-function: ease-out;
          transform: rotate(-135deg);
          top: 50%;
          margin-top: -1px;
        `}

      ${props.isActive === true &&
        css`
          animation-name: ${rotateLineTopRevert};
          animation-duration: ${animationTime}s;
          animation-timing-function: ease-out;
          transform: rotate(0deg);
        `}
    `;
  }}
`;

Burger.LineMiddle = styled.div`
  position: absolute;
  width: 24px;
  height: 2px;
  background-color: ${provider.color.blue__700};
  top: 50%;
  left: 0;
  margin-top: -1px;

  ${({ theme: { props } }) => {
    return css`
      ${props.isOpen === true &&
        css`
          animation-name: ${rotateLineMiddle};
          animation-duration: ${animationTime}s;
          animation-timing-function: ease-out;
          opacity: 0;
        `}

      ${props.isActive === true &&
        css`
          animation-name: ${rotateLineMiddleRevert};
          animation-duration: ${animationTime}s;
          animation-timing-function: ease-out;
          transform: rotate(0deg);
        `}
    `;
  }}
`;

Burger.LineBottom = styled.div`
  position: absolute;
  width: 24px;
  height: 2px;
  background-color: ${provider.color.blue__700};
  bottom: 0;
  left: 0;
  transform: rotate(0deg);

  ${({ theme: { props } }) => {
    return css`
      ${props.isOpen === true &&
        css`
          animation-name: ${rotateLineBottom};
          animation-duration: ${animationTime}s;
          animation-timing-function: ease-out;
          transform: rotate(-45deg);
          bottom: 50%;
          margin-bottom: -1px;
        `}

      ${props.isActive === true &&
        css`
          animation-name: ${rotateLineBottomRevert};
          animation-duration: ${animationTime}s;
          animation-timing-function: ease-out;
          transform: rotate(0deg);
        `}
    `;
  }}
`;

export default Burger;
