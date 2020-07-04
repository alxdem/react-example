import styled, { css } from 'styled-components';
import { provider } from 'styles';

const Page404 = {};

Page404.Root = styled.div`
  position: relative;
`;

Page404.Content = styled.div`
  margin: 88px 0;

  @media (max-width: 768px) {
    margin: 60px 0;
  }
`;

Page404.Link = styled.a`
  cursor: pointer;
  background-color: ${provider.color.blue__500};
  padding: 10px 30px;
  color: white;
  border-radius: 3px;
  transition: all 0.2s ease-out;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  min-height: 48px;
  min-width: 184px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }

  :hover {
    background-color: ${provider.color.blue__700};
  }
`;

export default Page404;
