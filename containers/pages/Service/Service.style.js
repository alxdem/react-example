import styled, { css } from 'styled-components';
import { provider } from 'styles';

const Service = {};

Service.Root = styled.div`
  position: relative;
`;

Service.Prefooter = styled.div`
  margin-top: 120px;

  @media (max-width: 890px) {
    margin-top: 90px;
  }
`;

Service.PageHeader = styled.div``;

Service.Content = styled.div`
  margin-top: 96px;

  @media (max-width: 1024px) {
    margin-top: 60px;
  }
`;

Service.Steps = styled.div`
  margin-top: 96px;

  @media (max-width: 1024px) {
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

Service.Preparation = styled.div``;

Service.Media = styled.div`
  margin-top: 96px;

  @media (max-width: 1024px) {
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
  }

  @media (max-width: 560px) {
    margin-top: 20px;
  }
`;

Service.Process = styled.div`
  margin-top: 120px;

  @media (max-width: 1024px) {
    margin-top: 60px;
  }
`;

Service.After = styled.div`
  margin-top: 96px;

  @media (max-width: 1024px) {
    margin-top: 60px;
  }
`;

Service.Action = styled.div`
  margin-top: 48px;

  @media (max-width: 1024px) {
    margin-top: 30px;
  }
`;

Service.Consultation = styled.div`
  margin-top: 96px;

  @media (max-width: 1024px) {
    margin-top: 60px;
  }
`;

Service.ConsultationSign = styled.div`
  margin-top: 30px;

  @media (max-width: 1024px) {
    margin-top: 25px;
  }
`;

export default Service;
