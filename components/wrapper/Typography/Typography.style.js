import styled, { css } from 'styled-components';
import { provider } from 'styles';

const Typography = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: ${props => (props.fontSize ? props.fontSize + 'px' : '14px')};
  line-height: ${props => (props.fontSize ? Number(props.fontSize) + Number(10) + 'px' : '24px')};
  color: ${provider.color.blue__700};
  h1 {
  }
  h2,
  .h2 {
    font-size: 24px;
    line-height: 34px;
    font-weight: 600;
    padding-bottom: 24px;
    border-bottom: 2px solid ${provider.color.gray__200};
    margin-bottom: 40px;
    margin-top: 96px;

    @media (max-width: 1280px) {
      margin-bottom: 35px;
      margin-top: 80px;
      padding-bottom: 20px;
    }

    @media (max-width: 1024px) {
      font-size: 22px;
      line-height: 32px;
      margin-bottom: 30px;
      margin-top: 70px;
      padding-bottom: 18px;
    }

    @media (max-width: 560px) {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 22px;
      margin-top: 50px;
      padding-bottom: 14px;
    }
  }

  h3 {
    font-size: 16px;
    line-height: 26px;
    font-weight: 600;
    margin-bottom: 15px;
    margin-top: 30px;
  }

  h4 {
    font-size: 15px;
    line-height: 24px;
    font-weight: 600;
    margin-bottom: 12px;
    margin-top: 25px;
  }

  b,
  bold,
  strong {
    font-weight: bold;
  }
  ul,
  ol {
    padding: 0;
    &:not(:first-child) {
      margin-top: 20px;
    }

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ol > li {
    margin: 0;
    list-style-type: none;
    counter-increment: item;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
  ol > li:before {
    display: inline-block;
    width: 26px;
    padding-right: 4px;
    text-align: right;
    content: counter(item) '.';
  }

  p {
    &:not(:last-of-type) {
      margin-bottom: 15px;
    }
  }

  li {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  .listsm {
    li {
      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }

  ul > li {
    list-style: none;
    padding-left: 40px;
    position: relative;

    &:before {
      content: '—';
      position: absolute;
      left: 6px;
      top: 0;
      color: ${provider.color.blue__500};
    }

    ${({ theme: { props } }) => css`
      ${(props.listStyle === 'leafBlue' || props.listStyle === 'leafPink') &&
        css`
          color: ${provider.color.blue__700};
          font-size: 14px;
          line-height: 24px;
          padding-left: 20px;
          padding-bottom: 0;

          &:not(:last-child) {
            margin-bottom: 5px;
          }

          &:before {
            content: '';
            width: 10px;
            height: 9px;
            left: 0;
            top: 8px;
          }
        `}
      
        ${props.listStyle === 'leafBlue' &&
          css`
            &:before {
              background-image: url('./static/images/leafblue.png');
            }
          `}
        
        ${props.listStyle === 'leafPink' &&
          css`
            &:before {
              background-image: url('./static/images/leafpink.png');
            }
          `}
    `}
  }

  a {
    cursor: pointer;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  blockquote {
    width: 100%;
    border-left: 4px solid ${provider.color.pink__500};
    padding: 32px 36px;
    background-color: ${provider.color.gray__200};
    font-size: 20px;
    line-height: 30px;
    color: ${provider.color.blue__500};

    &:not(:first-child) {
      margin-top: 48px;

      @media (max-width: 1024px) {
        margin-top: 35px;
      }
    }

    &:not(:last-child) {
      margin-bottom: 28px;
    }

    @media (max-width: 1024px) {
      font-size: 18px;
      line-height: 28px;
    }

    @media (max-width: 560px) {
      font-size: 16px;
      line-height: 26px;
      padding: 20px 20px;
    }

    p {
      font-size: 20px;
      line-height: 30px;

      @media (max-width: 1024px) {
        font-size: 18px;
        line-height: 28px;
      }

      @media (max-width: 560px) {
        font-size: 16px;
        line-height: 26px;
      }
    }
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin-bottom: 45px;
    margin-top: 45px;

    @media (max-width: 560px) {
      margin-top: 35px;
      margin-bottom: 35px;
    }
  }

  .simple__title {
    margin-top: 22px;
    margin-bottom: 13px;
    padding: 0;
    border: 0;
  }

  .simple__link {
    color: ${provider.color.pink__500};
    font-weight: 700;
    text-decoration: none;
  }

  .simple__block {
    overflow: hidden;
    margin: 40px 0;
  }

  .simple__row {
    display: flex;
    margin: 0 -20px;

    @media (max-width: 400px) {
      flex-direction: column;
      margin: -10px;
    }
  }

  .simple__coll {
    width: 50%;
    flex-shrink: 0;
    padding: 0 20px;

    @media (max-width: 400px) {
      width: 100%;
      padding: 10px;
    }
  }

  .simple__button-light {
    color: ${provider.color.pink__500};
    font-weight: 700;
    border: 0;
    display: flex;
    position: relative;
    align-items: center;

    &:before {
      content: '';
      background-image: url('/static/images/pen.png');
      width: 12px;
      height: 12px;
      position: relative;
      margin-right: 6px;
    }
  }

  .simple__link-file {
    color: ${provider.color.blue__500};
    font-weight: 700;
    display: flex;
    position: relative;
    align-items: center;
    text-decoration: none;

    &:before {
      content: '';
      background-image: url('/static/images/download.png');
      width: 16px;
      height: 12px;
      position: relative;
      margin-right: 6px;
    }
  }

  .big {
    font-size: 16px;
    line-height: 26px;

    @media (max-width: 400px) {
      font-size: 15px;
      line-height: 22px;
    }
  }

  .bigxl {
    font-size: 20px;
    line-height: 32px;
    font-weight: 600;

    @media (max-width: 1024px) {
      font-size: 18px;
      line-height: 28px;
    }

    @media (max-width: 890px) {
      font-size: 16px;
      line-height: 26px;
    }

    @media (max-width: 400px) {
      font-size: 15px;
      line-height: 22px;
    }
  }
`;

export default Typography;
