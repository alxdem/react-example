import styled, { css } from 'styled-components';
import { provider } from 'styles';

const Doctors = styled.div``;

Doctors.Prefooter = styled.div``;

Doctors.Doctors = styled.div``;

Doctors.Consultation = styled.div`
  margin-top: 120px;
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
  background-color: ${provider.color.white};
`;

export default Doctors;
