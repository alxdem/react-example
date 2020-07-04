import styled, { css } from 'styled-components';
import { provider } from 'styles';

const Services = {};

Services.Root = styled.div`
  position: relative;
`;

Services.Prefooter = styled.div`
  margin-top: 120px;

  @media (max-width: 890px) {
    margin-top: 90px;
  }
`;

Services.PageHeader = styled.div`
  margin-top: 88px;

  @media (max-width: 1024px) {
    margin-top: 60px;
  }
`;

Services.Consultation = styled.div`
  margin-top: 96px;
  background-color: ${provider.color.gray__200};
  padding-top: 96px;
  padding-bottom: 120px;

  @media (max-width: 1024px) {
    margin-top: 60px;
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

Services.ConsultationSign = styled.div`
  margin-top: 32px;

  @media (max-width: 1024px) {
    margin-top: 20px;
  }
`;

Services.Media = styled.div`
  margin-top: 96px;

  @media (max-width: 1024px) {
    margin-top: 60px;
  }
`;

Services.ServicesList = styled.div`
  margin-top: 120px;

  @media (max-width: 1024px) {
    margin-top: 60px;
  }
`;

export default Services;
