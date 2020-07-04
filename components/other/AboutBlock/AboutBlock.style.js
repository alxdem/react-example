import styled, { css } from 'styled-components';
import { provider } from 'styles';

const AboutBlock = styled.div``;

AboutBlock.Inner = styled.div`
  display: flex;
  padding-top: 42px;
  border-top: 2px solid ${provider.color.blue__100};
  margin-top: 22px;

  @media (max-width: 1024px) {
    padding-top: 25px;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

AboutBlock.MainColl = styled.div`
  width: 56%;
  padding-right: 28px;
  flex-shrink: 0;
  font-size: 16px;
  line-height: 26px;
  color: ${provider.color.blue__700};
  font-weight: 600;
  flex-grow: 1;

  @media (max-width: 1024px) {
    width: 100%;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

AboutBlock.CenterColl = styled.div`
  width: 44%;
  flex-shrink: 0;
  font-size: 14px;
  line-height: 24px;
  color: ${provider.color.blue__700};
  flex-grow: 1;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

AboutBlock.LastColl = styled.div`
  width: 40%;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 25px;
  }
`;

AboutBlock.TextContent = styled.div`
  display: flex;
  width: 60%;
  flex-shrink: 0;
  padding-right: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0;
  }
`;

export default AboutBlock;
