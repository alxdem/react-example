import styled from 'styled-components';
import { provider } from 'styles';

const SliderMulty = styled.div`
  height: 100%;
  position: relative;

  .swiper-container {
    height: 100%;
  }

  .swiper-pagination-fraction {
    position: absolute;
    z-index: 2;
    left: 60px;
    top: 65px;
    opacity: 0.6;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    display: block;
    width: auto;
    color: ${provider.color.white};

    @media (max-width: 560px) {
      left: 30px;
      top: 30px;
    }
  }

  .swiper-slide {
  }
`;

SliderMulty.Button = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  margin-right: ${props => (props.prev ? '16px' : null)};
  transition: background-color ease-out 0.15s;

  &:hover {
    background-color: ${provider.color.gray__200};
  }

  @media (max-width: 560px) {
    &:hover {
      background-color: rgba(255, 255, 255, 0);
    }
  }

  svg {
    transform: ${props => (props.prev ? '' : 'rotate(180deg)')};
    width: 33px;
    height: 10px;
    flex-shrink: 0;
    color: ${provider.color.blue__700};
  }
`;

SliderMulty.Nav = styled.div`
  position: relative;
  height: 56px;
  display: flex;
  margin-left: 20px;
  flex-shrink: 0;

  @media (max-width: 560px) {
    margin: 0 -15px;
    flex-grow: 1;
    justify-content: space-between;
  }
`;

SliderMulty.Inner = styled.div`
  position: relative;
  max-height: 100%;
`;

SliderMulty.Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid ${provider.color.blue__100};
  padding-top: 16px;
  margin-bottom: 12px;

  @media (max-width: 560px) {
    border: none;
  }
`;

SliderMulty.Slider = styled.div`
  position: relative;
`;

SliderMulty.Title = styled.div`
  color: ${provider.color.blue__700};
  font-size: 16px;
  line-height: 26px;
  font-weight: 600;

  @media (max-width: 560px) {
    position: absolute;
    width: 100%;
    text-align: center;
    padding: 0 40px;
  }
`;

SliderMulty.Slide = styled.div`
  position: relative;
  display: block;
  z-index: 1;
`;

export default SliderMulty;
