import styled from 'styled-components';
import { provider } from 'styles';

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid ${provider.color.blue__100};
  padding-top: 32px;
`;

Pagination.Pagination = styled.div``;

Pagination.PaginationLink = styled.a`
  font-size: 16px;
  line-height: 26px;
  font-weight: 600;
  color: ${props => (props.isCurrent ? provider.color.blue__700 : provider.color.blue__300)};
  transition: color ease-out 0.2s;

  div &:not(:last-child) {
    margin-right: 16px;
  }

  &:hover {
    color: ${provider.color.blue__700};
  }
`;

Pagination.PaginationText = styled.span`
  font-size: 16px;
  line-height: 26px;
  font-weight: 600;
  color: ${provider.color.blue__300};

  div &:not(:last-child) {
    margin-right: 16px;
  }
`;

Pagination.Nav = styled.div`
  display: flex;
`;

Pagination.Prev = styled.a`
  width: 32px;
  height: 100%;
  min-height: 25px;
  display: flex;
  position: relative;
  align-items: center;
  margin-right: 40px;
  color: ${props => (props.isActive ? provider.color.blue__700 : provider.color.blue__300)};
  cursor: ${props => (props.isActive ? 'pointer' : 'default')};

  @media (max-width: 560px) {
    margin-right: 20px;
  }
`;

Pagination.Next = styled.a`
  width: 32px;
  height: 100%;
  min-height: 25px;
  display: flex;
  position: relative;
  align-items: center;
  color: ${props => (props.isActive ? provider.color.blue__700 : provider.color.blue__300)};
  cursor: ${props => (props.isActive ? 'pointer' : 'default')};
`;

Pagination.Icon = styled.div`
  width: 32px;
  height: 8px;
  position: relative;

  ${Pagination.Next} & {
    transform: rotate(180deg);
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default Pagination;
