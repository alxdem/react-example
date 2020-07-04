import styled, { css } from 'styled-components';
import { provider } from 'styles';

const AppDatePicker = styled.div`
  position: relative;

  & * {
    font-family: 'Open Sans', sans-serif;
  }

  .react-datepicker {
    border-radius: 0;
  }

  .react-datepicker-wrapper {
    background: ${provider.color.white};
    width: 100%;
    height: 56px;
  }

  .react-datepicker__input-container {
    display: flex;
    height: 100%;
    position: relative;

    &:after {
      content: '';
      width: 18px;
      height: 20px;
      background-image: url('/static/images/date.svg');
      color: ${provider.color.blue__700};
      position: absolute;
      right: 19px;
      top: 50%;
      margin-top: -10px;
      pointer-events: none;
    }

    input {
      padding: 0 45px 0 16px;
      width: 100%;
      font-size: 14px;
      color: ${provider.color.blue__700};
      font-weight: 600;

      ::placeholder {
        color: ${provider.color.blue__400};
        font-size: 14px;
        font-weight: 600;
      }
    }
  }

  .react-datepicker-popper {
    z-index: 10;
    width: 100%;
  }

  .react-datepicker__header {
    border-radius: 0;
    background-color: ${provider.color.gray__200};
  }

  .react-datepicker__current-month {
    color: ${provider.color.blue__700};
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
  }

  .react-datepicker__month {
    margin: 0;
  }

  .react-datepicker__day {
    margin: 0;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 0;

    &:hover {
      background-color: ${provider.color.gray__300};
    }

    &--selected {
      background-color: ${provider.color.blue__500};
    }
  }
`;

AppDatePicker.Input = styled.div``;

AppDatePicker.Hint = styled.div`
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

export default AppDatePicker;
