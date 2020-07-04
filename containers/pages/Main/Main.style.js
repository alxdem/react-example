import styled, { css } from 'styled-components';
import { provider } from 'styles';

const Main = {};

Main.Root = styled.div`
  position: relative;
`;

Main.Info = styled.div`
  margin-top: 40px;

  @media (max-width: 890px) {
    margin-top: 20px;
  }

  @media (max-width: 560px) {
    margin-top: 0;
  }
`;

Main.Links = styled.div`
  margin-top: 40px;
`;

Main.TextWithBG = styled.div`
  margin-top: 96px;

  @media (max-width: 1024px) {
    margin-top: 70px;
  }
`;

Main.About = styled.div`
  margin-top: 96px;

  @media (max-width: 1024px) {
    margin-top: 60px;
  }

  @media (max-width: 560px) {
    margin-top: 40px;
  }
`;

Main.InfoConsultation = styled.div`
  margin-top: 48px;
  display: flex;
`;

Main.InfoConsultationLists = styled.div`
  width: 100%;
  max-width: 300px;
  flex-shrink: 0;
  padding: 42px 20px 0;
  margin-bottom: -32px;

  @media (max-width: 768px) {
    max-width: none;
  }
`;

Main.InfoConsultationService = styled.div`
  flex-grow: 1;
  padding: 0 20px;
`;

Main.InfoConsultationInner = styled.div`
  display: flex;
  margin: 0 -20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

Main.InfoConsultationVoid = styled.div`
  width: 100%;
  max-width: 300px;
  flex-shrink: 0;
  padding-left: 40px;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${provider.color.blue__100};
    position: absolute;
    bottom: 0;
    right: -40px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

Main.InfoConsultationTitle = styled.div`
  width: 100%;
  flex-shrink: 1;
  position: relative;
  overflow: hidden;
  padding-bottom: 30px;

  @media (max-width: 1024px) {
    padding-bottom: 15px;
  }

  &:after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${provider.color.blue__100};
    position: absolute;
    bottom: 0;
  }
`;

Main.InfoConsultationHeader = styled.div`
  display: flex;
`;

Main.InfoConsultationListTitle = styled.div`
  display: flex;
  color: ${provider.color.blue__700};
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  margin-bottom: 18px;
`;

Main.List = styled.div`
  margin-bottom: 32px;
`;

Main.Offers = styled.div`
  background-color: ${provider.color.gray__200};
  padding: 96px 0;
  margin-top: 120px;

  @media (max-width: 1024px) {
    margin-top: 60px;
    padding: 70px 0;
  }

  @media (max-width: 560px) {
    padding: 50px 0;
  }
`;

Main.Methods = styled.div`
  margin-top: 96px;

  @media (max-width: 768px) {
    margin-top: 45px;
  }
`;

Main.MethodsText = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 -20px;
  margin-bottom: 44px;
  padding: 40px 0 0;

  @media (max-width: 890px) {
    flex-direction: column;
  }
`;

Main.MethodsTextMain = styled.div`
  font-size: 16px;
  line-height: 26px;
  font-weight: 600;
  color: ${provider.color.blue__700};
  width: 50%;
  flex-shrink: 0;
  flex-grow: 1;
  padding: 0 20px;

  @media (max-width: 890px) {
    width: 100%;
  }
`;

Main.MethodsTextSecondary = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: ${provider.color.blue__700};
  width: 50%;
  flex-shrink: 0;
  flex-grow: 1;
  padding: 0 20px;

  @media (max-width: 890px) {
    width: 100%;
    margin-top: 20px;
  }
`;

Main.MethodsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

Main.MethodsCol = styled.div`
  width: 50%;
  padding: 0 20px;
  margin-bottom: -40px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0;
  }
`;

Main.MethodsItem = styled.div`
  margin-bottom: 40px;
`;

Main.Slider = styled.div`
  margin-top: 96px;

  @media (max-width: 768px) {
    margin-top: 40px;
  }

  .swiper-container {
    @media (max-width: 560px) {
      margin-left: -150px;
      margin-right: -150px;
    }
  }
`;

Main.Prefooter = styled.div`
  margin-top: 120px;

  @media (max-width: 890px) {
    margin-top: 90px;
  }
`;

export default Main;
