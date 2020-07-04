import styled, { css } from 'styled-components';
import { provider } from 'styles';
import Input from '../Input/Input.style';

const AppSelect = styled.div`
  .form-select__placeholder {
    font-weight: 600;
    font-size: 14px;
    color: ${provider.color.blue__400};
  }

  .form-select {
    height: 56px;

    .form-select__control {
      height: 100%;
      border: none;
      border-radius: 0;
      padding: 0 16px;

      .form-select__value-container {
        height: 100%;
        padding: 0;
        background-color: ${provider.color.white};

        .form-select__single-value {
          margin: 0;
          font-size: 14px;
          line-height: 56px;
          font-weight: 600;
          color: ${provider.color.blue__700};
        }
      }
    }

    .form-select__indicator-separator {
      display: none;
    }

    .form-select__indicator {
      width: 14px;
      height: 14px;
      padding: 0;

      svg {
        color: ${provider.color.blue__700};
        width: 100%;
        height: 100%;
      }
    }

    .form-select__menu {
      padding: 0;
      margin: 0;
      border-radius: 0;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
      z-index: 10;
    }

    .form-select__menu-list {
      padding: 0;
    }

    .form-select__option {
      font-size: 14px;
      line-height: 16px;
      color: ${provider.color.blue__500};
      padding: 8px 16px;
      font-weight: 600;
      transition: color ease-out 0.15s;
    }

    .form-select__option:first-of-type {
      padding-top: 16px;
    }

    .form-select__option:last-of-type {
      padding-bottom: 16px;
    }

    .form-select__option:hover {
      cursor: pointer;
      color: ${provider.color.blue__700};
      background-color: ${provider.color.white};
    }

    .form-select__control--is-focused {
      border: none;
      box-shadow: none;
    }
  }
`;

AppSelect.Hint = styled.div`
  color: ${provider.color.pink__500};
  font-size: 10px;
  line-height: 12px;
  font-weight: 600;
  padding-top: 4px;
  padding-left: 16px;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);

  ${({ theme: { props } }) => {
    return css`
      ${props.isValid === false &&
        css`
          opacity: 1;
        `}
    `;
  }}
`;

export default AppSelect;
