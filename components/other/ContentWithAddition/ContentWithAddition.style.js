import styled from 'styled-components';
import { provider } from 'styles';

const ContentWithAddition = styled.div``;

ContentWithAddition.Inner = styled.div`
  margin: 0 -20px;
  display: flex;

  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
  }
`;

ContentWithAddition.Title = styled.div`
  max-width: 760px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

ContentWithAddition.Addition = styled.div`
  padding: 0 20px;
  flex-grow: 1;
  flex-shrink: 1;
  width: 20%;

  @media (max-width: 1280px) {
    order: 2;
    margin-top: ${props => (props.isActive ? '15px' : '0')};
    width: 100%;
    max-width: 800px;
  }
`;

ContentWithAddition.Content = styled.div`
  max-width: 800px;
  padding: 0 20px;
  width: 100%;
  flex-shrink: 0;
`;

ContentWithAddition.AdditionAccent = styled.div`
  color: ${provider.color.pink__500};
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
`;

ContentWithAddition.AdditionText = styled.div`
  color: ${provider.color.blue__500};
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  margin-top: 4px;
`;

ContentWithAddition.DescriptionText = styled.div`
  color: ${provider.color.blue__400};
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
`;

ContentWithAddition.TitleContent = styled.div`
  color: ${provider.color.blue__700};
  font-size: 24px;
  line-height: 34px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export default ContentWithAddition;
