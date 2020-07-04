import styled, { css } from 'styled-components';
import { provider } from 'styles';

const AppFile = styled.div``;

AppFile.Label = styled.label`
  color: ${provider.color.pink__500};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

AppFile.Input = styled.input`
  display: none;
`;

AppFile.Hint = styled.div`
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

AppFile.Icon = styled.div`
  width: 16px;
  height: 12px;
  flex-shrink: 0;
  margin-right: 4px;

  svg {
    display: block;
  }
`;

AppFile.Text = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
`;

AppFile.Files = styled.ul`
  margin-bottom: 24px;
`;

AppFile.Item = styled.li`
  position: relative;
  display: flex;
  height: 32px;
  overflow: hidden;
  padding: 0 5px 0 16px;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-color: ${provider.color.blue__500};
    opacity: 0.1;
  }
`;

AppFile.Name = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  color: ${provider.color.blue__500};
  flex-shrink: 1;
`;

AppFile.Size = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  color: ${provider.color.blue__500};
  opacity: 0.6;
  margin-left: 4px;
  flex-shrink: 0;
  margin-right: 5px;
`;

AppFile.BtnRemove = styled.button`
  height: 100%;
  width: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  color: ${provider.color.blue__500};

  svg {
    height: 10px;
    width: 10px;
    pointer-events: none;
  }
`;

export default AppFile;
