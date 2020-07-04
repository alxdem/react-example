import styled from 'styled-components';

const WrapperContent = styled.div`
  position: relative;
  max-width: ${props => props.width + 'px'};
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
`;

export default WrapperContent;
