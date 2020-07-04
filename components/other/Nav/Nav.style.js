import styled from 'styled-components';
import { provider } from 'styles';

const Nav = styled.div`
  height: 100%;
`;

Nav.List = styled.ul`
  display: flex;
  height: 100%;
`;

Nav.Item = styled.li`
  position: relative;
`;

Nav.Link = styled.a`
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  color: ${provider.color.blue__500};
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  height: 100%;
  cursor: pointer;
  transition: color ease-out 0.15s;

  @media (max-width: 1280px) {
    padding-left: 12px;
    padding-right: 12px;
    font-size: 13px;
  }

  @media (max-width: 1024px) {
    font-size: 12px;
    font-weight: 600;
  }

  &:hover {
    color: ${provider.color.blue__700};
  }

  &:after {
    content: '';
    position: absolute;
    background-color: ${provider.color.blue__500};
    height: 4px;
    width: 0;
    bottom: 0;
    left: 16px;
    display: ${props => (props.isHasSubmeny ? 'block' : 'none')};
    opacity: 0;
    transition: all ease-out 0.3s;

    @media (max-width: 1280px) {
      left: 12px;
    }
  }

  &:hover:after {
    width: 60px;
    opacity: 1;
  }
`;

Nav.SubmenuItem = styled.li``;

Nav.DinamicItem = styled.li`
  display: inline-block;
  margin-bottom: 20px;
  margin-right: 40px;
  max-width: 220px;
`;

Nav.DinamicTitle = styled.div`
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
`;

Nav.DimanicLink = styled.a`
  cursor: pointer;
  color: ${provider.color.blue__700};

  &:hover {
    text-decoration: underline;
  }
`;

Nav.ChildrenList = styled.ul`
  margin-top: 12px;
`;

Nav.Children = styled.li`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

Nav.ChildrenLink = styled.a`
  cursor: pointer;
  color: ${provider.color.blue__700};

  &:hover {
    text-decoration: underline;
  }
`;

export default Nav;
