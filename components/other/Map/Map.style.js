import styled from 'styled-components';

const Map = styled.div`
  width: 100%;
  height: 100%;
  display: block;

  [class$='-ground-pane'] {
    filter: hue-rotate(880deg) saturate(100%) grayscale(100%) brightness(66%) contrast(385%)
      opacity(0.55) invert(0%);
  }

  [class$='-inner-panes'] {
    background-color: rgb(243, 218, 255);
  }
`;

export default Map;
