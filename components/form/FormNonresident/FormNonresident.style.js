import styled, { css } from 'styled-components';
import { provider } from 'styles';

const FormNonresident = styled.div``;

FormNonresident.Form = styled.form``;

FormNonresident.Inner = styled.div``;

FormNonresident.Row = styled.div`
  display: flex;

  ${({ theme: { props } }) => {
    return css`
      ${props.type === 'site' &&
        css`
          flex-direction: column;
          margin: 0 -20px;
        `}
      ${props.type === 'landing' &&
        css`
          margin: 0 -20px 32px;

          @media (max-width: 890px) {
            margin: 0 -10px 20px;
          }

          @media (max-width: 560px) {
            flex-direction: column;
            margin: 0 -10px 0;
          }
        `}
    `;
  }}
  flex-direction: ${props => (props.double ? 'row' : 'column')};
`;

FormNonresident.Item = styled.div`
  width: 50%;
  padding: 0 20px;

  @media (max-width: 890px) {
    padding: 0 10px;
  }

  @media (max-width: 560px) {
    width: 100%;
    margin-bottom: 20px;
  }

  ${({ theme: { props } }) => {
    return css`
      ${props.type === 'site' &&
        css`
          width: 100%;
          margin-bottom: 32px;
        `}
      ${props.type === 'landing' &&
        css`
          width: 50%;
        `}
    `;
  }}
`;

FormNonresident.Button = styled.div`
  margin-top: 32px;

  @media (max-width: 890px) {
    margin-top: 20px;
  }

  @media (max-width: 560px) {
    margin-top: 0;
  }
`;

FormNonresident.Text = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: ${provider.color.blue__500};
  margin-top: 32px;
  max-width: 360px;

  @media (max-width: 890px) {
    margin-top: 20px;
  }
`;

FormNonresident.TextLink = styled.a`
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

FormNonresident.Title = styled.div`
  font-size: 20px;
  line-height: 30px;
  color: ${provider.color.blue__700};
  font-weight: 600;
  margin-bottom: 32px;
`;

FormNonresident.Answer = styled.div``;

FormNonresident.AnswerTitle = styled.div`
  color: ${provider.color.blue__700};
  font-size: 32px;
  line-height: 48px;
  font-weight: 600;
  text-align: center;
`;

FormNonresident.AnswerText = styled.div`
  color: ${provider.color.blue__700};
  font-size: 16px;
  line-height: 26px;
  font-weight: 600;
  text-align: center;
  max-width: 560px;
  margin: 16px auto 0;
`;

FormNonresident.File = styled.div`
  color: ${provider.color.blue__700};
  font-size: 16px;
  line-height: 26px;
  font-weight: 600;
  text-align: center;
  max-width: 560px;
`;

FormNonresident.ItemTitle = styled.div`
  color: ${provider.color.blue__700};
  font-size: 12px;
  line-height: 16px;
  opacity: 0.6;
  font-weight: 600;
  margin-bottom: 8px;
`;

FormNonresident.Fieldset = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  align-items: center;
`;

FormNonresident.Legend = styled.div`
  margin-bottom: 8px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  color: ${provider.color.blue__500};
`;

FormNonresident.RadioButton = styled.div`
  &:not(:last-of-type) {
    margin-right: 16px;
  }
`;

FormNonresident.Hint = styled.div`
  color: ${provider.color.pink__500};
  font-size: 10px;
  line-height: 12px;
  font-weight: 600;
  padding-top: 4px;
  opacity: ${props => (props.isShow ? 1 : 0)};
  transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
`;

FormNonresident.SexWrapper = styled.div`
  height: 56px;
`;

FormNonresident.Sex = styled.div`
  display: flex;
  flex-direction: column;
`;

export default FormNonresident;
