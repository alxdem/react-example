import styled from 'styled-components';

const DoctorsList = styled.div`
  @media (max-width: 1024px) {
  }
`;

DoctorsList.Inner = styled.div`
  position: relative;
  overflow: hidden;
`;

DoctorsList.List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -30px -20px;

  @media (max-width: 768px) {
    margin: -20px -10px;
  }
`;

DoctorsList.Item = styled.li`
  padding: 30px 20px;
  width: 25%;

  @media (max-width: 890px) {
    width: 33.3%;
  }

  @media (max-width: 768px) {
    padding: 20px 10px;
  }

  @media (max-width: 560px) {
    width: 50%;
  }
`;

export default DoctorsList;
