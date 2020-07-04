import styled, { css } from 'styled-components';
import { provider } from 'styles';

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
`;

Loader.Icon = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  position: relative;
  color: ${provider.color.blue__300};

  svg {
    max-width: 50px;
    max-height: 50px;
    display: block;
  }
`;

export default Loader;
