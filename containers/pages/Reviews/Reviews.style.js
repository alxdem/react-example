import styled, { css } from 'styled-components';
import { provider } from 'styles';

const Reviews = styled.div``;

Reviews.Prefooter = styled.div`
  margin-top: 120px;

  @media (max-width: 890px) {
    margin-top: 90px;
  }
`;

Reviews.PageHeader = styled.div`
  margin-top: 88px;

  @media (max-width: 1024px) {
    margin-top: 60px;
  }
`;

Reviews.Reviews = styled.div`
  background-color: ${provider.color.gray__200};
  padding-top: 100px;
  padding-bottom: 120px;
  margin-top: 120px;

  @media (max-width: 1024px) {
    padding-top: 80px;
    padding-bottom: 100px;
    margin-top: 100px;
  }

  @media (max-width: 560px) {
    padding-top: 60px;
    padding-bottom: 80px;
    margin-top: 80px;
  }
`;

Reviews.ConsultationSign = styled.div`
  margin-top: 30px;

  @media (max-width: 1024px) {
    margin-top: 25px;
  }
`;

Reviews.Feedback = styled.div`
  margin-top: 96px;

  @media (max-width: 1024px) {
    margin-top: 60px;
  }
`;

Reviews.Contacts = styled.div`
  margin-bottom: 96px;
  padding-top: 40px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    height: 2px;
    background-color: ${provider.color.pink__500};
    width: 100px;
    left: 0;
    top: 0;
  }

  @media (max-width: 1024px) {
    margin-bottom: 60px;
  }
`;

export default Reviews;
