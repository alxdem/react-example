import styled from 'styled-components';
import { provider } from 'styles';

const CardReview = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${provider.color.white};
  padding: 40px 40px 48px;

  @media (max-width: 560px) {
    padding: 25px 20px 30px;
  }
`;

CardReview.Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 16px;
  margin-left: -8px;
  margin-right: -8px;
`;

CardReview.Title = styled.div`
  color: ${provider.color.blue__700};
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
  flex-shrink: 0;
  padding: 0 8px;
`;

CardReview.Date = styled.div`
  color: ${provider.color.blue__500};
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
  flex-shrink: 0;
  padding: 0 8px;
`;

CardReview.Body = styled.div``;

export default CardReview;
