import styled from 'styled-components';
import { provider } from 'styles';

const Doctors = styled.div``;

Doctors.Prefooter = styled.div``;

Doctors.Consultation = styled.div`
  margin-top: 96px;
  margin-bottom: 120px;

  @media (max-width: 768px) {
    margin-top: 80px;
    margin-bottom: 100px;
  }

  @media (max-width: 560px) {
    margin-top: 60px;
    margin-bottom: 80px;
  }
`;

Doctors.ConsultationSign = styled.div`
  margin-top: 25px;
`;

Doctors.PageHeader = styled.div`
  background-color: ${provider.color.gray__200};
`;

Doctors.Content = styled.div`
  margin-top: 96px;

  @media (max-width: 560px) {
    margin-top: 60px;
  }
`;

Doctors.Education = styled.div`
  margin-top: 96px;

  @media (max-width: 560px) {
    margin-top: 60px;
  }
`;

Doctors.Sertification = styled.div`
  margin-top: 96px;

  @media (max-width: 560px) {
    margin-top: 60px;
  }
`;

Doctors.Reviews = styled.div`
  margin-top: 120px;
  background-color: ${provider.color.gray__200};
  padding-top: 96px;
  padding-bottom: 120px;

  @media (max-width: 1024px) {
    margin-top: 60px;
    padding-top: 60px;
    padding-bottom: 80px;
  }

  @media (max-width: 560px) {
    margin-top: 60px;
    padding-top: 48px;
    padding-bottom: 60px;
  }
`;

Doctors.ReviewsTitle = styled.div`
  font-size: 24px;
  line-height: 34px;
  font-weight: 600;
  color: ${provider.color.blue__700};
  margin-bottom: 48px;

  @media (max-width: 560px) {
    margin-bottom: 30px;
    font-size: 20px;
    line-height: 30px;
  }
`;

Doctors.SertificationList = styled.div``;

export default Doctors;
