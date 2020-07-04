import styled, { css } from 'styled-components';
import { provider } from 'styles';

const CitySwitchList = styled.div``;

CitySwitchList.Title = styled.div`
  font-size: 20px;
  line-height: 28px;
  color: ${provider.color.blue__700};
  font-weight: 600;
  margin-bottom: 14px;
`;

CitySwitchList.List = styled.ul``;

CitySwitchList.Item = styled.li`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

CitySwitchList.Button = styled.button`
  transition: color ease-out 0.15s;
  cursor: pointer;
  color: ${provider.color.blue__500};

  &:hover {
    color: ${provider.color.blue__700};
    text-decoration: underline;
  }
`;

CitySwitchList.Addition = styled.div`
  margin-top: 20px;
`;

export default CitySwitchList;
